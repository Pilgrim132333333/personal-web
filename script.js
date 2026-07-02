const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageButtons = document.querySelectorAll("[data-language]");

const translations = {
  zh: {
    meta: {
      title: "郭梓耕 | AI & 全栈开发",
      description: "郭梓耕的个人展示网站，聚焦计算机科学、AI 应用、全栈开发、算法优化与计算机视觉项目。",
    },
    brand: "郭梓耕",
    language: {
      label: "语言切换",
    },
    nav: {
      aria: "主导航",
      mobileAria: "移动端导航",
      homeLabel: "返回首页",
      menuOpen: "打开导航",
      menuClose: "关闭导航",
      overview: "概览",
      experience: "经历",
      projects: "项目",
      skills: "技能",
      contact: "联系",
      cta: "联系我",
    },
    hero: {
      eyebrow: "Computer Science · AI Applications · Full-Stack",
      name: "郭梓耕",
      copy:
        "宁波诺丁汉大学计算机科学本科生，面向软件开发、全栈开发与 AI 应用方向实习。熟悉 Java、Python、C++、Vue.js、Spring Boot 与 MySQL，并拥有网站开发、算法优化、AI 学习助手和计算机视觉项目经验。",
      primary: "查看项目",
      secondary: "查看经历",
      panelLabel: "求职目标",
      panelKicker: "目标方向",
      panelTitle: "软件开发 / 全栈开发 / AI 应用实习",
      panelCopy: "希望在真实工程团队中参与后端开发、数据处理和 AI 工具落地。",
    },
    profile: {
      aria: "个人摘要",
      universityLabel: "University",
      university: "宁波诺丁汉大学",
      universityMeta: "计算机科学 · 2023.09 - 至今",
      gpaLabel: "GPA",
      gpa: "3.9 / 4.0",
      gpaMeta: "Ye Yaozhen 奖学金获得者",
      focusLabel: "Focus",
      focus: "AI + Web Engineering",
      focusMeta: "算法、知识库、视觉推理、全栈开发",
    },
    about: {
      kicker: "Profile",
      title: "把算法能力、工程实现和 AI 应用意识放到同一个作品集中。",
      copyOne:
        "我具备基础数据结构、面向对象编程与算法实现能力，能够使用 Java / Spring Boot 搭建后端功能，用 Vue.js 参与页面维护与功能迭代，并理解 RESTful 接口、数据库设计、SQL 查询与数据归档场景。",
      copyTwo:
        "在 AI 与计算机视觉方向，我接触过遗传算法、SVM、KNN、随机森林、图像预处理、MTD、LBP、抽象视觉推理数据集，以及面向学习场景的 LLM 知识库问答流程。",
    },
    experience: {
      kicker: "Experience",
      title: "实习与研究经历",
      lenovo: {
        date: "2025.07 - 2025.09",
        title: "联想实习生 · GSG E2E 部门",
        meta: "联想天津分部",
        itemOne: "参与内部供应商系统搭建与维护，支持供应链相关业务流程信息化。",
        itemTwo: "基于 Java / Spring Boot 实现数据日期追踪与定期归档功能。",
      },
      fullstack: {
        date: "校内项目",
        title: "全栈开发实习生",
        meta: "大学官方网站开发与维护",
        itemOne: "参与官方网站页面开发、功能更新与日常维护。",
        itemTwo: "在前后端协作场景中积累页面迭代与工程交付经验。",
      },
      gis: {
        date: "2023.07 - 2023.09",
        title: "地理信息系统实习生",
        meta: "天津市滨海新区先进研究院",
        itemOne: "在地理信息研究部门参与技术研究任务。",
        itemTwo: "接触地理空间技术与数据研究方向。",
      },
    },
    projects: {
      kicker: "Selected Projects",
      title: "项目经历",
      assistant: {
        tagOne: "AI 学习支持",
        tagTwo: "知识库",
        title: "诺丁汉大学计算机系学习助手",
        copy:
          "整合学生过往学习数据与课程资料，设计课程资料检索、题目库生成、个人知识库构建与 AI 问答流程，支持课程答疑、复习建议和知识点查询。",
      },
      ga: {
        tagOne: "算法优化",
        tagTwo: "GA",
        title: "遗传算法解决在线背包问题",
        copy:
          "从 0 搭建遗传算法框架，设计编码、适应度函数、选择、交叉和变异流程，并围绕在线背包问题进行参数调优与结果对比。",
      },
      agent: {
        tagOne: "Research",
        tagTwo: "3D AI Agent",
        title: "Emotionally Expressive 3D AI Agent",
        copy:
          "作为研究助手参与开发能够通过面部表情和语调表达情感的 AI 智能体，探索多模态情感表达对交互体验的支持。",
      },
      leaf: {
        tagOne: "计算机视觉",
        tagTwo: "MTD / LBP",
        title: "叶子识别项目",
        copy:
          "基于 MTD 与 LBP 特征方法优化图像预处理流程，提升叶片识别表现，并结合 color model、高斯模糊等方法进行特征提取。",
      },
      reasoning: {
        tagOne: "视觉推理",
        tagTwo: "进行中",
        title: "跨域抽象视觉推理数据集与可泛化方法研究",
        copy:
          "构建 RAVEN-style 3×3 跨域抽象推理数据集，设计规则标注、解释文本生成、泛化与可解释性验证机制，目标投稿 CVPR / ICCV / AAAI，并后续扩展至 TPAMI / TIP。",
      },
    },
    skills: {
      kicker: "Capabilities",
      title: "技术栈与能力标签",
      tagsAria: "技能标签",
      engineering: {
        title: "工程开发",
        copy: "Java、Python、C++、C、Vue.js、Spring Boot、RESTful 接口、MySQL、数据库设计、SQL 查询、数据组织与归档。",
      },
      ai: {
        title: "算法与 AI",
        copy: "遗传算法、SVM、KNN、随机森林、参数调优、实验对比、LLM、知识库、AI 问答应用、数学建模基础。",
      },
      vision: {
        title: "视觉与研究",
        copy: "Color model、高斯模糊、MTD、LBP、图像预处理、特征提取、抽象视觉推理、论文阅读与可解释性验证。",
      },
    },
    education: {
      kicker: "Education & Service",
      title: "教育背景与志愿经历",
      university: {
        title: "宁波诺丁汉大学",
        meta: "计算机科学 · 2023.09 - 至今",
        copy: "Year 2 / Year 3，GPA 3.9 / 4.0。因学术表现优秀获得 Ye Yaozhen 奖学金。",
      },
      volunteer: {
        title: "大学生学生档案管理志愿者",
        copy: "参与整理和管理学生档案，提高档案数据的可访问性和组织性。",
      },
      language: {
        title: "语言与软技能",
        copy: "中文、英语；团队沟通、问题解决、自学能力。语言成绩：总分 5.0，小分 5.0 / 5.0 / 4.5 / 4.5。",
      },
    },
    contact: {
      kicker: "Contact",
      title: "欢迎联系我交流实习、项目或 AI 工具落地机会。",
      copy: "当前求职方向：软件开发、全栈开发、AI 应用、后端开发、数据处理。",
    },
    footer: {
      copyright: "© 2026 郭梓耕",
      top: "Back to top",
    },
  },
  en: {
    meta: {
      title: "Zigeng Guo | AI & Full-Stack Developer",
      description:
        "Zigeng Guo's personal portfolio, focused on computer science, AI applications, full-stack development, algorithm optimization, and computer vision projects.",
    },
    brand: "Zigeng Guo",
    language: {
      label: "Language switcher",
    },
    nav: {
      aria: "Main navigation",
      mobileAria: "Mobile navigation",
      homeLabel: "Back to home",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      overview: "Overview",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      cta: "Contact",
    },
    hero: {
      eyebrow: "Computer Science · AI Applications · Full-Stack",
      name: "Zigeng Guo",
      copy:
        "Computer Science undergraduate at the University of Nottingham Ningbo China, seeking internships in software development, full-stack development, or AI applications. Skilled in Java, Python, C++, Vue.js, Spring Boot, and MySQL, with project experience across web development, algorithm optimization, AI learning assistants, and computer vision.",
      primary: "View Projects",
      secondary: "View Experience",
      panelLabel: "Career objective",
      panelKicker: "Target Roles",
      panelTitle: "Software Development / Full-Stack / AI Application Internships",
      panelCopy: "Looking to contribute to backend development, data processing, and practical AI tool implementation in real engineering teams.",
    },
    profile: {
      aria: "Personal summary",
      universityLabel: "University",
      university: "University of Nottingham Ningbo China",
      universityMeta: "Computer Science · Sep 2023 - Present",
      gpaLabel: "GPA",
      gpa: "3.9 / 4.0",
      gpaMeta: "Ye Yaozhen Scholarship recipient",
      focusLabel: "Focus",
      focus: "AI + Web Engineering",
      focusMeta: "Algorithms, knowledge bases, visual reasoning, full-stack development",
    },
    about: {
      kicker: "Profile",
      title: "Combining algorithms, engineering execution, and AI application thinking in one portfolio.",
      copyOne:
        "I have a foundation in data structures, object-oriented programming, and algorithm implementation. I can build backend features with Java and Spring Boot, contribute to page maintenance and feature iteration with Vue.js, and understand RESTful APIs, database design, SQL queries, and data archiving scenarios.",
      copyTwo:
        "In AI and computer vision, I have worked with genetic algorithms, SVM, KNN, random forests, image preprocessing, MTD, LBP, abstract visual reasoning datasets, and LLM knowledge-base question-answering flows for learning scenarios.",
    },
    experience: {
      kicker: "Experience",
      title: "Internship & Research Experience",
      lenovo: {
        date: "Jul 2025 - Sep 2025",
        title: "Lenovo Intern · GSG E2E Department",
        meta: "Lenovo Tianjin Branch",
        itemOne: "Contributed to the development and maintenance of an internal supplier system supporting supply-chain business workflows.",
        itemTwo: "Implemented data date tracking and scheduled archiving features with Java and Spring Boot.",
      },
      fullstack: {
        date: "Campus Project",
        title: "Full-Stack Development Intern",
        meta: "University official website development and maintenance",
        itemOne: "Contributed to official website page development, feature updates, and daily maintenance.",
        itemTwo: "Built experience in page iteration and engineering delivery within frontend-backend collaboration.",
      },
      gis: {
        date: "Jul 2023 - Sep 2023",
        title: "GIS Intern",
        meta: "Tianjin Binhai New Area Advanced Research Institute",
        itemOne: "Participated in technical research tasks within the geographic information research department.",
        itemTwo: "Gained exposure to geospatial technology and data research.",
      },
    },
    projects: {
      kicker: "Selected Projects",
      title: "Project Experience",
      assistant: {
        tagOne: "AI Learning Support",
        tagTwo: "Knowledge Base",
        title: "Computer Science Learning Assistant for Nottingham",
        copy:
          "Integrated past student learning data and course materials, designing course-material retrieval, question-bank generation, personal knowledge-base construction, and AI Q&A flows for course support, revision suggestions, and concept lookup.",
      },
      ga: {
        tagOne: "Algorithm Optimization",
        tagTwo: "GA",
        title: "Genetic Algorithm for the Online Knapsack Problem",
        copy:
          "Built a genetic algorithm framework from scratch, including encoding, fitness functions, selection, crossover, mutation, population initialization, fitness evaluation, iterative updates, and parameter comparison for improved solution quality.",
      },
      agent: {
        tagOne: "Research",
        tagTwo: "3D AI Agent",
        title: "Emotionally Expressive 3D AI Agent",
        copy:
          "Supported the development of an AI agent capable of expressing emotion through facial expressions and tone, exploring how multimodal emotional expression can improve 3D AI agent interaction.",
      },
      leaf: {
        tagOne: "Computer Vision",
        tagTwo: "MTD / LBP",
        title: "Leaf Recognition Project",
        copy:
          "Optimized image preprocessing for leaf recognition using MTD and LBP feature methods, combining color models, Gaussian blur, and feature extraction to improve recognition performance.",
      },
      reasoning: {
        tagOne: "Visual Reasoning",
        tagTwo: "In Progress",
        title: "Cross-Domain Abstract Visual Reasoning Dataset and Generalizable Methods",
        copy:
          "Building a RAVEN-style 3×3 cross-domain abstract reasoning dataset with rule annotation, explanation text generation, generalization checks, and interpretability validation. Target venues include CVPR, ICCV, and AAAI, with future extensions toward TPAMI and TIP.",
      },
    },
    skills: {
      kicker: "Capabilities",
      title: "Technical Stack & Skill Tags",
      tagsAria: "Skill tags",
      engineering: {
        title: "Engineering Development",
        copy: "Java, Python, C++, C, Vue.js, Spring Boot, RESTful APIs, MySQL, database design, SQL queries, data organization, and archiving.",
      },
      ai: {
        title: "Algorithms & AI",
        copy: "Genetic algorithms, SVM, KNN, random forests, parameter tuning, experiment comparison, LLMs, knowledge bases, AI Q&A applications, and mathematical modeling foundations.",
      },
      vision: {
        title: "Vision & Research",
        copy: "Color models, Gaussian blur, MTD, LBP, image preprocessing, feature extraction, abstract visual reasoning, paper reading, and interpretability validation.",
      },
    },
    education: {
      kicker: "Education & Service",
      title: "Education & Volunteer Experience",
      university: {
        title: "University of Nottingham Ningbo China",
        meta: "Computer Science · Sep 2023 - Present",
        copy: "Year 2 / Year 3, GPA 3.9 / 4.0. Awarded the Ye Yaozhen Scholarship for academic excellence.",
      },
      volunteer: {
        title: "Student Archive Management Volunteer",
        copy: "Helped organize and manage student records, improving accessibility and structure of archive data.",
      },
      language: {
        title: "Languages & Soft Skills",
        copy: "Chinese and English; team communication, problem solving, and self-learning. Language score: overall 5.0, component scores 5.0 / 5.0 / 4.5 / 4.5.",
      },
    },
    contact: {
      kicker: "Contact",
      title: "Open to internships, project collaboration, and practical AI implementation opportunities.",
      copy: "Current directions: software development, full-stack development, AI applications, backend development, and data processing.",
    },
    footer: {
      copyright: "© 2026 Zigeng Guo",
      top: "Back to top",
    },
  },
};

const getNestedValue = (source, keyPath) =>
  keyPath.split(".").reduce((value, key) => value?.[key], source);

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.zh;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.meta.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getNestedValue(dictionary, element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((binding) => {
      const [attribute, key] = binding.split(":");
      const value = getNestedValue(dictionary, key);
      if (attribute && value) {
        element.setAttribute(attribute, value);
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", language);
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
applyLanguage(getInitialLanguage());
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  const language = localStorage.getItem("portfolio-language") || getInitialLanguage();
  menuButton.setAttribute(
    "aria-label",
    isOpen ? translations[language].nav.menuClose : translations[language].nav.menuOpen,
  );
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    const language = localStorage.getItem("portfolio-language") || getInitialLanguage();
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-label", translations[language].nav.menuOpen);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});
