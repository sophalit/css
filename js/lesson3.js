// lesson3.js - Interactive logic for Lesson 3 Visual Studio

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initTargetPractice();
  initCodeStudio();
  initQuiz();
  
  // Theme toggle (if present)
  const themeBtn = document.getElementById('themeToggleBtn');
  if(themeBtn) {
    themeBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }
});

// 1. Tab Navigation
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active to clicked
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// 2. Target Practice (Selector Visualizer)
function initTargetPractice() {
  const selectorBtns = document.querySelectorAll('.selector-btn');
  const domNodes = document.querySelectorAll('.dom-node');
  const expTitle = document.getElementById('expTitle');
  const expDesc = document.getElementById('expDesc');

  const explanations = {
    'element': {
      title: 'p',
      desc: 'Element Selector (ឬ Tag Selector) ជ្រើសរើស Element ទាំងអស់ដោយផ្អែកលើឈ្មោះ Tag របស់វា។ នៅទីនេះវាជ្រើសរើស <code>&lt;p&gt;</code> ទាំងអស់។'
    },
    'class': {
      title: '.card',
      desc: 'Class Selector ជ្រើសរើស Element ដែលមាន <code>class="card"</code>។ វាប្រើសញ្ញា <code>.</code> (dot) នៅពីមុខឈ្មោះ Class។'
    },
    'id': {
      title: '#header',
      desc: 'ID Selector ជ្រើសរើស Element តែមួយគត់ដែលមាន <code>id="header"</code>។ វាប្រើសញ្ញា <code>#</code> (hash) នៅពីមុខឈ្មោះ ID។'
    },
    'universal': {
      title: '*',
      desc: 'Universal Selector ជ្រើសរើស Element <strong>ទាំងអស់</strong> នៅក្នុងទំព័រ។ ជារឿយៗប្រើសម្រាប់ Reset CSS (ឧទាហរណ៍ box-sizing)។'
    },
    'grouping': {
      title: 'h2, p',
      desc: 'Grouping Selector ប្រើសញ្ញា <code>,</code> ដើម្បីជ្រើសរើស Selectors ច្រើនក្នុងពេលតែមួយ។ នៅទីនេះវាជ្រើសរើសទាំង <code>&lt;h2&gt;</code> និង <code>&lt;p&gt;</code>។'
    },
    'descendant': {
      title: '.card p',
      desc: 'Descendant Selector ប្រើ <strong>Space (ចន្លោះ)</strong>។ វាជ្រើសរើស <code>&lt;p&gt;</code> ទាំងអស់ដែលស្ថិតនៅខាងក្នុង <code>.card</code> ទោះនៅជ្រៅប៉ុណ្ណាក៏ដោយ។'
    },
    'child': {
      title: '.card > p',
      desc: 'Child Selector ប្រើសញ្ញា <code>&gt;</code>។ វាជ្រើសរើសតែ <code>&lt;p&gt;</code> ដែលជាកូនផ្ទាល់ (Direct Child) របស់ <code>.card</code> ប៉ុណ្ណោះ។'
    },
    'attribute': {
      title: 'input[type="text"]',
      desc: 'Attribute Selector ជ្រើសរើស Element ដោយផ្អែកលើ Attribute របស់វា។ នៅទីនេះវាជ្រើសតែ <code>&lt;input&gt;</code> ដែលមាន <code>type="text"</code> ប៉ុណ្ណោះ (មិនជ្រើស type="email" ទេ)។'
    },
    'combined': {
      title: '.card .btn',
      desc: 'Combined Selector: នេះជាការរួមបញ្ចូលគ្នានៃ Class Selector និង Descendant Selector ដើម្បីជ្រើសរើសប៊ូតុង <code>.btn</code> ដែលស្ថិតនៅក្នុង <code>.card</code> ឱ្យបានជាក់លាក់។'
    }
  };

  selectorBtns.forEach(btn => {
    // Make them focusable and clickable
    btn.addEventListener('click', () => {
      // Reset all buttons and nodes
      selectorBtns.forEach(b => b.classList.remove('active'));
      domNodes.forEach(n => n.classList.remove('targeted'));
      
      // Activate clicked button
      btn.classList.add('active');
      
      const type = btn.getAttribute('data-target-type');
      
      // Target specific nodes based on type
      switch(type) {
        case 'element':
          // p
          document.querySelector('[data-node="p"]').classList.add('targeted');
          document.querySelector('[data-node="p-descendant"]').classList.add('targeted');
          break;
        case 'class':
          // .card
          document.querySelector('[data-node="card"]').classList.add('targeted');
          break;
        case 'id':
          // #header
          document.querySelector('[data-node="header"]').classList.add('targeted');
          break;
        case 'universal':
          // *
          domNodes.forEach(n => n.classList.add('targeted'));
          break;
        case 'grouping':
          // h2, p
          document.querySelector('[data-node="h2"]').classList.add('targeted');
          document.querySelector('[data-node="p"]').classList.add('targeted');
          document.querySelector('[data-node="p-descendant"]').classList.add('targeted');
          break;
        case 'descendant':
          // .card p (all p inside card)
          document.querySelector('[data-node="p"]').classList.add('targeted');
          document.querySelector('[data-node="p-descendant"]').classList.add('targeted');
          break;
        case 'child':
          // .card > p (only direct child p)
          document.querySelector('[data-node="p"]').classList.add('targeted');
          // Note: p-descendant is inside section, so it's not a direct child of .card
          break;
        case 'attribute':
          // input[type="text"]
          document.querySelector('[data-node="input-text"]').classList.add('targeted');
          break;
        case 'combined':
          // .card .btn
          document.querySelector('[data-node="btn"]').classList.add('targeted');
          break;
      }
      
      // Update Explanation Panel
      if (explanations[type]) {
        expTitle.innerHTML = `<code>${explanations[type].title}</code>`;
        expDesc.innerHTML = explanations[type].desc;
      }
    });
  });
}

// 3. Code Studio (Mini Challenge)
function initCodeStudio() {
  const htmlEditor = document.getElementById('htmlEditor');
  const cssEditor = document.getElementById('cssEditor');
  const runBtn = document.getElementById('runCodeBtn');
  const iframe = document.getElementById('liveOutput');
  
  const tabs = document.querySelectorAll('.editor-tab');
  const editors = document.querySelectorAll('.code-editor');
  
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      editors.forEach(e => e.classList.remove('active'));
      
      tab.classList.add('active');
      const fileType = tab.getAttribute('data-file');
      document.getElementById(fileType + 'Editor').classList.add('active');
    });
  });
  
  // Initial Run
  runCode();
  
  // Run on button click
  runBtn.addEventListener('click', runCode);
  
  function runCode() {
    const htmlCode = htmlEditor.value;
    const cssCode = cssEditor.value;
    
    // Construct the complete HTML document to render in iframe
    const completeDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
      </body>
      </html>
    `;
    
    // Write to iframe
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(completeDoc);
    iframeDoc.close();
  }
}

// 4. Knowledge Quiz
function initQuiz() {
  const container = document.getElementById('quizContainer');
  // From css-curriculum-data.js -> lesson 3
  if (typeof window.curriculumData === 'undefined') return;
  
  const lessonData = window.curriculumData.find(l => l.id === "CSS-L3");
  if (!lessonData || !lessonData.quiz) return;
  
  let quizHTML = '';
  lessonData.quiz.forEach((q, index) => {
    quizHTML += `
      <div class="quiz-question" id="q${index}">
        <h3>សំណួរទី ${index + 1}: ${q.question}</h3>
        <div class="options">
    `;
    
    q.options.forEach((opt, optIndex) => {
      quizHTML += `
        <label class="option-label">
          <input type="radio" name="q${index}" value="${optIndex}">
          <span>${opt}</span>
        </label>
      `;
    });
    
    quizHTML += `
        </div>
        <div class="feedback" id="feedback-q${index}" style="display:none;"></div>
      </div>
    `;
  });
  
  quizHTML += `<button class="btn btn-primary" id="submitQuizBtn" style="margin-top:20px;">ដាក់ស្នើចម្លើយ (Submit)</button>`;
  container.innerHTML = quizHTML;
  
  // Handle Submit
  document.getElementById('submitQuizBtn').addEventListener('click', () => {
    lessonData.quiz.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      const feedbackDiv = document.getElementById(`feedback-q${index}`);
      
      if (!selected) {
        feedbackDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> សូមជ្រើសរើសចម្លើយ។';
        feedbackDiv.className = 'feedback warning';
        feedbackDiv.style.display = 'block';
        return;
      }
      
      const selectedVal = parseInt(selected.value);
      if (selectedVal === q.correct) {
        feedbackDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>ត្រឹមត្រូវ!</strong> ${q.explanation}`;
        feedbackDiv.className = 'feedback success';
      } else {
        feedbackDiv.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>មិនត្រឹមត្រូវ!</strong> ${q.explanation}`;
        feedbackDiv.className = 'feedback error';
      }
      feedbackDiv.style.display = 'block';
    });
  });
}
