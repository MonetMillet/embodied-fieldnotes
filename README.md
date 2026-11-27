# 具身手记 · Embodied Fieldnotes

世界动作模型、机器人智能体与强化学习的中文研究索引。截至 2026 年 11 月 28 日，收录 72 项独立研究、8 条研究路线及 11 段作者发布的真机影像。

[打开网站](https://monetmillet.github.io/embodied-fieldnotes/) · [阅读指南](https://monetmillet.github.io/embodied-fieldnotes/guide.html) · [观看真机影像](https://monetmillet.github.io/embodied-fieldnotes/#films)

## 怎样查阅

按论文名、机器人平台、任务或 GPU 检索。用“收录来源”切换 21 项低算力专题或 56 项扩展综述。两份报告有 5 项重合，整站只计一次。研究笔记标明方法、资源投入和各自的评测协议。

## 真机影像

| 研究 | 演示 | 平台 |
| --- | --- | --- |
| FIND | [把杯子挂回杯架](https://monetmillet.github.io/embodied-fieldnotes/#film/find) | Franka Panda |
| BEE | [双臂协作插入手机充电器](https://monetmillet.github.io/embodied-fieldnotes/#film/bee) | 双臂机器人 |
| AGP | [按目标图搭积木金字塔](https://monetmillet.github.io/embodied-fieldnotes/#film/agp) | I2RT YAM |
| InteractVLA | [拿起瓶子，向杯中倒水](https://monetmillet.github.io/embodied-fieldnotes/#film/interactvla) | Dexmal |
| HARC | [瓶子被抽走后的重新抓取](https://monetmillet.github.io/embodied-fieldnotes/#film/harc) | 四足移动操作平台 |
| MemoAct | [记住顺序，依次按下三枚按钮](https://monetmillet.github.io/embodied-fieldnotes/#film/memoact) | RealMan RM65-B |
| PEAR / Robot-Use RL | [用三角尺把三块积木推成一排](https://monetmillet.github.io/embodied-fieldnotes/#film/pear) | I2RT YAM |
| GR00T 2 | [从散落的零件组装玩具飞机](https://monetmillet.github.io/embodied-fieldnotes/#film/groot-2) | I2RT YAM |
| MAWAM（Fan 等） | [两台机器人撑开洗衣袋、装入衣物](https://monetmillet.github.io/embodied-fieldnotes/#film/mawam-fan) | 双 Galaxea R1 Pro |
| CaPtain | [按颜色和形状选出方块与托盘](https://monetmillet.github.io/embodied-fieldnotes/#film/captain) | Astrabot XR1 |
| Cosmos Policy | [撑开小袋，把糖果放进去](https://monetmillet.github.io/embodied-fieldnotes/#film/cosmos-policy) | ALOHA · 双 ViperX 300 S |

影像从作者服务器按需播放。片段的项目来源、时长及已知的播放倍速可在网站查看。

## 按路线查阅

### 推理模型直接操作机器人

- [PEAR / Robot-Use RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/pear) · Training Reasoning Models in Simulation to Natively Use Real Robots · [原始来源](https://arxiv.org/html/2611.18562v2)
- [CaPtain](https://monetmillet.github.io/embodied-fieldnotes/#paper/captain) · CaPtain: A Pipeline for Post-Training Code-as-Policy Robot Agents · [原始来源](https://arxiv.org/html/2610.40799v1)
- [AgenticRoboRL](https://monetmillet.github.io/embodied-fieldnotes/#paper/agenticroborl) · AgenticRoboRL: Bringing Coding-Agent Post-Training to Agentic Robotics · [原始来源](https://arxiv.org/html/2610.28589v2)
- [ZAP](https://monetmillet.github.io/embodied-fieldnotes/#paper/zap) · Pretraining Knows What, Simulation Teaches How: Compositional Generalization for Agentic Robotics · [原始来源](https://arxiv.org/html/2610.35817v3)
- [AGP](https://monetmillet.github.io/embodied-fieldnotes/#paper/agp) · Agent as Policy for Robotic Manipulation · [原始来源](https://arxiv.org/html/2609.12541v4)
- [ASPIRE](https://monetmillet.github.io/embodied-fieldnotes/#paper/aspire) · ASPIRE: Agentic /Skills Discovery for Robotics · [原始来源](https://arxiv.org/html/2607.00272v2)
- [PyRUA-Lean](https://monetmillet.github.io/embodied-fieldnotes/#paper/pyrua-lean) · Fewer Tokens, Better Action: GPT-6 Astra Robot Agents with 14% Higher Success Rate but 65% Fewer Tokens · [原始来源](https://arxiv.org/html/2610.01939v2)
- [ORA](https://monetmillet.github.io/embodied-fieldnotes/#paper/ora) · ORA: Open Robot-Use Agents · [原始来源](https://fastrua.ai/blog/2026-11-code-mode/#harness-and-model)
- [Code as Policies](https://monetmillet.github.io/embodied-fieldnotes/#paper/code-as-policies) · Code as Policies: Language Model Programs for Embodied Control · [原始来源](https://arxiv.org/abs/2209.07753)
- [GRACE](https://monetmillet.github.io/embodied-fieldnotes/#paper/grace) · Empowering Precise Embodied Agents with Executable Analytic Concepts as Semantic-Physical Blueprints · [原始来源](https://ijcai.org/proceedings/2026/44)

### 大模型规划与多机器人协作

- [GR00T 2](https://monetmillet.github.io/embodied-fieldnotes/#paper/groot-2) · GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation · [原始来源](https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf)
- [PaLM-SayCan](https://monetmillet.github.io/embodied-fieldnotes/#paper/palm-saycan) · Do As I Can, Not As I Say: Grounding Language in Robotic Affordances · [原始来源](https://say-can.github.io/assets/palm_saycan.pdf)
- [VoxPoser](https://monetmillet.github.io/embodied-fieldnotes/#paper/voxposer) · VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models · [原始来源](https://proceedings.mlr.press/v229/huang23b.html)
- [Gemini Robotics 1.5](https://monetmillet.github.io/embodied-fieldnotes/#paper/gemini-robotics-15) · Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer · [原始来源](https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-1-5-Tech-Report.pdf)
- [Gemini Robotics 2.5](https://monetmillet.github.io/embodied-fieldnotes/#paper/gemini-robotics-25) · Gemini Robotics 2.5 accelerates real-world general dexterity · [原始来源](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/)
- [AW-0](https://monetmillet.github.io/embodied-fieldnotes/#paper/aw-0) · Agentic World Action Models · [原始来源](https://arxiv.org/html/2610.30136v1)
- [CoT-WAM](https://monetmillet.github.io/embodied-fieldnotes/#paper/cot-wam) · CoT-WAM: Collaborative Training of Vision-Language Models and World-Action Models via Plan Latents · [原始来源](https://arxiv.org/html/2611.23803v2)
- [MAWAM（Fan 等）](https://monetmillet.github.io/embodied-fieldnotes/#paper/mawam-fan) · MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation · [原始来源](https://arxiv.org/abs/2611.25105)
- [MAWAM（Tang 等）](https://monetmillet.github.io/embodied-fieldnotes/#paper/mawam-tang) · MAWAM: Joint Imagination for Collaborative Robot Manipulation with a Multi-Agent World Action Model · [原始来源](https://arxiv.org/abs/2611.29501)
- [UniManip](https://monetmillet.github.io/embodied-fieldnotes/#paper/unimanip) · UniManip: Open-World Robotic Manipulation via Agentic Operational Graphs · [原始来源](https://arxiv.org/html/2602.13086v2)
- [Harness VLA](https://monetmillet.github.io/embodied-fieldnotes/#paper/harness-vla) · Harness VLA: Steering Frozen VLAs into Reliable Manipulation Primitives via Memory-Guided Agents · [原始来源](https://arxiv.org/html/2607.08448v5)
- [RADAR](https://monetmillet.github.io/embodied-fieldnotes/#paper/radar) · RADAR: Closed-Loop Robotic Data Generation via Semantic Planning and Autonomous Causal Environment Reset · [原始来源](https://arxiv.org/html/2603.11811v1)
- [RoboDuo](https://monetmillet.github.io/embodied-fieldnotes/#paper/roboduo) · RoboDuo: Attempt, Check and Atomic Recovery through Code for Vision-Language-Action Models · [原始来源](https://arxiv.org/html/2610.34108v1)

### 跨本体数据与通用动作策略

- [RT-2](https://monetmillet.github.io/embodied-fieldnotes/#paper/rt-2) · RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control · [原始来源](https://proceedings.mlr.press/v229/zitkovich23a.html)
- [Open X-Embodiment / RT-X](https://monetmillet.github.io/embodied-fieldnotes/#paper/open-x-embodiment) · Open X-Embodiment: Robotic Learning Datasets and RT-X Models · [原始来源](https://arxiv.org/html/2310.08864v9)
- [Octo](https://monetmillet.github.io/embodied-fieldnotes/#paper/octo) · Octo: An Open-Source Generalist Robot Policy · [原始来源](https://arxiv.org/html/2405.12213v2)
- [OpenVLA](https://monetmillet.github.io/embodied-fieldnotes/#paper/openvla) · OpenVLA: An Open-Source Vision-Language-Action Model · [原始来源](https://proceedings.mlr.press/v270/kim25c.html)
- [π0.5](https://monetmillet.github.io/embodied-fieldnotes/#paper/pi05) · π0.5: a Vision-Language-Action Model with Open-World Generalization · [原始来源](https://proceedings.mlr.press/v305/black25a.html)

### 离线纠错与真机策略后训练

- [HIL-SERL](https://monetmillet.github.io/embodied-fieldnotes/#paper/hil-serl) · Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning · [原始来源](https://hil-serl.github.io/static/hil-serl-paper.pdf)
- [HALO-WA](https://monetmillet.github.io/embodied-fieldnotes/#paper/halo-wa) · HALO-WA: Hybrid-Attention Latent-Guided Online Reinforcement Learning for World-Action Models · [原始来源](https://arxiv.org/html/2607.04265v2)
- [GR-RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/gr-rl) · GR-RL: Going Dexterous and Precise for Long-Horizon Robotic Manipulation · [原始来源](https://arxiv.org/abs/2512.01801)
- [π*0.6 / RECAP](https://monetmillet.github.io/embodied-fieldnotes/#paper/pi06-recap) · π*0.6: a VLA That Learns From Experience · [原始来源](https://arxiv.org/abs/2511.14759)
- [R²-WAM](https://monetmillet.github.io/embodied-fieldnotes/#paper/r2-wam) · R²-WAM: Repair-and-Reject Post-Training for World Action Models · [原始来源](https://arxiv.org/pdf/2610.04913v2)
- [GigaBrain-0.5M*](https://monetmillet.github.io/embodied-fieldnotes/#paper/gigabrain-05m) · GigaBrain-0.5M*: a VLA That Learns From World Model-Based Reinforcement Learning · [原始来源](https://arxiv.org/pdf/2602.12099v2)
- [FIND](https://monetmillet.github.io/embodied-fieldnotes/#paper/find) · Find Something You Can't Do: Agentic Real-World Reinforcement Learning for Self-Improving VLA Models · [原始来源](https://arxiv.org/html/2609.32069v2)
- [BEE](https://monetmillet.github.io/embodied-fieldnotes/#paper/bee) · BEE: Intervention-Adaptive Real-World Reinforcement Learning with Vision-Language-Action Models · [原始来源](https://arxiv.org/html/2609.27450v1)
- [HARC](https://monetmillet.github.io/embodied-fieldnotes/#paper/harc) · Efficient Real-World Online Reinforcement Learning for Robot Manipulation via Centralized Training and Critic Decomposition · [原始来源](https://arxiv.org/html/2608.09762v1)
- [ResFiT](https://monetmillet.github.io/embodied-fieldnotes/#paper/resfit) · Residual Off-Policy RL for Finetuning Behavior Cloning Policies · [原始来源](https://arxiv.org/html/2509.19301v1)

### 仿真交互与策略后训练

- [WAM-RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/wam-rl) · WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT · [原始来源](https://arxiv.org/pdf/2606.17906v1)
- [SimpleVLA-RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/simplevla-rl) · SimpleVLA-RL: Scaling VLA Training via Reinforcement Learning · [原始来源](https://proceedings.iclr.cc/paper_files/paper/2026/hash/cbfbcb4da14235bd69b134070898ae9d-Abstract-Conference.html)
- [VLA-RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/vla-rl) · VLA-RL: Towards Masterful and General Robotic Manipulation with Scalable Reinforcement Learning · [原始来源](https://arxiv.org/abs/2505.18719)
- [HINT-WAM](https://monetmillet.github.io/embodied-fieldnotes/#paper/hint-wam) · HINT-WAM: Hindsight-Informed Training for World Action Models · [原始来源](https://arxiv.org/html/2611.24789v1)
- [LoRN](https://monetmillet.github.io/embodied-fieldnotes/#paper/lorn) · LoRN: Low-Rank Noise Steering for Generative Robot Policies · [原始来源](https://arxiv.org/html/2611.23628v1)
- [Object-Centric Residual RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/object-centric-residual-rl) · Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement · [原始来源](https://arxiv.org/html/2606.18953v1)
- [ReCoVLA](https://monetmillet.github.io/embodied-fieldnotes/#paper/recovla) · ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies · [原始来源](https://arxiv.org/html/2606.09630v1)

### 在习得的世界模型中训练策略

- [DayDreamer](https://monetmillet.github.io/embodied-fieldnotes/#paper/daydreamer) · DayDreamer: World Models for Physical Robot Learning · [原始来源](https://proceedings.mlr.press/v205/wu23c/wu23c.pdf)
- [UniSim](https://monetmillet.github.io/embodied-fieldnotes/#paper/unisim) · Learning Interactive Real-World Simulators · [原始来源](https://arxiv.org/html/2310.06114v3)
- [WMPO](https://monetmillet.github.io/embodied-fieldnotes/#paper/wmpo) · WMPO: World Model-based Policy Optimization for Vision-Language-Action Models · [原始来源](https://arxiv.org/abs/2511.09515)
- [World4RL](https://monetmillet.github.io/embodied-fieldnotes/#paper/world4rl) · World4RL: Diffusion World Models for Policy Refinement With Reinforcement Learning for Robotic Manipulation · [原始来源](https://arxiv.org/abs/2509.19080)
- [LS-MBPO](https://monetmillet.github.io/embodied-fieldnotes/#paper/ls-mbpo) · Efficient VLA Reinforcement Learning via Subchunk Rollouts in Latent World Models · [原始来源](https://arxiv.org/abs/2611.27645)
- [World-Gymnast](https://monetmillet.github.io/embodied-fieldnotes/#paper/world-gymnast) · World-Gymnast: Training Robots with Reinforcement Learning in a World Model · [原始来源](https://arxiv.org/pdf/2602.02454v1)
- [WoVR](https://monetmillet.github.io/embodied-fieldnotes/#paper/wovr) · WoVR: World Models as Reliable Simulators for Post-Training VLA Policies with RL · [原始来源](https://arxiv.org/pdf/2602.13977v3)
- [WEVO](https://monetmillet.github.io/embodied-fieldnotes/#paper/wevo) · WEVO: World Model-Enabled VLA Optimization for Whole-Body Loco-Manipulation · [原始来源](https://arxiv.org/pdf/2611.25251v1)

### 预测驱动的规划与动作选择

- [V-JEPA 2-AC](https://monetmillet.github.io/embodied-fieldnotes/#paper/v-jepa-2-ac) · V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning · [原始来源](https://arxiv.org/html/2506.09985v1)
- [World Action Planner](https://monetmillet.github.io/embodied-fieldnotes/#paper/world-action-planner) · World Action Planner: Generalizable Robot Decision-Making with Action-Conditioned World Models · [原始来源](https://arxiv.org/html/2607.27599v2)
- [Cosmos Policy](https://monetmillet.github.io/embodied-fieldnotes/#paper/cosmos-policy) · Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning · [原始来源](https://arxiv.org/abs/2601.16163)
- [WISE](https://monetmillet.github.io/embodied-fieldnotes/#paper/wise) · Seeing Through the Illusion: Test-Time Scaling for World Action Models · [原始来源](https://arxiv.org/html/2611.03585v1)
- [SuSIE](https://monetmillet.github.io/embodied-fieldnotes/#paper/susie) · Zero-Shot Robotic Manipulation with Pre-Trained Image-Editing Diffusion Models · [原始来源](https://proceedings.iclr.cc/paper_files/paper/2024/hash/8ea50bf458f6070548b11babbe0bf89b-Abstract-Conference.html)
- [InteractVLA](https://monetmillet.github.io/embodied-fieldnotes/#paper/interactvla) · InteractVLA: Turning VLAs into Interactive Tools for Agentic Robotic Manipulation · [原始来源](https://arxiv.org/html/2611.22584v1)
- [TACO](https://monetmillet.github.io/embodied-fieldnotes/#paper/taco) · Steering Vision-Language-Action Models as Anti-Exploration: A Test-Time Scaling Approach · [原始来源](https://arxiv.org/html/2512.02834v1)

### 视频预训练、合成数据与动作生成

- [GR-1（ByteDance）](https://monetmillet.github.io/embodied-fieldnotes/#paper/gr-1) · Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation · [原始来源](https://proceedings.iclr.cc/paper_files/paper/2024/file/2c37c5bcef24b9541550261dcd63261b-Paper-Conference.pdf)
- [VPP（Video Prediction Policy）](https://monetmillet.github.io/embodied-fieldnotes/#paper/vpp) · Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations · [原始来源](https://proceedings.mlr.press/v267/hu25g.html)
- [VideoVLA](https://monetmillet.github.io/embodied-fieldnotes/#paper/videovla) · VideoVLA: Video Generators Can Be Generalizable Robot Manipulators · [原始来源](https://proceedings.neurips.cc/paper_files/paper/2025/hash/89a3b655a8b68ae1c76b768152c9c19d-Abstract-Conference.html)
- [Motus](https://monetmillet.github.io/embodied-fieldnotes/#paper/motus) · Motus: A Unified Latent Action World Model · [原始来源](https://openaccess.thecvf.com/content/CVPR2026/html/Bi_Motus_A_Unified_Latent_Action_World_Model_CVPR_2026_paper.html)
- [DreamGen](https://monetmillet.github.io/embodied-fieldnotes/#paper/dreamgen) · DreamGen: Unlocking Generalization in Robot Learning through Video World Models · [原始来源](https://proceedings.mlr.press/v305/jang25a.html)
- [DreamZero](https://monetmillet.github.io/embodied-fieldnotes/#paper/dreamzero) · World Action Models are Zero-shot Policies · [原始来源](https://arxiv.org/abs/2602.15922)
- [Fast-WAM](https://monetmillet.github.io/embodied-fieldnotes/#paper/fast-wam) · Fast-WAM: Do World Action Models Need Test-time Future Imagination? · [原始来源](https://arxiv.org/abs/2603.16666)
- [LingBot-VA](https://monetmillet.github.io/embodied-fieldnotes/#paper/lingbot-va) · Causal World Modeling for Robot Control · [原始来源](https://arxiv.org/abs/2601.21998)
- [VERA](https://monetmillet.github.io/embodied-fieldnotes/#paper/vera) · Turning Video Models into Generalist Robot Policies · [原始来源](https://arxiv.org/html/2605.27817v1)
- [UNITAS](https://monetmillet.github.io/embodied-fieldnotes/#paper/unitas) · UNITAS: A 3D-Native World Action Model for Embodied Manipulation · [原始来源](https://arxiv.org/abs/2610.12099)
- [MemoAct](https://monetmillet.github.io/embodied-fieldnotes/#paper/memoact) · MemoAct: Atkinson-Shiffrin-Inspired Hierarchical Memory-Augmented Policy for Robotic Manipulation · [原始来源](https://arxiv.org/html/2603.18494v2)
- [LeanWAM](https://monetmillet.github.io/embodied-fieldnotes/#paper/leanwam) · LeanWAM: Learning Latent World Action Models from Frozen Video Models · [原始来源](https://arxiv.org/html/2611.31740v1)

## 本地查阅与维护

下载仓库后，用浏览器打开 `index.html`。论文索引、搜索与指南支持离线使用。作者影像和外部原文需要联网。

新增论文可编辑 `papers.js`，新增视频可编辑 `films.js`。GitHub Pages 从 `main` 分支的根目录发布。
