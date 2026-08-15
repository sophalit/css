/**
 * CSS Chapter — Interactive Visual Learning Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // ═══ DOM References ═══
  const navbar = document.getElementById('navbar');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const searchInput = document.getElementById('searchInput');
  const filterGroup = document.getElementById('filterGroup');
  const lessonsGrid = document.getElementById('lessonsGrid');
  const outcomesGrid = document.getElementById('outcomesGrid');

  // Stats
  const statLessons = document.getElementById('statLessons');
  const statTopics = document.getElementById('statTopics');
  const progressPct = document.getElementById('progressPct');
  const progressFill = document.getElementById('progressFill');
  const progressCount = document.getElementById('progressCount');

  // Modal
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const launchStudioBtn = document.getElementById('launchStudioBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalBadges = document.getElementById('modalBadges');
  const modalTabs = document.getElementById('modalTabs');
  const topicsChecklist = document.getElementById('topicsChecklist');
  const objectivesList = document.getElementById('objectivesList');
  const termsGrid = document.getElementById('termsGrid');
  const codeEditor = document.getElementById('codeEditor');
  const previewFrame = document.getElementById('previewFrame');
  const quizArea = document.getElementById('quizArea');
  const lessonIndicator = document.getElementById('lessonIndicator');
  const prevLessonBtn = document.getElementById('prevLessonBtn');
  const nextLessonBtn = document.getElementById('nextLessonBtn');

  // ═══ State ═══
  let currentLessonIndex = 0;
  let currentCodeFile = 'html';
  let searchQuery = '';
  let activeFilter = 'all';
  let completedTopics = JSON.parse(localStorage.getItem('css_chapter_progress') || '[]');

  // ═══ Initialize ═══
  initTheme();
  initStats();
  renderFilters();
  renderLessons();
  renderOutcomes();
  initScrollEffect();

  // ═══ Theme ═══
  function initTheme() {
    const saved = localStorage.getItem('css_chapter_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);

    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('css_chapter_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  // ═══ Scroll Effect ═══
  function initScrollEffect() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ═══ Stats ═══
  function initStats() {
    let topicCount = 0;
    CSS_CURRICULUM.lessons.forEach(l => topicCount += l.topics.length);
    statLessons.textContent = CSS_CURRICULUM.lessons.length;
    statTopics.textContent = topicCount;
    updateProgressUI();
  }

  function updateProgressUI() {
    let totalTopics = 0;
    CSS_CURRICULUM.lessons.forEach(l => totalTopics += l.topics.length);
    const completed = completedTopics.length;
    const pct = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

    progressPct.textContent = pct + '%';
    progressFill.style.width = pct + '%';
    progressCount.textContent = `${completed} / ${totalTopics}`;
  }

  function saveProgress() {
    localStorage.setItem('css_chapter_progress', JSON.stringify(completedTopics));
    updateProgressUI();
    renderLessons(); // Update card progress bars
  }

  // ═══ Filters ═══
  function renderFilters() {
    const categories = [
      { id: 'all', label: 'ទាំងអស់', icon: 'fa-solid fa-layer-group' },
      { id: 'basics', label: 'មូលដ្ឋានគ្រឹះ (1-4)', icon: 'fa-solid fa-seedling' },
      { id: 'styling', label: 'Styling (5-8)', icon: 'fa-solid fa-palette' },
      { id: 'layout', label: 'Layout (9-13)', icon: 'fa-solid fa-grip' },
      { id: 'components', label: 'Components (14-16)', icon: 'fa-solid fa-puzzle-piece' },
      { id: 'advanced', label: 'Advanced (17-20)', icon: 'fa-solid fa-rocket' }
    ];

    filterGroup.innerHTML = categories.map(c => `
      <button class="filter-pill ${c.id === 'all' ? 'active' : ''}" data-filter="${c.id}">
        <i class="${c.icon}"></i> ${c.label}
      </button>
    `).join('');

    filterGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      activeFilter = pill.dataset.filter;
      filterGroup.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderLessons();
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderLessons();
    });
  }

  function filterLessons() {
    let filtered = [...CSS_CURRICULUM.lessons];

    // Category filter
    if (activeFilter !== 'all') {
      const ranges = {
        basics: [0, 3],
        styling: [4, 7],
        layout: [8, 12],
        components: [13, 15],
        advanced: [16, 19]
      };
      const [start, end] = ranges[activeFilter] || [0, 19];
      filtered = filtered.filter((_, i) => i >= start && i <= end);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(l =>
        l.title.toLowerCase().includes(searchQuery) ||
        l.titleEn.toLowerCase().includes(searchQuery) ||
        l.topics.some(t => t.toLowerCase().includes(searchQuery)) ||
        l.description.toLowerCase().includes(searchQuery)
      );
    }

    return filtered;
  }

  // ═══ Render Lessons Grid ═══
  function renderLessons() {
    const lessons = filterLessons();

    if (lessons.length === 0) {
      lessonsGrid.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-search"></i>
          <p>រកមិនឃើញមេរៀនដែលស្វែងរក។ សូមព្យាយាមពាក្យផ្សេង។</p>
        </div>
      `;
      return;
    }

    lessonsGrid.innerHTML = lessons.map(lesson => {
      const lessonIndex = CSS_CURRICULUM.lessons.indexOf(lesson);
      const completedCount = lesson.topics.filter(t => completedTopics.includes(t)).length;
      const totalCount = lesson.topics.length;
      const progressPctLesson = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      return `
        <div class="lesson-card" data-lesson-index="${lessonIndex}" style="--card-accent: ${lesson.color}">
          <div class="lesson-card-header">
            <div class="lesson-icon" style="background: ${lesson.color}">
              <i class="${lesson.icon}"></i>
            </div>
            <div>
              <div class="lesson-number">${lesson.number} • ${lesson.titleEn}</div>
              <div class="lesson-title">${lesson.title}</div>
            </div>
          </div>
          <div class="lesson-card-body">${lesson.description}</div>
          <div class="lesson-card-footer">
            <span class="topic-count">
              <i class="fa-solid fa-list"></i> ${totalCount} ប្រធានបទ
            </span>
            <div class="lesson-progress-bar">
              <div class="lesson-progress-bar-fill" style="width: ${progressPctLesson}%"></div>
            </div>
            <button class="open-btn"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners
    lessonsGrid.querySelectorAll('.lesson-card').forEach(card => {
      card.addEventListener('click', () => {
        const index = parseInt(card.dataset.lessonIndex);
        openLesson(index);
      });
    });

    // Staggered entrance animation
    lessonsGrid.querySelectorAll('.lesson-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  }

  // ═══ Render Outcomes ═══
  function renderOutcomes() {
    outcomesGrid.innerHTML = CSS_CURRICULUM.learningOutcomes.map(outcome => `
      <div class="outcome-item">
        <div class="outcome-check"><i class="fa-solid fa-check"></i></div>
        <div class="outcome-text">${outcome}</div>
      </div>
    `).join('');
  }

  // ═══════════════════════════════════════════
  // MODAL LOGIC
  // ═══════════════════════════════════════════

  function openLesson(index) {
    currentLessonIndex = index;
    const lesson = CSS_CURRICULUM.lessons[index];

    // Header
    modalBadges.innerHTML = `
      <span class="badge badge-chapter"><i class="fa-solid fa-bookmark"></i> ${lesson.number}</span>
      <span class="badge badge-level"><i class="fa-solid fa-code"></i> ${lesson.titleEn}</span>
    `;
    modalTitle.textContent = lesson.title;
    modalDesc.textContent = lesson.description;

    // Reset to first tab
    setActiveTab('tab-topics');

    // Render content
    renderTopics(lesson);
    renderObjectives(lesson);
    renderTerms(lesson);
    renderCodeStudio(lesson);
    renderQuiz(lesson);
    updateNavButtons();

    // Open modal
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeModalBtn.addEventListener('click', closeModal);
  
  if (launchStudioBtn) {
    launchStudioBtn.addEventListener('click', () => {
      if (currentLessonIndex === 0) {
        window.location.href = 'lesson1.html';
      } else if (currentLessonIndex === 1) {
        window.location.href = 'lesson2.html';
      } else if (currentLessonIndex === 2) {
        window.location.href = 'lesson3.html';
      } else {
        alert('Interactive Visual Studio សម្រាប់មេរៀននេះកំពុងស្ថិតក្នុងការអភិវឌ្ឍន៍។ សូមរង់ចាំការអាប់ដេតបន្ទាប់!');
      }
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });

  // Tab Navigation
  modalTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    setActiveTab(btn.dataset.tab);
  });

  function setActiveTab(tabId) {
    modalTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const targetBtn = modalTabs.querySelector(`[data-tab="${tabId}"]`);
    if (targetBtn) targetBtn.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    const targetPane = document.getElementById(tabId);
    if (targetPane) targetPane.classList.add('active');
  }

  // Lesson Navigation
  prevLessonBtn.addEventListener('click', () => {
    if (currentLessonIndex > 0) {
      openLesson(currentLessonIndex - 1);
    }
  });

  nextLessonBtn.addEventListener('click', () => {
    if (currentLessonIndex < CSS_CURRICULUM.lessons.length - 1) {
      openLesson(currentLessonIndex + 1);
    }
  });

  function updateNavButtons() {
    prevLessonBtn.disabled = currentLessonIndex === 0;
    nextLessonBtn.disabled = currentLessonIndex === CSS_CURRICULUM.lessons.length - 1;
    lessonIndicator.textContent = `មេរៀនទី ${currentLessonIndex + 1} នៃ ${CSS_CURRICULUM.lessons.length}`;
  }

  // ═══ Render Topics ═══
  function renderTopics(lesson) {
    topicsChecklist.innerHTML = lesson.topics.map(topic => {
      const isCompleted = completedTopics.includes(topic);
      return `
        <div class="topic-item ${isCompleted ? 'completed' : ''}" data-topic="${escapeHtml(topic)}">
          <div class="topic-checkbox"><i class="fa-solid fa-check"></i></div>
          <span class="topic-label">${topic}</span>
        </div>
      `;
    }).join('');

    topicsChecklist.querySelectorAll('.topic-item').forEach(item => {
      item.addEventListener('click', () => {
        const topic = item.dataset.topic;
        if (completedTopics.includes(topic)) {
          completedTopics = completedTopics.filter(t => t !== topic);
          item.classList.remove('completed');
        } else {
          completedTopics.push(topic);
          item.classList.add('completed');
        }
        saveProgress();
      });
    });
  }

  // ═══ Render Objectives ═══
  function renderObjectives(lesson) {
    if (!lesson.objectives || lesson.objectives.length === 0) {
      objectivesList.innerHTML = '<p class="text-muted">គ្មានគោលបំណងសម្រាប់មេរៀននេះ។</p>';
      return;
    }
    objectivesList.innerHTML = lesson.objectives.map((obj, i) => `
      <div class="objective-item">
        <div class="objective-num">${i + 1}</div>
        <div class="objective-text">${obj}</div>
      </div>
    `).join('');
  }

  // ═══ Render Key Terms ═══
  function renderTerms(lesson) {
    if (!lesson.keyTerms || lesson.keyTerms.length === 0) {
      termsGrid.innerHTML = '<p class="text-muted">គ្មានពាក្យគន្លឹះសម្រាប់មេរៀននេះ។</p>';
      return;
    }
    termsGrid.innerHTML = lesson.keyTerms.map(kt => `
      <div class="term-card">
        <div class="term-name">${kt.term}</div>
        <div class="term-definition">${kt.definition}</div>
      </div>
    `).join('');
  }

  // ═══ Code Studio ═══
  let codeStudioInitialized = false;

  function renderCodeStudio(lesson) {
    if (!lesson.codeExample) {
      codeEditor.value = '// មិនមាន Code Example សម្រាប់មេរៀននេះ';
      return;
    }

    currentCodeFile = 'html';
    codeEditor.value = lesson.codeExample.html || '';

    // Reset tab active state
    document.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
    const htmlTabBtn = document.querySelector('.code-tab-btn[data-file="html"]');
    if (htmlTabBtn) htmlTabBtn.classList.add('active');

    // Only attach event delegation once
    if (!codeStudioInitialized) {
      codeStudioInitialized = true;

      // File tab switching via event delegation on parent
      const codeTabs = document.querySelector('.code-tabs');
      if (codeTabs) {
        codeTabs.addEventListener('click', (e) => {
          const fileBtn = e.target.closest('.code-tab-btn');
          const runBtn = e.target.closest('.run-btn');

          if (fileBtn && fileBtn.dataset.file) {
            currentCodeFile = fileBtn.dataset.file;
            document.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
            fileBtn.classList.add('active');

            const currentLesson = CSS_CURRICULUM.lessons[currentLessonIndex];
            if (currentLesson && currentLesson.codeExample) {
              codeEditor.value = currentLesson.codeExample[currentCodeFile] || '';
            }
          }

          if (runBtn) {
            runCode();
          }
        });
      }
    }
  }

  function runCode() {
    const lesson = CSS_CURRICULUM.lessons[currentLessonIndex];
    if (!lesson.codeExample) return;

    // Save current file content
    lesson.codeExample[currentCodeFile] = codeEditor.value;

    const htmlCode = lesson.codeExample.html || '';
    const cssCode = lesson.codeExample.css || '';
    const jsCode = lesson.codeExample.js || '';

    const frame = document.getElementById('previewFrame');
    const doc = frame.contentDocument || frame.contentWindow.document;

    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Kantumruy Pro', sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
      </body>
      </html>
    `;

    doc.open();
    doc.write(content);
    doc.close();
  }

  // ═══ Quiz ═══
  function renderQuiz(lesson) {
    if (!lesson.quiz || lesson.quiz.length === 0) {
      quizArea.innerHTML = '<p class="text-muted">គ្មាន Quiz សម្រាប់មេរៀននេះ។</p>';
      return;
    }

    let answeredCount = 0;
    let correctCount = 0;

    quizArea.innerHTML = lesson.quiz.map((q, qIndex) => `
      <div class="quiz-question-card" data-q="${qIndex}">
        <div class="quiz-q-text">សំណួរ ${qIndex + 1}: ${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oIndex) => `
            <button class="quiz-option" data-q="${qIndex}" data-o="${oIndex}">${opt}</button>
          `).join('')}
        </div>
        <div class="quiz-explanation" id="explanation-${qIndex}">
          <i class="fa-solid fa-lightbulb" style="color: #f59e0b; margin-right: 6px;"></i>
          ${q.explanation}
        </div>
      </div>
    `).join('') + `<div id="quizScoreContainer"></div>`;

    quizArea.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.q);
        const oIdx = parseInt(btn.dataset.o);
        const question = lesson.quiz[qIdx];
        const card = btn.closest('.quiz-question-card');

        // Prevent re-answering
        if (card.classList.contains('answered')) return;
        card.classList.add('answered');

        answeredCount++;

        // Mark correct/wrong
        const options = card.querySelectorAll('.quiz-option');
        options.forEach((opt, i) => {
          if (i === question.correct) {
            opt.classList.add('correct');
          } else if (i === oIdx && i !== question.correct) {
            opt.classList.add('wrong');
          }
          opt.style.pointerEvents = 'none';
        });

        if (oIdx === question.correct) correctCount++;

        // Show explanation
        const explEl = document.getElementById(`explanation-${qIdx}`);
        if (explEl) explEl.classList.add('show');

        // Show score if all answered
        if (answeredCount === lesson.quiz.length) {
          const scoreContainer = document.getElementById('quizScoreContainer');
          const pctScore = Math.round((correctCount / lesson.quiz.length) * 100);
          scoreContainer.innerHTML = `
            <div class="quiz-score-card" style="animation: fadeSlideIn 0.5s ease">
              <h3>🎉 លទ្ធផល Quiz</h3>
              <div class="score">${correctCount}/${lesson.quiz.length}</div>
              <p>${pctScore >= 70 ? 'ពូកែណាស់! 👏' : 'សាកល្បងម្ដងទៀត! 💪'}</p>
            </div>
          `;
        }
      });
    });
  }

  // ═══ Utilities ═══
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
