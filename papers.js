window.PAPERS = [
  {
    "id": "pear",
    "name": "PEAR / Robot-Use RL",
    "title": "Training Reasoning Models in Simulation to Natively Use Real Robots",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "双臂 YAM",
    "summary": "27B 推理模型在仿真中尝试操作，通过成败奖励学习从相机观测直接给出末端目标位姿，部署时交由逆运动学执行。",
    "compute": "LIBERO 与 RoboDojo 两阶段训练实际使用约 5 万 H100 等效卡时。新版引擎约 3 万卡时是作者估算。单 GB300 量化吞吐为 747 token/s，正式评测使用 BF16。",
    "tasks": "真实 YAM 抓取 10 种物体各 2 次，在 5 个布局中排块各 2 次。仿真训练见过两种技能，未用真机示范。",
    "result": "30 次实测中，基础模型成功 0 次，仅 LIBERO 训练成功 7 次，两阶段训练成功 18 次（抓取 12/20，排块 6/10）。另在 RoboDojo 54 种设置中成功 21/540，370 次耗尽上下文。",
    "paper": "https://arxiv.org/html/2611.18562v2",
    "project": "https://mit-han-lab.github.io/pear-blog/",
    "code": "https://github.com/mit-han-lab/pear",
    "sources": [
      "扩展综述"
    ],
    "method": "机器人每轮提供多视角图像、状态和历史。Qwen3.8-27B 选择末端位姿，LIBERO 上先做 225 步 RL，再在两项 RoboDojo 任务做 115 步。绘画和化学实验另属定性演示。",
    "record": "FastRUA 在同一 ORA 框架的 RoboLab-120 仿真中比较了基础权重 52.5%（240 回合）与 PEAR 权重 61.9%（239 回合）。",
    "resources": [
      {
        "label": "外部采用 · ORA 实测",
        "url": "https://github.com/fast-rua/ORA#new-in-v01"
      }
    ]
  },
  {
    "id": "captain",
    "name": "CaPtain",
    "title": "CaPtain: A Pipeline for Post-Training Code-as-Policy Robot Agents",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "Astrabot XR1",
    "summary": "让 4B 模型反复写 Python 操作机器人，在仿真中用能看见环境状态的价值模型判断每轮程序调用的贡献。",
    "compute": "监督微调用 120 H100 卡时，强化学习用约 1,290 H100 卡时（含重启）。LIBERO 中八回合共享一张 GPU，感知服务另计。",
    "tasks": "在 XR1 的粗略仿真中适配后，作者展示把黄块放上木盘、按颜色与形状把蓝块放进矩形托盘。",
    "result": "真机只披露两个成功案例。LIBERO-PRO 的三套短任务为 78.5%（600 回合），四套任务为 68.6%（800 回合），要求正确报告完成时为 58.9%。",
    "paper": "https://arxiv.org/html/2610.40799v1",
    "project": "https://waltstephen.github.io/captain/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "22 项低层接口涵盖感知、测量及运动。模型读取执行回执再修改程序。训练阶段的价值函数使用仿真状态，部署仅保留策略和控制接口。",
    "record": "项目公开代码、数据和权重。PEAR 将其列为相关的多轮代码策略。",
    "resources": [
      {
        "label": "PEAR 文献定位",
        "url": "https://arxiv.org/html/2611.18562v2#S2"
      }
    ]
  },
  {
    "id": "agenticroborl",
    "name": "AgenticRoboRL",
    "title": "AgenticRoboRL: Bringing Coding-Agent Post-Training to Agentic Robotics",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "仿真 · LIBERO",
    "summary": "训练一个 9B 上层规划器选择技能或编写程序，在会执行动作的底层模块保持冻结时比较两种接口。",
    "compute": "RPent 官方配置为单节点 8 个 GPU 进程。监督阶段 626 步，RL 检查点使用 2,304 个回合与 206 个优化步。具体 GPU 型号、总卡时未给出。",
    "tasks": "RPent 接口在 LIBERO-PRO 全部 800 回合评估，CaP-X 代码接口在另一个子集评测。两组均为仿真。",
    "result": "RPent 上基础、监督微调、再做 RL 分别为 18.1%、65.1%、71.0%。同一检查点在 LIBERO-Plus 为 72.2%。CaP-X 子集从 2.7% 提高到 28.5%。",
    "paper": "https://arxiv.org/html/2610.28589v2",
    "project": "https://xinxinliu-ai.github.io/AgenticRoboRL/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "规划器先模仿教师的成功轨迹，再在同一起点进行分组优化。RPent 执行冻结的 VLA 技能，CaP-X 负责运行生成的代码。",
    "record": "CaPtain 对照其冻结 VLA 接口，PEAR 亦列入同期工作。",
    "resources": [
      {
        "label": "官方训练配置",
        "url": "https://github.com/xinxinliu-ai/AgenticRoboRL/blob/main/harnesses/rpent_libero/harness.yaml"
      },
      {
        "label": "CaPtain 对照",
        "url": "https://arxiv.org/html/2610.40799v1"
      }
    ]
  },
  {
    "id": "zap",
    "name": "ZAP",
    "title": "Pretraining Knows What, Simulation Teaches How: Compositional Generalization for Agentic Robotics",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "双臂 YAM",
    "summary": "让模型调用分割和深度几何工具输出夹爪位姿，在 40 个仿真任务中收集自己的成功轨迹，再做监督微调和强化学习。",
    "compute": "秩 64 LoRA，每批 640 个仿真回合，训练卡数与总时长未披露。单 B300 推理，真机任务平均 146±83 秒，按论文价格约 0.29 美元。",
    "tasks": "在双臂 YAM 上重建十项桌面任务，每项三次。训练中的仿真平台也使用 YAM。空中交接与下棋另有视频。",
    "result": "ZAP 和相同接口下的 GPT-6 Astra 均成功 29/30，未训练的 Qwen 为 5/30。Franka 的跨本体验证属于仿真。",
    "paper": "https://arxiv.org/html/2610.35817v3",
    "project": "https://zero-real.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "模型用 SAM 3.1 定位目标，结合深度图控制抓取。先用短程 GRPO 与前缀搜索收集自身成功案例，再交替进行监督训练和策略改进。",
    "record": "公开版本为 2026 年 11 月 v3，项目提供视频。PEAR 讨论了这条工具辅助训练路线。",
    "resources": [
      {
        "label": "PEAR 文献定位",
        "url": "https://arxiv.org/html/2611.18562v2#S2"
      }
    ]
  },
  {
    "id": "agp",
    "name": "AGP",
    "title": "Agent as Policy for Robotic Manipulation",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "I2RT YAM",
    "summary": "多模态编码 Agent 观察图像、编写运动程序并调用机器人执行，根据反馈纠错。加速版通过合并动作和复用几何估计减少推理调用。",
    "compute": "原版顺序叠衣的成功回合平均 50.8 分钟、24.14 美元。加速版的五种配置成功回合平均 3.6 至 17.1 分钟、1.69 至 7.52 美元。两组账单按论文当时价格，仅计成功回合。",
    "tasks": "零件装配、照图搭积木、调整骰子朝向、将物体投进碗和双臂叠毛巾。v4 另设四物体装箱实验。",
    "result": "原版四对装配 8/10、六块搭塔 9/10，顺序/同时叠衣为 5/5、3/5。加速版四对装配、金字塔、两塔与骰子均为 5/5，投掷 4/5。两版的任务与分母分别统计。",
    "paper": "https://arxiv.org/html/2609.12541v4",
    "project": "https://agent-as-policy-2026.github.io/",
    "code": "https://github.com/agent-as-policy-2026/agent-as-policy",
    "sources": [
      "低算力专题",
      "扩展综述"
    ],
    "method": "每次观察腕部深度、顶视图与机械臂状态后编写运动程序。滑落、抓空或几何偏差会触发新的观察与修复。加速版复用已有几何估计。",
    "record": "作者公开逐次录像及预算记录。v4 另在四物体装箱比较托管 Astra 与本地 Qwen，两者均为 5/5，本地 GPU 未披露。",
    "resources": [
      {
        "label": "逐次结果",
        "url": "https://agent-as-policy-2026.github.io/results.html"
      }
    ]
  },
  {
    "id": "aspire",
    "name": "ASPIRE",
    "title": "ASPIRE: Agentic /Skills Discovery for Robotics",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "双臂 YAM",
    "summary": "编码 Agent 借助视觉标注、碰撞与执行反馈搜索修复程序，把验证过的操作保存为下一任务能调用的技能。",
    "compute": "算力主要花在程序开发和试错。举罐任务找到首个成功程序的消耗从 6,194 万降至 658 万 token，未公布托管 GPU 型号或卡时。",
    "tasks": "比较有无仿真技能时，机器人将碗放到盘子上、举起罐子或开推抽屉。另有双臂解魔方案例。",
    "result": "每项各测 20 次。放碗两组均为 20/20，举罐从 13/20 提高至 19/20，抽屉从 0/20 提高至 11/20。",
    "paper": "https://arxiv.org/html/2607.00272v2",
    "project": "https://research.nvidia.com/labs/gear/aspire/",
    "code": "https://github.com/NVlabs/ASPIRE",
    "sources": [
      "扩展综述"
    ],
    "method": "执行引擎报告轨迹、抓取和碰撞信息，编码智能体同时搜索多个修复方案，只有经过验证的程序才进入可调用的技能库。",
    "record": "NVIDIA GEAR 公开了技能库、试验记录与演示。",
    "resources": []
  },
  {
    "id": "pyrua-lean",
    "name": "PyRUA-Lean",
    "title": "Fewer Tokens, Better Action: GPT-6 Astra Robot Agents with 14% Higher Success Rate but 65% Fewer Tokens",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "仿真 · LIBERO / RoboTwin / RoboCasa",
    "summary": "用有状态的代码一次编排多个机器人动作，由模型决定何时请求新图像，减少每步调用工具产生的上下文开销。",
    "compute": "主对照采用相同的托管模型和调用预算。4B 分支用 8 卡训练约 12 小时，共 3,840 回合，卡型未披露。",
    "tasks": "在 LIBERO-Pro、RoboTwin 2.0 与 RoboCasa365 合计 700 个仿真实例比较逐项工具调用与代码模式。",
    "result": "成功率从 63.1% 提高到 71.7%，相差 8.6 个百分点。输入 token 减少 65% 的统计限于两种方式均成功的场景。",
    "paper": "https://arxiv.org/html/2610.01939v2",
    "project": "",
    "code": "https://github.com/DAGroup-PKU/PyRUA-Lean",
    "sources": [
      "扩展综述"
    ],
    "method": "两种运行模式共用相同模型、原语与调用上限。代码模式通过变量保存状态，在程序内合并几何运算并选择下一次观测。",
    "record": "项目公布了原语、调用限制和轻量模型配置，PEAR 将其列入相关工作。",
    "resources": [
      {
        "label": "PEAR 相关工作",
        "url": "https://arxiv.org/html/2611.18562v2#S2"
      }
    ]
  },
  {
    "id": "ora",
    "name": "ORA",
    "title": "ORA: Open Robot-Use Agents",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "桌面机械臂 · RoboLab 仿真",
    "summary": "为机器人建立可重放的工具与 Python 执行接口，固定环境和预算后可替换语言模型，直接比较权重与运行框架各自的收益。",
    "compute": "完整仿真配置示例要求单张至少 32 GB 的 NVIDIA GPU，语言模型可远程调用。项目未公布含模型服务的端到端卡时。",
    "tasks": "RoboLab-120 每项计划两回合。另在桌面机械臂上拉抽屉、把糖果放进盒子，操作者逐动作确认。",
    "result": "仿真基础模型为 5.4%，接入 ORA 后为 52.5%（240 回合），同框架换 PEAR 为 61.9%（239 回合）。两项真机演示没有批量成功率。",
    "paper": "https://fastrua.ai/blog/2026-11-code-mode/#harness-and-model",
    "project": "https://haoailab.com/blogs/ora/",
    "code": "https://github.com/fast-rua/ORA#new-in-v01",
    "sources": [
      "扩展综述"
    ],
    "method": "运行框架记录每次动作、观测和终止原因，支持工具模式和多动作代码模式。固定框架后才能把性能差异归到被比较的模型权重。",
    "record": "该条目是 FastRUA 公开的框架与技术报告。v0.1 于 2026 年 11 月发布。",
    "resources": [
      {
        "label": "逐回合演示",
        "url": "https://fastrua.ai/ora/gallery/"
      }
    ],
    "paperLabel": "技术报告"
  },
  {
    "id": "code-as-policies",
    "name": "Code as Policies",
    "title": "Code as Policies: Language Model Programs for Embodied Control",
    "year": 2022,
    "category": "推理模型直接操作机器人",
    "platform": "UR5e · Everyday Robots",
    "summary": "给语言模型少量程序示例，让它递归编写辅助函数，把空间关系、循环和条件判断转换成感知 API 与机器人控制调用。",
    "compute": "使用托管 Codex 模型和现成的控制接口，目标任务没有单独训练策略。未公开部署硬件和全流程延迟。",
    "tasks": "UR5e 画图并用吸盘抓放物体，Everyday Robots 单臂在办公厨房移动、取物。",
    "result": "真机以执行录像为证。未见指令、未见属性的长链任务 80% 来自桌面仿真，每任务测 50 次。",
    "paper": "https://arxiv.org/abs/2209.07753",
    "project": "https://code-as-policies.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "提示示范把自然语言映射到 Python。由程序负责分支、循环和坐标计算，预先提供的感知模块和底层控制器完成识别与轨迹跟踪。",
    "record": "ICRA 2023。VoxPoser 沿用递归程序提示，并用动作原语版 CaP 作真机对照。",
    "resources": [
      {
        "label": "ICRA 发表记录",
        "url": "https://doi.org/10.1109/ICRA48891.2023.10160591"
      },
      {
        "label": "VoxPoser 后续对照",
        "url": "https://proceedings.mlr.press/v229/huang23b.html"
      }
    ]
  },
  {
    "id": "groot-2",
    "name": "GR00T 2",
    "title": "GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "Dexter · YAM · Unitree G1",
    "summary": "同一视频—动作基座进行跨本体训练，用真实接触回合精炼动作，再让上层 Agent 检查长任务、调用技能和恢复现场。",
    "compute": "通用预训练使用 1,024 张 GB300，总卡时未公布。Dexter 单任务 LoRA 用单张 RTX 5090 约 30 分钟，三视角动作块中位 153 ms。",
    "tasks": "Dexter 评测少样本适配，另在四类接触任务比较后训练。YAM 从随机零件布局完成三项组装，每项 100 次。",
    "result": "筛选后的 Dexter-50 在 0/1/5 条示范条件下为 40%/71%/95%。独立 71 项盲评的零样本结果为 49.8%。带纠错和 Agent 的 YAM 三项各成功 98、97、97 次。",
    "paper": "https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf",
    "project": "https://research.nvidia.com/labs/gear/gr00t-2/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "扩散 Transformer 先学习单视角视频，再联合生成多视角视频和本体动作。接触阶段用真机奖励做 GRPO 和成功轨迹自模仿，上层智能体用代码恢复现场。",
    "record": "来源为 NVIDIA 2026 年 11 月白皮书。作者对 N2 的早期预告与 N1.7 仓库另列为相关资料。",
    "resources": [
      {
        "label": "真机组装视频（MP4）",
        "url": "https://research.nvidia.com/labs/gear/gr00t-2/assets/video/agentic_assembly_plane.mp4"
      },
      {
        "label": "N2 预告",
        "url": "https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai"
      },
      {
        "label": "N1.7 仓库",
        "url": "https://github.com/NVIDIA/Isaac-GR00T"
      }
    ],
    "paperLabel": "白皮书"
  },
  {
    "id": "palm-saycan",
    "name": "PaLM-SayCan",
    "title": "Do As I Can, Not As I Say: Grounding Language in Robotic Affordances",
    "year": 2022,
    "category": "大模型规划与多机器人协作",
    "platform": "Everyday Robots 移动机械臂",
    "summary": "让 PaLM 给出语言上合理的下一步，再乘上当前状态下低层技能成功的估计值，从预先配置的技能库选择动作。",
    "compute": "低层 RL 用 16 枚 TPU v3 约 100 小时，另有两组各 3,000 个 CPU worker。行为克隆用 16 枚 TPU v3 约 27 小时。",
    "tasks": "移动机械臂在训练布局厨房和真实办公厨房执行七类、共 101 条语言指令，计划与实际执行由人工分别评定。",
    "result": "训练布局中计划和执行为 84%/74%，办公厨房为 81%/60%。训练技能的数据另由 10 台机器人历时 11 个月收集。",
    "paper": "https://say-can.github.io/assets/palm_saycan.pdf",
    "project": "https://say-can.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "在每个决策点，540B PaLM 评估候选技能在语言上的合理性，低层技能估计当前可执行性。两者乘积最高的技能先执行，再重新规划。",
    "record": "作者论文及 CoRL 论文集均可查。",
    "resources": [
      {
        "label": "CoRL 论文集",
        "url": "https://proceedings.mlr.press/v205/ichter23a.html"
      }
    ]
  },
  {
    "id": "voxposer",
    "name": "VoxPoser",
    "title": "VoxPoser: Composable 3D Value Maps for Robotic Manipulation with Language Models",
    "year": 2023,
    "category": "大模型规划与多机器人协作",
    "platform": "Franka Panda",
    "summary": "把模型给出的可接近区、避让区与末端方向转成三维体素约束。轨迹规划器执行首个航点，再根据新观测重规划。",
    "compute": "GPT-4 通过 API 生成程序，主评测无需训练任务专用策略。相机 20 Hz，轨迹重规划 5 Hz，云端卡数未披露。",
    "tasks": "移动避障、摆餐桌、关抽屉、开瓶、扫垃圾，在静态与加入外部扰动时每方法每任务各测 10 次。",
    "result": "VoxPoser 静态成功 44/50，扰动下为 35/50。相同条件的动作原语基线分别为 12/50、0/50。",
    "paper": "https://proceedings.mlr.press/v229/huang23b.html",
    "project": "https://voxposer.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "RGB-D 检测与跟踪结果被转成三维价值图。模型生成约束程序，对接近目标、保持距离以及末端朝向分别评分。",
    "record": "CoRL 2023。后续 Robotic Visual Instruction 在 CVPR 2025 论文中采用其为真机对照。",
    "resources": [
      {
        "label": "CVPR 后续对照",
        "url": "https://openaccess.thecvf.com/content/CVPR2025/papers/Li_Robotic_Visual_Instruction_CVPR_2025_paper.pdf"
      }
    ]
  },
  {
    "id": "gemini-robotics-15",
    "name": "Gemini Robotics 1.5",
    "title": "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer",
    "year": 2025,
    "category": "大模型规划与多机器人协作",
    "platform": "ALOHA · 双臂 Franka",
    "summary": "Gemini Robotics-ER 负责搜索、调用函数和检查进度，下层动作模型把短子任务变成连续控制，并迁移不同机器人的运动技能。",
    "compute": "技术报告列出 TPU v4、v5p、v6e，未披露数量、总时长及完整 Agent 的推理延迟。",
    "tasks": "ALOHA 与双臂 Franka 各做四项长流程任务。ALOHA 使用预训练权重，Franka 做过额外后训练。",
    "result": "抽屉积木任务中，ER 规划器为 60%，Flash 为 40%，单 VLA 开启思考为 0%。收拾行李与准备蘑菇烩饭在三种设置下均未完成整任务。",
    "paper": "https://storage.googleapis.com/deepmind-media/gemini-robotics/Gemini-Robotics-1-5-Tech-Report.pdf",
    "project": "https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "ER 可以记忆场景、调用外部工具并检查子任务。VLA 可先生成语言思考。Motion Transfer 用于迁移不同机械结构和动作空间中的操作。",
    "record": "官方技术报告附录和项目视频区分子任务进度与整任务成功率。",
    "resources": [
      {
        "label": "官方视频",
        "url": "https://www.youtube.com/watch?v=UObzWjPb6XM"
      }
    ],
    "paperLabel": "技术报告"
  },
  {
    "id": "gemini-robotics-25",
    "name": "Gemini Robotics 2.5",
    "title": "Gemini Robotics 2.5 accelerates real-world general dexterity",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "Apptronik Apollo 2",
    "summary": "高层具身推理模型跟踪流程，动作模型操控手臂与灵巧手。开发中结合实际示范和根据工厂画面生成的练习场景。",
    "compute": "官方发布没有列出训练卡型、数量、时长或生产试点的推理硬件。",
    "tasks": "Apollo 2 在匈牙利和德国的奔驰生产线从料箱抓取金属件、按序装入容器，另测试关工具箱、打包电饭煲。",
    "result": "奔驰配料试点官方报告 96%，未公布分母和分厂数据。2.0 与 2.5 对照中，关工具箱从 0% 至 93%，打包电饭煲从 0% 至 40%。",
    "paper": "https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/",
    "project": "",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "具身推理模型持续监控流程，动作模型结合部署时引导避障。开发阶段借助与现场布局相符的模拟练习场景。",
    "record": "来源为 Google DeepMind 的产品发布与合作方试点记录。",
    "resources": [
      {
        "label": "奔驰现场视频（WebM）",
        "url": "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/pPHeHBnghKMv10yl/GR_Apptronik_x_Mercedes_v1_1000k.webm"
      },
      {
        "label": "Apollo 2 平台",
        "url": "https://apptronik.com/apollo/apollo-2"
      }
    ],
    "paperLabel": "官方发布"
  },
  {
    "id": "aw-0",
    "name": "AW-0",
    "title": "Agentic World Action Models",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "双 YAM · Tianji–Sharpa",
    "summary": "让代码、视频与动作专家共同去噪，既可以直接执行生成的动作段，也能在需要时调用从轨迹中提炼的技能程序。",
    "compute": "预训练为 48 张 H100、1 个 epoch，下游 RoboTwin 为 16 卡、10 万步。RTX 5090 上推理为 0.23 秒，自回归代码对照为 0.55 秒。",
    "tasks": "两个真机平台各做四项，每任务 100 条示范，每个训练种子测 16 次，共三个种子。",
    "result": "八项任务按子步骤部分计分，AW-0 均值 71.1/100，DreamZero 为 46.0/100。YAM 叠毛巾的混合执行得分为 90.6，纯动作块为 84.4。",
    "paper": "https://arxiv.org/html/2610.30136v1",
    "project": "https://agentic-wam.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "先由编码智能体从机器人与人类演示提取技能库。三个专家联合生成代码、视频和动作，从而比较直接控制与调用代码的混合执行。",
    "record": "",
    "resources": []
  },
  {
    "id": "cot-wam",
    "name": "CoT-WAM",
    "title": "CoT-WAM: Collaborative Training of Vision-Language Models and World-Action Models via Plan Latents",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "双 Marvin M6",
    "summary": "把 VLM 提取的任务意图压入连续向量，再通过目标图像将规划传给视频与动作专家。",
    "compute": "LIBERO 配置为 8 卡，两阶段训练 1 万和 6 万步，batch 64。目标潜变量和动作分别去噪 5、10 步，未披露训练卡型和真机延迟。",
    "tasks": "两台七自由度机械臂执行果蔬分拣和擦桌，每项收集 100 条示范、评测 40 次。",
    "result": "分拣成功 27/40、擦桌 22/40，均值 61.3%。同协议 Fast-WAM 为 47.5%。未见任务组合的长链评测来自仿真。",
    "paper": "https://arxiv.org/html/2611.23803v2",
    "project": "",
    "code": "https://github.com/jhz1192/CoT-WAM",
    "sources": [
      "扩展综述"
    ],
    "method": "Qwen3-VL-4B 与 Wan2.2-TI2V-5B 先用语言、目标图和视频对齐 8 个意图向量，再固定语义接口训练动作与视频专家。",
    "record": "",
    "resources": [
      {
        "label": "官方 LIBERO 权重",
        "url": "https://huggingface.co/LosMous/CoT-WAM"
      }
    ]
  },
  {
    "id": "mawam-fan",
    "name": "MAWAM（Fan 等）",
    "title": "MAWAM: A Multi-Agent World-Action Model for Coordinated Manipulation",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "双 Galaxea R1 Pro",
    "summary": "两台机器人同时预测各自视角的未来画面和团队动作，用身份重排和角色提示学习协作。",
    "compute": "后训练更新 2.76B 参数，主训练卡时未给出。单 H100 上两步联合去噪中位 0.32 秒/块。15 Hz 控制，每块预测 24 步、执行前 8 步。",
    "tasks": "双机收衣、合叠浴巾、交接雨伞，每任务随机化物体位置并测 30 次，人工干预计失败。",
    "result": "三项依次为 53.3%、63.3%、86.7%，均值 67.8%。同数据 MA-VLA 为 48.9%，去掉跨机注意力为 52.2%。RoboFactory 的 90.3% 属仿真。",
    "paper": "https://arxiv.org/abs/2611.25105",
    "project": "https://research.nvidia.com/labs/lpr/mawam/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "训练先做单机接口适配，再用同步团队演示联合监督观测预测与动作。每台机器人只使用本机相机，无共享全局视角。",
    "record": "",
    "resources": []
  },
  {
    "id": "mawam-tang",
    "name": "MAWAM（Tang 等）",
    "title": "MAWAM: Joint Imagination for Collaborative Robot Manipulation with a Multi-Agent World Action Model",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "Franka FR3 · Cobot Magic 双 PiPER",
    "summary": "联合预测异构团队的观测，再按各自角色和关节结构解码动作。跨机器人注意力协调交接时刻。",
    "compute": "每任务两阶段各 3,000 步，用 8 张 H20。单卡联合推理中，25/50 步视频/动作去噪需 3.92 秒，4/8 步为 0.72 秒。",
    "tasks": "单臂 Franka 与双臂 Cobot Magic 协作装水果、分拣玩具、借漏斗倾倒方块，每任务 80 对同步示范，20 个未见布局。",
    "result": "三项成功 15/20、10/20、13/20，合计 38/60。独立运行 LingBot-VA 为 8/60。七项 MA-Bench 的 82.7% 来自仿真。",
    "paper": "https://arxiv.org/abs/2611.29501",
    "project": "https://embodiedcity.github.io/MAWAM/",
    "code": "https://github.com/EmbodiedCity/MAWAM.code",
    "sources": [
      "扩展综述"
    ],
    "method": "从 LingBot-VA 扩展出机器人维度，用角色语言、身份编码和掩码区分各机的动作通道。联合推理后，各执行器接收匹配的动作块。",
    "record": "与 Fan 等的另一篇 MAWAM 为两项独立研究。",
    "resources": [
      {
        "label": "模型权重",
        "url": "https://huggingface.co/EmbodiedCity/MAWAM"
      }
    ]
  },
  {
    "id": "rt-2",
    "name": "RT-2",
    "title": "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
    "year": 2023,
    "category": "跨本体数据与通用动作策略",
    "platform": "Google 七自由度移动操作臂",
    "summary": "把机器人动作编码成语言词元，让视觉语言模型在网络视觉问答和机器人示范上联合训练，以语义知识指导已有动作技能。",
    "compute": "55B 版以 batch 2,048 微调 8 万步，5B 版为 27 万步。多 TPU 云推理约 1–3 Hz（55B）或 5 Hz（5B），训练卡时未公开。",
    "tasks": "评测已见与未见的物体、背景和环境，多种模型与条件合计约 6,000 条真机评估轨迹。",
    "result": "未见条件汇总中，RT-1 为 32%，RT-2 为 62%。用于训练的机器人数据由 13 台设备历时 17 个月收集。",
    "paper": "https://proceedings.mlr.press/v229/zitkovich23a.html",
    "project": "https://robotics-transformer2.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "将末端位姿变化和夹爪命令离散成整数词元。训练把真实操作与视觉问答混合，部署时将输出限制在动作词表。",
    "record": "CoRL 2023。RT-2-X 后续采用其动作词元方案。",
    "resources": [
      {
        "label": "作者结果说明",
        "url": "https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/"
      },
      {
        "label": "RT-2-X 后续应用",
        "url": "https://robotics-transformer-x.github.io/"
      }
    ]
  },
  {
    "id": "open-x-embodiment",
    "name": "Open X-Embodiment / RT-X",
    "title": "Open X-Embodiment: Robotic Learning Datasets and RT-X Models",
    "year": 2023,
    "category": "跨本体数据与通用动作策略",
    "platform": "多本体 · 6 种机器人实测",
    "summary": "将不同机构的机器人数据统一为 RLDS 格式，在混合轨迹上训练 RT-1-X 和 RT-2-X，检验其他本体的演示能带来哪些技能。",
    "compute": "数据涉及 22 种本体、逾百万条轨迹，论文模型取其中 9 种机械臂。RT-1-X 约 35M，RT-2-X 为 5B 或 55B，训练卡时未列。",
    "tasks": "各方法合计在六种真机上做 3,600 次评测，并区分跨本体迁移与已有技能应对物体、背景变化。",
    "result": "Google Robot 的新技能对照中，55B RT-2-X 为 75.8%，同规模 RT-2 为 27.3%。不使用 WidowX Bridge 数据时降至 42.8%。另一组环境泛化测试为 61% 对 62%。",
    "paper": "https://arxiv.org/html/2310.08864v9",
    "project": "https://robotics-transformer-x.github.io/",
    "code": "https://github.com/google-deepmind/open_x_embodiment",
    "sources": [
      "扩展综述"
    ],
    "method": "RT-1-X 学习从图像和指令产生离散动作。RT-2-X 将动作表示为文本并保留视觉语言任务数据。各原始本体仍保留自己的控制接口。",
    "record": "2024 ICRA 最佳会议论文奖（当年两篇获奖）。Octo 和 OpenVLA 均采用其数据训练。",
    "resources": [
      {
        "label": "IEEE 官方奖项名单",
        "url": "https://www.ieee-ras.org/awards-recognition/conference-awards/ieee-icra-best-conference-paper-award/"
      },
      {
        "label": "后续训练 · Octo",
        "url": "https://roboticsproceedings.org/rss20/p090.html"
      },
      {
        "label": "后续训练 · OpenVLA",
        "url": "https://openvla.github.io/"
      }
    ]
  },
  {
    "id": "octo",
    "name": "Octo",
    "title": "Octo: An Open-Source Generalist Robot Policy",
    "year": 2024,
    "category": "跨本体数据与通用动作策略",
    "platform": "WidowX · ALOHA 等九套真机设置",
    "summary": "在混合机器人轨迹上学习可接受语言或目标图的扩散动作策略，再以少量新数据接入未见的传感器和动作空间。",
    "compute": "80 万条 OXE 轨迹。TPU v4-128 上 Small（27M）训练 8 小时、Base（93M）14 小时。一次全量适配在单张 24 GB A5000 上约 5 小时。",
    "tasks": "四家机构九套真机设置，包括插销、放咖啡胶囊和双臂拔笔帽。",
    "result": "六项微调任务平均成功率 72%，从头训练为 20%。WidowX 零样本的原分布、新物体、新环境、未见技能分别为 17/20、16/20、8/20、1/20。",
    "paper": "https://arxiv.org/html/2405.12213v2",
    "project": "https://octo-models.github.io/",
    "code": "https://github.com/octo-models/octo",
    "sources": [
      "扩展综述"
    ],
    "method": "扩散动作头支持连续动作段。新平台可接入腕相机、力矩等输入，也可替换动作头后在目标任务上微调。",
    "record": "RSS 2024。OpenVLA 将原版与微调版 Octo 用作基线，SIMPLER 纳入其仿真评测。",
    "resources": [
      {
        "label": "RSS 正式论文录",
        "url": "https://roboticsproceedings.org/rss20/p090.html"
      },
      {
        "label": "OpenVLA 的 Octo 基线",
        "url": "https://openvla.github.io/"
      },
      {
        "label": "SIMPLER 外部评测",
        "url": "https://github.com/simpler-env/SimplerEnv"
      }
    ]
  },
  {
    "id": "openvla",
    "name": "OpenVLA",
    "title": "OpenVLA: An Open-Source Vision-Language-Action Model",
    "year": 2024,
    "category": "跨本体数据与通用动作策略",
    "platform": "WidowX · Google Robot · Franka",
    "summary": "用双视觉编码器和 7B 语言模型从约 97 万条机器人示范学习离散动作，并通过 LoRA 适配新平台。",
    "compute": "完整训练用 64 张 A100、约 14 天（作者报约 21,500 卡时），LoRA 单 A100 约 10–15 小时。RTX 4090 推理约 6 Hz。",
    "tasks": "WidowX 17 个任务各 10 次，Google Robot 12 个任务各 5 次，另评 Franka 微调。",
    "result": "WidowX 允许部分成功计 0.5 分，汇总得分 70.6%（RT-2-X 为 50.6%）。Google Robot 的完整成功率为 85.0%（对照 78.3%）。",
    "paper": "https://proceedings.mlr.press/v270/kim25c.html",
    "project": "https://openvla.github.io/",
    "code": "https://github.com/openvla/openvla",
    "sources": [
      "扩展综述"
    ],
    "method": "视觉端联合 DINOv2 和 SigLIP，投影至 Llama 2 7B，按动作维度解码离散词元。LoRA 仅更新少量新增参数。",
    "record": "CoRL 2024，论文集于 2025 年出版。OpenVLA-OFT 使用该基座研究后训练。",
    "resources": [
      {
        "label": "OpenVLA-OFT 后续研究",
        "url": "https://openvla-oft.github.io/"
      }
    ]
  },
  {
    "id": "pi05",
    "name": "π0.5",
    "title": "π0.5: a Vision-Language-Action Model with Open-World Generalization",
    "year": 2025,
    "category": "跨本体数据与通用动作策略",
    "platform": "两类移动操作机器人",
    "summary": "在多机器人和网络数据上联合训练，让同一模型先根据场景选子任务，再用流匹配动作专家执行。",
    "compute": "两阶段各训练 28 万、8 万步，卡数与卡时未列。openpi 给出的通用显存门槛为推理 >8 GB、LoRA >22.5 GB、全量微调 >70 GB。",
    "tasks": "在三个未见家庭的厨房和卧室测试训练中出现过的任务类型。每环境每任务平均约 10 次，实物搭建的房间另用于消融。",
    "result": "图 7 中真实家庭任务进度约 65%–95%，按已完成步骤给分。定量任务多为 2–5 分钟，另有 10–15 分钟的长流程录像。",
    "paper": "https://proceedings.mlr.press/v305/black25a.html",
    "project": "https://www.pi.website/blog/pi05",
    "code": "https://github.com/Physical-Intelligence/openpi",
    "sources": [
      "扩展综述"
    ],
    "method": "先学习离散动作和语义，再用流匹配动作专家生成连续输出。家庭环境、移动操作与网络视觉语言数据共同参与训练。",
    "record": "CoRL 2025，Physical Intelligence 发布基础权重与 openpi。",
    "resources": [
      {
        "label": "论文 · 图 7 与附录 A-B",
        "url": "https://arxiv.org/abs/2504.16054"
      }
    ]
  },
  {
    "id": "hil-serl",
    "name": "HIL-SERL",
    "title": "Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning",
    "year": 2024,
    "category": "离线纠错与真机策略后训练",
    "platform": "单臂与双臂 Franka",
    "summary": "少量示范启动视觉 actor-critic。策略即将失败时由人接管，自主交互和人工纠正一起进入经验池，用于训练精细操作。",
    "compute": "使用 1 张 RTX 4090，每任务约 20 至 30 条初始示范，多数任务约需 1 至 2.5 小时。同步带装配约 6 小时。计时包含机器人执行、停顿和机上计算。",
    "tasks": "内存条插入、SSD 装配、USB 抓取插入、线缆卡扣、家具组装、物体双臂交接与同步带装配。",
    "result": "内存条、USB 和双臂同步带组装各成功 100/100，行为克隆对照为 29/100、26/100、2/100。用训练技能和脚本串起完整 IKEA 组装后，RL 为 10/10，行为克隆为 1/10。",
    "paper": "https://hil-serl.github.io/static/hil-serl-paper.pdf",
    "project": "https://hil-serl.github.io/",
    "code": "https://github.com/rail-berkeley/hil-serl",
    "sources": [
      "低算力专题",
      "扩展综述"
    ],
    "method": "奖励分类器从图像判断任务是否完成。离策略 actor–critic 同时采样专家演示与在线经验，允许操作者在执行中短暂接管。",
    "record": "2025 年发表于 Science Robotics。World4RL §IV.C 延用了 HIL-SERL 的真机数据采集协议。",
    "resources": [
      {
        "label": "低算力专题所用论文版本",
        "url": "https://arxiv.org/html/2410.21845v1"
      },
      {
        "label": "Science Robotics 期刊",
        "url": "https://doi.org/10.1126/scirobotics.ads5033"
      },
      {
        "label": "后续采用 · World4RL",
        "url": "https://arxiv.org/abs/2509.19080"
      }
    ]
  },
  {
    "id": "halo-wa",
    "name": "HALO-WA",
    "title": "HALO-WA: Hybrid-Attention Latent-Guided Online Reinforcement Learning for World-Action Models",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "AgileX ALOHA 双臂",
    "summary": "读取冻结 WAM 的潜特征和名义动作，通过混合注意力保留时间结构，让小型 actor 用 TD3 在真实接触中学习修正整个动作段。",
    "compute": "2 张 A800 分别用于学习和采集。四项在线阶段各用约 45、60、75、60 分钟。基座每任务还需 100 条示范、3 万步微调，以及 actor 的行为克隆预热。",
    "tasks": "细杆插入、网线插接、积木装配、电源插头插入，重点考察末端对齐与接触。",
    "result": "四项真机任务各评测 35 次，平均成功率从 26.4% 提高到 87.1%。",
    "paper": "https://arxiv.org/html/2607.04265v2",
    "project": "",
    "code": "https://github.com/YeanRoot/HALO-WA",
    "sources": [
      "低算力专题",
      "扩展综述"
    ],
    "method": "输入包含基座 WAM 的视频潜特征、参考动作和本体状态。混合注意力整合动作段时序，TD3 依据真实接触回合改进策略。",
    "record": "实机在线训练允许人工接管。公开仓库提供 RoboTwin 入口，其中仿真 Click Bell 使用单 A800。",
    "resources": [
      {
        "label": "论文中的网线插接序列",
        "url": "https://arxiv.org/html/2607.04265v2/wangxian.png"
      }
    ]
  },
  {
    "id": "gr-rl",
    "name": "GR-RL",
    "title": "GR-RL: Going Dexterous and Precise for Long-Horizon Robotic Manipulation",
    "year": 2025,
    "category": "离线纠错与真机策略后训练",
    "platform": "ByteMini-v2 双臂",
    "summary": "先用价值评估筛除停滞示范并做镜像增强，再在线调节生成动作的噪声，使通用 VLA 适应精密穿带。",
    "compute": "VLA 与价值网络合计 5B 参数，噪声头 51.5M。673 条真机轨迹用于校准价值函数，在线每 12 回合更新 50 步。未列卡时。",
    "tasks": "在指定孔位穿过鞋带，再把鞋带完全放回桌面。多孔连续穿带另有定性演示。",
    "result": "基座 45.7%，筛选示范后 61.6%，加入镜像增强后 72.7%，在线适配后 83.3%。评测采用 500 步检查点，未给试次分母。",
    "paper": "https://arxiv.org/abs/2512.01801",
    "project": "https://seed.bytedance.com/en/gr_rl",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "价值模型首先定位无进展的示范片段，利用双臂镜像对称性扩增数据。随后在线调节动作生成器的噪声预测头。",
    "record": "ByteDance Seed 于 2025 年 12 月公开预印本、实机演示。",
    "resources": []
  },
  {
    "id": "pi06-recap",
    "name": "π*0.6 / RECAP",
    "title": "π*0.6: a VLA That Learns From Experience",
    "year": 2025,
    "category": "离线纠错与真机策略后训练",
    "platform": "固定双臂 · 平行夹爪",
    "summary": "用价值函数估计离成功还有多远，根据任务进展标注优势，将示范、失败回合与人工纠正纳入同一套策略更新。",
    "compute": "Gemma 3 4B 配 860M 动作专家，训练卡时未披露。基础 π0.6 的单 H100、三视角五步去噪为 63 ms/块，星号版本未单列完整时延。",
    "tasks": "双臂叠不同衣物、制作浓缩咖啡，另有工厂装盒与家庭连续叠衣演示。咖啡一轮训练数据含 414 条自主和 429 条纠正轨迹。",
    "result": "相对离线 RL 加任务微调，最难的系扣衬衫和浓缩咖啡的每小时成功完成数均翻倍以上。家庭演示的 50 件衣物另计。",
    "paper": "https://arxiv.org/abs/2511.14759",
    "project": "https://www.pi.website/blog/pistar06",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "价值变化用于生成动作优势标签。按任务补充自主和人工纠正轨迹，用标签重训策略，部署时要求策略在正优势条件下选动作。",
    "record": "",
    "resources": [
      {
        "label": "基础 π0.6 模型卡",
        "url": "https://website.pi-asset.com/pi06star/PI06_model_card.pdf"
      },
      {
        "label": "家庭叠衣视频",
        "url": "https://www.youtube.com/watch?v=ZpHapIlJnMo"
      }
    ]
  },
  {
    "id": "r2-wam",
    "name": "R²-WAM",
    "title": "R²-WAM: Repair-and-Reject Post-Training for World Action Models",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "双臂 PiPER",
    "summary": "先修正视频预测与真实机器人运动的不一致，再筛选任务进度落后于示范的候选动作，离线训练策略拒绝这些动作。",
    "compute": "视频与动作分支分别用 16 张 A800 各训 2 个 epoch，进度评估器用 8 张 A800。真机示范合计约 42.9 小时。",
    "tasks": "双臂叠衣，在四种条件下评测，策略用离线示范完成后训练。",
    "result": "四种条件的平均成功率为 87.5%。该结果对应离线后训练，未测在线交互样本效率。",
    "paper": "https://arxiv.org/pdf/2610.04913v2",
    "project": "https://r2-wam.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "在相同动作条件下对照预测与实测运动，修复视频分支。冻结该分支后，用 STEAM 比较示范与候选轨迹进度，仅对显著落后的动作施加负向更新。",
    "record": "",
    "resources": []
  },
  {
    "id": "gigabrain-05m",
    "name": "GigaBrain-0.5M*",
    "title": "GigaBrain-0.5M*: a VLA That Learns From World Model-Based Reinforcement Learning",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "双臂 PiPER 等",
    "summary": "将世界模型预测的未来状态与价值函数导出的优势标签共同输入动作策略，再用实机自主与接管经验迭代更新。",
    "compute": "基座 10 万步，数据合计 10,931 小时（合成 6,653，真机 4,278）。训练卡时未列。A800 状态与价值联合预测 0.25 秒/帧，仅预测价值为 0.11 秒/帧。",
    "tasks": "装箱、制作浓缩咖啡和折衣，项目公开双臂执行的视频。",
    "result": "图 15 显示三项 RAMP 成功率接近 100%，未给各项分母。RoboChallenge 51.67% 来自较早的 GigaBrain-0.1。",
    "paper": "https://arxiv.org/pdf/2602.12099v2",
    "project": "https://gigabrain05m.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "RAMP 以未来状态与优势标签为条件，交替使用自主执行和人工接管数据改进策略。部署时可以切换是否使用单步世界模型预测。",
    "record": "",
    "resources": []
  },
  {
    "id": "wam-rl",
    "name": "WAM-RL",
    "title": "WAM-RL: World-Action Model Reinforcement Learning with Reconstruction Rewards and Online Video SFT",
    "year": 2026,
    "category": "仿真交互与策略后训练",
    "platform": "仿真 · LIBERO / RLBench",
    "summary": "用预测画面与执行后观测的重建相似度训练动作策略，再用成功轨迹微调视频分支。",
    "compute": "8 张 A800 混合训练在线 RL 和视频分支 8 小时，约 64 A800 卡时。基座与部署成本未给出。",
    "tasks": "在 LIBERO-Object 及 RLBench 的浇水任务验证，无真机评测。",
    "result": "LIBERO-Object 中原始模型、仅改动作、联合训练分别为 68%、78%、82%。浇水任务为 19%、18%、22%。",
    "paper": "https://arxiv.org/pdf/2606.17906v1",
    "project": "",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "基座为 Genie Envisioner-ACT。动作分支利用预测视觉特征，视频分支在成功轨迹上更新，KL 正则控制特征漂移。",
    "record": "",
    "resources": []
  },
  {
    "id": "simplevla-rl",
    "name": "SimpleVLA-RL",
    "title": "SimpleVLA-RL: Scaling VLA Training via Reinforcement Learning",
    "year": 2025,
    "category": "仿真交互与策略后训练",
    "platform": "双 AgileX Piper",
    "summary": "对同一仿真起点采样多条轨迹，以 GRPO 更新 OpenVLA-OFT，再将策略转移到实体机器人。",
    "compute": "全参数 RL 使用 8 张 80 GB A800。RoboTwin 单任务 12–24 小时，约 96–192 卡时。真机对应任务先有 1,000 条仿真示范。",
    "tasks": "双臂在更换背景的桌面做四项操作，每任务各测 50 次。作者表与正文对第二项的命名有差异。",
    "result": "四项真机成功率均值由 17.5% 升至 38.5%，叠碗从 38% 至 70%，取瓶从 0% 至 14%。仿真 LIBERO 四套均值由 91.0% 至 99.1%。",
    "paper": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/cbfbcb4da14235bd69b134070898ae9d-Abstract-Conference.html",
    "project": "",
    "code": "https://github.com/PRIME-RL/SimpleVLA-RL",
    "sources": [
      "扩展综述"
    ],
    "method": "采样阶段舍弃整组全部成功或全部失败的轨迹，保留能区分同一起点动作的训练信号，再以组内优势更新策略。",
    "record": "ICLR 2026，LaST-R1 在 LIBERO 对照表中收录。",
    "resources": [
      {
        "label": "正式论文及附录 G.3",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/file/cbfbcb4da14235bd69b134070898ae9d-Paper-Conference.pdf"
      },
      {
        "label": "后续对照 · LaST-R1 表 1",
        "url": "https://arxiv.org/html/2604.28192v1#S3.T1"
      }
    ]
  },
  {
    "id": "vla-rl",
    "name": "VLA-RL",
    "title": "VLA-RL: Towards Masterful and General Robotic Manipulation with Scalable Reinforcement Learning",
    "year": 2025,
    "category": "仿真交互与策略后训练",
    "platform": "真机型号未披露 · LIBERO 仿真",
    "summary": "把视觉观测和动作组织成多轮序列，通过夹爪切换及末端减速生成奖励伪标签，用 PPO 后训练策略。",
    "compute": "预印本报告仿真 RL 为 48 GPU 小时，未列卡型与总卡数。仓库的双卡命令为运行示例，真机预算单独未报。",
    "tasks": "预印本覆盖 LIBERO 40 项。IROS 2026 最终摘要补充实体机器人结果，未列硬件、具体任务或评测回合数。",
    "result": "仿真平均由 76.5% 至 81.0%。会议摘要报告统一真机设置下，在至多 3,000 个交互步内由 60% 提高至 90%。",
    "paper": "https://arxiv.org/abs/2505.18719",
    "project": "",
    "code": "https://github.com/GuanxingLu/vlarl",
    "sources": [
      "扩展综述"
    ],
    "method": "从夹爪开合与末端速度构造关键帧伪标签，训练过程奖励模型，给多轮观察与动作序列中的中间步骤分配信用。",
    "record": "IROS 2026 官方议程记录为论文 #4707，LaST-R1 将其作为仿真基线。",
    "resources": [
      {
        "label": "IROS 官方报告及最终摘要",
        "url": "https://2026.ieee-iros.org/program/contributed_talks/#M1LAY07:4707"
      },
      {
        "label": "后续对照 · LaST-R1 表 1",
        "url": "https://arxiv.org/html/2604.28192v1#S3.T1"
      }
    ]
  },
  {
    "id": "hint-wam",
    "name": "HINT-WAM",
    "title": "HINT-WAM: Hindsight-Informed Training for World Action Models",
    "year": 2026,
    "category": "仿真交互与策略后训练",
    "platform": "仿真 · LIBERO-90 / RoboTwin",
    "summary": "训练时让教师看到示范后续帧，学生沿自己的去噪轨迹匹配教师动作，固定视频专家并保留行为克隆目标。",
    "compute": "8 张 24 GB A5000 后训练约 71.6 小时（572 卡时）。相同设备仅动作专家 SFT 用 447 卡时，全量 SFT 用 1,016 卡时。",
    "tasks": "LIBERO-90 每项 50 次，另测 RoboTwin 25 个困难任务的 clean 与 randomized 条件。训练使用固定示范，无新增环境交互。",
    "result": "无旧任务回放时，新任务由 SFT 的 78.88% 提高至 85.18%，原四套均值降至 44.05%。有回放时新任务为 81.56%，旧任务 95.10%。仅报告仿真。",
    "paper": "https://arxiv.org/html/2611.24789v1",
    "project": "https://tuandattt.github.io/hintwam/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "教师可读取事后观测，学生只能沿自身生成轨迹去噪。部署移除教师，动作仍以 10 步采样产生。",
    "record": "",
    "resources": []
  },
  {
    "id": "daydreamer",
    "name": "DayDreamer",
    "title": "DayDreamer: World Models for Physical Robot Learning",
    "year": 2022,
    "category": "在习得的世界模型中训练策略",
    "platform": "UR5 · xArm · Unitree A1 · Sphero",
    "summary": "从真实传感器流中在线学习潜空间动力学，通过想象未来轨迹训练策略与价值网络，同时继续从实机收集数据。",
    "compute": "想象批次可在单张 GPU 上学习。A1 配置把学习和动作分到两张 GPU，xArm 使用单 GPU 学习、CPU 执行。卡型未给出。",
    "tasks": "A1 学习起身行走，UR5 与 xArm 在预设箱位间搬运物体，Sphero 做视觉导航。",
    "result": "A1 约一小时学会行走。UR5 训练 8 小时达到每分钟 2.5 个，xArm 10 小时达到 3.1 个，Sphero 的导航训练约 2 小时。",
    "paper": "https://proceedings.mlr.press/v205/wu23c/wu23c.pdf",
    "project": "https://danijar.com/project/daydreamer/",
    "code": "https://github.com/danijar/daydreamer",
    "sources": [
      "扩展综述"
    ],
    "method": "递归状态空间模型用相机和本体感知拟合环境、预测奖励。学习器沿 16 步想象轨迹优化策略，与真机采样并行。",
    "record": "CoRL 2022，PMLR 于 2023 年出版。作者公开训练和实机脚本。",
    "resources": [
      {
        "label": "CoRL 论文集",
        "url": "https://proceedings.mlr.press/v205/wu23c.html"
      }
    ]
  },
  {
    "id": "unisim",
    "name": "UniSim",
    "title": "Learning Interactive Real-World Simulators",
    "year": 2023,
    "category": "在习得的世界模型中训练策略",
    "platform": "Language Table",
    "summary": "把视频、文字与连续动作统一为可交互的条件输入，在生成的操作视频中训练高层规划器和低层机器人策略。",
    "compute": "5.6B 视频模型使用 512 枚 TPU v3 训练 20 天。12B 高层模型另用 64 枚 TPU v3 微调 1 天。",
    "tasks": "Language Table 真机依据目标重排三块积木，也测试由合成环境学到的低层推块策略。",
    "result": "论文图 7、8 给出实体执行案例，未给与 48 项仿真 RL 实验相同协议的真机总成功率。模拟器的训练含真实视频和轨迹。",
    "paper": "https://arxiv.org/html/2310.06114v3",
    "project": "https://universal-simulator.github.io/unisim/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "高层 PaLM-E 用生成轨迹的目标重标注进行训练。低层 PaLI 策略在合成视频中执行动作，用学习到的奖励进行策略梯度更新。",
    "record": "ICLR 2024 杰出论文奖。",
    "resources": [
      {
        "label": "ICLR 获奖公告",
        "url": "https://media.iclr.cc/Conferences/ICLR2024/ICLR2024_Press_Release.pdf"
      }
    ]
  },
  {
    "id": "wmpo",
    "name": "WMPO",
    "title": "WMPO: World Model-based Policy Optimization for Vision-Language-Action Models",
    "year": 2025,
    "category": "在习得的世界模型中训练策略",
    "platform": "Cobot Mobile ALOHA",
    "summary": "用当前策略采集的数据校准动作条件世界模型，在模型内部闭环尝试，再由视觉奖励模型评估轨迹，以 GRPO 改进 VLA。",
    "compute": "OpenVLA-OFT 基础微调用 8 张 H100，世界模型及策略优化阶段用 32 张 H100。论文未给出各阶段时长。",
    "tasks": "实机插方块任务先用 200 条专家示范训练策略，再用 128 条策略轨迹对齐模拟器。三种方法各评估 30 次。",
    "result": "相同条件下，基础策略为 53%，离线 DPO 为 60%，WMPO 为 70%。初始示范、策略采集与最终评测均使用实体机器人。",
    "paper": "https://arxiv.org/abs/2511.09515",
    "project": "https://wm-po.github.io/",
    "code": "https://github.com/WM-PO/WMPO",
    "sources": [
      "扩展综述"
    ],
    "method": "先以 OXE 预训练，再用策略实际到达的状态校准世界模型。在生成环境内闭环采样，利用视觉奖励把轨迹按好坏分组。",
    "record": "ICLR 2026，作者提供世界模型与策略优化实现。",
    "resources": [
      {
        "label": "ICLR 定稿（OpenReview）",
        "url": "https://openreview.net/pdf?id=qE2FyvRvuF"
      }
    ]
  },
  {
    "id": "world4rl",
    "name": "World4RL",
    "title": "World4RL: Diffusion World Models for Policy Refinement With Reinforcement Learning for Robotic Manipulation",
    "year": 2025,
    "category": "在习得的世界模型中训练策略",
    "platform": "Franka",
    "summary": "用离线真机轨迹训练扩散世界模型，再让 PPO 在冻结模型内优化一个经行为克隆初始化的小型视觉策略。",
    "compute": "世界模型用 4 张 A800（40 GB）约 20 小时，每任务的策略 RL 用 1 张 A800 约 6 小时。每任务收集专家、策略和随机轨迹各 50 条。",
    "tasks": "开抽屉、关抽屉、放入和取出面包、抓苹果、按下按钮。",
    "result": "六项真机任务从固定初态各测 20 次，合计 112/120（93.3%），Diffusion Policy 为 106/120（88.3%）。论文表 III 的行为克隆逐项计数与汇总栏不一致。",
    "paper": "https://arxiv.org/abs/2509.19080",
    "project": "https://world4rl.github.io/",
    "code": "",
    "sources": [
      "低算力专题",
      "扩展综述"
    ],
    "method": "训练动作条件扩散动力学和独立成功判别器。行为克隆提供高斯视觉策略的初值，随后固定世界模型，使用 PPO 精炼该策略。",
    "record": "2026 年发表于 IEEE Robotics and Automation Letters。",
    "resources": [
      {
        "label": "低算力专题所用论文版本",
        "url": "https://arxiv.org/html/2509.19080v2"
      },
      {
        "label": "IEEE RA-L 期刊",
        "url": "https://ieeexplore.ieee.org/document/11668663"
      }
    ]
  },
  {
    "id": "ls-mbpo",
    "name": "LS-MBPO",
    "title": "Efficient VLA Reinforcement Learning via Subchunk Rollouts in Latent World Models",
    "year": 2026,
    "category": "在习得的世界模型中训练策略",
    "platform": "双 ARX-X5 · ALOHA",
    "summary": "把一段 VLA 动作拆成较短的子段，在潜空间动力学模型中训练残差策略。从接近成功的状态开始练习，再逐步向任务前段扩展。",
    "compute": "以 LIBERO-Long 为例，世界模型用 4 张 RTX 5090 训练约 12 小时，RL 阶段用 1 张 RTX 5090 约 1.5 小时。真机每任务另有 400 条离线轨迹和 100 条专家示范。 真机还周期性收集交互数据以刷新分支起点，新增交互总量未列。",
    "tasks": "一臂持笔筒，另一臂逐支插笔并归位。双臂对齐充电器并插入插座。",
    "result": "每项 20 次真机评测。收笔从 π0.5-SFT 的 3/20 提高至 6/20，插充电器从 5/20 提高至 8/20。LIBERO-Long 的 71.2% 来自仿真。",
    "paper": "https://arxiv.org/abs/2611.27645",
    "project": "",
    "code": "",
    "sources": [
      "低算力专题",
      "扩展综述"
    ],
    "method": "在动作子段上学习残差，分层训练模拟世界模型滚动时的误差。课程先覆盖临近成功的分支，再将起点逐步移向任务前段。",
    "record": "2026 年 11 月 20 日公开预印本。论文另给出相同任务中 VLA-MBPO 的两阶段硬件对照。",
    "resources": [
      {
        "label": "低算力专题所用论文版本",
        "url": "https://arxiv.org/html/2611.27645v1"
      },
      {
        "label": "论文中的真机任务图",
        "url": "https://arxiv.org/html/2611.27645v1/real-world.png"
      }
    ]
  },
  {
    "id": "world-gymnast",
    "name": "World-Gymnast",
    "title": "World-Gymnast: Training Robots with Reinforcement Learning in a World Model",
    "year": 2026,
    "category": "在习得的世界模型中训练策略",
    "platform": "WidowX · Bridge/AutoEval",
    "summary": "让 VLA 在动作条件视频环境 WorldGym 中操作，用视觉语言模型判定完成情况，通过同组想象轨迹优化策略。",
    "compute": "609M 世界模型以 2 张 A100 80 GB 训练 58 万步。7B 策略全量 RL 用 4 张 H200 140 GB 训练 1–2 天，另需模型调用评分。",
    "tasks": "AutoEval 在两个场景评测四项真机任务，每项每策略分 5 组，每组 10 次。",
    "result": "茄子入蓝水槽从 4±4% 至 72±10%，SIMPLER RL 为 32±10%。关抽屉为 62±6%，与 SFT 持平。误差为组间标准误，“18 倍”属于前一项。",
    "paper": "https://arxiv.org/pdf/2602.02454v1",
    "project": "https://world-gymnast.github.io/",
    "code": "https://github.com/world-gymnast/world-gymnast",
    "sources": [
      "扩展综述"
    ],
    "method": "OpenVLA-OFT 生成动作，WorldGym 推演后续观测，GPT-4o 判断成功。每组 8 条想象轨迹以 GRPO 更新策略。",
    "record": "",
    "resources": []
  },
  {
    "id": "wovr",
    "name": "WoVR",
    "title": "WoVR: World Models as Reliable Simulators for Post-Training VLA Policies with RL",
    "year": 2026,
    "category": "在习得的世界模型中训练策略",
    "platform": "Franka Panda · AgileX PiPER",
    "summary": "给视频世界模型注入动作条件，并从关键帧开始想象，缩短到决定性动作的预测链。仿真中可用改进策略的数据继续更新世界模型。",
    "compute": "v1 披露 8 张 H100，v3 新增真机实验未单列卡数和时长。v3 两平台分别训练世界模型 75 万、125 万步。23 FPS 为仿真视频生成吞吐。",
    "tasks": "Franka 与 PiPER 各有三项不同任务，每方法每任务 30 次。真机世界模型的数据由多个监督检查点采集。",
    "result": "OpenVLA-OFT 在 Franka 上由 51.1% 至 80.0%，PiPER 上由 15.5% 至 28.9%。PiPER 的 π0.5 由 34.4% 至 56.7%。",
    "paper": "https://arxiv.org/pdf/2602.13977v3",
    "project": "https://wovr-rlinf.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "Wan 模拟器用双路动作注入和首帧锚定控制漂移。部分预测从真实关键帧起步，缩短错误累积的时间。",
    "record": "真机结果按 v3，v1 另保留作训练硬件来源。",
    "resources": [
      {
        "label": "v1 训练硬件 · §5",
        "url": "https://arxiv.org/pdf/2602.13977v1"
      },
      {
        "label": "官方复现实例",
        "url": "https://rlinf.readthedocs.io/en/latest/rst_source/examples/embodied/wan.html"
      }
    ]
  },
  {
    "id": "wevo",
    "name": "WEVO",
    "title": "WEVO: World Model-Enabled VLA Optimization for Whole-Body Loco-Manipulation",
    "year": 2026,
    "category": "在习得的世界模型中训练策略",
    "platform": "Unitree G1",
    "summary": "在视频世界模型与全身控制器组成的环境里，让人形 VLA 根据任务进展获得奖励，学习行走与操作的配合。",
    "compute": "基座训练用 8 张 H100、3.5 小时。世界模型中期训练 10 小时、每任务适配 17 小时。每任务 RL 用 8 张 H100 约 12 小时，其中约四分之三用于生成视频。",
    "tasks": "拿瓶放箱、转身放瓶、双手搬篮。每任务留取成功、失败各 10 条真实轨迹适配，训练后各做 20 次独立测试。",
    "result": "三项分别为 85%、75%、65%，平均 75%。行为克隆为 23.3%，使用同一批真机数据训练的 RL 为 48.3%。各任务单独训练一次。",
    "paper": "https://arxiv.org/pdf/2611.25251v1",
    "project": "https://qianzhong-chen.github.io/wevo.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "用 LEGS 示范初始化 GR00T N1.7，为 DreamDojo 2B 适配动作条件模拟。SONIC–MuJoCo 提供全身状态，视频模拟器预测下一观测。",
    "record": "",
    "resources": []
  },
  {
    "id": "v-jepa-2-ac",
    "name": "V-JEPA 2-AC",
    "title": "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning",
    "year": 2025,
    "category": "预测驱动的规划与动作选择",
    "platform": "Franka · Robotiq 夹爪",
    "summary": "在视频特征空间预测动作后果，以交叉熵优化搜索最接近目标画面的动作，执行后重新规划。",
    "compute": "视频编码器预训练使用超百万小时视频，动作条件模型使用约 62 小时 DROID 数据。RTX 4090 对 800 个候选做 10 轮优化，单步规划约 16 秒。",
    "tasks": "两个实验室使用 Franka 抓取与放置杯子、盒子，每种任务与物体组合各试 10 次。取放还提供中间目标图并预设切换时刻。",
    "result": "跨实验室取放杯子为 80%、盒子 65%。单独抓取时杯子 65%、盒子 25%。62 小时指轨迹时长，训练卡时未列。",
    "paper": "https://arxiv.org/html/2506.09985v1",
    "project": "https://ai.meta.com/research/vjepa",
    "code": "https://github.com/facebookresearch/vjepa2",
    "sources": [
      "扩展综述"
    ],
    "method": "动作条件预测器从视频编码和末端状态变化学习状态演化。将预测特征与目标图特征的距离作为候选动作的代价。",
    "record": "",
    "resources": []
  },
  {
    "id": "world-action-planner",
    "name": "World Action Planner",
    "title": "World Action Planner: Generalizable Robot Decision-Making with Action-Conditioned World Models",
    "year": 2026,
    "category": "预测驱动的规划与动作选择",
    "platform": "Franka Panda",
    "summary": "由视觉语言模型拟定抓放路径，借助动作条件世界模型预演两个视角的后果，然后全局修正轨迹或局部搜索。",
    "compute": "世界模型训练用 16 张 H100、batch 64。A100 生成 20 帧约 17 秒，全局修正约 30 秒，局部搜索需 2–3 分钟。",
    "tasks": "用 10 条真实失败轨迹适配世界模型。实机分别将绿色和紫色罐头放入篮中，两种物体各 20 次。",
    "result": "绿罐成功 14/20，紫罐 12/20，仅用视觉语言模型规划均为 2/20。采用全局修正时整项任务约 2 分钟。",
    "paper": "https://arxiv.org/html/2607.27599v2",
    "project": "https://worldactionplanner.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "用两个相机视角预演轨迹。全局修正重写整条路径，局部搜索在容易碰撞或抓不稳的位置增加候选。",
    "record": "",
    "resources": []
  },
  {
    "id": "cosmos-policy",
    "name": "Cosmos Policy",
    "title": "Cosmos Policy: Fine-Tuning Video Models for Visuomotor Control and Planning",
    "year": 2026,
    "category": "预测驱动的规划与动作选择",
    "platform": "ALOHA 双 ViperX 300 S",
    "summary": "把机器人状态、动作和任务价值加入视频模型，让策略直接输出动作，也可以对候选动作的未来进行价值排序。",
    "compute": "ALOHA、RoboCasa、LIBERO 后训练各 48 小时，分别用 8、32、64 张 H100。真机直接策略单 H100 约 0.95 秒/块，8 分支搜索用 8 卡约 4.9 秒/块。",
    "tasks": "双臂四项任务共 185 条示范，每策略 101 次实测。另用 648 条含成败的实机轨迹校准规划模型。",
    "result": "直接策略四项平均任务完成度为 93.6/100。困难初始条件下的两项规划实验另测，候选搜索相对直接策略平均提高 12.5 分。",
    "paper": "https://arxiv.org/abs/2601.16163",
    "project": "https://research.nvidia.com/labs/cosmos-lab/cosmos-policy/",
    "code": "https://github.com/NVlabs/cosmos-policy",
    "sources": [
      "扩展综述"
    ],
    "method": "Cosmos-Predict2 把动作、机器人状态与价值放入潜在视频帧。直接策略一次采样，规划模式进一步展开多个分支并比较预期价值。",
    "record": "ICLR 2026 论文收录直接策略与规划两类设置。",
    "resources": [
      {
        "label": "ICLR 2026",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2026/hash/748becc400a57c0e31cfe6a2e7951467-Abstract-Conference.html"
      }
    ]
  },
  {
    "id": "wise",
    "name": "WISE",
    "title": "Seeing Through the Illusion: Test-Time Scaling for World Action Models",
    "year": 2026,
    "category": "预测驱动的规划与动作选择",
    "platform": "仿真 · RoboLab / LIBERO",
    "summary": "从冻结 WAM 采样多组动作与未来画面，同时评价可执行性、画面和动作是否一致以及任务进度，执行得分最高的动作。",
    "compute": "每步采 4 组候选，并使用本体专用逆动力学模型和既有进度模型。LIBERO 平均每回合从 7.1 秒升至 25.2 秒，RoboLab 从 892.5 秒升至 3,062.5 秒。",
    "tasks": "RoboLab 十项共 50 个仿真回合，LIBERO 四套共 2,000 回合。训练评分器使用 DROID 真机数据。",
    "result": "RoboLab 由 6% 至 24%，LIBERO 由 75.1% 至 78.3%。相较同采四个候选的最强对照分别高 4.0 和 0.9 个百分点。无真机闭环测试。",
    "paper": "https://arxiv.org/html/2611.03585v1",
    "project": "",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "对每个候选分别评估动作可执行性、逆动力学恢复的动作一致性和预测进度，综合三项分数选择执行的动作段。",
    "record": "",
    "resources": [
      {
        "label": "RoboLab 仿真平台",
        "url": "https://research.nvidia.com/labs/srl/projects/robolab/"
      }
    ]
  },
  {
    "id": "susie",
    "name": "SuSIE",
    "title": "Zero-Shot Robotic Manipulation with Pre-Trained Image-Editing Diffusion Models",
    "year": 2023,
    "category": "预测驱动的规划与动作选择",
    "platform": "WidowX 250",
    "summary": "上层图像编辑模型根据指令生成中间目标图，低层扩散策略执行一段动作，再用新观测生成下一张目标图。",
    "compute": "图像模型在 TPU v4-64 上训练 17 小时，动作策略在 TPU v4-8 上训练 15 小时。部署用 50 步 DDIM 采样目标图。",
    "tasks": "三种真实桌面场景分别有 3、2、4 个任务，每任务各 10 次。包括未见桌面布局和新物体。",
    "result": "三组成功 26/30、10/20、35/40，合计 71/90。在新布局与新物体较多的场景 C，RT-2-X 为 30/40。",
    "paper": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/8ea50bf458f6070548b11babbe0bf89b-Abstract-Conference.html",
    "project": "https://subgoal-image-editing.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "上层在机器人与人类视频上适配 InstructPix2Pix，下层用真实动作示范学习图像条件扩散策略。执行若干步后重新预测子目标。",
    "record": "ICLR 2024，后续 VPP 把它作为真机操作对照。",
    "resources": [
      {
        "label": "VPP 真机对照",
        "url": "https://arxiv.org/html/2412.14803v2"
      }
    ]
  },
  {
    "id": "gr-1",
    "name": "GR-1（ByteDance）",
    "title": "Unleashing Large-Scale Video Generative Pre-training for Visual Robot Manipulation",
    "year": 2023,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "Kinova Gen2",
    "summary": "先从人类第一视角视频学习预测未来图像，再用机器人示范联合训练视觉预测和机械臂、夹爪动作。",
    "compute": "195M 参数，46M 可训练。视频预训练 50 轮，真机适配 30 轮、batch 64，论文未披露训练设备及卡时。",
    "tasks": "腕部与固定相机采集 1,775 条搬运、2,856 条抽屉轨迹。真机比较已见物体、同类新实例与新类别。",
    "result": "三种搬运条件为 79%、73%、30%，开关抽屉 75%。新类别仅含番茄、黄桃，论文未给各组试次。",
    "paper": "https://proceedings.iclr.cc/paper_files/paper/2024/file/2c37c5bcef24b9541550261dcd63261b-Paper-Conference.pdf",
    "project": "https://gr1-manipulation.github.io/",
    "code": "https://github.com/bytedance/GR-1",
    "sources": [
      "扩展综述"
    ],
    "method": "从 Ego4D 抽取约 80 万个片段学习条件视频预测，在机器人微调中加入本体状态和夹爪动作进行联合监督。",
    "record": "ICLR 2024。该条目为 ByteDance 操作策略 GR-1，后续 GR-2 扩大视频预训练规模。",
    "resources": [
      {
        "label": "作者后续 · GR-2",
        "url": "https://arxiv.org/abs/2410.06158"
      }
    ]
  },
  {
    "id": "vpp",
    "name": "VPP（Video Prediction Policy）",
    "title": "Video Prediction Policy: A Generalist Robot Policy with Predictive Visual Representations",
    "year": 2024,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "Franka Panda · xArm + XHand",
    "summary": "冻结已适配的操作视频扩散模型，用首次前向的多层时空特征指导扩散动作头产生机器人动作段。",
    "compute": "视频适配用 8 张 A100、2–3 天。仿真策略训练用 4 张 A100、6–12 小时。真机策略卡时未单列。单 4090 的视频前向少于 160 ms。",
    "tasks": "Panda 与配 12 自由度灵巧手的 xArm 分别采集 2,000、4,000 条轨迹，测试物体或背景变化以及工具使用。",
    "result": "Panda 已见与未见任务为 85%/73%。灵巧手已见、未见与工具使用为 75%/60%/68%。报告给出平台总评测规模，未列各方法共同分母。",
    "paper": "https://proceedings.mlr.press/v267/hu25g.html",
    "project": "https://video-prediction-policy.github.io/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "使用视频扩散模型一次前向中的多层特征，Video Former 将其压缩为动作策略的条件输入，控制时无需完整采样未来视频。",
    "record": "ICML 2025 Spotlight Poster。",
    "resources": [
      {
        "label": "ICML Spotlight Poster",
        "url": "https://icml.cc/virtual/2025/poster/44705"
      }
    ]
  },
  {
    "id": "videovla",
    "name": "VideoVLA",
    "title": "VideoVLA: Video Generators Can Be Generalizable Robot Manipulators",
    "year": 2025,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "睿尔曼七自由度单臂",
    "summary": "将未来视频和动作送入同一扩散模型，以双向交互联合预测视觉变化和机器人动作。",
    "compute": "32 张 AMD MI300X，预训练 10 万步、微调 1.5 万步，未报卡时。真机单 H100 用 10 步采样 13 帧和 6 个动作约 1.1 秒，执行前 3 个。",
    "tasks": "睿尔曼单臂采集 5,824 条遥操作样本，测试域内、新物体及 WidowX 技能迁移。迁移使用目标机器人见过的物体。",
    "result": "域内任务平均 64.6%，新物体 50.6%（每种 12 次），跨本体技能 58.0%（每种 16 次）。后两项 CogACT 为 26.9% 和 35.1%。",
    "paper": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/89a3b655a8b68ae1c76b768152c9c19d-Abstract-Conference.html",
    "project": "https://videovla-nips2025.github.io/",
    "code": "https://github.com/VideoVLA-Project/VideoVLA",
    "sources": [
      "扩展综述"
    ],
    "method": "CogVideoX-5B 的扩散 Transformer 联合处理指令、当前图像、未来视频和连续动作，在 OXE 子集中预训练后迁移到目标机械臂。",
    "record": "NeurIPS 2025。作者已发布实现及模型。",
    "resources": []
  },
  {
    "id": "motus",
    "name": "Motus",
    "title": "Motus: A Unified Latent Action World Model",
    "year": 2025,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "双臂 AC-One · Agilex-Aloha-2",
    "summary": "用光流学习潜在动作，以联合注意力连接视频、动作与视觉语言专家，在目标平台上用真实动作微调。",
    "compute": "RoboTwin 适配 10 万步，训练卡数与总时长未公开。官方指南给出训练显存 >80 GB，预编码 T5 后推理 >24 GB，否则约 41 GB。",
    "tasks": "每任务使用 100 条示范。按平台分别训练和比较，例如叠毛巾、取水及面包入炉。",
    "result": "按子步骤计分，AC-One 平均 63.22%（π0.5 为 14.79%），Agilex 为 59.30%（π0.5 为 48.60%）。两平台任务集不同。",
    "paper": "https://openaccess.thecvf.com/content/CVPR2026/html/Bi_Motus_A_Unified_Latent_Action_World_Model_CVPR_2026_paper.html",
    "project": "https://motus-robotics.github.io/motus",
    "code": "https://github.com/thu-ml/Motus",
    "sources": [
      "扩展综述"
    ],
    "method": "模型依次适配视频专家、学习从光流提取的潜在动作、用机器人真实动作微调。通过不同模态的噪声水平切换策略与视频预测模式。",
    "record": "CVPR 2026。项目提供三个阶段的检查点。",
    "resources": [
      {
        "label": "论文附录与分项成绩",
        "url": "https://arxiv.org/html/2512.13030v1"
      }
    ]
  },
  {
    "id": "dreamgen",
    "name": "DreamGen",
    "title": "DreamGen: Unlocking Generalization in Robot Learning through Video World Models",
    "year": 2025,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "Fourier GR1 · Franka · SO-100",
    "summary": "从初始画面和任务描述合成操作视频，再通过逆动力学估计动作或潜在动作，用合成数据训练实际部署的控制策略。",
    "compute": "生成 24 万条 RoboCasa 样本用 1,500 张 L40、54 小时，约 8.1 万 L40 卡时，仅计数据生成。整体训练成本未列。",
    "tasks": "三个真机平台评测九项数据增强任务，另以 Fourier GR1 考察未见行为和新环境。",
    "result": "GR1 已见环境下 14 种新行为平均得分从 11.2% 至 43.2%，10 个新环境中 13 项任务由 0 至 28.5%。两组都按完成阶段给部分分。",
    "paper": "https://proceedings.mlr.press/v305/jang25a.html",
    "project": "https://research.nvidia.com/labs/gear/dreamgen/",
    "code": "https://github.com/NVIDIA/GR00T-Dreams",
    "sources": [
      "扩展综述"
    ],
    "method": "用每个本体的数据先适配视频模型和逆动力学，再生成带动作标注的示例。这些示例可用于训练 GR00T N1、π0 或扩散策略。",
    "record": "CoRL 2025。NVIDIA 发布 GR00T-Dreams 数据生成工作流。",
    "resources": [
      {
        "label": "正文 · 表 1、附录 D / I",
        "url": "https://arxiv.org/html/2505.12705v2"
      }
    ]
  },
  {
    "id": "dreamzero",
    "name": "DreamZero",
    "title": "World Action Models are Zero-shot Policies",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "AgiBot G1 · DROID-Franka",
    "summary": "视频与动作按时间块联合生成。执行期间将新观测写入缓存，Flash 配置允许单步动作采样。",
    "compute": "两平台分别训练 10 万步，未披露训练卡时。Flash 的 2 张 GB200 配置约 150 ms/块。开源服务器公布的时延另有计算条件。",
    "tasks": "AgiBot G1 用约 500 小时数据，评测 10 个未见任务、各 8 次。DROID-Franka 测 20 个未见任务、各 2 次。",
    "result": "AgiBot 的平均任务进度为 39.5%。DROID 的平均进度为 49%，完整成功率为 22.5%。7 Hz 的速度和跨任务成绩来自不同实验。",
    "paper": "https://arxiv.org/abs/2602.15922",
    "project": "https://dreamzero0.github.io/",
    "code": "https://github.com/dreamzero0/dreamzero",
    "sources": [
      "扩展综述"
    ],
    "method": "基于 Wan2.1-I2V-14B，视觉与动作分块联合去噪。运行中将真实观测写回上下文，减少生成误差持续影响后续动作。",
    "record": "CoRL 2026 口头报告。作者另公开逐次真机录像。",
    "resources": [
      {
        "label": "真机试次视频库",
        "url": "https://dreamzero0.github.io/evals_gallery/"
      },
      {
        "label": "CoRL 2026 论文",
        "url": "https://openreview.net/forum?id=Bshs9HDDiu"
      },
      {
        "label": "CoRL 报告议程",
        "url": "https://www.corl.org/program/accepted-papers"
      }
    ]
  },
  {
    "id": "fast-wam",
    "name": "Fast-WAM",
    "title": "Fast-WAM: Do World Action Models Need Test-time Future Imagination?",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "双臂 Galaxea R1 Lite",
    "summary": "训练时用视频预测监督动作表征，部署时只编码当前帧并生成动作段，跳过迭代生成未来画面的计算。",
    "compute": "LIBERO 训练 2 万步，RoboTwin 和真机各 3 万步。仓库分别给出 LIBERO 8 卡、RoboTwin 64 卡配置。单张 RTX 5090D V2 上 10 步动作去噪需要 190 ms/块。",
    "tasks": "真机只评双臂叠毛巾，使用约 60 小时遥操作示范。",
    "result": "从图 4 读取，成功率约 75%、平均耗时约 152 秒，去掉视频监督后约 10%。原文未给试次，图中预训练 π0.5 的成功率最高。",
    "paper": "https://arxiv.org/abs/2603.16666",
    "project": "https://yuantianyuan01.github.io/FastWAM/",
    "code": "https://github.com/yuantianyuan01/FastWAM",
    "sources": [
      "扩展综述"
    ],
    "method": "Wan2.2-5B 连接 1B 动作专家，训练时的注意力掩码防止未来视觉信息泄漏至动作分支。部署只生成 32 步动作块。",
    "record": "已列入 NeurIPS 2026 录用日程。",
    "resources": [
      {
        "label": "NeurIPS 2026 录用日程",
        "url": "https://neurips.cc/virtual/2026/poster/149922"
      }
    ]
  },
  {
    "id": "lingbot-va",
    "name": "LingBot-VA",
    "title": "Causal World Modeling for Robot Control",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "双臂操作平台",
    "summary": "在同一因果序列中处理观测与动作，周期性写回真实图像，并让模型推理与机器人动作异步执行。",
    "compute": "5.3B 参数，使用约 1.6 万小时机器人数据，训练卡时未给出。仿真适配示例为 8 卡，RoboTwin 评估卸载 VAE 与文本编码后可用约 24 GB 显存。",
    "tasks": "双臂做早餐、拆包裹、插管、取螺钉和叠衣。每任务 50 条示范，实机适配 500 步，每策略每任务 20 次。",
    "result": "六项平均完整成功率 59.2%（π0.5 为 39.2%），平均进度 79.2%（对照 65.4%）。完整成功要求每个子步骤首次尝试通过。",
    "paper": "https://arxiv.org/abs/2601.21998",
    "project": "https://technology.robbyant.com/lingbot-va",
    "code": "https://github.com/Robbyant/lingbot-va",
    "sources": [
      "扩展综述"
    ],
    "method": "视频和动作专家共享注意力，真实观测周期性更新自回归上下文。作者分别为视频与动作使用 3 步和 10 步数值积分。",
    "record": "RSS 2026 会议版名为 CauVA，仓库沿用 LingBot-VA。",
    "resources": [
      {
        "label": "RSS 2026 · CauVA",
        "url": "https://www.roboticsproceedings.org/rss22/p016.html"
      }
    ]
  },
  {
    "id": "vera",
    "name": "VERA",
    "title": "Turning Video Models into Generalist Robot Policies",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "Franka Panda · Allegro 灵巧手",
    "summary": "用视频模型预测多视角未来，再由各本体的逆动力学模型把图像变化翻译成动作，执行后以新观测继续规划。",
    "compute": "14B 视频规划器用 8 张 H200 训练，小型消融使用单 H100。默认用 40 步 UniPC 生成未来，完整卡时和端到端时延未披露。",
    "tasks": "Panda 在未见场景中做取放、按键等语言任务。16 自由度 Allegro 手展示方块重定向。",
    "result": "Panda 基础指令协议中 VERA 为 60%，DreamZero 为 90%，π0.5 为 30%。灵巧手展示另属定性证据。",
    "paper": "https://arxiv.org/html/2605.27817v1",
    "project": "https://vera.csail.mit.edu/",
    "code": "",
    "sources": [
      "扩展综述"
    ],
    "method": "每种本体学习独立逆动力学模型，利用机器人动作与像素运动之间的关系，把通用视频计划映射成该硬件的动作序列。",
    "record": "",
    "resources": []
  },
  {
    "id": "unitas",
    "name": "UNITAS",
    "title": "UNITAS: A 3D-Native World Action Model for Embodied Manipulation",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "桌面双臂机器人",
    "summary": "以三维查询点统一描述夹爪和人手的运动，同时学习动作与场景运动。部署可以只预测控制命令，也可生成给定动作的场景响应。",
    "compute": "1.7B 模型用 64 张 BW1000_H DCU 训练 20 万步。单 RTX 5090 D 只生成动作需 55.77 ms/块，同时预测 1,024 个场景点和两类流时为 305.49 ms。",
    "tasks": "整理书架、装球并拉上拉链，每种方法每项各 20 次。",
    "result": "两项成功 18/20、16/20，平均 85%。π0.5 为 15/20、11/20，Fast-WAM 为 13/20、12/20。装球采用实验表 2 的统计，引言另列 65%。",
    "paper": "https://arxiv.org/abs/2610.12099",
    "project": "https://unitas-wam.github.io/",
    "code": "https://github.com/DexForce/UNITAS",
    "sources": [
      "扩展综述"
    ],
    "method": "三维点动力学专家预测物体场景流与夹爪动作流，动作专家另行生成控制命令。没有深度图时可利用相机射线估计点的位置。",
    "record": "",
    "resources": []
  },
  {
    "id": "find",
    "name": "FIND",
    "title": "Find Something You Can't Do: Agentic Real-World Reinforcement Learning for Self-Improving VLA Models",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "Franka Panda",
    "summary": "视觉语言模型挑选机器人最近做得较差的任务，并根据操作前后的画面判定成败。冻结 π0.5，只在线更新残差策略，正反任务互为下一回合准备场景。",
    "compute": "工作站配备 1 张 RTX 4090。基座先用 400 条示范微调，该阶段 GPU 小时未披露。一次 6 小时在线运行完成 456 回合，其中 30 回合需要人工复位。",
    "tasks": "方块进出碗、堆叠与拆开方块、开关抽屉、挂上与取下杯子，共四对可逆任务。",
    "result": "独立人工评测中，8 项真机任务的平均成功率由 55.0% 提高到 71.9%。",
    "paper": "https://arxiv.org/html/2609.32069v2",
    "project": "https://fangyzzz.github.io/FIND.github.io/",
    "code": "https://github.com/FangYzzz/FIND",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "作者真机总览",
        "url": "https://fangyzzz.github.io/FIND.github.io/static/videos/web/find-overview.mp4?v=web2"
      }
    ]
  },
  {
    "id": "bee",
    "name": "BEE",
    "title": "BEE: Intervention-Adaptive Real-World Reinforcement Learning with Vision-Language-Action Models",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "双臂操作平台",
    "summary": "用人工纠正的一致程度约束残差策略。不同操作者经常以相同方式纠正的动作维度受到更强约束，其余维度允许更多探索。",
    "compute": "1 张 RTX 4090D 同时执行在线学习和 π0.5 推理。基座每任务使用 200 至 900 条示范，前置训练耗时未单列。真机另有约 20 个纠正回合和 70 个在线回合。",
    "tasks": "双臂整理线缆并插手机充电器、挂起柔软零食袋、抓住布料对齐目标框。",
    "result": "三项真机分别为 100%、85%、90%，每项 3 轮、每轮 20 次。充电和布料两项评测精密接触阶段。论文的 91.2% 均值还计入一项仿真任务。",
    "paper": "https://arxiv.org/html/2609.27450v1",
    "project": "https://genie-universal-algorithm.github.io/BEE/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "lorn",
    "name": "LoRN",
    "title": "LoRN: Low-Rank Noise Steering for Generative Robot Policies",
    "year": 2026,
    "category": "仿真交互与策略后训练",
    "platform": "YAM",
    "summary": "冻结生成策略，用 SAC 学习低秩控制器，在初始噪声空间中选择更适合任务的轨迹。真机迁移使用 VLA 动作噪声，WAM 视频噪声实验在仿真中进行。",
    "compute": "Cosmos3-Edge 每次运行用 2 张 L40/L40S、约 36 至 64 小时。DreamZero 14B 用 2 卡约 20 小时，5B 用单卡约 20 至 27 小时。真机对应的仿真训练为单卡，耗时未披露。",
    "tasks": "把方块放入碗、把记号笔放入粉色碗、由左臂将方块交给右臂后放入蓝碗。",
    "result": "控制器均在配对仿真中训练和选择。三项真机任务各测 10 次，成功次数分别从 0、0、3 提高到 6、4、8。",
    "paper": "https://arxiv.org/html/2611.23628v1",
    "project": "",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "论文中的 YAM 轨迹图",
        "url": "https://arxiv.org/html/2611.23628v1/figures/yam_task_marker.png"
      }
    ]
  },
  {
    "id": "unimanip",
    "name": "UniManip",
    "title": "UniManip: Open-World Robotic Manipulation via Agentic Operational Graphs",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "睿尔曼 RM65 · 移动底盘",
    "summary": "用操作图记录物体和任务状态，调用感知、几何抓取、规划与逆运动学工具。每次操作后检查结果，从失败的步骤局部恢复。",
    "compute": "作者使用 RTX 4080、i9-13900K 和 32 GB 内存。目标任务无需示范或策略微调，依赖预训练感知、相机标定及机器人控制工具。",
    "tasks": "移动底盘到达备餐位置后，用 RM65 抓放香蕉和胡萝卜，再清理办公区的葡萄和瓶子。",
    "result": "四类物体各评测 20 回合，整回合成功率依次为 80%、80%、80%、75%。另报的 93% 放置率以成功抓取为前提。",
    "paper": "https://arxiv.org/html/2602.13086v2",
    "project": "https://henryhcliu.github.io/unimanip/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "RM65 移动操作序列",
        "url": "https://henryhcliu.github.io/unimanip/static/images/paper/mobile-manipulation.webp"
      }
    ]
  },
  {
    "id": "interactvla",
    "name": "InteractVLA",
    "title": "InteractVLA: Turning VLAs into Interactive Tools for Agentic Robotic Manipulation",
    "year": 2026,
    "category": "预测驱动的规划与动作选择",
    "platform": "Dexmal",
    "summary": "Agent 给出末端位姿和夹爪目标，经由输入梯度引导冻结 VLA 去噪，再把候选轨迹投影回相机画面供 Agent 检查和修改。",
    "compute": "真机基座先用 200 条示范微调 1 万步。单张 A100（80 GB）上，引导推理为 509.8 ms、峰值分配显存 16.90 GiB。无引导为 310.7 ms、11.80 GiB。计时针对模型微基准。",
    "tasks": "把四件物体放入篮中、扶正三个瓶子、将瓶中水倒进杯中并把瓶放回、把方块放入杯中。",
    "result": "补充材料的整任务诊断分别成功 25/30、19/30、20/30、28/30。主文另报按进度计算的任务分数。",
    "paper": "https://arxiv.org/html/2611.22584v1",
    "project": "https://lingwupro.github.io/InteractVLA/",
    "code": "https://github.com/LingwuPro/InteractVLA",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "官方补充材料与分项诊断",
        "url": "https://lingwupro.github.io/InteractVLA/supplementary-material.pdf"
      },
      {
        "label": "实机桌面整理",
        "url": "https://lingwupro.github.io/InteractVLA/real-world-tabletop-tidying.mp4"
      },
      {
        "label": "实机扶瓶",
        "url": "https://lingwupro.github.io/InteractVLA/real-world-upright-bottle.mp4"
      },
      {
        "label": "实机倒水",
        "url": "https://lingwupro.github.io/InteractVLA/real-world-water-pouring.mp4"
      }
    ]
  },
  {
    "id": "harness-vla",
    "name": "Harness VLA",
    "title": "Harness VLA: Steering Frozen VLAs into Reliable Manipulation Primitives via Memory-Guided Agents",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "双 Franka",
    "summary": "将抓取等接触阶段交给冻结的 π0.5，将移动和定位交给解析动作。Agent 利用任务记忆调整目标、重试和恢复。公开工程名为 RPent。",
    "compute": "调度阶段复用已训练的桌面清理策略。任务记忆探索和 Flash 任务卡仍需准备，真机 GPU、平均 API 费用及端到端时长未披露。",
    "tasks": "改换碗的收纳目标、按顺序搬盘子、按标记分碗、漏抓后恢复。Flash 另演示倒钢珠与擦盘收纳。",
    "result": "双 Franka 实验展示目标变更与抓取恢复的定性案例。论文未给出这些真机任务可比较的批量成功率。",
    "paper": "https://arxiv.org/html/2607.08448v5",
    "project": "https://harnessvla.github.io/",
    "code": "https://github.com/RLinf/RPent",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "双 Franka 执行录像",
        "url": "https://harnessvla.github.io/videos/introduction/real_world_video.mp4"
      }
    ]
  },
  {
    "id": "taco",
    "name": "TACO",
    "title": "Steering Vision-Language-Action Models as Anti-Exploration: A Test-Time Scaling Approach",
    "year": 2025,
    "category": "预测驱动的规划与动作选择",
    "platform": "双睿尔曼 RM75-6F",
    "summary": "用示范训练轻量伪计数器，在推理时从多条候选动作中选择更接近成功示范的轨迹。视觉语言 KV 缓存可在候选间共享。",
    "compute": "真机用 1 张 RTX 4090 部署，每次选自 30 个候选动作段，每段 20 步。每任务有 100 条示范。真机基座微调及伪计数器训练的 GPU 小时未披露。",
    "tasks": "接过书、把充电头放入抽屉并关门、整理纸团和笔、合上笔记本并收纳充电器、双臂举书。",
    "result": "五项真机任务平均成功率从 40% 提高到 56%。单项结果为 80%、40%、40%、55%、65%，各项试验分母未确认。",
    "paper": "https://arxiv.org/html/2512.02834v1",
    "project": "https://vla-anti-exploration.github.io/",
    "code": "https://github.com/breez3young/TACO",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "接书真机录像",
        "url": "https://vla-anti-exploration.github.io/static/video/base/Receive_Book-Pi0+TACO-suc.mp4"
      },
      {
        "label": "笔记本和充电器收纳录像",
        "url": "https://vla-anti-exploration.github.io/static/video/base/Laptop-Pi0+TACO-suc.mp4"
      }
    ]
  },
  {
    "id": "object-centric-residual-rl",
    "name": "Object-Centric Residual RL",
    "title": "Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement",
    "year": 2026,
    "category": "仿真交互与策略后训练",
    "platform": "Franka FR3",
    "summary": "残差策略只使用物体 6D 位姿、机器人本体状态和基座动作。在配对仿真中用 TD3 训练，再迁移到真实 FR3。",
    "compute": "残差网络为两层 MLP，前向约 0.06 ms，基座 VLA 约 140 ms。训练 GPU 和时长未披露。每任务另用 30 条遥操作示范分别适配真机和仿真基座。",
    "tasks": "抬方块、方块入碗、堆方块、关抽屉、扶正侧倒的杯子。",
    "result": "五项真机任务各评测 20 次，平均成功率从 42% 提高到 76%。迁移依赖对应的仿真场景与物体位姿跟踪。",
    "paper": "https://arxiv.org/html/2606.18953v1",
    "project": "https://www.microsoft.com/en-us/research/articles/object-centric-residual-rl/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "recovla",
    "name": "ReCoVLA",
    "title": "ReCoVLA: VLM-Guided Reward Compilation for Failure Recovery in Vision-Language-Action Policies",
    "year": 2026,
    "category": "仿真交互与策略后训练",
    "platform": "Fetch 移动操作平台",
    "summary": "视觉语言模型识别失败类型和恢复阶段，奖励编译器据此生成阶段奖励。在仿真中用 PPO 训练恢复专家，真机识别到相应故障后启动残差策略。",
    "compute": "基座每任务用 20 条仿真和 20 条真机示范微调 2 万步，batch 为 4。每个恢复专家另做 30 万步 PPO，GPU 型号、数量和时长未披露。",
    "tasks": "重新分拣放错位置的蔬菜、处理倒伏或掉落的饮料罐、补收工具箱中遗漏的线缆和盒子并关盖。",
    "result": "三项真机任务各测 20 次，恢复后的成功率为 60%、75%、50%，平均成功率由 26.7% 提高到 61.7%。项目页真机恢复视频为 5 至 10 倍速。",
    "paper": "https://arxiv.org/html/2606.09630v1",
    "project": "https://hhd000exe.github.io/recovla/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "论文中的失败与恢复对照",
        "url": "https://arxiv.org/html/2606.09630v1/figures/Experiment_recovery_examples_v5.png"
      }
    ]
  },
  {
    "id": "grace",
    "name": "GRACE",
    "title": "Empowering Precise Embodied Agents with Executable Analytic Concepts as Semantic-Physical Blueprints",
    "year": 2026,
    "category": "推理模型直接操作机器人",
    "platform": "睿尔曼 RM75 · D435",
    "summary": "用可执行的解析概念描述物体部件、抓取方向与关节约束，从而把视觉语言模型的计划转成机械臂可执行的几何动作。",
    "compute": "预印本部署工作站配备 RTX 4090、i9-14900K 和 64 GB 内存。离线还需微调 GroundingDINO、训练 PointTransformer，相关 GPU 小时未披露。",
    "tasks": "抓订书机、杯、桶、抽屉与微波炉把手。IJCAI 正式版的长任务包括依次收起四件物体并打开微波炉。",
    "result": "五类目标抓取率分别为 90%、80%、70%、100%、80%。试验分母未确认，正式版连续任务以定性案例展示。",
    "paper": "https://ijcai.org/proceedings/2026/44",
    "project": "",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "较早的预印本版本",
        "url": "https://arxiv.org/html/2510.07975v1"
      }
    ]
  },
  {
    "id": "radar",
    "name": "RADAR",
    "title": "RADAR: Closed-Loop Robotic Data Generation via Semantic Planning and Autonomous Causal Environment Reset",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "睿尔曼 RM65-B · D435i",
    "summary": "根据一条上下文示范执行目标，通过视觉问答检查成败，用有限状态机调度正向操作、逆向复位与数据保存。",
    "compute": "目标任务适配使用 1 条示范。系统仍需运行视觉语言模型、分割、跟踪和预训练执行器，GPU、显存、推理延迟均未披露。",
    "tasks": "真机折毛巾，以及在柠檬和方块等干扰物中选取草莓并抓放。项目视频亦包含仿真。",
    "result": "真机报告提供定性演示，未报告批量成功率，也未给出连续采集吞吐量。",
    "paper": "https://arxiv.org/html/2603.11811v1",
    "project": "https://radar-iros.netlify.app/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "harc",
    "name": "HARC",
    "title": "Efficient Real-World Online Reinforcement Learning for Robot Manipulation via Centralized Training and Critic Decomposition",
    "year": 2026,
    "category": "离线纠错与真机策略后训练",
    "platform": "自制六自由度机械臂 · Franka",
    "summary": "连续机械臂策略与离散夹爪策略共享集中式 critic，把任务完成和抓握质量分配给不同价值头，并允许人工短时接管。",
    "compute": "每任务先收集 20 条示范，使用 1 张 RTX 4090 做约 160 分钟真机在线训练。这个预算包含机器人交互时间，仍需人工复位和纠正。",
    "tasks": "网球抓放、香蕉抓放、锅具归位。项目页另增四足平台装瓶演示。Unitree G1 搬积木属于仿真。",
    "result": "论文三项真机任务各测 20 次，成功率为 80%、90%、55%，平均 75%（对照 40%）。项目页另报装瓶 85%，四项均值为 77.5%。",
    "paper": "https://arxiv.org/html/2608.09762v1",
    "project": "https://hil-harc.github.io/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "memoact",
    "name": "MemoAct",
    "title": "MemoAct: Atkinson-Shiffrin-Inspired Hierarchical Memory-Augmented Policy for Robotic Manipulation",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "睿尔曼 RM65-B · TEK 夹爪",
    "summary": "短期记忆保留近期观测，长期记忆压缩历史。扩散策略检索对当前动作有用的片段，区分画面相似但任务阶段不同的状态。",
    "compute": "顺序按键任务的效率实验用 50 条示范、batch 32，在 1 张 RTX 4090 上训练 6.24 小时（354.43M 参数）。DDIM 单次推理 0.42 秒。",
    "tasks": "依次按三个按钮、搬动方块再放回、按阶段抓放碗、交换玩偶位置。平台配全局和腕部深度相机。",
    "result": "四项真机任务各测 20 次，成功率为 70%、70%、95%、75%，平均 77.5%。上面的训练预算仅对应单个任务的效率实验。",
    "paper": "https://arxiv.org/html/2603.18494v2",
    "project": "https://tlf-tlf.github.io/MemoActPage/",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": [
      {
        "label": "作者计算效率对照",
        "url": "https://tlf-tlf.github.io/MemoActPage/img/efficiency.jpg"
      },
      {
        "label": "RM65-B 顺序按键",
        "url": "https://tlf-tlf.github.io/MemoActPage/video/ctbo_memoact_success_edit.mp4"
      },
      {
        "label": "RM65-B 抓放碗",
        "url": "https://tlf-tlf.github.io/MemoActPage/video/bowl_memoact_success.mp4"
      }
    ]
  },
  {
    "id": "resfit",
    "name": "ResFiT",
    "title": "Residual Off-Policy RL for Finetuning Behavior Cloning Policies",
    "year": 2025,
    "category": "离线纠错与真机策略后训练",
    "platform": "Dexmate Vega · 双臂五指手",
    "summary": "冻结能输出动作段的 ACT 基座，在每个动作步添加离策略 RL 残差。示范同时用于初始化基座和预热 critic。",
    "compute": "毛绒球和包裹任务的基座分别用约 1,000 和 900 条示范。RL 采集 134、343 回合，对应约 15、76 分钟机器人执行数据。GPU 与完整训练耗时未披露。",
    "tasks": "抓起小灰色毛绒球并放入容器，或由双臂抓起包裹并完成交接。",
    "result": "毛绒球抓放成功率由 14% 提高到 64%，包裹交接由 23% 提高到 64%。适合比较残差学习的真机交互需求。",
    "paper": "https://arxiv.org/html/2509.19301v1",
    "project": "https://residual-offpolicy-rl.github.io/",
    "code": "https://github.com/amazon-far/residual-offpolicy-rl",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "roboduo",
    "name": "RoboDuo",
    "title": "RoboDuo: Attempt, Check and Atomic Recovery through Code for Vision-Language-Action Models",
    "year": 2026,
    "category": "大模型规划与多机器人协作",
    "platform": "双 Piper",
    "summary": "先让完整任务 VLA 执行，失败后由 Agent 检查剩余目标，再通过代码组合原子操作完成恢复。",
    "compute": "LIBERO-Atomic 的原子 VLA 训练使用 8 张 A800，编码 Agent 和判别模型也做微调。真机另有两套微调的 X-VLA。",
    "tasks": "双 Piper 把四种水果放入篮中，在三种布局下各评测 10 次。",
    "result": "加入恢复后的整任务成功次数由 11/30 提高到 16/30。8 卡配置对应仿真原子策略训练，真机部署预算未据此确定。",
    "paper": "https://arxiv.org/html/2610.34108v1",
    "project": "",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  },
  {
    "id": "leanwam",
    "name": "LeanWAM",
    "title": "LeanWAM: Learning Latent World Action Models from Frozen Video Models",
    "year": 2026,
    "category": "视频预训练、合成数据与动作生成",
    "platform": "仿真 · LIBERO / RoboTwin",
    "summary": "将冻结视频生成器学到的预测表征蒸馏到 1.431B 参数的动作策略，降低部署时预测动作段的开销。",
    "compute": "LIBERO 两阶段训练共用 8 张 A100（80 GB），约 30.4 小时、243.5 GPU 小时，另有缓存开销。单 A100 的 JAX 动作段推理为 25.1 ms，PyTorch 为 63.1 ms。",
    "tasks": "论文评测限于仿真，包括 LIBERO、LIBERO-Plus 和 RoboTwin 2.0。尚无论文中的真机演示。",
    "result": "单卡 PyTorch 推理的进程显存测量最高为 4.58 GiB。这些结果提供部署效率参照，真机性能尚未评测。",
    "paper": "https://arxiv.org/html/2611.31740v1",
    "project": "",
    "code": "",
    "sources": [
      "低算力专题"
    ],
    "method": "",
    "record": "",
    "resources": []
  }
];
