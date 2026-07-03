const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageButtons = document.querySelectorAll("[data-language]");
const renderTargets = document.querySelectorAll("[data-render]");

const translations = {
  zh: {
    meta: {
      title: "郭梓耕 | 个人介绍",
      description: "郭梓耕的个人介绍网站：关于兴趣、学习路径、项目故事、技术探索和联系方式。",
    },
    brand: "郭梓耕",
    language: { label: "语言切换" },
    nav: {
      aria: "主导航",
      mobileAria: "移动端导航",
      homeLabel: "返回首页",
      menuOpen: "打开导航",
      menuClose: "关闭导航",
      about: "关于我",
      stories: "故事",
      workbench: "工作台",
      path: "路径",
      contact: "联系",
      cta: "联系我",
    },
    hero: {
      eyebrow: "你好，我是",
      title: "郭梓耕",
      copy:
        "一个正在把计算机科学、AI 工具和产品体验放在一起探索的人。我喜欢从真实问题出发，把零散材料整理成可以运行、可以解释、也能被别人使用的东西。",
      primary: "认识我的思考方式",
      secondary: "看看我做过什么",
      panelLabel: "当前状态",
      panelKicker: "Currently",
      panelTitle: "Computer Science · AI Applications · Full-Stack",
      panelCopy: "宁波诺丁汉大学计算机科学本科生，正在寻找软件开发、全栈开发和 AI 应用方向的实习机会。",
    },
    signals: {
      aria: "个人线索",
      items: [
        { label: "I study", title: "计算机科学", copy: "GPA 3.9 / 4.0，Ye Yaozhen 奖学金获得者。" },
        { label: "I build", title: "AI + Web 工具", copy: "关注知识库、学习助手、后端系统和可用的产品体验。" },
        { label: "I explore", title: "视觉与算法", copy: "从遗传算法到视觉推理，用实验理解抽象问题。" },
      ],
    },
    intro: {
      kicker: "About Me",
      title: "我不是只想展示经历，而是想让你看到我如何理解问题。",
      lead:
        "简历会告诉你我会 Java、Python、C++、Vue.js、Spring Boot 和 MySQL；这个网站更想告诉你：我为什么会对 AI 学习助手、算法优化、计算机视觉和工程系统感兴趣。",
      notes: [
        "我喜欢把看起来很大的问题拆成可以验证的小步骤。",
        "我会在技术实现之外关注使用者到底能不能顺手地完成目标。",
        "我正在寻找能把工程、数据和 AI 应用连接起来的真实团队环境。",
      ],
    },
    stories: {
      kicker: "Ways I Think",
      title: "三个更接近“我是谁”的切面",
      copy: "每一项都可以展开，里面不是履历清单，而是我如何把经历转化成判断和行动。",
      items: [
        {
          label: "01",
          title: "我对“学习工具”感兴趣，因为学习资料常常不是少，而是太散。",
          summary: "AI 学习助手项目让我开始思考：工具应该帮助人建立自己的知识秩序。",
          details: [
            "在诺丁汉大学计算机系学习助手项目里，我关注的不只是问答本身，而是课程资料、历史学习数据、题目库和个人知识库怎样互相连接。",
            "我希望 AI 不只是给一个答案，而是能帮助学生找到相关材料、复习薄弱点、沉淀自己的理解。这让我对知识库、检索、LLM 问答和学习体验产生了持续兴趣。",
          ],
        },
        {
          label: "02",
          title: "我喜欢算法，因为它迫使你把直觉变成可检验的过程。",
          summary: "遗传算法和视觉推理项目让我习惯用实验、对比和参数来讨论问题。",
          details: [
            "在线背包问题里的遗传算法项目，从编码方式、适应度函数到选择、交叉、变异，每一步都需要把“可能更好”变成能运行、能比较的流程。",
            "跨域抽象视觉推理项目则让我更关注规则标注、解释文本和泛化验证。它们都训练我不要停在想法上，而要把想法落到可复现的实验里。",
          ],
        },
        {
          label: "03",
          title: "我在工程项目里学到：系统价值来自长期可维护，而不是一次性做出来。",
          summary: "联想实习和网站维护经历让我更重视后端流程、数据归档和协作边界。",
          details: [
            "在联想 GSG E2E 部门，我参与内部供应商系统搭建与维护，并基于 Java / Spring Boot 实现数据日期追踪和定期归档功能。",
            "这类工作并不总是视觉上很炫，但它要求你理解业务流程、数据生命周期和团队协作方式。对我来说，这是把代码放进真实组织环境的一次重要训练。",
          ],
        },
      ],
    },
    workbench: {
      kicker: "Workbench",
      title: "我做过的东西，以及它们背后的问题",
      copy: "项目不再只是卡片摘要。你可以展开每一项，看到目标、我负责的部分和它带给我的理解。",
      expand: "展开",
      collapse: "收起",
      items: [
        {
          label: "AI Learning Support",
          title: "诺丁汉大学计算机系学习助手",
          summary: "把课程资料、题库、历史学习数据和个人知识库组织起来，让 AI 真正服务学习过程。",
          details: [
            "目标：支持课程答疑、复习建议、资料检索和知识点查询。",
            "重点：设计资料检索、题目库生成、个人知识库构建和 AI 问答流程。",
            "收获：我开始意识到 AI 应用的关键不是“有模型”，而是把数据、场景、反馈和使用习惯接起来。",
          ],
        },
        {
          label: "Algorithm",
          title: "遗传算法解决在线背包问题",
          summary: "从 0 搭建遗传算法框架，通过参数调优和结果对比提升解的质量。",
          details: [
            "目标：用遗传算法处理在线背包问题，比较不同参数对结果的影响。",
            "重点：实现编码、适应度函数、种群初始化、选择、交叉、变异和迭代更新。",
            "收获：算法项目让我更习惯记录假设、控制变量和解释实验结果，而不是只追求一次跑通。",
          ],
        },
        {
          label: "Research",
          title: "Emotionally Expressive 3D AI Agent",
          summary: "探索 AI 智能体如何通过表情和语调表达情感，让交互更自然。",
          details: [
            "目标：支持一个能够通过面部表情和语调表达情感的 3D AI Agent。",
            "重点：与团队协作探索多模态情感表达对交互体验的影响。",
            "收获：我开始从“功能是否存在”转向思考“功能如何被人感知”。",
          ],
        },
        {
          label: "Computer Vision",
          title: "叶子识别项目",
          summary: "基于 MTD、LBP、color model 和高斯模糊优化图像预处理与特征提取。",
          details: [
            "目标：提升叶片识别表现，理解不同图像特征对识别效果的影响。",
            "重点：围绕 MTD 与 LBP 进行特征方法实验，并优化预处理流程。",
            "收获：视觉项目让我看到数据质量、特征设计和模型效果之间的细微关系。",
          ],
        },
        {
          label: "Visual Reasoning",
          title: "跨域抽象视觉推理数据集与可泛化方法研究",
          summary: "构建 RAVEN-style 3×3 跨域抽象推理数据集，关注规则、解释和泛化。",
          details: [
            "目标：构建面向分布外场景的抽象视觉推理数据集和可泛化方法。",
            "重点：规则标注、解释文本生成、泛化验证和可解释性验证。",
            "进展：项目进行中，目标投稿 CVPR / ICCV / AAAI，后续扩展至 TPAMI / TIP。",
          ],
        },
      ],
    },
    path: {
      kicker: "Path",
      title: "我的学习路径不是一条直线",
      copy: "这些经历来自简历，但在这里它们被放回一个人的成长路径里。",
      items: [
        {
          label: "2023 - Now",
          title: "宁波诺丁汉大学 · 计算机科学",
          summary: "在课程和项目中建立计算机科学基础，同时把兴趣延展到 AI、视觉和工程系统。",
          details: ["GPA 3.9 / 4.0，Year 2 / Year 3。因学术表现获得 Ye Yaozhen 奖学金。"],
        },
        {
          label: "2025",
          title: "联想 GSG E2E 部门实习",
          summary: "把 Java / Spring Boot 放进真实业务流程里，处理供应商系统和数据归档。",
          details: ["这段经历让我更理解后端系统不是孤立代码，而是业务流程、数据规则和协作需求的组合。"],
        },
        {
          label: "2023",
          title: "地理信息系统实习",
          summary: "接触地理空间技术和数据研究，打开了我对数据应用场景的兴趣。",
          details: ["这段经历虽然早，但它让我第一次把技术研究和真实空间数据联系起来。"],
        },
        {
          label: "Service",
          title: "学生档案管理志愿者",
          summary: "整理和管理学生档案，提高数据可访问性和组织性。",
          details: ["这件事看似简单，但它和我后来对信息组织、知识库、资料检索的兴趣有很自然的连接。"],
        },
      ],
    },
    toolkit: {
      kicker: "Toolkit",
      title: "工具只是工具，真正重要的是我用它们解决什么。",
      items: [
        {
          title: "工程工具",
          copy: "Java、Python、C++、C、Vue.js、Spring Boot、RESTful API、MySQL、数据库设计、SQL 查询和数据归档。",
        },
        {
          title: "AI 与算法",
          copy: "遗传算法、SVM、KNN、随机森林、参数调优、实验对比、LLM、知识库和 AI 问答应用。",
        },
        {
          title: "视觉与研究",
          copy: "Color model、高斯模糊、MTD、LBP、图像预处理、特征提取、抽象视觉推理和论文阅读。",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "如果你想认识一个愿意把问题拆开、做成、再讲清楚的人，可以找我聊聊。",
      copy: "开放方向：软件开发、全栈开发、AI 应用、后端开发、数据处理和学习工具。",
    },
    footer: { copyright: "© 2026 郭梓耕", top: "Back to top" },
  },
  en: {
    meta: {
      title: "Zigeng Guo | Personal Introduction",
      description: "Zigeng Guo's personal introduction site: interests, learning path, project stories, technical exploration, and contact.",
    },
    brand: "Zigeng Guo",
    language: { label: "Language switcher" },
    nav: {
      aria: "Main navigation",
      mobileAria: "Mobile navigation",
      homeLabel: "Back to home",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      about: "About",
      stories: "Stories",
      workbench: "Workbench",
      path: "Path",
      contact: "Contact",
      cta: "Contact",
    },
    hero: {
      eyebrow: "Hi, I am",
      title: "Zigeng Guo",
      copy:
        "A computer science student exploring the intersection of AI tools, engineering, and product experience. I like starting from real problems and turning scattered material into things that run, explain themselves, and help other people.",
      primary: "How I Think",
      secondary: "What I Build",
      panelLabel: "Current status",
      panelKicker: "Currently",
      panelTitle: "Computer Science · AI Applications · Full-Stack",
      panelCopy: "Computer Science undergraduate at the University of Nottingham Ningbo China, looking for software development, full-stack, and AI application internships.",
    },
    signals: {
      aria: "Personal signals",
      items: [
        { label: "I study", title: "Computer Science", copy: "GPA 3.9 / 4.0 and Ye Yaozhen Scholarship recipient." },
        { label: "I build", title: "AI + Web Tools", copy: "Interested in knowledge bases, learning assistants, backend systems, and usable product experiences." },
        { label: "I explore", title: "Vision & Algorithms", copy: "From genetic algorithms to visual reasoning, I use experiments to understand abstract problems." },
      ],
    },
    intro: {
      kicker: "About Me",
      title: "I do not only want to show experience. I want you to see how I understand problems.",
      lead:
        "A resume can tell you I use Java, Python, C++, Vue.js, Spring Boot, and MySQL. This site is here to explain why AI learning assistants, algorithm optimization, computer vision, and engineering systems keep pulling my attention.",
      notes: [
        "I like breaking large problems into smaller steps that can be tested.",
        "Beyond implementation, I care whether people can actually complete their goals smoothly.",
        "I am looking for real team environments where engineering, data, and AI applications meet.",
      ],
    },
    stories: {
      kicker: "Ways I Think",
      title: "Three angles that say more about who I am",
      copy: "Every item expands. Instead of a resume list, each one explains how experience becomes judgment and action for me.",
      items: [
        {
          label: "01",
          title: "I care about learning tools because learning material is often not scarce; it is scattered.",
          summary: "The AI learning assistant project made me think about tools as a way to help people build their own knowledge order.",
          details: [
            "In the Computer Science Learning Assistant project at Nottingham, I cared not only about Q&A, but also how course materials, learning history, question banks, and personal knowledge bases could connect.",
            "I want AI to do more than produce an answer. It should help students find related materials, review weak points, and preserve their own understanding. That is why knowledge bases, retrieval, LLM Q&A, and learning experience interest me.",
          ],
        },
        {
          label: "02",
          title: "I like algorithms because they force intuition to become a testable process.",
          summary: "Genetic algorithms and visual reasoning trained me to discuss problems with experiments, comparisons, and parameters.",
          details: [
            "In the online knapsack genetic algorithm project, encoding, fitness functions, selection, crossover, and mutation all turned vague ideas into runnable, comparable procedures.",
            "The cross-domain visual reasoning project pushed me toward rule annotation, explanation text, and generalization checks. Both projects trained me to move ideas into reproducible experiments.",
          ],
        },
        {
          label: "03",
          title: "Engineering taught me that value comes from long-term maintainability, not only from making something once.",
          summary: "Lenovo and website maintenance work made me care about backend flows, data archiving, and collaboration boundaries.",
          details: [
            "At Lenovo's GSG E2E department, I contributed to an internal supplier system and implemented data date tracking and scheduled archiving with Java and Spring Boot.",
            "This kind of work is not always visually flashy, but it requires understanding business flows, data lifecycle, and team collaboration. For me, it was important practice in placing code inside real organizational needs.",
          ],
        },
      ],
    },
    workbench: {
      kicker: "Workbench",
      title: "Things I have built, and the questions behind them",
      copy: "Projects are no longer just summaries. Expand each one to see the goal, my role, and what it taught me.",
      expand: "Expand",
      collapse: "Collapse",
      items: [
        {
          label: "AI Learning Support",
          title: "Computer Science Learning Assistant for Nottingham",
          summary: "Organizing course materials, question banks, learning history, and personal knowledge bases so AI can support the learning process.",
          details: [
            "Goal: support course Q&A, revision suggestions, material retrieval, and concept lookup.",
            "Focus: design flows for course-material retrieval, question-bank generation, personal knowledge-base construction, and AI Q&A.",
            "Takeaway: AI applications are not just about having a model. They depend on connecting data, scenarios, feedback, and user habits.",
          ],
        },
        {
          label: "Algorithm",
          title: "Genetic Algorithm for the Online Knapsack Problem",
          summary: "Built a genetic algorithm framework from scratch and improved solution quality through parameter tuning and comparison.",
          details: [
            "Goal: use a genetic algorithm for the online knapsack problem and compare the effect of different parameters.",
            "Focus: implement encoding, fitness functions, population initialization, selection, crossover, mutation, and iterative updates.",
            "Takeaway: algorithm projects trained me to document assumptions, control variables, and explain results rather than only making code run once.",
          ],
        },
        {
          label: "Research",
          title: "Emotionally Expressive 3D AI Agent",
          summary: "Exploring how AI agents can express emotion through facial expressions and tone for more natural interaction.",
          details: [
            "Goal: support a 3D AI Agent capable of emotional expression through face and voice.",
            "Focus: collaborate with the team to explore the role of multimodal emotional expression in interaction experience.",
            "Takeaway: I started thinking beyond whether a feature exists and toward how it is perceived by people.",
          ],
        },
        {
          label: "Computer Vision",
          title: "Leaf Recognition Project",
          summary: "Optimized image preprocessing and feature extraction with MTD, LBP, color models, and Gaussian blur.",
          details: [
            "Goal: improve leaf recognition performance and understand how different visual features affect results.",
            "Focus: experiment with MTD and LBP feature methods and refine preprocessing workflows.",
            "Takeaway: vision projects showed me the subtle relationship between data quality, feature design, and model performance.",
          ],
        },
        {
          label: "Visual Reasoning",
          title: "Cross-Domain Abstract Visual Reasoning Dataset and Generalizable Methods",
          summary: "Building a RAVEN-style 3×3 cross-domain abstract reasoning dataset with rules, explanations, and generalization checks.",
          details: [
            "Goal: build a dataset and generalizable method for out-of-distribution abstract visual reasoning.",
            "Focus: rule annotation, explanation text generation, generalization validation, and interpretability checks.",
            "Status: in progress, targeting CVPR / ICCV / AAAI with future extensions toward TPAMI / TIP.",
          ],
        },
      ],
    },
    path: {
      kicker: "Path",
      title: "My learning path is not a straight line",
      copy: "These experiences come from my resume, but here they are placed back into the growth path of a person.",
      items: [
        {
          label: "2023 - Now",
          title: "University of Nottingham Ningbo China · Computer Science",
          summary: "Building a computer science foundation while extending my interests into AI, vision, and engineering systems.",
          details: ["GPA 3.9 / 4.0, Year 2 / Year 3. Awarded the Ye Yaozhen Scholarship for academic excellence."],
        },
        {
          label: "2025",
          title: "Lenovo GSG E2E Internship",
          summary: "Used Java and Spring Boot inside real business workflows involving supplier systems and data archiving.",
          details: ["This experience helped me see backend systems as combinations of business processes, data rules, and collaboration needs."],
        },
        {
          label: "2023",
          title: "GIS Internship",
          summary: "Gained exposure to geospatial technology and data research, opening my interest in applied data scenarios.",
          details: ["Although this was an early experience, it connected technical research with real spatial data for me."],
        },
        {
          label: "Service",
          title: "Student Archive Management Volunteer",
          summary: "Helped organize and manage student records to improve accessibility and structure.",
          details: ["This connects naturally with my later interest in information organization, knowledge bases, and material retrieval."],
        },
      ],
    },
    toolkit: {
      kicker: "Toolkit",
      title: "Tools are only tools. What matters is what I use them to solve.",
      items: [
        {
          title: "Engineering Tools",
          copy: "Java, Python, C++, C, Vue.js, Spring Boot, RESTful APIs, MySQL, database design, SQL queries, and data archiving.",
        },
        {
          title: "AI & Algorithms",
          copy: "Genetic algorithms, SVM, KNN, random forests, parameter tuning, experiment comparison, LLMs, knowledge bases, and AI Q&A applications.",
        },
        {
          title: "Vision & Research",
          copy: "Color models, Gaussian blur, MTD, LBP, image preprocessing, feature extraction, abstract visual reasoning, and paper reading.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "If you want to meet someone who likes taking problems apart, building them, and explaining them clearly, let's talk.",
      copy: "Open directions: software development, full-stack development, AI applications, backend development, data processing, and learning tools.",
    },
    footer: { copyright: "© 2026 Zigeng Guo", top: "Back to top" },
  },
};

const getNestedValue = (source, keyPath) =>
  keyPath.split(".").reduce((value, key) => value?.[key], source);

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const renderSignals = (target, dictionary) => {
  target.replaceChildren(
    ...dictionary.signals.items.map((item) => {
      const article = createElement("article");
      article.append(
        createElement("span", "", item.label),
        createElement("strong", "", item.title),
        createElement("p", "", item.copy),
      );
      return article;
    }),
  );
};

const renderNotes = (target, dictionary) => {
  target.replaceChildren(
    ...dictionary.intro.notes.map((note) => {
      const item = createElement("p", "note-pill", note);
      return item;
    }),
  );
};

const renderExpandable = (target, items, options = {}) => {
  target.replaceChildren(
    ...items.map((item, index) => {
      const details = createElement("details", options.compact ? "expand-card compact-card" : "expand-card");
      if (index === 0 && options.openFirst) details.open = true;

      const summary = createElement("summary");
      const marker = createElement("span", "expand-marker", item.label);
      const text = createElement("span", "expand-title");
      text.append(createElement("strong", "", item.title), createElement("small", "", item.summary));
      const icon = createElement("span", "expand-icon", "+");
      summary.append(marker, text, icon);

      const content = createElement("div", "expand-content");
      item.details.forEach((detail) => content.append(createElement("p", "", detail)));
      details.append(summary, content);
      return details;
    }),
  );
};

const renderToolkit = (target, dictionary) => {
  target.replaceChildren(
    ...dictionary.toolkit.items.map((item) => {
      const article = createElement("article", "toolkit-card");
      article.append(createElement("h3", "", item.title), createElement("p", "", item.copy));
      return article;
    }),
  );
};

const renderDynamicSections = (dictionary) => {
  renderTargets.forEach((target) => {
    const type = target.dataset.render;
    if (type === "signals") renderSignals(target, dictionary);
    if (type === "notes") renderNotes(target, dictionary);
    if (type === "stories") renderExpandable(target, dictionary.stories.items, { openFirst: true });
    if (type === "workbench") renderExpandable(target, dictionary.workbench.items, { openFirst: true });
    if (type === "path") renderExpandable(target, dictionary.path.items, { compact: true });
    if (type === "toolkit") renderToolkit(target, dictionary);
  });
};

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.zh;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.meta.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((binding) => {
      const [attribute, key] = binding.split(":");
      const value = getNestedValue(dictionary, key);
      if (attribute && value) element.setAttribute(attribute, value);
    });
  });

  renderDynamicSections(dictionary);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", language);
};

const getCurrentLanguage = () => {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage && translations[savedLanguage]) return savedLanguage;
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
applyLanguage(getCurrentLanguage());
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  const dictionary = translations[getCurrentLanguage()] ?? translations.zh;
  menuButton.setAttribute("aria-label", isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen);
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    const dictionary = translations[getCurrentLanguage()] ?? translations.zh;
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-label", dictionary.nav.menuOpen);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});
