// Portfolio Main JavaScript
// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  console.log("=== Portfolio JS Starting ===");
  
  // Set current year
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  
  // Render all dynamic content
  renderProjectsSection();
  renderExperienceSection();
  renderSkillsSection();
  
  // Initialize other features
  setupHeader();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollAnimations();
  setupContactForm();
  
  // Initialize Lucide icons last
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
    console.log("Lucide icons initialized");
  }
  
  console.log("=== Portfolio JS Complete ===");
});

// ==================== PROJECTS ====================
function renderProjectsSection() {
  console.log("Rendering projects...");
  
  var projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
      tags: ["Python", "Scikit-learn", "XGBoost", "SQL"]
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Deep learning model for multi-class sentiment analysis on social media data using transformers and BERT.",
      tags: ["PyTorch", "Transformers", "BERT", "NLP"]
    },
    {
      title: "Image Classification System",
      description: "Computer vision system for automated product classification using convolutional neural networks.",
      tags: ["TensorFlow", "CNN", "OpenCV", "Keras"]
    },
    {
      title: "Time Series Forecasting",
      description: "Sales forecasting model using LSTM networks and statistical methods to predict revenue trends.",
      tags: ["LSTM", "Prophet", "Pandas", "Matplotlib"]
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system for personalized product recommendations using matrix factorization.",
      tags: ["Spark", "ALS", "Redis", "FastAPI"]
    },
    {
      title: "Fraud Detection System",
      description: "Real-time anomaly detection system for financial transactions using isolation forests and autoencoders.",
      tags: ["Apache Kafka", "Scikit-learn", "Docker", "PostgreSQL"]
    }
  ];
  
  var container = document.getElementById("projects-grid");
  if (!container) {
    console.error("projects-grid not found!");
    return;
  }
  
  var html = "";
  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var tagsHtml = "";
    for (var j = 0; j < project.tags.length; j++) {
      tagsHtml += '<span class="px-3 py-1 bg-amber-900/30 text-amber-300 text-sm rounded-full border border-amber-700/30">' + project.tags[j] + '</span>';
    }
    
    html += '<div class="animate-on-scroll relative group">' +
      '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
      '<div class="project-card relative bg-stone-800/70 backdrop-blur-sm rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300 overflow-hidden">' +
        '<div class="relative h-48 overflow-hidden">' +
          '<img alt="' + project.title + '" class="project-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1572177812156-58036aae439c">' +
          '<div class="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>' +
        '</div>' +
        '<div class="p-6">' +
          '<h3 class="text-xl font-semibold text-amber-100 mb-3">' + project.title + '</h3>' +
          '<p class="text-stone-300 mb-4">' + project.description + '</p>' +
          '<div class="flex flex-wrap gap-2 mb-4">' + tagsHtml + '</div>' +
          '<div class="flex gap-4">' +
            '<a href="javascript:void(0)" onclick="showToast()" class="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">' +
              '<i data-lucide="github" class="w-4 h-4"></i>' +
              '<span>Code</span>' +
            '</a>' +
            '<a href="javascript:void(0)" onclick="showToast()" class="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">' +
              '<i data-lucide="external-link" class="w-4 h-4"></i>' +
              '<span>Demo</span>' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
  
  container.innerHTML = html;
  console.log("Projects rendered: " + projects.length);
}

// ==================== EXPERIENCE ====================
function renderExperienceSection() {
  console.log("Rendering experience...");
  
  var experiences = [
    {
      role: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading data science initiatives and building ML models for predictive analytics. Managed a team of 5 data scientists and improved model accuracy by 25%.",
      achievements: [
        "Developed customer segmentation model reducing churn by 30%",
        "Implemented automated ML pipeline saving 40 hours/week",
        "Mentored junior data scientists and conducted workshops"
      ]
    },
    {
      role: "Data Scientist",
      company: "Analytics Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built and deployed machine learning models for various business applications including recommendation systems and fraud detection.",
      achievements: [
        "Created recommendation engine increasing sales by 18%",
        "Developed fraud detection system saving $2M annually",
        "Optimized data processing pipeline reducing costs by 35%"
      ]
    },
    {
      role: "Junior Data Analyst",
      company: "DataCorp Analytics",
      period: "2018 - 2020",
      description: "Performed statistical analysis and created data visualizations to support business decision-making processes.",
      achievements: [
        "Automated reporting dashboards using Python and Tableau",
        "Conducted A/B testing for marketing campaigns",
        "Collaborated with cross-functional teams on data projects"
      ]
    }
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
      achievementsHtml += '<li class="flex items-start gap-2 text-stone-300">' +
        '<span class="text-amber-500 mt-1">▹</span>' +
        '<span>' + exp.achievements[j] + '</span>' +
      '</li>';
    }
    
    var timelineLine = (i !== experiences.length - 1) ? '<div class="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-amber-700 to-transparent"></div>' : '';
    
    html += '<div class="animate-on-scroll relative mb-12">' +
      timelineLine +
      '<div class="relative group">' +
        '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
        '<div class="relative bg-stone-800/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300">' +
          '<div class="flex items-start gap-4">' +
            '<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-600 rounded-lg flex items-center justify-center">' +
              '<i data-lucide="briefcase" class="w-6 h-6 text-white"></i>' +
            '</div>' +
            '<div class="flex-grow">' +
              '<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">' +
                '<h3 class="text-2xl font-semibold text-amber-100">' + exp.role + '</h3>' +
                '<div class="flex items-center gap-2 text-stone-400 mt-2 md:mt-0">' +
                  '<i data-lucide="calendar" class="w-4 h-4"></i>' +
                  '<span>' + exp.period + '</span>' +
                '</div>' +
              '</div>' +
              '<p class="text-xl text-amber-400 mb-3">' + exp.company + '</p>' +
              '<p class="text-stone-300 mb-4">' + exp.description + '</p>' +
              '<ul class="space-y-2">' + achievementsHtml + '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
  
  container.innerHTML = html;
  console.log("Experience rendered: " + experiences.length);
}

// ==================== SKILLS ====================
function renderSkillsSection() {
  console.log("Rendering skills...");
  
  var skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 75 }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "XGBoost", level: 92 }
      ]
    },
    {
      category: "Data Tools",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 93 },
        { name: "Spark", level: 80 },
        { name: "Tableau", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 82 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 90 },
        { name: "Kubernetes", level: 75 }
      ]
    }
  ];
  
  var container = document.getElementById("skills-grid");
  if (!container) {
    console.error("skills-grid not found!");
    return;
  }
  
  var html = "";
  for (var i = 0; i < skillCategories.length; i++) {
    var cat = skillCategories[i];
    var skillsHtml = "";
    
    for (var j = 0; j < cat.skills.length; j++) {
      var skill = cat.skills[j];
      skillsHtml += '<div>' +
        '<div class="flex justify-between mb-2">' +
          '<span class="text-stone-300">' + skill.name + '</span>' +
          '<span class="text-amber-400">' + skill.level + '%</span>' +
        '</div>' +
        '<div class="h-2 bg-stone-700/50 rounded-full overflow-hidden">' +
          '<div class="skill-bar h-full bg-gradient-to-r from-amber-700 to-amber-500 rounded-full" style="width: ' + skill.level + '%;"></div>' +
        '</div>' +
      '</div>';
    }
    
    html += '<div class="animate-on-scroll relative group">' +
      '<div class="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-amber-900/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>' +
      '<div class="relative bg-stone-800/70 backdrop-blur-sm p-6 rounded-lg border-2 border-amber-700/30 hover:border-amber-600/60 transition-all duration-300">' +
        '<h3 class="text-2xl font-semibold text-amber-100 mb-6">' + cat.category + '</h3>' +
        '<div class="space-y-4">' + skillsHtml + '</div>' +
      '</div>' +
    '</div>';
  }
  
  container.innerHTML = html;
  console.log("Skills rendered: " + skillCategories.length);
}

// ==================== HEADER ====================
function setupHeader() {
  var header = document.getElementById("header");
  if (!header) return;
  
  window.addEventListener("scroll", function() {
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
  btn.addEventListener("click", function() {
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
    links[i].addEventListener("click", function(e) {
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
    scrollBtn.addEventListener("click", function() {
      var about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
  var elements = document.querySelectorAll(".animate-on-scroll");
  
  var observer = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("visible");
      }
    }
  }, { threshold: 0.1 });
  
  for (var i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
}

// ==================== CONTACT FORM ====================
function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalBtnText = submitBtn.innerHTML;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
    if (typeof lucide !== "undefined") lucide.createIcons();
    
    var formData = new FormData(form);
    
    fetch("https://formspree.io/f/mjgervpd", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        showStatusToast("Message Sent!", "Thanks for reaching out! I'll get back to you soon. 🚀", "success");
        form.reset();
      } else {
        return response.json().then(function(data) {
          if (Object.hasOwn(data, 'errors')) {
            showStatusToast("Error", data["errors"].map(function(error) { return error["message"]; }).join(", "), "error");
          } else {
            showStatusToast("Error", "Oops! There was a problem sending your message.", "error");
          }
        });
      }
    })
    .catch(function(error) {
      showStatusToast("Error", "Oops! There was a problem sending your message.", "error");
    })
    .finally(function() {
      // Reset button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      if (typeof lucide !== "undefined") lucide.createIcons();
    });
  });
}

// ==================== TOAST ====================
function showToast() {
  var container = document.getElementById("toast-container");
  if (!container) return;
  
  var toast = document.createElement("div");
  toast.className = "toast mb-2";
  toast.innerHTML = '<div class="toast-title">🚧 Feature Not Implemented</div>' +
    '<div class="toast-description">This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀</div>';
  
  container.appendChild(toast);
  
  setTimeout(function() {
    toast.style.animation = "toast-out 0.3s ease forwards";
    setTimeout(function() {
      toast.remove();
    }, 300);
  }, 4000);
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
  toast.className = "toast mb-2 " + bgColor + " " + borderColor + " border backdrop-blur-md p-4 rounded-lg shadow-lg flex gap-3 min-w-[300px] transform transition-all duration-300 translate-x-full";
  
  toast.innerHTML = 
    '<div class="flex-shrink-0 text-amber-400">' +
      '<i data-lucide="' + icon + '" class="w-6 h-6"></i>' +
    '</div>' +
    '<div>' +
      '<h4 class="font-semibold text-amber-100">' + title + '</h4>' +
      '<p class="text-sm text-stone-300">' + description + '</p>' +
    '</div>';
  
  container.appendChild(toast);
  
  // Initialize icon for this toast
  if (typeof lucide !== "undefined") lucide.createIcons();
  
  // Animate in
  requestAnimationFrame(function() {
    toast.classList.remove("translate-x-full");
  });
  
  setTimeout(function() {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(function() {
      toast.remove();
    }, 300);
  }, 4000);
}
