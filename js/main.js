// Portfolio Main JavaScript
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("=== Portfolio JS Starting ===");

  // Set current year
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render all dynamic content
  // renderExperienceSection();
  renderSkillsSection();
  renderCertificatesSection();

  // Initialize other features
  setupHeader();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollAnimations();
  setupContactForm();
  setupProjectGallery();

  // Initialize Lucide icons last
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
    console.log("Lucide icons initialized");
  }

  console.log("=== Portfolio JS Complete ===");
});


// ==================== EXPERIENCE ====================
function renderExperienceSection() {
  console.log("Rendering experience...");

  var experiences = [
    {
      role: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading data science initiatives and building ML models for predictive analytics. Managed a team of 5 data scientists and improved model accuracy by 25%.",
      achievements: [
        "Developed customer segmentation model reducing churn by 30%",
        "Implemented automated ML pipeline saving 40 hours/week",
        "Mentored junior data scientists and conducted workshops",
      ],
    },
    {
      role: "Data Scientist",
      company: "Analytics Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Built and deployed machine learning models for various business applications including recommendation systems and fraud detection.",
      achievements: [
        "Created recommendation engine increasing sales by 18%",
        "Developed fraud detection system saving $2M annually",
        "Optimized data processing pipeline reducing costs by 35%",
      ],
    },
    {
      role: "Junior Data Analyst",
      company: "DataCorp Analytics",
      period: "2018 - 2020",
      description:
        "Performed statistical analysis and created data visualizations to support business decision-making processes.",
      achievements: [
        "Automated reporting dashboards using Python and Tableau",
        "Conducted A/B testing for marketing campaigns",
        "Collaborated with cross-functional teams on data projects",
      ],
    },
  ];

  var container = document.getElementById("experience-timeline");
  if (!container) {
    console.error("experience-timeline not found!");
    return;
  }

  var html = "";
  for (var i = 0; i < experiences.length; i++) {
    var exp = experiences[i];
    var achievementsHtml = "";
    for (var j = 0; j < exp.achievements.length; j++) {
      achievementsHtml +=
        '<li class="flex items-start gap-2 text-stone-300">' +
        '<span class="text-amber-500 mt-1">▹</span>' +
        "<span>" +
        exp.achievements[j] +
        "</span>" +
        "</li>";
    }

    var timelineLine =
      i !== experiences.length - 1
        ? '<div class="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-amber-700 to-transparent"></div>'
        : "";

    html +=
      '<div class="animate-on-scroll relative mb-12">' +
      timelineLine +
      '<div class="relative group">' +
      '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
      '<div class="relative bg-stone-800/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300">' +
      '<div class="flex items-start gap-4">' +
      '<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg flex items-center justify-center">' +
      '<i data-lucide="briefcase" class="w-6 h-6 text-white"></i>' +
      "</div>" +
      '<div class="flex-grow">' +
      '<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">' +
      '<h3 class="text-2xl font-semibold text-amber-100">' +
      exp.role +
      "</h3>" +
      '<div class="flex items-center gap-2 text-stone-400 mt-2 md:mt-0">' +
      '<i data-lucide="calendar" class="w-4 h-4"></i>' +
      "<span>" +
      exp.period +
      "</span>" +
      "</div>" +
      "</div>" +
      '<p class="text-xl text-amber-400 mb-3">' +
      exp.company +
      "</p>" +
      '<p class="text-stone-300 mb-4">' +
      exp.description +
      "</p>" +
      '<ul class="space-y-2">' +
      achievementsHtml +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  container.innerHTML = html;
  console.log("Experience rendered: " + experiences.length);
}

// ==================== SKILLS ====================
function renderSkillsSection() {
  console.log("Rendering skills...");

  var technicalCategories = [
    {
      category: "Programming Languages",
      icon: "code-2",
      skills: ["Python", "C++", "C#", "JavaScript", "Java"],
    },
    {
      category: "AI/ML & Data Science",
      icon: "brain",
      skills: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      category: "Libraries & Frameworks",
      icon: "layers",
      skills: [
        "Pandas",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "Scikit-learn",
        "XGBoost",
        "React",
        "Flask",
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "wrench",
      skills: [
        "Git/GitHub",
        "Microsoft 365",
        "VS Code",
        "Docker",
        // "Kubernetes",
      ],
    },
    {
      category: "Software Development Practices",
      icon: "settings",
      skills: [
        "UML & ERD Diagramming",
        "Clean Code Principles",
        "Design Patterns",
        "Software Architecture Patterns",
        "Database Schema Design",
      ],
    },
  ];

  var personalCategories = [
    {
      category: "Soft Skills",
      icon: "users",
      skills: [
        "Teamwork",
        "Critical Thinking",
        "Cultural Awareness",
        "Presentation Skills",
      ],
    },
    {
      category: "Other Skills",
      icon: "sparkles",
      skills: ["Multimedia & Content Creation", "Technical Writing"],
    },
  ];

  var container = document.getElementById("skills-grid");
  if (!container) {
    console.error("skills-grid not found!");
    return;
  }

  // Raw HTML icons for skills that need img/svg markup
  var skillIconHtml = {
    "Python": '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" class="skill-tag-icon" alt="Python" />',
    "Flask": '<svg class="skill-tag-icon" viewBox="0 0 128 128"><path fill="#cd3e3eff" d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01-6.49-7.92-11.49-17.1-14.9-26.74-2.07-6.27-2.77-12.99-5.44-19.02-2.78-4.38.48-9.16 5.27-10.55 2.13-.41 5.89-2.43 1.36-.98-4.06 2.98-4.45-2.71-.29-3.07 2.84-.38 3.89-2.7 2.92-4.8-3.05-1.99 7.4-4.18 2.14-7.15-5.48-5.91 7.66-7.05 4.42-.33-.77 5.16 9.18-.95 6.87 5.01 2.35 2.86 8.8.65 8.63 4.67 3.42.24 4.6 3.11 7.8 3.33 3.33 1.5 9.36 2.69 10.49 6.44-3.3 2.61-10.95-5.4-11.31 1.84 1 10.69.74 21.7 4.65 31.88 1.85 6.16 6.33 11.01 10.38 15.81 3.88 4.7 9.12 8.01 14.48 10.8 4.69 2.21 9.75 3.68 14.87 4.6 2.07-1.59 5.74-7.48 8.97-5 .16 2.8-6.42 5.84-.31 5.54 3.59-1.08 6.08 2.77 9.04-.71 2.72 3.23 11.32-2.06 9.38 4.53-2.62 1.69-6.44.67-9.07 3-4.33-2.16-7.77 1.93-12.56 1.42-5.32.95-10.73 1.34-16.13 1.34-8.85-.7-17.89-.99-26.3-4.07-4.74-1.38-9.37-4.08-13.53-6.78z"/></svg>',
  };

  // Devicon CSS class mapping for skill icons
  var skillIconMap = {
    // Programming Languages
    "C++": "devicon-cplusplus-plain colored",
    "C#": "devicon-csharp-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "Java": "devicon-java-plain colored",
    // AI/ML & Data Science
    // "Deep Learning": "devicon-pytorch-plain colored",
    // "Natural Language Processing": "devicon-python-plain colored",
    // "Computer Vision": "devicon-opencv-plain colored",
    // Libraries & Frameworks
    "Pandas": "devicon-pandas-plain colored",
    "TensorFlow": "devicon-tensorflow-original colored",
    "PyTorch": "devicon-pytorch-plain colored",
    "OpenCV": "devicon-opencv-plain colored",
    "Scikit-learn": "devicon-scikitlearn-plain colored",
    "XGBoost": "devicon-python-plain colored",
    "React": "devicon-react-original colored",
    // Tools & Platforms
    "Git/GitHub": "devicon-github-original",
    "Microsoft 365": "devicon-windows11-original colored",
    "VS Code": "devicon-vscode-plain colored",
    "Docker": "devicon-docker-plain colored",
    // "Kubernetes": "devicon-kubernetes-plain colored",
  };

  // Helper to render a skill card
  function renderCard(cat) {
    var tagsHtml = "";
    for (var j = 0; j < cat.skills.length; j++) {
      var skillName = cat.skills[j];
      var iconHtml = "";
      if (skillIconHtml[skillName]) {
        iconHtml = skillIconHtml[skillName];
      } else if (skillIconMap[skillName]) {
        iconHtml = '<i class="' + skillIconMap[skillName] + ' skill-tag-icon"></i>';
      }
      tagsHtml += '<span class="skill-tag">' + iconHtml + skillName + "</span>";
    }
    return (
      '<div class="animate-on-scroll relative group">' +
      '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
      '<div class="relative bg-stone-800/70 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300">' +
      '<div class="flex items-center gap-3 mb-5">' +
      '<div class="skill-icon-wrap"><i data-lucide="' +
      cat.icon +
      '" class="w-5 h-5 text-amber-400"></i></div>' +
      '<h3 class="text-xl font-semibold text-amber-100">' +
      cat.category +
      "</h3>" +
      "</div>" +
      '<div class="flex flex-wrap gap-2">' +
      tagsHtml +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  // Render technical skills
  var html = "";
  for (var i = 0; i < technicalCategories.length; i++) {
    html += renderCard(technicalCategories[i]);
  }

  // Divider between technical and personal
  html +=
    '<div class="skills-divider col-span-full">' +
    '<div class="skills-divider-line"></div>' +
    '<span class="skills-divider-label">Personal & Other</span>' +
    '<div class="skills-divider-line"></div>' +
    "</div>";

  // Render personal skills
  for (var i = 0; i < personalCategories.length; i++) {
    html += renderCard(personalCategories[i]);
  }

  container.innerHTML = html;

  // Re-initialize Lucide icons for the new cards
  if (typeof lucide !== "undefined") lucide.createIcons();

  console.log(
    "Skills rendered: " +
      (technicalCategories.length + personalCategories.length),
  );
}

// ==================== CERTIFICATES ====================
function renderCertificatesSection() {
  console.log("Rendering certificates...");

  var providers = [
    {
      name: "ITIDA",
      logo: "images/ititda.jpeg",
      certificates: [
        {
          title: "InnovEgypt - TIEC - ITIDA",
          description:
            "InnovEgypt program certificate by TIEC and ITIDA — innovation and entrepreneurship training program.",
          image:
            "images/certificates/ITIDA/InnovEgypt - Tiec - ITIDA Certificate.png",
        },
        {
          title: "ITIDA - GIGs | Freelance Training Program",
          description:
            "Freelance Training Program certificate by ITIDA and eYouth",
          image:
            "images/certificates/ITIDA/ITITDA + GIGS.jpg",
        },
      ],
    },
    {
      name: "DataCamp",
      logo: "images/datacamp.jpeg",
      certificates: [
        {
          title: "Python Data Associate",
          description:
            "DataCamp certified Python Data Associate — demonstrating proficiency in data manipulation, analysis, and visualization with Python.",
          image: "images/certificates/DataCamp/Python Data Associate.png",
        },
      ],
    },
    {
      name: "HackerRank",
      logo: "images/hackerrank.svg",
      certificates: [
        {
          title: "Python (Basic) Certificate",
          description:
            "HackerRank verified certificate for Python programming fundamentals and problem-solving skills.",
          image:
            "images/certificates/HackerRank/python_basic certificate hackerrank.png",
        },
      ],
    },
    {
      name: "EYouth",
      logo: "images/eyouth.png",
      certificates: [
        {
          title: "AI For Content Marketing",
          description:
            "EYouth Business certificate for AI-powered content marketing strategies and tools.",
          image:
            "images/certificates/EYouth/AI For Content Marketing - Certificate _ EYouth Business.png",
        },
        {
          title: "Digital Marketing Strategy",
          description:
            "EYouth Business certificate for digital marketing strategy, planning, and execution.",
          image:
            "images/certificates/EYouth/Digital Marketing Strategy - Certificate _ EYouth Business_061735.png",
        },
      ],
    },
    {
      name: "Udemy",
      logo: "images/udemy.png",
      certificates: [
        {
          title: "Automate Everything with Python",
          description:
            "Udemy course certificate for automating tasks and workflows using Python scripting.",
          image:
            "images/certificates/Udemy/UC-Automate Everything with Python.jpeg",
        },
        {
          title: "Learn Python by Creating 10 Apps with Tkinter",
          description:
            "Udemy course certificate for building 10 desktop applications using Python and Tkinter GUI toolkit.",
          image:
            "images/certificates/Udemy/UC-Learn Python by creating 10 apps with tkinter.jpeg",
        },
        {
          title: "Mastering 4 Critical Skills using C++ 17",
          description:
            "Udemy course certificate for advanced C++ 17 programming and mastering critical software engineering skills.",
          image:
            "images/certificates/Udemy/UC-Mastering 4 critical SKILLS using C++ 17.jpeg",
        },
        {
          title: "Python for Data Science and Machine Learning",
          description:
            "Udemy course certificate for data science and machine learning using Python, covering Pandas, NumPy, Scikit-learn, and more.",
          image:
            "images/certificates/Udemy/UC-Python for Data Science and Machine Leaarning.jpeg",
        },
      ],
    },
    {
      name: "Others",
      icon: "award",
      logo: null,
      certificates: [
        {
          title: "IoT Workshop",
          description:
            "Sector B5 IoT Workshop certificate covering IoT fundamentals, networking protocols, and hardware firmware building.",
          image:
            "images/certificates/Others/Sector B5 IoT.png",
        },
        {
          title: "Azure AI Fundamentals Workshop",
          description:
            "Microsoft Azure AI Fundamentals workshop completion certificate covering AI concepts and Azure AI services.",
          image:
            "images/certificates/Others/Azure AI Fundamentals Workshop.png",
        },
        {
          title: "Azure Cloud Fundamentals Workshop",
          description:
            "Microsoft Azure Cloud Fundamentals workshop completion certificate covering cloud computing and Azure services.",
          image:
            "images/certificates/Others/Azure Cloud Fundamentals Workshop.png",
        },
        {
          title: "Azure Data Fundamentals Workshop",
          description:
            "Microsoft Azure Data Fundamentals workshop completion certificate covering data concepts and Azure data services.",
          image:
            "images/certificates/Others/Azure Data Fundamentals Workshop.png",
        },
        {
          title: "Sprint Data Analytics with AI",
          description:
            "Sprint Data Analytics with Artificial Intelligence program completion certificate.",
          image:
            "images/certificates/Others/Sprint Data Analytics with Artificial Intelligence.png",
        },
        {
          title: "E-Learning Certificate",
          description: "Electronic learning completion certificate.",
          image: "images/certificates/Others/التعلم الإلكتروني.png",
        },
      ],
    },
  ];

  var container = document.getElementById("certificates-grid");
  if (!container) {
    console.error("certificates-grid not found!");
    return;
  }

  var html = "";
  for (var i = 0; i < providers.length; i++) {
    var provider = providers[i];
    var certsHtml = "";
    for (var j = 0; j < provider.certificates.length; j++) {
      var cert = provider.certificates[j];
      certsHtml +=
        '<div class="cert-thumb" data-provider="' +
        i +
        '" data-index="' +
        j +
        '">' +
        '<img src="' +
        cert.image +
        '" alt="' +
        cert.title +
        '" class="cert-thumb-img" loading="lazy" />' +
        '<div class="cert-thumb-overlay">' +
        '<span class="cert-thumb-title">' +
        cert.title +
        "</span>" +
        "</div>" +
        "</div>";
    }

    var showArrows = provider.certificates.length > 1;
    var arrowsHtml = showArrows
      ? '<button class="cert-carousel-arrow cert-carousel-prev" data-carousel="carousel-' +
        i +
        '">' +
        '<i data-lucide="chevron-left" class="w-5 h-5"></i>' +
        "</button>" +
        '<button class="cert-carousel-arrow cert-carousel-next" data-carousel="carousel-' +
        i +
        '">' +
        '<i data-lucide="chevron-right" class="w-5 h-5"></i>' +
        "</button>"
      : "";

    html +=
      '<div class="animate-on-scroll relative group">' +
      '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
      '<div class="cert-provider-card relative bg-stone-800/70 backdrop-blur-sm rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300 overflow-hidden">' +
      '<div class="cert-provider-header">' +
      '<div class="cert-provider-icon' +
      (provider.logo ? " cert-provider-icon-logo" : "") +
      '">' +
      (provider.logo
        ? '<img src="' +
          provider.logo +
          '" alt="' +
          provider.name +
          '" class="cert-provider-logo-img" />'
        : '<i data-lucide="' +
          (provider.icon || "award") +
          '" class="w-6 h-6 text-white"></i>') +
      "</div>" +
      '<h3 class="cert-provider-name">' +
      provider.name +
      "</h3>" +
      '<span class="cert-provider-count">' +
      provider.certificates.length +
      " certificate" +
      (provider.certificates.length > 1 ? "s" : "") +
      "</span>" +
      "</div>" +
      '<div class="cert-carousel-wrapper">' +
      arrowsHtml +
      '<div class="cert-carousel" id="carousel-' +
      i +
      '">' +
      certsHtml +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  container.innerHTML = html;

  // Setup carousel arrows
  var prevBtns = document.querySelectorAll(".cert-carousel-prev");
  var nextBtns = document.querySelectorAll(".cert-carousel-next");
  for (var i = 0; i < prevBtns.length; i++) {
    prevBtns[i].addEventListener("click", function () {
      var carousel = document.getElementById(
        this.getAttribute("data-carousel"),
      );
      if (carousel) carousel.scrollBy({ left: -260, behavior: "smooth" });
    });
  }
  for (var i = 0; i < nextBtns.length; i++) {
    nextBtns[i].addEventListener("click", function () {
      var carousel = document.getElementById(
        this.getAttribute("data-carousel"),
      );
      if (carousel) carousel.scrollBy({ left: 260, behavior: "smooth" });
    });
  }

  // Setup thumbnail click → open modal
  var thumbs = document.querySelectorAll(".cert-thumb");
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", function () {
      var pi = parseInt(this.getAttribute("data-provider"));
      var ci = parseInt(this.getAttribute("data-index"));
      openCertModal(providers, pi, ci);
    });
  }

  // Setup modal controls
  setupCertModal(providers);

  console.log("Certificates rendered: " + providers.length + " providers");
}

// ==================== CERTIFICATE MODAL ====================
var certModalState = { providers: null, providerIndex: 0, certIndex: 0 };

function openCertModal(providers, providerIndex, certIndex) {
  certModalState.providers = providers;
  certModalState.providerIndex = providerIndex;
  certModalState.certIndex = certIndex;

  var modal = document.getElementById("cert-modal");
  if (!modal) return;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  updateCertModal();

  // Animate in
  requestAnimationFrame(function () {
    modal.classList.add("active");
  });
}

function updateCertModal() {
  var provider = certModalState.providers[certModalState.providerIndex];
  var cert = provider.certificates[certModalState.certIndex];

  var img = document.getElementById("cert-modal-img");
  var title = document.getElementById("cert-modal-title");
  var desc = document.getElementById("cert-modal-desc");
  var counter = document.getElementById("cert-modal-counter");
  var prevBtn = document.getElementById("cert-modal-prev");
  var nextBtn = document.getElementById("cert-modal-next");

  if (img) {
    img.src = cert.image;
    img.alt = cert.title;
  }
  if (title) title.textContent = cert.title;
  if (desc) desc.textContent = cert.description;
  if (counter)
    counter.textContent =
      provider.name +
      " — " +
      (certModalState.certIndex + 1) +
      " / " +
      provider.certificates.length;

  // Show/hide arrows
  if (prevBtn)
    prevBtn.style.visibility =
      certModalState.certIndex > 0 ? "visible" : "hidden";
  if (nextBtn)
    nextBtn.style.visibility =
      certModalState.certIndex < provider.certificates.length - 1
        ? "visible"
        : "hidden";
}

function closeCertModal() {
  var modal = document.getElementById("cert-modal");
  if (!modal) return;
  modal.classList.remove("active");
  setTimeout(function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, 300);
}

function setupCertModal(providers) {
  var closeBtn = document.getElementById("cert-modal-close");
  var prevBtn = document.getElementById("cert-modal-prev");
  var nextBtn = document.getElementById("cert-modal-next");
  var backdrop = document.querySelector(".cert-modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeCertModal);
  if (backdrop) backdrop.addEventListener("click", closeCertModal);

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (certModalState.certIndex > 0) {
        certModalState.certIndex--;
        updateCertModal();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      var provider = certModalState.providers[certModalState.providerIndex];
      if (certModalState.certIndex < provider.certificates.length - 1) {
        certModalState.certIndex++;
        updateCertModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    var modal = document.getElementById("cert-modal");
    if (!modal || modal.style.display === "none") return;

    if (e.key === "Escape") {
      closeCertModal();
    } else if (e.key === "ArrowLeft" && certModalState.certIndex > 0) {
      certModalState.certIndex--;
      updateCertModal();
    } else if (e.key === "ArrowRight") {
      var provider = certModalState.providers[certModalState.providerIndex];
      if (certModalState.certIndex < provider.certificates.length - 1) {
        certModalState.certIndex++;
        updateCertModal();
      }
    }
  });
}

// ==================== PROJECT GALLERY MODAL ====================
var projGalleryState = { images: [], currentIndex: 0, projectName: "" };

var projectGalleryData = {
  "Media Files Manager": [
    "images/Porjects/Media Files Manager/img_0.jpg",
    "images/Porjects/Media Files Manager/img_1.png",
    "images/Porjects/Media Files Manager/img_2.png",
    "images/Porjects/Media Files Manager/img_3.png"
  ],
  "Information Retrieval System": [
    "images/Porjects/Information Retrieval System/img_0.jpg"
  ],
  "Delivery Robot Path Planning": [
    "images/Porjects/Delivery Robot Path Planning/img_0.jpg",
    "images/Porjects/Delivery Robot Path Planning/img_1.png",
    "images/Porjects/Delivery Robot Path Planning/img_2.png",
    "images/Porjects/Delivery Robot Path Planning/img_3.png"
  ],
  "Movie Serach Engine": [
    "images/Porjects/Movie Serach Engine/img_0.jpg",
    "images/Porjects/Movie Serach Engine/img_1.jpg",
    "images/Porjects/Movie Serach Engine/img_2.jpg"
  ]
};

function setupProjectGallery() {
  var wrappers = document.querySelectorAll(".project-img-wrapper");
  for (var i = 0; i < wrappers.length; i++) {
    wrappers[i].addEventListener("click", function (e) {
      e.stopPropagation();
      var projectName = this.getAttribute("data-project");
      var images = projectGalleryData[projectName];
      if (!images || images.length === 0) return;
      openProjModal(projectName, images);
    });
  }

  // Setup modal controls
  var closeBtn = document.getElementById("proj-modal-close");
  var prevBtn = document.getElementById("proj-modal-prev");
  var nextBtn = document.getElementById("proj-modal-next");
  var backdrop = document.querySelector(".proj-modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeProjModal);
  if (backdrop) backdrop.addEventListener("click", closeProjModal);

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (projGalleryState.currentIndex > 0) {
        projGalleryState.currentIndex--;
        updateProjModal();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (projGalleryState.currentIndex < projGalleryState.images.length - 1) {
        projGalleryState.currentIndex++;
        updateProjModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    var modal = document.getElementById("proj-modal");
    if (!modal || modal.style.display === "none") return;

    if (e.key === "Escape") {
      closeProjModal();
    } else if (e.key === "ArrowLeft" && projGalleryState.currentIndex > 0) {
      projGalleryState.currentIndex--;
      updateProjModal();
    } else if (e.key === "ArrowRight" && projGalleryState.currentIndex < projGalleryState.images.length - 1) {
      projGalleryState.currentIndex++;
      updateProjModal();
    }
  });
}

function openProjModal(projectName, images) {
  projGalleryState.projectName = projectName;
  projGalleryState.images = images;
  projGalleryState.currentIndex = 0;

  var modal = document.getElementById("proj-modal");
  if (!modal) return;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  updateProjModal();

  requestAnimationFrame(function () {
    modal.classList.add("active");
  });
}

function updateProjModal() {
  var img = document.getElementById("proj-modal-img");
  var counter = document.getElementById("proj-modal-counter");
  var prevBtn = document.getElementById("proj-modal-prev");
  var nextBtn = document.getElementById("proj-modal-next");

  if (img) {
    img.src = projGalleryState.images[projGalleryState.currentIndex];
    img.alt = projGalleryState.projectName + " screenshot " + (projGalleryState.currentIndex + 1);
  }
  if (counter) {
    counter.textContent = projGalleryState.projectName + " — " + (projGalleryState.currentIndex + 1) + " / " + projGalleryState.images.length;
  }

  // Show/hide arrows
  if (prevBtn)
    prevBtn.style.visibility = projGalleryState.currentIndex > 0 ? "visible" : "hidden";
  if (nextBtn)
    nextBtn.style.visibility = projGalleryState.currentIndex < projGalleryState.images.length - 1 ? "visible" : "hidden";
}

function closeProjModal() {
  var modal = document.getElementById("proj-modal");
  if (!modal) return;
  modal.classList.remove("active");
  setTimeout(function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    // Clear the image src to free memory
    var img = document.getElementById("proj-modal-img");
    if (img) img.src = "";
  }, 300);
}

// ==================== HEADER ====================
function setupHeader() {
  var header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}

// ==================== MOBILE MENU ====================
function setupMobileMenu() {
  var btn = document.getElementById("mobile-menu-btn");
  var menu = document.getElementById("mobile-menu");
  var header = document.getElementById("header");
  if (!btn || !menu) return;

  var isOpen = false;
  btn.addEventListener("click", function () {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.add("open");
      if (header) header.classList.add("header-scrolled");
    } else {
      menu.classList.remove("open");
      if (header && window.scrollY <= 50) {
        header.classList.remove("header-scrolled");
      }
    }

    var icon = btn.querySelector("i");
    if (icon) {
      icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
      if (typeof lucide !== "undefined") lucide.createIcons();
    }
  });
}

// ==================== SMOOTH SCROLL ====================
function setupSmoothScroll() {
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });

        var menu = document.getElementById("mobile-menu");
        if (menu) menu.classList.remove("open");
      }
    });
  }

  var scrollBtn = document.getElementById("scroll-down");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      var about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
  var elements = document.querySelectorAll(".animate-on-scroll");

  var observer = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("visible");
        }
      }
    },
    { threshold: 0.1 },
  );

  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
}

// ==================== CONTACT FORM ====================
function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalBtnText = submitBtn.innerHTML;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
    if (typeof lucide !== "undefined") lucide.createIcons();

    var formData = new FormData(form);

    fetch("https://formspree.io/f/mjgervpd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          showStatusToast(
            "Message Sent!",
            "Thanks for reaching out! I'll get back to you soon. 🚀",
            "success",
          );
          form.reset();
        } else {
          return response.json().then(function (data) {
            if (Object.hasOwn(data, "errors")) {
              showStatusToast(
                "Error",
                data["errors"]
                  .map(function (error) {
                    return error["message"];
                  })
                  .join(", "),
                "error",
              );
            } else {
              showStatusToast(
                "Error",
                "Oops! There was a problem sending your message.",
                "error",
              );
            }
          });
        }
      })
      .catch(function (error) {
        showStatusToast(
          "Error",
          "Oops! There was a problem sending your message.",
          "error",
        );
      })
      .finally(function () {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (typeof lucide !== "undefined") lucide.createIcons();
      });
  });
}



// ==================== STATUS TOAST ====================
function showStatusToast(title, description, type) {
  var container = document.getElementById("toast-container");
  if (!container) return;

  // Default values if not provided
  title = title || "Title";
  description = description || "Description";
  type = type || "info"; // info, success, error

  var icon = "info";
  var bgColor = "bg-stone-800";
  var borderColor = "border-amber-700/30";

  if (type === "success") {
    icon = "check-circle";
    bgColor = "bg-green-900/90";
    borderColor = "border-green-700/50";
  } else if (type === "error") {
    icon = "alert-circle";
    bgColor = "bg-red-900/90";
    borderColor = "border-red-700/50";
  }

  var toast = document.createElement("div");
  toast.className =
    "toast mb-2 " +
    bgColor +
    " " +
    borderColor +
    " border backdrop-blur-md p-4 rounded-lg shadow-lg flex gap-3 min-w-[300px] transform transition-all duration-300 translate-x-full";

  toast.innerHTML =
    '<div class="flex-shrink-0 text-amber-400">' +
    '<i data-lucide="' +
    icon +
    '" class="w-6 h-6"></i>' +
    "</div>" +
    "<div>" +
    '<h4 class="font-semibold text-amber-100">' +
    title +
    "</h4>" +
    '<p class="text-sm text-stone-300">' +
    description +
    "</p>" +
    "</div>";

  container.appendChild(toast);

  // Initialize icon for this toast
  if (typeof lucide !== "undefined") lucide.createIcons();

  // Animate in
  requestAnimationFrame(function () {
    toast.classList.remove("translate-x-full");
  });

  setTimeout(function () {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 4000);
}
