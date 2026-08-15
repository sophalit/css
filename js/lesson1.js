// lesson1.js - Interactive logic for Lesson 1 Visual Studio

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initHouseAnalogy();
  initSyntaxExplorer();
  initUIPlayground();
  initPipeline();
  initCodeStudio();
  initQuiz();
  
  // Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlTag = document.documentElement;
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlTag.setAttribute('data-theme', newTheme);
    themeToggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
});

// 1. Tab Navigation
function initTabs() {
  const tabBtns = document.querySelectorAll('.studio-nav-btn');
  const panes = document.querySelectorAll('.studio-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      // Add active to clicked
      btn.classList.add('active');
      const targetPane = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// 2. House Analogy
function initHouseAnalogy() {
  const toggleBtn = document.getElementById('cssToggleBtn');
  const houseElement = document.getElementById('houseElement');
  const textHtml = document.querySelector('.state-html-only');
  const textCss = document.querySelector('.state-css-added');

  if(toggleBtn) {
    toggleBtn.addEventListener('change', (e) => {
      if (e.target.checked) {
        houseElement.classList.add('css-active');
        textHtml.classList.remove('active');
        textCss.classList.add('active');
      } else {
        houseElement.classList.remove('css-active');
        textCss.classList.remove('active');
        textHtml.classList.add('active');
      }
    });
  }
}

// 3. Syntax Explorer
function initSyntaxExplorer() {
  const parts = document.querySelectorAll('.syn-part');
  const panels = document.querySelectorAll('.info-panel');

  parts.forEach(part => {
    part.addEventListener('mouseenter', () => {
      // Remove active from all panels
      panels.forEach(p => p.classList.remove('active'));
      
      const targetId = part.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if(targetPanel) {
        targetPanel.classList.add('active');
      }
    });

    part.addEventListener('mouseleave', () => {
      panels.forEach(p => p.classList.remove('active'));
      document.getElementById('info-default').classList.add('active');
    });
  });
}

// 4. UI Playground
function initUIPlayground() {
  const checkboxes = document.querySelectorAll('.prop-checkbox input');
  const mockup = document.getElementById('uiMockup');

  checkboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
      const prop = e.target.getAttribute('data-prop');
      if (e.target.checked) {
        mockup.classList.add(`mock-${prop}`);
      } else {
        mockup.classList.remove(`mock-${prop}`);
      }
    });
  });
}

// 5. Browser Pipeline
function initPipeline() {
  const steps = document.querySelectorAll('.pipe-btn');
  const vizs = document.querySelectorAll('.pipe-viz');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      vizs.forEach(v => v.classList.remove('active'));

      step.classList.add('active');
      const targetId = `pipe-${step.getAttribute('data-step')}`;
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// 6. Code Studio (Sandbox)
function initCodeStudio() {
  const fileBtns = document.querySelectorAll('.file-tab-btn');
  const codeEditor = document.getElementById('codeEditor');
  const runBtn = document.getElementById('runCodeBtn');
  const previewFrame = document.getElementById('previewFrame');

  const files = {
    html: `<div class="profile-card">
  <img src="https://via.placeholder.com/100" alt="Profile" class="profile-img">
  <h2>Sokha Dev</h2>
  <p class="major">Web Development</p>
  <p class="year">Year 3</p>
  <button class="view-btn">View Profile</button>
</div>`,
    css: `/* សរសេរ CSS របស់អ្នកនៅទីនេះដើម្បីរចនា Profile Card */
.profile-card {
  
}

.profile-img {
  
}

.view-btn {
  
}
`
  };

  let activeFile = 'html';

  // Load initial
  if(codeEditor) codeEditor.value = files[activeFile];

  fileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Save current
      files[activeFile] = codeEditor.value;

      // Switch
      fileBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFile = btn.getAttribute('data-file');
      codeEditor.value = files[activeFile];
    });
  });

  if(runBtn) {
    runBtn.addEventListener('click', () => {
      // Save current before run
      files[activeFile] = codeEditor.value;
      
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      
      const finalHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 90vh; background: #f1f5f9; margin: 0;}
            ${files.css}
          </style>
        </head>
        <body>
          ${files.html}
        </body>
        </html>
      `;

      doc.open();
      doc.write(finalHTML);
      doc.close();
    });
  }
}

// 7. Quiz Logic
function initQuiz() {
  const quizData = [
    {
      q: "១. តើ CSS មកពីពាក្យអ្វីពេញ?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets"
      ],
      answer: 1,
      explanation: "ត្រឹមត្រូវ! CSS តំណាងឲ្យ Cascading Style Sheets។"
    },
    {
      q: "២. តើ HTML និង CSS មានតួនាទីខុសគ្នាដូចម្តេច?",
      options: [
        "HTML បង្កើតរូបរាង, CSS បង្កើតរចនាសម្ព័ន្ធ",
        "HTML សម្រាប់ Animation, CSS សម្រាប់ Layout",
        "HTML បង្កើតរចនាសម្ព័ន្ធ (Structure), CSS បង្កើតរូបរាង (Style/Presentation)",
        "ពួកវាមានតួនាទីដូចគ្នា"
      ],
      answer: 2,
      explanation: "ត្រឹមត្រូវ! ប្រៀបដូចជាផ្ទះ HTML ជាគ្រោងផ្ទះ ចំណែក CSS ជាការលាបពណ៌ និងតុបតែង។"
    },
    {
      q: "៣. ក្នុងកូដ <code>h1 { color: blue; }</code> តើ <code>h1</code> ហៅថាអ្វី?",
      options: ["Property", "Value", "Function", "Selector"],
      answer: 3,
      explanation: "ត្រឹមត្រូវ! h1 គឺជា Selector ដែលប្រាប់ Browser ថាត្រូវរចនាលើ Element មួយណា។"
    }
  ];

  const quizArea = document.getElementById('quizArea');
  if(!quizArea) return;

  quizData.forEach((q, index) => {
    const box = document.createElement('div');
    box.className = 'quiz-question-box';
    
    const h3 = document.createElement('h3');
    h3.innerHTML = q.q;
    box.appendChild(h3);

    const optsDiv = document.createElement('div');
    optsDiv.className = 'quiz-options';

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';

    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = opt;
      
      btn.addEventListener('click', () => {
        // Disable all buttons in this question
        const allBtns = optsDiv.querySelectorAll('.quiz-opt-btn');
        allBtns.forEach(b => {
          b.disabled = true;
          b.style.pointerEvents = 'none';
        });

        if (optIdx === q.answer) {
          btn.classList.add('correct');
          feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${q.explanation}`;
          feedback.className = 'quiz-feedback success show';
        } else {
          btn.classList.add('wrong');
          // Highlight correct one
          allBtns[q.answer].classList.add('correct');
          feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> មិនត្រឹមត្រូវទេ។ ចម្លើយដែលត្រូវគឺ: ${q.options[q.answer]}`;
          feedback.className = 'quiz-feedback error show';
        }
      });

      optsDiv.appendChild(btn);
    });

    box.appendChild(optsDiv);
    box.appendChild(feedback);
    quizArea.appendChild(box);
  });
}
