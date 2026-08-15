// lesson2.js - Interactive logic for Lesson 2 Visual Studio

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSyntaxExplorerV2();
  initRefactorTool();
  initLinkTester();
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
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(btn.getAttribute('data-tab'));
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// 2. Syntax Explorer V2
function initSyntaxExplorerV2() {
  const parts = document.querySelectorAll('.syn-part, .syn-area-btn');
  const panels = document.querySelectorAll('.info-panel');
  const codeBox = document.querySelector('.syntax-code');

  parts.forEach(part => {
    // Activate function
    const activatePart = () => {
      panels.forEach(p => p.classList.remove('active'));
      parts.forEach(p => p.classList.remove('active'));
      
      part.classList.add('active');
      const targetId = part.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if(targetPanel) {
        targetPanel.classList.add('active');
      }

      // Special block highlights
      if(targetId === 'info-declaration') {
        const prop = document.querySelector('.syn-property');
        const val = document.querySelector('.syn-value');
        if(prop) prop.style.background = 'rgba(255,255,255,0.1)';
        if(val) val.style.background = 'rgba(255,255,255,0.1)';
      } else if (targetId === 'info-block') {
        codeBox.classList.add('highlight-block');
      }
    };

    // Deactivate function
    const deactivatePart = () => {
      panels.forEach(p => p.classList.remove('active'));
      part.classList.remove('active');
      document.getElementById('info-default').classList.add('active');
      
      const targetId = part.getAttribute('data-target');
      if(targetId === 'info-declaration') {
        const prop = document.querySelector('.syn-property');
        const val = document.querySelector('.syn-value');
        if(prop) prop.style.background = '';
        if(val) val.style.background = '';
      } else if (targetId === 'info-block') {
        codeBox.classList.remove('highlight-block');
      }
    };

    // Bind events
    part.addEventListener('mouseenter', activatePart);
    part.addEventListener('mouseleave', deactivatePart);
    part.addEventListener('focus', activatePart);
    part.addEventListener('blur', deactivatePart);
    part.addEventListener('click', activatePart);
  });
}

// 3. Refactoring Tool
function initRefactorTool() {
  const btnAnimate = document.getElementById('btnAnimateRefactor');
  const steps = document.querySelectorAll('.step-btn');
  const htmlView = document.getElementById('htmlCodeView');
  const cssPane = document.getElementById('cssEditorPane');
  const cssView = document.getElementById('cssCodeView');
  const inlineCode = document.getElementById('inlineCode');
  const refactorDesc = document.getElementById('refactorDesc');

  let currentStep = 0; // 0: inline, 1: internal, 2: external

  if(!btnAnimate) return;

  btnAnimate.addEventListener('click', () => {
    currentStep++;
    if (currentStep > 2) currentStep = 0;

    updateRefactorState();
  });

  steps.forEach((stepBtn, idx) => {
    stepBtn.addEventListener('click', () => {
      currentStep = idx;
      updateRefactorState();
    });
  });

  function updateRefactorState() {
    steps.forEach((b, i) => {
      b.classList.toggle('active', i === currentStep);
    });

    if (currentStep === 0) {
      // Inline
      htmlView.innerHTML = `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  <span class="code-highlight">&lt;h1 <span id="inlineCode" style="color:#f38ba8;">style="color: red;"</span>&gt;CSS&lt;/h1&gt;</span>
  &lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`;
      cssPane.style.opacity = '0.3';
      cssView.innerHTML = '<span class="text-muted">/* មិនទាន់មាន File នេះនៅឡើយទេ */</span>';
      
      refactorDesc.innerHTML = `<h3>Inline CSS</h3><p>សរសេរ CSS ផ្ទាល់ក្នុង HTML Tag តាមរយៈ <code>style="..."</code>។ សមស្របសម្រាប់កែធាតុមួយភ្លាមៗ ប៉ុន្តែបើមានច្រើនវានឹងធ្វើឱ្យកូដ HTML វែងនិងរញ៉េរញ៉ៃ។</p>`;
      btnAnimate.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> បំលែងទៅ Internal CSS (Refactor)';
    } 
    else if (currentStep === 1) {
      // Internal
      htmlView.innerHTML = `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Page&lt;/title&gt;
<span class="code-highlight" style="color: #a6e3a1;">  &lt;style&gt;
    h1 { color: red; }
  &lt;/style&gt;</span>
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;CSS&lt;/h1&gt;
  &lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`;
      cssPane.style.opacity = '0.3';
      cssView.innerHTML = '<span class="text-muted">/* មិនទាន់មាន File នេះនៅឡើយទេ */</span>';
      
      refactorDesc.innerHTML = `<h3>Internal CSS</h3><p>ផ្លាស់ទីកូដពីក្នុង Tag មកប្រមូលផ្តុំក្នុង <code>&lt;style&gt;</code> ផ្នែក <code>&lt;head&gt;</code>។ ធ្វើឱ្យ HTML ស្អាតជាងមុន តែទំព័រផ្សេងទៀតមិនអាចយកទៅប្រើបានទេ។</p>`;
      btnAnimate.innerHTML = '<i class="fa-solid fa-file-export"></i> បំលែងទៅ External CSS';
    }
    else if (currentStep === 2) {
      // External
      htmlView.innerHTML = `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Page&lt;/title&gt;
<span class="code-highlight" style="color: #89b4fa;">  &lt;link rel="stylesheet" href="style.css"&gt;</span>
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;CSS&lt;/h1&gt;
  &lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`;
      cssPane.style.opacity = '1';
      cssView.innerHTML = `<span class="code-highlight" style="color: #cba6f7;">h1 {
  color: red;
}</span>`;
      
      refactorDesc.innerHTML = `<h3>External CSS</h3><p>វិធីល្អបំផុត! បង្កើត File ថ្មី <code>style.css</code> ដាច់ដោយឡែក ហើយប្រើ <code>&lt;link&gt;</code> ដើម្បីភ្ជាប់។ HTML ស្អាត ហើយអាចប្រើ Style នេះលើគ្រប់ទំព័រក្នុង Website។</p>`;
      btnAnimate.innerHTML = '<i class="fa-solid fa-rotate-left"></i> ត្រឡប់ទៅ Inline វិញ';
    }
  }
}

// 4. Link Tester
function initLinkTester() {
  const input = document.getElementById('pathInput');
  const status = document.getElementById('connectionStatus');
  const targetFile = document.getElementById('fileStyle');

  if(!input) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    
    // Reset states
    input.classList.remove('success', 'error');
    status.classList.remove('success', 'error');
    targetFile.classList.remove('success');

    if (val === '') {
      status.innerHTML = `<div class="conn-icon"><i class="fa-solid fa-link-slash"></i></div><p>រង់ចាំការតភ្ជាប់...</p>`;
      return;
    }

    if (val === 'css/style.css') {
      // Correct!
      input.classList.add('success');
      status.classList.add('success');
      targetFile.classList.add('success');
      status.innerHTML = `<div class="conn-icon"><i class="fa-solid fa-link"></i></div><p><strong>ជោគជ័យ!</strong> HTML បានភ្ជាប់ទៅកាន់ CSS ត្រឹមត្រូវ។</p>`;
    } else if (val === 'style.css') {
      input.classList.add('error');
      status.classList.add('error');
      status.innerHTML = `<div class="conn-icon"><i class="fa-solid fa-triangle-exclamation"></i></div><p><strong>ខុស Path!</strong> File CSS ស្ថិតនៅក្នុង Folder <code>css</code>។ អ្នកត្រូវសរសេរឈ្មោះ Folder ពីមុខ។</p>`;
    } else {
      input.classList.add('error');
      status.classList.add('error');
      status.innerHTML = `<div class="conn-icon"><i class="fa-solid fa-circle-xmark"></i></div><p><strong>រកមិនឃើញ!</strong> សូមពិនិត្យមើល Folder Structure ខាងឆ្វេង។</p>`;
    }
  });
}

// 5. Code Studio
function initCodeStudio() {
  const fileBtns = document.querySelectorAll('.file-tab-btn');
  const codeEditor = document.getElementById('codeEditor');
  const runBtn = document.getElementById('runCodeBtn');
  const previewFrame = document.getElementById('previewFrame');

  if(!codeEditor) return;

  const files = {
    html: `<!-- Student Profile HTML -->
<div class="student-profile">
  <div class="avatar">🎓</div>
  <h2 class="name">Sokha Dev</h2>
  <p class="major">Web Development</p>
  <p class="year">Year 3 - Semester 2</p>
  <p class="desc">A passionate student learning CSS Fundamentals.</p>
  <button class="view-btn">View Full Profile</button>
</div>`,
    css: `/* Student Profile Page */

/* Base Styles */
body {
  font-family: 'Kantumruy Pro', sans-serif;
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

/* 
 * MINI CHALLENGE:
 * កែប្រែ Properties ខាងក្រោមដើម្បីរចនា Profile នេះ!
 */

.student-profile {
  background-color: white;
  text-align: center;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  /* សាកបន្ថែម border: 2px solid blue; ទីនេះ */
}

.avatar {
  font-size: 60px;
  margin-bottom: 10px;
}

.name {
  color: #0f172a;
  /* សាកប្តូរពណ៌ទៅ blue */
}

.major {
  color: #3b82f6;
  font-weight: bold;
}

.desc {
  color: #64748b;
  /* សាកដូរ font-size: 20px; */
}

.view-btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
`
  };

  let activeFile = 'html';

  codeEditor.value = files[activeFile];

  fileBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      files[activeFile] = codeEditor.value;
      fileBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFile = btn.getAttribute('data-file');
      codeEditor.value = files[activeFile];
    });
  });

  runBtn.addEventListener('click', () => {
      files[activeFile] = codeEditor.value;
      
      const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
      
      const finalHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700&display=swap" rel="stylesheet">
          <style>
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

  // Run once on load
  runBtn.click();
}

// 6. Quiz Logic
function initQuiz() {
  const quizData = [
    {
      q: "១. ក្នុងកូដ <code>h1 { color: blue; }</code> តើ <code>color: blue;</code> ហៅថាអ្វី?",
      options: [
        "Selector",
        "Value",
        "Declaration",
        "Declaration Block"
      ],
      answer: 2,
      explanation: "ត្រឹមត្រូវ! <code>color: blue;</code> គឺជា Declaration មួយដែលរួមមាន Property និង Value ផ្គុំចូលគ្នា។"
    },
    {
      q: "២. តើ <code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code> ជាការបញ្ចូល CSS ប្រភេទអ្វី?",
      options: [
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Imported CSS"
      ],
      answer: 2,
      explanation: "ត្រឹមត្រូវ! ការប្រើ Tag <code>&lt;link&gt;</code> គឺជាវិធីសម្រាប់ភ្ជាប់ទៅកាន់ External CSS file ដាច់ដោយឡែក។"
    },
    {
      q: "៣. បើ File CSS ឈ្មោះ <code>style.css</code> ស្ថិតក្នុង Folder ឈ្មោះ <code>css</code> តើអ្នកត្រូវសរសេរ Path យ៉ាងដូចម្តេច?",
      options: [
        "<code>href=\"style.css\"</code>",
        "<code>href=\"css/style.css\"</code>",
        "<code>href=\"/style.css\"</code>",
        "<code>href=\"css.style\"</code>"
      ],
      answer: 1,
      explanation: "ត្រឹមត្រូវ! អ្នកត្រូវប្រាប់ Browser ឱ្យចូលទៅក្នុង Folder <code>css</code> ជាមុនសិន រួចទើបរក File <code>style.css</code>។"
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
