(() => {
  'use strict';

  const papers = window.PAPERS || [];
  const films = window.FILMS || [];
  const paperById = new Map(papers.map(paper => [paper.id, paper]));
  const filmById = new Map();
  for (const film of films) {
    let id = film.id || film.paperId;
    for (let suffix = 2; filmById.has(id); suffix++) id = film.paperId + '-' + suffix;
    filmById.set(id, film);
  }

  const categories = ['全部', ...new Set(papers.map(paper => paper.category))];
  const categorySelect = document.getElementById('category');
  const sourceSelect = document.getElementById('source');
  const input = document.getElementById('search');
  const list = document.getElementById('paper-list');
  const pages = document.getElementById('pages');
  const count = document.getElementById('result-count');
  const grid = document.getElementById('film-grid');
  const dialog = document.getElementById('detail');
  const content = document.getElementById('detail-content');
  const pageSize = 6;
  let page = 1;
  let opener;
  let visibleHash = '';
  let closeDestination = '';

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    const use = document.createElementNS(ns, 'use');
    svg.setAttribute('class', 'icon');
    svg.setAttribute('aria-hidden', 'true');
    use.setAttribute('href', '#s-' + name);
    svg.append(use);
    return svg;
  }

  function external(label, url) {
    const link = el('a', 'link-button', label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }

  function detailLink(tagClass, type, id) {
    const link = el('a', tagClass);
    link.href = '#' + type + '/' + encodeURIComponent(id);
    link.dataset.detail = type;
    return link;
  }

  function norm(value) {
    return String(value || '').normalize('NFKC').toLowerCase().replace(/[\s_–—-]+/g, '');
  }

  const searchable = new Map(papers.map(paper => {
    const { name, title, year, category, platform, summary, method, compute, tasks, result, record, sources } = paper;
    return [paper.id, norm([name, title, year, category, platform, summary, method, compute, tasks, result, record, ...(sources || [])].join(' '))];
  }));

  function sourceMatches(paper) {
    return sourceSelect.value === '全部' || paper.sources?.includes(sourceSelect.value);
  }

  function setCategoryOptions() {
    const previous = categorySelect.value;
    const available = new Set(papers.filter(sourceMatches).map(paper => paper.category));
    const options = categories.filter(label => label === '全部' || available.has(label));
    categorySelect.replaceChildren(...options.map(label => {
      const option = el('option', '', label === '全部' ? '全部方向' : label);
      option.value = label;
      return option;
    }));
    categorySelect.value = options.includes(previous) ? previous : '全部';
  }

  function paperRow(paper) {
    const row = detailLink('paper-item', 'paper', paper.id);
    row.setAttribute('aria-label', '查阅 ' + paper.name + ' 论文笔记');
    const name = el('div', 'paper-name');
    name.append(el('h3', '', paper.name), el('span', 'paper-category', paper.category));
    const meta = el('div', 'paper-meta');
    meta.append(el('span', 'year', paper.year), el('span', '', paper.platform));
    const sign = el('span', 'open-sign');
    sign.append(icon('plus'));
    row.append(name, el('p', 'paper-summary', paper.summary), meta, sign);
    return row;
  }

  function updateList() {
    const words = input.value.trim().split(/\s+/).filter(Boolean).map(norm);
    const matches = papers.filter(paper =>
      sourceMatches(paper) && (categorySelect.value === '全部' || categorySelect.value === paper.category)
      && words.every(word => searchable.get(paper.id).includes(word))
    );
    const totalPages = Math.ceil(matches.length / pageSize);
    page = Math.min(page, totalPages || 1);
    const start = (page - 1) * pageSize;
    const shown = matches.slice(start, start + pageSize);
    count.textContent = matches.length
      ? '共 ' + matches.length + ' 篇' + (totalPages > 1 ? ' · 显示 ' + (start + 1) + '–' + (start + shown.length) : '')
      : '共 0 篇';
    list.replaceChildren(...shown.map(paperRow));
    if (!shown.length) {
      const empty = el('div', 'empty');
      const reset = el('button', 'inline-link', '清除筛选');
      reset.type = 'button';
      reset.addEventListener('click', () => {
        input.value = '';
        sourceSelect.value = '全部';
        setCategoryOptions();
        categorySelect.value = '全部';
        updateList();
        input.focus();
      });
      empty.append(el('p', '', '没有找到符合条件的论文。'), reset);
      list.append(empty);
    }
    pages.replaceChildren();
    pages.hidden = totalPages < 2;
    if (totalPages > 1) {
      const numbers = Array.from({length:totalPages}, (_, index) => index + 1)
        .filter(number => totalPages <= 7 || number === 1 || number === totalPages || Math.abs(number - page) <= 2);
      for (const [index, number] of numbers.entries()) {
        if (index > 0 && number !== numbers[index - 1] + 1) {
          const dots = el('span','page-dots','…');
          dots.setAttribute('aria-hidden','true');
          pages.append(dots);
        }
        const button = el('button', 'page', number);
        button.type = 'button';
        button.setAttribute('aria-label', '第 ' + number + ' 页');
        if (number === page) button.setAttribute('aria-current', 'page');
        button.addEventListener('click', () => {
          page = number;
          updateList();
          list.querySelector('a')?.focus({preventScroll: true});
          count.scrollIntoView({block: 'start'});
        });
        pages.append(button);
      }
    }
  }

  function durationLabel(seconds) {
    return Math.floor(seconds / 60) + ':' + String(Math.floor(seconds % 60)).padStart(2, '0');
  }

  function filmGrid() {
    const thumbnailLoader = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const thumbnail = entry.target;
        thumbnailLoader.unobserve(thumbnail);
        thumbnail.src = thumbnail.dataset.clip + '#t=0.1';
      }
    }) : null;
    for (const [id, film] of filmById) {
      const name = paperById.get(film.paperId)?.name || film.paperId;
      const card = detailLink('film-card', 'film', id);
      card.setAttribute('aria-label', '观看 ' + name + ' 真机片段，' + film.title);
      const poster = el('div', 'film-poster');
      if (film.poster) {
        const image = el('img');
        image.alt = '';
        image.loading = 'lazy';
        image.referrerPolicy = 'no-referrer';
        image.addEventListener('error', () => image.remove());
        image.src = film.poster;
        poster.append(image);
      } else if (thumbnailLoader) {
        const thumbnail = el('video');
        thumbnail.muted = true;
        thumbnail.playsInline = true;
        thumbnail.preload = 'metadata';
        thumbnail.dataset.clip = film.src;
        thumbnail.setAttribute('aria-hidden', 'true');
        thumbnail.addEventListener('error', () => thumbnail.remove(), { once: true });
        poster.append(thumbnail);
        thumbnailLoader.observe(thumbnail);
      }
      const play = el('span', 'film-play');
      play.append(icon('play'));
      poster.append(play);
      if (film.duration) poster.append(el('span', 'film-duration', durationLabel(film.duration)));
      card.append(poster, el('span', 'film-by', name + ' · ' + film.platform), el('h3', '', film.title));
      grid.append(card);
    }
  }

  function linkGroup(items) {
    const group = el('div', 'links');
    for (const [label, url] of items) {
      if (url) group.append(external(label, url));
    }
    return group;
  }

  function headline(title) {
    const h = el('h2', '', title);
    h.id = 'detail-name';
    return h;
  }

  function paperDetail(paper) {
    document.getElementById('detail-type').textContent = '论文笔记';
    const facts = el('dl', 'detail-facts');
    for (const [label, body] of [['方法',paper.method],['机器人平台',paper.platform],['计算成本',paper.compute],['实验任务',paper.tasks],['评测结果',paper.result],['发表与采用',paper.record]]) {
      if (!body) continue;
      const fact = el('div','fact');
      fact.append(el('dt', '', label), el('dd', '', body));
      facts.append(fact);
    }
    content.append(el('p','detail-kicker',paper.category + ' · ' + paper.year), headline(paper.name),
      el('p','detail-title',paper.title), el('p','detail-summary',paper.summary), facts,
      linkGroup([['阅读原始来源',paper.paper],['作者项目',paper.project],['官方代码',paper.code]]));
    if (paper.sources?.length) content.append(el('p','detail-sources','收录于 ' + paper.sources.join('、')));
    if (paper.resources?.length) {
      const resources = el('div','related');
      resources.append(el('h3','','补充资料'));
      for (const resource of paper.resources) {
        if (!resource.url || !resource.label) continue;
        const link = external(resource.label,resource.url);
        link.className = '';
        resources.append(link);
      }
      content.append(resources);
    }
    const relatedFilms = [...filmById].filter(([, film]) => film.paperId === paper.id);
    if (relatedFilms.length) {
      const related = el('div','related');
      related.append(el('h3','','真机影像'));
      for (const [id, film] of relatedFilms) {
        const link = detailLink('', 'film', id);
        link.append(icon('film'), document.createTextNode(film.title));
        related.append(link);
      }
      content.append(related);
    }
  }

  function filmDetail(film) {
    const paper = paperById.get(film.paperId);
    document.getElementById('detail-type').textContent = '真机影像';
    const metadata = [paper?.name || film.paperId, film.platform, film.speed].filter(Boolean).join(' · ');
    const player = el('div', 'player');
    const video = el('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', film.title);
    if (film.poster) video.poster = film.poster;
    const error = el('p','player-error','当前网络或浏览器未能播放此片段，可打开下方作者演示页观看。');
    error.hidden = true;
    error.setAttribute('role','status');
    video.addEventListener('error', () => { error.hidden = false; });
    video.src = film.src;
    player.append(video,error);
    const links = linkGroup([['作者演示页',film.source],['打开原视频',film.src]]);
    if (paper) {
      const link = detailLink('link-button','paper',paper.id);
      link.textContent = '查看论文笔记';
      links.append(link);
    }
    content.append(el('p','detail-kicker',metadata),headline(film.title),player,el('p','detail-summary',film.description),links);
  }

  function stopMedia() {
    const video = content.querySelector('video');
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    }
  }

  function resolveDialog() {
    if (closeDestination) {
      if (/^#(?:paper|film)\//.test(location.hash)) {
        history.replaceState(null, '', closeDestination);
        document.querySelector(closeDestination).scrollIntoView();
      }
      closeDestination = '';
    }
    const hash = location.hash;
    if (hash === visibleHash && dialog.open) return;
    const match = /^#(paper|film)\/([\w-]+)$/.exec(hash);
    const item = match && (match[1] === 'paper' ? paperById : filmById).get(match[2]);
    stopMedia();
    if (!item) {
      if (dialog.open) {
        dialog.close();
        opener?.focus({preventScroll:true});
      }
      content.replaceChildren();
      visibleHash = '';
      return;
    }
    visibleHash = hash;
    content.replaceChildren();
    if (match[1] === 'paper') paperDetail(item);
    else filmDetail(item);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.getElementById('close-detail').focus({preventScroll:true});
  }

  function closeDetail() {
    if (!dialog.open) return;
    const section = visibleHash.startsWith('#film/') ? '#films' : '#papers';
    const depth = history.state?.fieldnotesDepth || 0;
    if (depth) {
      closeDestination = section;
      history.go(-depth);
    } else {
      history.replaceState(null,'',section);
      resolveDialog();
      document.querySelector(section).scrollIntoView();
    }
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-detail]');
    if (!link || event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (!dialog.open) opener = link;
    const depth = (history.state?.fieldnotesDepth || 0) + 1;
    history.pushState({fieldnotesDepth:depth},'',link.hash);
    resolveDialog();
    if (link.dataset.detail === 'film') {
      const video = content.querySelector('video');
      if (video) video.play().catch(() => { /* Native controls remain available. */ });
    }
  });
  document.getElementById('close-detail').addEventListener('click', closeDetail);
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDetail(); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDetail();
  });
  window.addEventListener('hashchange', resolveDialog);
  window.addEventListener('popstate', resolveDialog);
  input.addEventListener('input', () => { page = 1; updateList(); });
  categorySelect.addEventListener('change', () => { page = 1; updateList(); });
  sourceSelect.addEventListener('change', () => { page = 1; setCategoryOptions(); updateList(); });
  setCategoryOptions();
  updateList();
  filmGrid();
  resolveDialog();
})();
