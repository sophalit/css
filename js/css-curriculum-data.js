/**
 * ជំពូកទី២៖ មូលដ្ឋានគ្រឹះនៃ CSS — Complete Curriculum Data
 * 20 មេរៀន, 200+ ប្រធានបទ, Interactive Visual Learning
 */

const CSS_CURRICULUM = {
  chapter: {
    id: 2,
    number: "ជំពូកទី២",
    title: "មូលដ្ឋានគ្រឹះនៃ CSS",
    titleEn: "CSS Fundamentals & Responsive Web Design",
    icon: "fa-brands fa-css3-alt",
    accent: "#3b82f6",
    accentGradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    level: "Beginner → Intermediate",
    estimatedHours: 60,
    totalLessons: 20,
    description: "រៀនសូត្រពីមូលដ្ឋានគ្រឹះ CSS ចាប់ពី Syntax, Selectors, Box Model, Flexbox, Grid, Animations រហូតដល់ Responsive Design និង Mini Project ពេញលេញ។"
  },

  lessons: [
    // ===== មេរៀនទី១ =====
    {
      id: "CSS-L1",
      number: "មេរៀនទី១",
      title: "សេចក្ដីផ្ដើមនៃ CSS",
      titleEn: "Introduction to CSS",
      icon: "fa-solid fa-paintbrush",
      color: "#3b82f6",
      description: "យល់ដឹងអំពី CSS ជាអ្វី តួនាទីរបស់វាក្នុងការរចនាគេហទំព័រ ទំនាក់ទំនងជាមួយ HTML និងការវិវត្តន៍ពី CSS2 ទៅ CSS3។",
      topics: [
        "1.1 តើ CSS ជាអ្វី?",
        "1.2 CSS — Cascading Style Sheets",
        "1.3 តួនាទីរបស់ CSS ក្នុងការរចនាគេហទំព័រ",
        "1.4 ទំនាក់ទំនងរវាង HTML និង CSS",
        "1.5 អត្ថប្រយោជន៍នៃការប្រើប្រាស់ CSS",
        "1.6 CSS និងការរចនា User Interface",
        "1.7 CSS2 និង CSS3",
        "1.8 របៀបដែល Browser អាន CSS"
      ],
      objectives: [
        "ពន្យល់បានថា CSS គឺជាអ្វី និងហេតុអ្វីត្រូវប្រើ",
        "យល់ពីទំនាក់ទំនងរវាង HTML (Structure) និង CSS (Style)",
        "ស្គាល់ពីអត្ថប្រយោជន៍នៃការប្រើ CSS ក្នុង Web Design",
        "បែងចែកភាពខុសគ្នារវាង CSS2 និង CSS3",
        "យល់ពីដំណើរការ Browser render CSS"
      ],
      keyTerms: [
        { term: "CSS", definition: "Cascading Style Sheets — ភាសាសម្រាប់កំណត់រូបរាង (Style) ទៅលើ HTML Elements" },
        { term: "Cascading", definition: "យន្តការដែលកំណត់អាទិភាព Style ណាមួយត្រូវបង្ហាញ នៅពេល Style ច្រើនប្រកួតប្រជែងគ្នា" },
        { term: "Stylesheet", definition: "ឯកសារដែលផ្ទុក CSS Rules សម្រាប់កំណត់រូបរាងទំព័រ" },
        { term: "Rendering", definition: "ដំណើរការដែល Browser បកស្រាយកូដ HTML + CSS រួចបង្ហាញជារូបភាពលើអេក្រង់" },
        { term: "User Interface (UI)", definition: "ផ្ទៃដែលអ្នកប្រើប្រាស់ធ្វើអន្តរកម្មជាមួយ — ពណ៌ Button Layout ទំរង់ Form ជាដើម" }
      ],
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>ទំព័រដំបូងជាមួយ CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>សួស្តី CSS!</h1>
  <p>នេះជា paragraph ដែលត្រូវបានរចនាដោយ CSS។</p>
  <button class="btn">ចុចខ្ញុំ</button>
</body>
</html>`,
        css: `/* CSS ជាភាសាសម្រាប់តុបតែងរូបរាង */
body {
  font-family: 'Kantumruy Pro', sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  padding: 40px;
  text-align: center;
}

h1 {
  color: #38bdf8;
  font-size: 2.5rem;
  margin-bottom: 16px;
}

p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.btn {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}`,
        js: `// CSS ធ្វើការជាមួយ HTML ដើម្បីបង្ហាញរូបរាង
document.querySelector('.btn').addEventListener('click', () => {
  document.body.style.background = 
    'linear-gradient(135deg, #0f172a, #1e1b4b)';
  alert('🎨 CSS ផ្លាស់ប្តូរ Background ដោយ JavaScript!');
});`
      },
      quiz: [
        {
          question: "តើ CSS តំណាងឱ្យអ្វី?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Syntax Sheets"],
          correct: 1,
          explanation: "CSS មានន័យថា Cascading Style Sheets ជាភាសាសម្រាប់កំណត់រូបរាង (Styling) ទៅ HTML។"
        },
        {
          question: "តើ CSS មានតួនាទីអ្វីក្នុង Web Development?",
          options: ["បង្កើតរចនាសម្ព័ន្ធ", "កំណត់រូបរាង ពណ៌ និង Layout", "ដំណើរការមុខងារ Logic", "គ្រប់គ្រង Database"],
          correct: 1,
          explanation: "CSS ទទួលខុសត្រូវលើរូបរាង Visual (ពណ៌ Font ទំហំ Layout Animation) មិនមែន Structure (HTML) ឬ Logic (JS)។"
        },
        {
          question: "តើ CSS3 ផ្តល់អ្វីថ្មីបន្ថែមពី CSS2?",
          options: ["Database Connection", "Animations, Flexbox, Grid, Gradients", "Server Hosting", "JavaScript Functions"],
          correct: 1,
          explanation: "CSS3 បានបន្ថែមសមត្ថភាពថ្មីៗដូចជា Animations, Transitions, Flexbox, Grid, Media Queries, Gradients។"
        }
      ]
    },

    // ===== មេរៀនទី២ =====
    {
      id: "CSS-L2",
      number: "មេរៀនទី២",
      title: "CSS Syntax និងការបញ្ចូល CSS ក្នុង HTML",
      titleEn: "CSS Syntax & Including CSS in HTML",
      icon: "fa-solid fa-code",
      color: "#8b5cf6",
      description: "រៀនអំពី CSS Syntax (Selector, Property, Value), Declaration Block, CSS Comments និង ៣ វិធីភ្ជាប់ CSS ជាមួយ HTML។",
      topics: [
        "2.1 CSS Syntax",
        "2.2 Selector",
        "2.3 Property",
        "2.4 Value",
        "2.5 Declaration និង Declaration Block",
        "2.6 CSS Comments",
        "2.7 Inline CSS",
        "2.8 Internal CSS",
        "2.9 External CSS",
        "2.10 ការភ្ជាប់ CSS File ជាមួយ HTML",
        "2.11 ការប្រើ <link>",
        "2.12 ការប្រើ @import",
        "2.13 ការរៀបចំ Folder សម្រាប់ HTML និង CSS"
      ],
      objectives: [
        "សរសេរ CSS Syntax បានត្រឹមត្រូវ (Selector, Property, Value)",
        "ប្រើ CSS Comments សម្រាប់ Documenting Code",
        "បែងចែក Inline, Internal និង External CSS បាន",
        "ភ្ជាប់ External CSS ជាមួយ HTML ដោយប្រើ <link> និង @import"
      ],
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax Example</title>
  <!-- External CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- Internal CSS -->
  <style>
    .highlight { background: #fef08a; padding: 4px 8px; }
  </style>
</head>
<body>
  <h1>CSS Syntax មូលដ្ឋាន</h1>
  <!-- Inline CSS -->
  <p style="color: red;">នេះជា Inline CSS</p>
  <p class="highlight">នេះជា Internal CSS</p>
  <p class="external-style">នេះជា External CSS</p>
</body>
</html>`,
        css: `/* === CSS Syntax Structure === */
/* selector { property: value; } */

/* Element Selector */
h1 {
  color: #38bdf8;        /* Property: color, Value: #38bdf8 */
  font-size: 2rem;       /* Property: font-size, Value: 2rem */
  text-align: center;    /* Property: text-align, Value: center */
}

/* Class Selector */
.external-style {
  color: #4ade80;
  font-weight: bold;
  border-left: 4px solid #4ade80;
  padding-left: 12px;
}

/* Declaration Block: ទាំងអស់នៅក្នុង { } */
body {
  font-family: 'Kantumruy Pro', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  padding: 40px;
  line-height: 1.8;
}`,
        js: `// បង្ហាញភាពខុសគ្នារវាង 3 វិធីភ្ជាប់ CSS
console.log('Inline CSS: style="" attribute ដាក់ដោយផ្ទាល់');
console.log('Internal CSS: <style> tag ក្នុង <head>');
console.log('External CSS: <link> ភ្ជាប់ .css file ខាងក្រៅ');`
      },
      quiz: [
        {
          question: "តើ CSS Rule មួយមានផ្នែកសំខាន់ប៉ុន្មាន?",
          options: ["២ ផ្នែក: Tag និង Style", "៣ ផ្នែក: Selector, Property, Value", "១ ផ្នែក: Style", "៤ ផ្នែក: HTML, CSS, JS, PHP"],
          correct: 1,
          explanation: "CSS Rule មាន Selector (ជ្រើសរើស Element), Property (លក្ខណៈ) និង Value (តម្លៃ) ឧ. h1 { color: blue; }"
        },
        {
          question: "តើវិធីណាល្អបំផុតសម្រាប់ Project ធំ?",
          options: ["Inline CSS", "Internal CSS", "External CSS", "មិនបាច់ CSS"],
          correct: 2,
          explanation: "External CSS អាចប្រើឡើងវិញ (Reusable) ងាយស្រួល Maintain និង Cache បាន សម្រាប់ Project ធំល្អបំផុត។"
        }
      ]
    },

    // ===== មេរៀនទី៣ =====
    {
      id: "CSS-L3",
      number: "មេរៀនទី៣",
      title: "CSS Selectors និង Cascading",
      titleEn: "CSS Selectors & Cascading",
      icon: "fa-solid fa-bullseye",
      color: "#06b6d4",
      description: "ស្វែងយល់ពី Selectors ផ្សេងៗ (Element, Class, ID, Universal, Grouping, Descendant, Child, Attribute) និងការរួមបញ្ចូល Selectors។",
      topics: [
        "3.1 Element Selector",
        "3.2 Class Selector",
        "3.3 ID Selector",
        "3.4 Universal Selector",
        "3.5 Grouping Selector",
        "3.6 Descendant Selector",
        "3.7 Child Selector",
        "3.8 Attribute Selector",
        "3.9 ការរួមបញ្ចូល Selectors",
        "3.10 Naming Class និង ID ឱ្យមានរបៀប"
      ],
      objectives: [
        "ប្រើ Element, Class, ID Selector បានត្រឹមត្រូវ",
        "យល់ពី Universal Selector (*) និង Grouping Selector",
        "ប្រើ Descendant និង Child Selector បាន",
        "ដាក់ឈ្មោះ Class និង ID តាមស្តង់ដារ"
      ],
      codeExample: {
        html: `<div class="container">
  <h1 id="main-title">CSS Selectors</h1>
  <p class="intro">Element Selector ជ្រើសរើសតាមឈ្មោះ Tag</p>
  <ul class="nav-list">
    <li><a href="#">ទំព័រដើម</a></li>
    <li><a href="#" class="active">មេរៀន</a></li>
    <li><a href="#">ទំនាក់ទំនង</a></li>
  </ul>
  <input type="text" placeholder="Attribute Selector">
  <input type="email" placeholder="Email here">
</div>`,
        css: `/* Element Selector */
h1 { color: #38bdf8; }

/* Class Selector */
.intro { color: #94a3b8; font-style: italic; }

/* ID Selector */
#main-title { border-bottom: 3px solid #3b82f6; }

/* Universal Selector */
* { box-sizing: border-box; }

/* Grouping Selector */
h1, h2, h3 { font-family: 'Kantumruy Pro', sans-serif; }

/* Descendant Selector */
.nav-list a { color: #e2e8f0; text-decoration: none; }

/* Child Selector */
.nav-list > li { padding: 8px 16px; }

/* Attribute Selector */
input[type="text"] { border: 2px solid #3b82f6; }
input[type="email"] { border: 2px solid #8b5cf6; }

/* Combining Selectors */
.nav-list a.active { 
  color: #3b82f6; 
  font-weight: bold;
  border-bottom: 2px solid #3b82f6;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ Selector ណាមួយជ្រើសរើស Element ទាំងអស់នៅក្នុងទំព័រ?",
          options: ["# Selector", ". Selector", "* Universal Selector", "& Selector"],
          correct: 2,
          explanation: "Universal Selector (*) ជ្រើសរើស Elements ទាំងអស់នៅក្នុង Document។"
        },
        {
          question: "តើ Descendant Selector សរសេរយ៉ាងម៉េច?",
          options: [".parent > .child", ".parent .descendant", ".parent + .sibling", ".parent ~ .sibling"],
          correct: 1,
          explanation: "Descendant Selector ប្រើ Space (ចន្លោះ) រវាង Selectors ឧ. .nav a ជ្រើសរើស a ទាំងអស់ក្នុង .nav។"
        }
      ]
    },

    // ===== មេរៀនទី៤ =====
    {
      id: "CSS-L4",
      number: "មេរៀនទី៤",
      title: "Cascade, Inheritance និង Specificity",
      titleEn: "Cascade, Inheritance & Specificity",
      icon: "fa-solid fa-layer-group",
      color: "#f59e0b",
      description: "ស្វែងយល់ពីយន្តការ Cascade, CSS Inheritance, Parent/Child Elements និង Selector Specificity ដើម្បីដោះស្រាយ Style Conflict។",
      topics: [
        "4.1 តើ Cascade ជាអ្វី?",
        "4.2 CSS Inheritance",
        "4.3 Parent និង Child Elements",
        "4.4 Selector Priority",
        "4.5 CSS Specificity",
        "4.6 Inline vs Internal vs External CSS",
        "4.7 ការដោះស្រាយ Style Conflict"
      ],
      objectives: [
        "ពន្យល់បានពីយន្តការ Cascade ក្នុង CSS",
        "យល់ពី Inheritance និង Properties ណាខ្លះត្រូវ Inherit",
        "គណនា Specificity Score បាន",
        "ដោះស្រាយ Style Conflict បានត្រឹមត្រូវ"
      ],
      codeExample: {
        html: `<div class="parent">
  <h1 id="title" class="heading" style="color: red;">
    តើពណ៌អ្វីឈ្នះ? 🤔
  </h1>
  <p>Inherited styles ពី Parent</p>
</div>`,
        css: `/* Specificity ការប្រកួតប្រជែង */

/* Specificity: 0-0-1 (Element) */
h1 { color: blue; }

/* Specificity: 0-1-0 (Class) */
.heading { color: green; }

/* Specificity: 1-0-0 (ID) */
#title { color: purple; }

/* Inline style: 1-0-0-0 (ខ្ពស់បំផុត) */
/* style="color: red;" ⬆️ ឈ្នះគេទាំងអស់ */

/* === Inheritance === */
.parent {
  font-family: 'Kantumruy Pro', sans-serif;
  color: #e2e8f0;     /* ត្រូវ Inherit ទៅ child */
  font-size: 18px;    /* ត្រូវ Inherit ទៅ child */
  border: 1px solid;  /* មិន Inherit ទេ */
}

/* Specificity Calculator:
   Inline: 1,0,0,0
   ID:     0,1,0,0
   Class:  0,0,1,0
   Element:0,0,0,1
*/`,
        js: ``
      },
      quiz: [
        {
          question: "តើ Specificity ណាខ្ពស់ជាងគេ?",
          options: ["Element Selector", "Class Selector", "ID Selector", "Inline Style"],
          correct: 3,
          explanation: "Inline Style មាន Specificity ខ្ពស់ជាងគេ (1,0,0,0) បន្ទាប់មក ID (0,1,0,0) Class (0,0,1,0) Element (0,0,0,1)។"
        }
      ]
    },

    // ===== មេរៀនទី៥ =====
    {
      id: "CSS-L5",
      number: "មេរៀនទី៥",
      title: "ការរចនាពណ៌ ផ្ទៃខាងក្រោយ និងអត្ថបទ",
      titleEn: "CSS Colors & Backgrounds",
      icon: "fa-solid fa-palette",
      color: "#ec4899",
      description: "រៀនអំពី Color Systems (Name, HEX, RGB, RGBA), Background Properties, Gradient Backgrounds និង Background Shorthand។",
      topics: [
        "5.1 color",
        "5.2 background-color",
        "5.3 Color Name",
        "5.4 HEX Color",
        "5.5 RGB និង RGBA",
        "5.6 background-image",
        "5.7 background-repeat",
        "5.8 background-position",
        "5.9 background-size",
        "5.10 background-attachment",
        "5.11 Background Shorthand",
        "5.12 ការប្រើ Gradient Background"
      ],
      objectives: [
        "ប្រើប្រព័ន្ធពណ៌ HEX, RGB, RGBA បាន",
        "កំណត់ Background Image និង Properties បាន",
        "បង្កើត Gradient Background បាន",
        "ប្រើ Background Shorthand Property បាន"
      ],
      codeExample: {
        html: `<div class="color-demo">
  <div class="box box-named">Color Name</div>
  <div class="box box-hex">HEX Color</div>
  <div class="box box-rgb">RGB Color</div>
  <div class="box box-rgba">RGBA Color</div>
  <div class="box box-gradient">Gradient</div>
</div>`,
        css: `/* Color Systems */
.box { padding: 20px; margin: 10px; border-radius: 12px; text-align: center; color: white; font-weight: bold; }

/* Color Name */
.box-named { background-color: coral; }

/* HEX Color */
.box-hex { background-color: #3b82f6; }

/* RGB Color */
.box-rgb { background-color: rgb(139, 92, 246); }

/* RGBA (with transparency) */
.box-rgba { background-color: rgba(236, 72, 153, 0.7); }

/* Linear Gradient */
.box-gradient {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
}

/* Background Image Properties */
.hero-section {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* Shorthand: */
  /* background: url('hero.jpg') center/cover no-repeat fixed; */
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ RGBA ខុសពី RGB យ៉ាងម៉េច?",
          options: ["RGBA មិនមានពណ៌ក្រហម", "RGBA បន្ថែម Alpha (Transparency)", "RGBA មានតែពណ៌ខៀវ", "មិនមានភាពខុសគ្នា"],
          correct: 1,
          explanation: "RGBA បន្ថែម Alpha channel (0 ទៅ 1) សម្រាប់កំណត់កម្រិតថ្លា (Transparency) របស់ពណ៌។"
        }
      ]
    },

    // ===== មេរៀនទី៦ =====
    {
      id: "CSS-L6",
      number: "មេរៀនទី៦",
      title: "CSS Text និង Fonts",
      titleEn: "CSS Text & Fonts",
      icon: "fa-solid fa-font",
      color: "#14b8a6",
      description: "រៀនអំពី Font Properties, Text Properties, Google Fonts និងការរចនាអក្សរខ្មែរ-អង់គ្លេសលើគេហទំព័រ។",
      topics: [
        "6.1 font-family",
        "6.2 font-size",
        "6.3 font-weight",
        "6.4 font-style",
        "6.5 color",
        "6.6 text-align",
        "6.7 text-decoration",
        "6.8 text-transform",
        "6.9 text-indent",
        "6.10 line-height",
        "6.11 letter-spacing",
        "6.12 word-spacing",
        "6.13 ការរចនាចំណងជើង និងកថាខណ្ឌ",
        "6.14 ការរចនាអក្សរខ្មែរ និងអង់គ្លេស"
      ],
      objectives: [
        "ប្រើ font-family ជាមួយ Google Fonts បាន",
        "កំណត់ font-size, weight, style បាន",
        "ប្រើ text-align, decoration, transform បាន",
        "រចនាអក្សរខ្មែរ និងអង់គ្លេសបានត្រឹមត្រូវ"
      ],
      codeExample: {
        html: `<h1 class="title-km">ចំណងជើងអក្សរខ្មែរ</h1>
<h2 class="title-en">English Heading</h2>
<p class="text-body">នេះជា paragraph ជាភាសាខ្មែរ ដែលមាន line-height ល្អ។</p>`,
        css: `@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700&display=swap');

/* Font Properties */
.title-km {
  font-family: 'Kantumruy Pro', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #f8fafc;
  text-align: center;
  letter-spacing: 1px;
}

.title-en {
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: #3b82f6;
}

/* Text Body */
.text-body {
  font-size: 1.1rem;
  line-height: 1.8;
  word-spacing: 2px;
  text-indent: 2rem;
  color: #94a3b8;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ Property ណាកំណត់គម្លាតរវាងបន្ទាត់?",
          options: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
          correct: 2,
          explanation: "line-height កំណត់គម្លាតរវាងបន្ទាត់ (Line Spacing) សម្រាប់ការអានងាយស្រួល។"
        }
      ]
    },

    // ===== មេរៀនទី៧ =====
    {
      id: "CSS-L7",
      number: "មេរៀនទី៧",
      title: "CSS Box Model និង Element Sizing",
      titleEn: "CSS Box Model & Element Sizing",
      icon: "fa-solid fa-box",
      color: "#f97316",
      description: "ស្វែងយល់ពី CSS Box Model (Content, Padding, Border, Margin), box-sizing property និង Shorthand notations។",
      topics: [
        "7.1 តើ CSS Box Model ជាអ្វី?",
        "7.2 Content",
        "7.3 Padding",
        "7.4 Border",
        "7.5 Margin",
        "7.6 width",
        "7.7 height",
        "7.8 min-width និង max-width",
        "7.9 min-height និង max-height",
        "7.10 box-sizing",
        "7.11 content-box",
        "7.12 border-box",
        "7.13 Margin Shorthand",
        "7.14 Padding Shorthand",
        "7.15 Border Shorthand"
      ],
      objectives: [
        "ពន្យល់បានពី Box Model ទាំង ៤ ស្រទាប់",
        "បែងចែក content-box និង border-box បាន",
        "ប្រើ width, height, min/max Properties បាន",
        "សរសេរ Margin/Padding/Border Shorthand បាន"
      ],
      codeExample: {
        html: `<div class="box-demo content-box-demo">
  <strong>content-box</strong>
  <p>Total = width + padding + border</p>
</div>
<div class="box-demo border-box-demo">
  <strong>border-box ✅</strong>
  <p>Total = width (រួមបញ្ចូល padding + border)</p>
</div>`,
        css: `/* Box Model Visualization */
.box-demo {
  width: 300px;
  padding: 20px;
  border: 4px solid #3b82f6;
  margin: 20px auto;
  border-radius: 12px;
  color: #f8fafc;
  text-align: center;
}

/* content-box (Default) */
.content-box-demo {
  box-sizing: content-box;
  /* Total Width = 300 + 20*2 + 4*2 = 348px */
  background: #dc2626;
}

/* border-box (Recommended ✅) */
.border-box-demo {
  box-sizing: border-box;
  /* Total Width = 300px (padding & border included) */
  background: #16a34a;
}

/* Shorthand Examples */
.shorthand-demo {
  margin: 10px 20px 30px 40px;    /* top right bottom left */
  padding: 16px 24px;              /* vertical horizontal */
  border: 2px solid #e2e8f0;       /* width style color */
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ box-sizing: border-box ធ្វើអ្វី?",
          options: [
            "បន្ថែម Border ខាងក្រៅ width",
            "រួមបញ្ចូល Padding និង Border ក្នុង width",
            "លុប Border ចេញ",
            "កំណត់ Margin ស្វ័យប្រវត្តិ"
          ],
          correct: 1,
          explanation: "border-box រួមបញ្ចូល Padding និង Border ទៅក្នុង width/height ដែលបានកំណត់ ដូច្នេះទំហំសរុបមិនផ្លាស់ប្តូរ។"
        }
      ]
    },

    // ===== មេរៀនទី៨ =====
    {
      id: "CSS-L8",
      number: "មេរៀនទី៨",
      title: "Borders និង Visual Styling",
      titleEn: "Borders & Visual Styling",
      icon: "fa-solid fa-square",
      color: "#6366f1",
      description: "រៀនអំពី Border Properties, Border-radius, Box Shadow, Text Shadow, Opacity និងការរចនា Card/Button Components។",
      topics: [
        "8.1 border-width",
        "8.2 border-style",
        "8.3 border-color",
        "8.4 border-radius",
        "8.5 Rounded Cards",
        "8.6 box-shadow",
        "8.7 text-shadow",
        "8.8 opacity",
        "8.9 ការរចនា Card Component",
        "8.10 ការរចនា Button"
      ],
      objectives: [
        "ប្រើ border properties បាន",
        "បង្កើត Rounded corners ជាមួយ border-radius បាន",
        "ប្រើ box-shadow និង text-shadow បាន",
        "រចនា Card និង Button Components បាន"
      ],
      codeExample: {
        html: `<div class="card">
  <h3>Card Component</h3>
  <p>នេះជា Card ដែលរចនាដោយ CSS</p>
  <button class="btn-primary">Learn More</button>
</div>`,
        css: `/* Card Component */
.card {
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px rgba(59,130,246,0.2);
}

.card h3 {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Button Component */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
}

.btn-primary:hover { opacity: 0.9; }`,
        js: ``
      },
      quiz: [
        {
          question: "តើ border-radius: 50% បង្កើតរាងអ្វី?",
          options: ["ការ៉េ", "រង្វង់ (Circle)", "ត្រីកោណ", "សម្បកពងក្រពើ"],
          correct: 1,
          explanation: "border-radius: 50% បង្វែរ Element ការ៉េ ឲ្យក្លាយជារង្វង់ (Circle) ពេញលេញ។"
        }
      ]
    },

    // ===== មេរៀនទី៩ =====
    {
      id: "CSS-L9",
      number: "មេរៀនទី៩",
      title: "CSS Display និង Positioning",
      titleEn: "CSS Display & Positioning - Normal Flow",
      icon: "fa-solid fa-display",
      color: "#ef4444",
      description: "យល់ពី Normal Document Flow, Block/Inline Elements, Display Properties (block, inline, inline-block, none) និង Visibility/Overflow។",
      topics: [
        "9.1 Normal Flow",
        "9.2 Block-Level Elements",
        "9.3 Inline Elements",
        "9.4 display: block",
        "9.5 display: inline",
        "9.6 display: inline-block",
        "9.7 display: none",
        "9.8 Visibility",
        "9.9 Overflow",
        "9.10 ការគ្រប់គ្រង Element Layout"
      ],
      objectives: [
        "បែងចែក Block និង Inline Elements បាន",
        "ប្រើ display: block, inline, inline-block បាន",
        "យល់ពីភាពខុសគ្នារវាង display: none និង visibility: hidden",
        "គ្រប់គ្រង Overflow Content បាន"
      ],
      codeExample: {
        html: `<div class="block-example">Block Element (ពេញទទឹង)</div>
<span class="inline-example">Inline</span>
<span class="inline-example">Elements</span>
<a class="inline-block-example" href="#">Inline-Block Link</a>
<a class="inline-block-example" href="#">Another Link</a>`,
        css: `/* Block Element: ចាប់ជួរថ្មី, ពេញទទឹង */
.block-example {
  display: block;
  background: #3b82f6;
  padding: 16px;
  margin-bottom: 10px;
}

/* Inline Element: នៅក្នុងជួរ, មិនអាចកំណត់ width/height */
.inline-example {
  display: inline;
  background: #8b5cf6;
  padding: 4px 8px;
  /* width, height មិនដំណើរការ */
}

/* Inline-Block: នៅក្នុងជួរ + កំណត់ width/height បាន */
.inline-block-example {
  display: inline-block;
  background: #06b6d4;
  padding: 12px 24px;
  width: 200px;
  text-align: center;
  margin: 4px;
}

/* display: none vs visibility: hidden */
.hidden-none { display: none; }       /* ៤ បាត់ចន្លោះ */
.hidden-vis { visibility: hidden; }   /* កន្លែង​នៅ */`,
        js: ``
      },
      quiz: [
        {
          question: "តើ display: none ខុសពី visibility: hidden យ៉ាងម៉េច?",
          options: [
            "ដូចគ្នាទាំងអស់",
            "display:none លាក់ Element និងកន្លែង; visibility:hidden លាក់ Element តែកន្លែងនៅ",
            "visibility:hidden លុប Element ចេញ",
            "display:none ផ្លាស់ប្ដូរពណ៌"
          ],
          correct: 1,
          explanation: "display:none ដក Element ចេញពី Layout (កន្លែងបាត់); visibility:hidden លាក់ Element តែកន្លែងរបស់វានៅដដែល។"
        }
      ]
    },

    // ===== មេរៀនទី១០ =====
    {
      id: "CSS-L10",
      number: "មេរៀនទី១០",
      title: "CSS Positioning",
      titleEn: "CSS Positioning",
      icon: "fa-solid fa-arrows-up-down-left-right",
      color: "#22c55e",
      description: "ស្វែងយល់ពី Positioning Types (static, relative, absolute, fixed, sticky), z-index និងការប្រើប្រាស់ Positioning សម្រាប់ Navbar, Header, FAB។",
      topics: [
        "10.1 តើ Positioning ជាអ្វី?",
        "10.2 position: static",
        "10.3 position: relative",
        "10.4 position: absolute",
        "10.5 position: fixed",
        "10.6 position: sticky",
        "10.7 top",
        "10.8 right",
        "10.9 bottom",
        "10.10 left",
        "10.11 z-index",
        "10.12 Parent និង Child Positioning",
        "10.13 Fixed Navbar",
        "10.14 Sticky Header",
        "10.15 Floating Action Button"
      ],
      objectives: [
        "បែងចែក static, relative, absolute, fixed, sticky បាន",
        "ប្រើ top, right, bottom, left បាន",
        "គ្រប់គ្រង z-index សម្រាប់ Layering បាន",
        "បង្កើត Fixed Navbar និង Sticky Header បាន"
      ],
      codeExample: {
        html: `<nav class="fixed-navbar">Fixed Navbar</nav>
<header class="sticky-header">Sticky Header</header>
<div class="relative-parent">
  <div class="absolute-child">Absolute Child</div>
</div>
<button class="fab">+</button>`,
        css: `/* Fixed: ស្ថិតនៅ Viewport មិនរំកិល */
.fixed-navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.95);
  padding: 16px 24px;
}

/* Sticky: រំកិលជាមួយ រួចជាប់នៅ top */
.sticky-header {
  position: sticky;
  top: 60px;
  background: #1e293b;
  padding: 12px;
  z-index: 50;
}

/* Relative + Absolute: Parent-Child */
.relative-parent {
  position: relative;
  height: 200px;
  background: #1e293b;
}

.absolute-child {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 8px;
}

/* Floating Action Button */
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  font-size: 24px;
  border: none;
  box-shadow: 0 8px 20px rgba(99,102,241,0.4);
  z-index: 200;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ position: sticky មានលក្ខណៈពិសេសអ org?",
          options: [
            "ស្ថិតថេរនៅកន្លែង",
            "រំកិលជាមួយទំព័រ រួចជាប់នៅ offset ដែលកំណត់",
            "កំណត់ Position ដោយ JavaScript",
            "ដូចគ្នានឹង static"
          ],
          correct: 1,
          explanation: "sticky ដើរតួដូច relative ដល់ពេលរំកិល (scroll) ដល់ offset (top: 0) វាជាប់នៅកន្លែង (ដូច fixed)។"
        }
      ]
    },

    // ===== មេរៀនទី១១ =====
    {
      id: "CSS-L11",
      number: "មេរៀនទី១១",
      title: "CSS Flexbox Layout",
      titleEn: "Modern CSS Layout - Flexbox",
      icon: "fa-solid fa-grip",
      color: "#a855f7",
      description: "រៀនអំពី Flexbox Layout System ពេញលេញ: Flex Container, Items, Axes, Direction, Wrapping, Alignment និង Ordering។",
      topics: [
        "11.1 តើ Flexbox ជាអ្វី?",
        "11.2 Flex Container និង Flex Items",
        "11.3 display: flex",
        "11.4 Main Axis និង Cross Axis",
        "11.5 flex-direction",
        "11.6 flex-wrap",
        "11.7 justify-content",
        "11.8 align-items",
        "11.9 align-content",
        "11.10 gap",
        "11.11 order",
        "11.12 flex-grow",
        "11.13 flex-shrink",
        "11.14 flex-basis",
        "11.15 align-self",
        "11.16 បង្កើត Navigation Bar ជាមួយ Flexbox",
        "11.17 បង្កើត Card Layout ជាមួយ Flexbox"
      ],
      objectives: [
        "យល់ពី Flex Container និង Flex Items",
        "ប្រើ justify-content, align-items បាន",
        "គ្រប់គ្រង flex-grow, flex-shrink, flex-basis បាន",
        "បង្កើត Navbar និង Card Layout ជាមួយ Flexbox បាន"
      ],
      codeExample: {
        html: `<nav class="flex-navbar">
  <div class="logo">CSSLearn</div>
  <ul class="nav-links">
    <li><a href="#">ទំព័រដើម</a></li>
    <li><a href="#">មេរៀន</a></li>
    <li><a href="#">ទំនាក់ទំនង</a></li>
  </ul>
</nav>

<div class="card-container">
  <div class="flex-card">Card 1</div>
  <div class="flex-card">Card 2</div>
  <div class="flex-card">Card 3</div>
</div>`,
        css: `/* Flex Navigation Bar */
.flex-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #1e293b;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover { color: #3b82f6; }

/* Flex Card Layout */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.flex-card {
  flex: 1 1 250px;      /* grow shrink basis */
  background: #1e293b;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ justify-content គ្រប់គ្រង Axis ណា?",
          options: ["Cross Axis", "Main Axis", "Z-Axis", "ទាំងអស់"],
          correct: 1,
          explanation: "justify-content គ្រប់គ្រងការតម្រៀប Items នៅលើ Main Axis (ផ្ដេកជាធម្មតា)។ align-items គ្រប់គ្រង Cross Axis។"
        }
      ]
    },

    // ===== មេរៀនទី១២ =====
    {
      id: "CSS-L12",
      number: "មេរៀនទី១២",
      title: "CSS Grid Layout",
      titleEn: "CSS Grid Layout",
      icon: "fa-solid fa-table-cells",
      color: "#06b6d4",
      description: "ស្វែងយល់ពី CSS Grid: Grid Container, Rows/Columns, Template Areas, repeat(), fr unit, minmax() និងការបង្កើត Gallery/Dashboard Layouts។",
      topics: [
        "12.1 តើ CSS Grid ជាអ្វី?",
        "12.2 Grid Container និង Grid Items",
        "12.3 display: grid",
        "12.4 Rows និង Columns",
        "12.5 grid-template-columns",
        "12.6 grid-template-rows",
        "12.7 gap",
        "12.8 grid-column",
        "12.9 grid-row",
        "12.10 repeat()",
        "12.11 fr Unit",
        "12.12 minmax()",
        "12.13 auto-fit និង auto-fill",
        "12.14 បង្កើត Gallery ជាមួយ Grid",
        "12.15 បង្កើត Dashboard Layout ជាមួយ Grid"
      ],
      objectives: [
        "បង្កើត Grid Container និង Define Rows/Columns បាន",
        "ប្រើ repeat(), fr, minmax() បាន",
        "បង្កើត Responsive Gallery ជាមួយ auto-fit បាន",
        "រចនា Dashboard Layout ជាមួយ Grid Areas បាន"
      ],
      codeExample: {
        html: `<div class="grid-gallery">
  <div class="gallery-item item-1">1</div>
  <div class="gallery-item item-2">2</div>
  <div class="gallery-item item-3">3</div>
  <div class="gallery-item item-4">4</div>
  <div class="gallery-item item-5">5</div>
  <div class="gallery-item item-6">6</div>
</div>`,
        css: `/* Responsive Grid Gallery */
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  padding: 20px;
}

.gallery-item {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

/* Spanning multiple columns/rows */
.item-1 {
  grid-column: span 2;
}

.item-4 {
  grid-row: span 2;
}

/* Dashboard Layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  height: 100vh;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ fr unit ក្នុង Grid មានន័យអ្វី?",
          options: ["Fixed Ratio", "Fraction of available space", "Frame Rate", "Font Ratio"],
          correct: 1,
          explanation: "fr (Fraction) មានន័យថាចំណែកនៃទំហំដែលនៅសល់។ 1fr 2fr មានន័យថា column ទី២ ធំជាងទី១ ២ ដង។"
        }
      ]
    },

    // ===== មេរៀនទី១៣ =====
    {
      id: "CSS-L13",
      number: "មេរៀនទី១៣",
      title: "Legacy និង Alternative CSS Layout",
      titleEn: "Legacy & Alternative CSS Layout",
      icon: "fa-solid fa-clock-rotate-left",
      color: "#78716c",
      description: "រៀនអំពី Float, Table Layout, Multi-Column Layout និងការប្រៀបធៀបរវាង Float, Flexbox និង Grid។",
      topics: [
        "13.1 CSS Float",
        "13.2 float: left និង float: right",
        "13.3 clear Property",
        "13.4 Table Layout",
        "13.5 Multiple-Column Layout",
        "13.6 Fixed Layout",
        "13.7 Liquid Layout",
        "13.8 Elastic Layout",
        "13.9 ប្រៀបធៀប Float, Flexbox និង Grid",
        "13.10 ពេលណាគួរប្រើ Flexbox និងពេលណាគួរប្រើ Grid"
      ],
      objectives: [
        "យល់ពី CSS Float និង Clear Property បាន",
        "បែងចែក Fixed, Liquid និង Elastic Layout បាន",
        "ប្រៀបធៀប Float, Flexbox និង Grid បាន",
        "ជ្រើសរើស Layout System ត្រឹមត្រូវតាមសេណារីយ៉ូ"
      ],
      codeExample: {
        html: `<div class="float-container">
  <img class="float-img" src="photo.jpg" alt="Float Example">
  <p>Text wraps around the floated image...</p>
  <div class="clearfix"></div>
</div>`,
        css: `/* CSS Float (Legacy) */
.float-img {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
  width: 200px;
  border-radius: 8px;
}

/* Clear Float */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* Multi-Column Layout */
.multi-col {
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #334155;
}

/* ការប្រៀបធៀប:
   Float:   សម្រាប់ text wrap around image
   Flexbox: 1D layout (row ឬ column)
   Grid:    2D layout (rows + columns)
*/`,
        js: ``
      },
      quiz: [
        {
          question: "តើពេលណាគួរប្រើ Grid ជំនួស Flexbox?",
          options: [
            "នៅពេលត្រូវការ 1D layout",
            "នៅពេលត្រូវការ 2D layout (Rows + Columns)",
            "នៅពេលមានតែ 2 Elements",
            "មិនមានភាពខុសគ្នា"
          ],
          correct: 1,
          explanation: "CSS Grid សម្រាប់ 2D layout (Rows + Columns ក្នុងពេលតែមួយ)។ Flexbox សម្រាប់ 1D (Row ឬ Column មួយ)។"
        }
      ]
    },

    // ===== មេរៀនទី១៤ =====
    {
      id: "CSS-L14",
      number: "មេរៀនទី១៤",
      title: "Styling HTML Components",
      titleEn: "Styling Lists, Links, Images & Tables",
      icon: "fa-solid fa-table-list",
      color: "#10b981",
      description: "រៀនអំពីការតុបតែង Lists, Link States, Images, Tables រួមទាំង Zebra-Striped Tables និង Hoverable Rows។",
      topics: [
        "14.1 Styling Ordered Lists",
        "14.2 Styling Unordered Lists",
        "14.3 list-style-type",
        "14.4 list-style-image",
        "14.5 Link States",
        "14.6 a:link",
        "14.7 a:visited",
        "14.8 a:hover",
        "14.9 a:active",
        "14.10 Styling Images",
        "14.11 Responsive Images",
        "14.12 Styling Tables",
        "14.13 Table Borders",
        "14.14 Zebra-Striped Tables",
        "14.15 Hoverable Table Rows"
      ],
      objectives: [
        "តុបតែង Lists ជាមួយ Custom Styles បាន",
        "ប្រើ Link States (link, visited, hover, active) បាន",
        "បង្កើត Responsive Images បាន",
        "រចនា Zebra-Striped Tables ជាមួយ Hover Effects"
      ],
      codeExample: {
        html: `<table class="styled-table">
  <thead>
    <tr><th>ឈ្មោះ</th><th>មុខវិជ្ជា</th><th>ពិន្ទុ</th></tr>
  </thead>
  <tbody>
    <tr><td>សុខា</td><td>CSS</td><td>95</td></tr>
    <tr><td>ដារា</td><td>HTML</td><td>88</td></tr>
    <tr><td>វិចិត្រា</td><td>JavaScript</td><td>92</td></tr>
  </tbody>
</table>`,
        css: `/* Zebra-Striped Table with Hover */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
}

.styled-table th {
  background: #3b82f6;
  color: white;
  padding: 14px 20px;
  text-align: left;
}

.styled-table td {
  padding: 12px 20px;
  border-bottom: 1px solid #1e293b;
}

/* Zebra Stripes */
.styled-table tr:nth-child(even) {
  background: rgba(59, 130, 246, 0.05);
}

/* Hover Effect */
.styled-table tr:hover {
  background: rgba(59, 130, 246, 0.15);
  transition: background 0.2s;
}

/* Link States */
a:link { color: #3b82f6; }
a:visited { color: #8b5cf6; }
a:hover { color: #06b6d4; text-decoration: underline; }
a:active { color: #ec4899; }`,
        js: ``
      },
      quiz: [
        {
          question: "តើ a:hover ត្រូវសរសេរនៅក្រោយ State ណា?",
          options: ["a:active", "a:visited", "a:link", "អត់ខ្វល់"],
          correct: 1,
          explanation: "ល្បៀបត្រឹមត្រូវ: a:link → a:visited → a:hover → a:active (LVHA) ដើម្បីឲ្យ Hover ដំណើរការ។"
        }
      ]
    },

    // ===== មេរៀនទី១៥ =====
    {
      id: "CSS-L15",
      number: "មេរៀនទី១៥",
      title: "CSS Form Styling",
      titleEn: "CSS Form Styling",
      icon: "fa-solid fa-rectangle-list",
      color: "#f43f5e",
      description: "រៀនអំពីការរចនា Form Elements, Input States (Focus, Hover, Disabled) និងបង្កើត Login/Registration Form Design។",
      topics: [
        "15.1 Styling <form>",
        "15.2 Styling <input>",
        "15.3 Styling <textarea>",
        "15.4 Styling <select>",
        "15.5 Styling <button>",
        "15.6 Input Width និង Spacing",
        "15.7 Border និង Focus State",
        "15.8 Disabled State",
        "15.9 Hover State",
        "15.10 Form Layout",
        "15.11 Login Form Design",
        "15.12 Registration Form Design"
      ],
      objectives: [
        "រចនា Input, Textarea, Select, Button បាន",
        "ប្រើ Focus, Hover និង Disabled States បាន",
        "បង្កើត Login Form Design ពេញលេញបាន",
        "រចនា Form Layout ជាមួយ Flexbox/Grid បាន"
      ],
      codeExample: {
        html: `<form class="login-form">
  <h2>ចូលគណនី</h2>
  <div class="form-group">
    <label for="email">អ៊ីមែល</label>
    <input type="email" id="email" placeholder="you@example.com">
  </div>
  <div class="form-group">
    <label for="password">ពាក្យសម្ងាត់</label>
    <input type="password" id="password" placeholder="••••••••">
  </div>
  <button type="submit" class="submit-btn">ចូល</button>
</form>`,
        css: `/* Login Form Styling */
.login-form {
  max-width: 400px;
  margin: 40px auto;
  padding: 40px;
  background: #1e293b;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
}

.form-group { margin-bottom: 20px; }

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #94a3b8;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  background: #0f172a;
  border: 2px solid #334155;
  border-radius: 10px;
  color: #f8fafc;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Focus State */
.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.15);
}

/* Disabled State */
input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59,130,246,0.3);
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ input:focus ប្រើសម្រាប់ពេលណា?",
          options: ["ពេល Click Element", "ពេល Element ត្រូវ Select/Focus", "ពេល Page Load", "ពេល Scroll"],
          correct: 1,
          explanation: "input:focus ដំណើរការនៅពេល Input ត្រូវ Focus (ចុចលើវា ឬ Tab ទៅលើវា) ប្រើសម្រាប់បង្ហាញ Active State។"
        }
      ]
    },

    // ===== មេរៀនទី១៦ =====
    {
      id: "CSS-L16",
      number: "មេរៀនទី១៦",
      title: "Pseudo-Classes និង Pseudo-Elements",
      titleEn: "Interactive CSS - Pseudo-Classes & Pseudo-Elements",
      icon: "fa-solid fa-wand-magic-sparkles",
      color: "#d946ef",
      description: "ស្វែងយល់ពី Pseudo-Classes (:hover, :focus, :nth-child) និង Pseudo-Elements (::before, ::after, ::first-letter)។",
      topics: [
        "16.1 តើ Pseudo-Class ជាអ្វី?",
        "16.2 :hover",
        "16.3 :focus",
        "16.4 :active",
        "16.5 :first-child",
        "16.6 :last-child",
        "16.7 :nth-child()",
        "16.8 តើ Pseudo-Element ជាអ្វី?",
        "16.9 ::before",
        "16.10 ::after",
        "16.11 ::first-letter",
        "16.12 ::first-line"
      ],
      objectives: [
        "ប្រើ :hover, :focus, :active Pseudo-Classes បាន",
        "ប្រើ :nth-child() សម្រាប់ Pattern Selection បាន",
        "បង្កើត Decorative Elements ជាមួយ ::before/::after បាន",
        "បែងចែក Pseudo-Class និង Pseudo-Element បាន"
      ],
      codeExample: {
        html: `<ul class="fancy-list">
  <li>Item មួយ</li>
  <li>Item ពីរ</li>
  <li>Item បី</li>
  <li>Item បួន</li>
</ul>
<p class="drop-cap">នេះជា paragraph ដែលមាន Drop Cap letter ធំ។</p>
<a href="#" class="fancy-link">Hover over me</a>`,
        css: `/* Pseudo-Classes */
.fancy-list li:first-child { color: #3b82f6; font-weight: bold; }
.fancy-list li:last-child { color: #ef4444; }
.fancy-list li:nth-child(even) { background: rgba(59,130,246,0.1); }

/* Pseudo-Elements */
.drop-cap::first-letter {
  font-size: 3em;
  float: left;
  color: #3b82f6;
  font-weight: 800;
  line-height: 0.9;
  margin-right: 8px;
}

/* ::before and ::after */
.fancy-link {
  position: relative;
  color: #3b82f6;
  text-decoration: none;
  padding-bottom: 4px;
}

.fancy-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.fancy-link:hover::after {
  width: 100%;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ Pseudo-Element ប្រើសញ្ញាអ្វី?",
          options: ["Single colon (:)", "Double colon (::)", "Hash (#)", "Dot (.)"],
          correct: 1,
          explanation: "Pseudo-Elements ប្រើ Double Colon (::) ឧ. ::before, ::after, ::first-letter។ Pseudo-Classes ប្រើ Single Colon (:)។"
        }
      ]
    },

    // ===== មេរៀនទី១៧ =====
    {
      id: "CSS-L17",
      number: "មេរៀនទី១៧",
      title: "CSS Transform, Transition និង Animation",
      titleEn: "CSS Transform, Transition & Animation",
      icon: "fa-solid fa-film",
      color: "#f59e0b",
      description: "រៀនអំពី CSS Transforms (translate, rotate, scale, skew), Transitions និង Keyframe Animations សម្រាប់បង្កើត Hover Effects និង Loading Animations។",
      topics: [
        "17.1 CSS Transform",
        "17.2 translate()",
        "17.3 rotate()",
        "17.4 scale()",
        "17.5 skew()",
        "17.6 CSS Transition",
        "17.7 transition-property",
        "17.8 transition-duration",
        "17.9 transition-delay",
        "17.10 transition-timing-function",
        "17.11 CSS Animation",
        "17.12 @keyframes",
        "17.13 animation-name",
        "17.14 animation-duration",
        "17.15 animation-delay",
        "17.16 animation-iteration-count",
        "17.17 បង្កើត Hover Effects",
        "17.18 បង្កើត Loading Animation"
      ],
      objectives: [
        "ប្រើ transform: translate, rotate, scale បាន",
        "បង្កើត Smooth Transitions បាន",
        "សរសេរ @keyframes Animation បាន",
        "បង្កើត Hover Effects និង Loading Spinner បាន"
      ],
      codeExample: {
        html: `<div class="transform-demo">
  <div class="box hover-effect">Hover Me</div>
</div>
<div class="loader"></div>`,
        css: `/* CSS Transform */
.hover-effect {
  background: #3b82f6;
  padding: 20px 40px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  /* Transition */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-8px) scale(1.05) rotate(-2deg);
  box-shadow: 0 20px 40px rgba(59,130,246,0.4);
}

/* @keyframes Loading Animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(59,130,246,0.2);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 40px auto;
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

.pulse-element {
  animation: pulse 2s ease-in-out infinite;
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ @keyframes ប្រើសម្រាប់អ្វី?",
          options: [
            "កំណត់ Video Player",
            "កំណត់ Animation Steps ពី Start ទៅ End",
            "បង្កើត Database Query",
            "Import JavaScript Module"
          ],
          correct: 1,
          explanation: "@keyframes កំណត់ Animation Timeline ពី 0% ដល់ 100% ជាមួយ Properties ដែលផ្លាស់ប្តូរនៅជំហាននីមួយៗ។"
        }
      ]
    },

    // ===== មេរៀនទី១៨ =====
    {
      id: "CSS-L18",
      number: "មេរៀនទី១៨",
      title: "Responsive Web Design",
      titleEn: "Responsive CSS & Media Queries",
      icon: "fa-solid fa-mobile-screen-button",
      color: "#3b82f6",
      description: "ស្វែងយល់ពី Responsive Design, Viewport, CSS Units (px, %, em, rem, vw, vh), Media Queries, Mobile-First Design និង Responsive Navigation។",
      topics: [
        "18.1 តើ Responsive Web Design ជាអ្វី?",
        "18.2 Desktop, Tablet និង Mobile",
        "18.3 Viewport",
        "18.4 Relative និង Absolute Units",
        "18.5 px",
        "18.6 %",
        "18.7 em",
        "18.8 rem",
        "18.9 vw និង vh",
        "18.10 max-width",
        "18.11 Media Queries",
        "18.12 Mobile-First Design",
        "18.13 Responsive Flexbox",
        "18.14 Responsive Grid",
        "18.15 Responsive Images",
        "18.16 Responsive Navigation",
        "18.17 Testing Responsive Website"
      ],
      objectives: [
        "យល់ពី Viewport និង Responsive Design Concepts",
        "បែងចែក CSS Units (px, em, rem, vw, vh) បាន",
        "សរសេរ Media Queries បាន",
        "អនុវត្ត Mobile-First Design Approach"
      ],
      codeExample: {
        html: `<div class="responsive-container">
  <header class="resp-header">
    <h1>Responsive Design</h1>
    <nav class="resp-nav">
      <a href="#">ទំព័រដើម</a>
      <a href="#">មេរៀន</a>
    </nav>
  </header>
  <div class="resp-grid">
    <div class="resp-card">Card 1</div>
    <div class="resp-card">Card 2</div>
    <div class="resp-card">Card 3</div>
  </div>
</div>`,
        css: `/* Mobile-First Approach */
.resp-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.resp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

.resp-card {
  background: #1e293b;
  padding: 24px;
  border-radius: 12px;
}

/* Tablet (min-width: 768px) */
@media (min-width: 768px) {
  .resp-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .resp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .resp-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* CSS Units */
.fluid-text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}`,
        js: ``
      },
      quiz: [
        {
          question: "តើ Mobile-First Design មានន័យអ org?",
          options: [
            "រចនា Desktop មុន រួចកាត់សម្រាប់ Mobile",
            "រចនា Mobile មុន រួចពង្រីកសម្រាប់ Desktop",
            "មិនត្រូវការ Responsive",
            "រចនាតែ Mobile ប៉ុណ្ណោះ"
          ],
          correct: 1,
          explanation: "Mobile-First រចនាចាប់ផ្តើមពី Mobile (ការ៉េតូច) រួចប្រើ min-width Media Queries ដើម្បីពង្រីកសម្រាប់ Tablet និង Desktop។"
        }
      ]
    },

    // ===== មេរៀនទី១៩ =====
    {
      id: "CSS-L19",
      number: "មេរៀនទី១៩",
      title: "ការរៀបចំ CSS សម្រាប់ Web Project",
      titleEn: "Organizing CSS for Web Projects",
      icon: "fa-solid fa-folder-tree",
      color: "#84cc16",
      description: "រៀនអំពីការរៀបចំ CSS File Structure, Reset/Base Styles, Naming Conventions, Debugging CSS និង Browser DevTools។",
      topics: [
        "19.1 រចនាសម្ព័ន្ធ CSS File",
        "19.2 Reset និង Base Styles",
        "19.3 Typography Styles",
        "19.4 Layout Styles",
        "19.5 Component Styles",
        "19.6 Responsive Styles",
        "19.7 Naming Classes",
        "19.8 កាត់បន្ថយ CSS ដែលស្ទួន",
        "19.9 ការសរសេរ CSS ឱ្យងាយអាន",
        "19.10 Debugging CSS ជាមួយ Browser Developer Tools"
      ],
      objectives: [
        "រៀបចំ CSS File Structure សម្រាប់ Project ធំ",
        "សរសេរ Reset/Base Styles បាន",
        "ដាក់ Naming Conventions ល្អ",
        "Debug CSS ជាមួយ Browser DevTools បាន"
      ],
      codeExample: {
        html: `<!-- Project File Structure -->
<!-- 
project/
├── index.html
├── css/
│   ├── reset.css
│   ├── base.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
-->
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/responsive.css">`,
        css: `/* === reset.css === */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* === base.css === */
:root {
  --color-primary: #3b82f6;
  --color-bg: #0f172a;
  --color-text: #f8fafc;
  --radius: 12px;
  --spacing: 16px;
}

body {
  font-family: 'Kantumruy Pro', sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
}

/* === Naming Conventions (BEM) === */
.card { }
.card__title { }
.card__body { }
.card--featured { border-color: var(--color-primary); }

/* === ចៀសវាង ===
   ❌ .red-text
   ❌ .big-font
   ✅ .alert--error
   ✅ .heading--xl
*/`,
        js: ``
      },
      quiz: [
        {
          question: "តើ BEM Methodology មានន័យអorg?",
          options: [
            "Block, Entity, Method",
            "Block, Element, Modifier",
            "Browser, Engine, Module",
            "Base, Extension, Mixin"
          ],
          correct: 1,
          explanation: "BEM = Block, Element, Modifier — ស្តង់ដារ Naming Convention សម្រាប់ CSS Classes ឧ. .card__title--active"
        }
      ]
    },

    // ===== មេរៀនទី២០ =====
    {
      id: "CSS-L20",
      number: "មេរៀនទី២០",
      title: "Mini Project — Responsive Website",
      titleEn: "Mini Project — Responsive Website",
      icon: "fa-solid fa-rocket",
      color: "#6366f1",
      description: "អនុវត្ត CSS ទាំងអស់ដើម្បីបង្កើត Mini Website ពេញលេញជាមួយ Header, Navigation, Hero, Cards, Gallery, Form, Footer និង Responsive Layout។",
      topics: [
        "20.1 រៀបចំ Project Structure",
        "20.2 បង្កើត Header",
        "20.3 បង្កើត Navigation Bar",
        "20.4 បង្កើត Hero Section",
        "20.5 បង្កើត Card Section",
        "20.6 បង្កើត Gallery",
        "20.7 បង្កើត Form",
        "20.8 បង្កើត Footer",
        "20.9 ប្រើ Flexbox និង Grid",
        "20.10 ប្រើ Hover និង Transition",
        "20.11 បង្កើត Mobile Responsive Layout",
        "20.12 Testing និង Debugging",
        "20.13 Final Website Presentation"
      ],
      objectives: [
        "បង្កើត Complete Website Structure បាន",
        "រចនា Header, Nav, Hero, Cards, Gallery, Form, Footer បាន",
        "អនុវត្ត Flexbox និង Grid Layout បាន",
        "បង្កើត Mobile Responsive Layout បាន",
        "Testing និង Debugging Website បាន"
      ],
      codeExample: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Mini Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="logo">🎨 CSSProject</div>
    <nav class="main-nav">
      <a href="#hero">ទំព័រដើម</a>
      <a href="#cards">គម្រោង</a>
      <a href="#contact">ទំនាក់ទំនង</a>
    </nav>
  </header>

  <section id="hero" class="hero-section">
    <h1>សូមស្វាគមន៍មកកាន់ CSS Project</h1>
    <p>រៀន CSS ដោយការអនុវត្ត</p>
    <a href="#cards" class="cta-btn">ស្វែងយល់បន្ថែម</a>
  </section>

  <section id="cards" class="card-section">
    <div class="card">
      <h3>📐 Layout</h3>
      <p>Flexbox & Grid</p>
    </div>
    <div class="card">
      <h3>🎨 Colors</h3>
      <p>Gradients & Opacity</p>
    </div>
    <div class="card">
      <h3>✨ Animation</h3>
      <p>Transform & Transition</p>
    </div>
  </section>

  <footer class="site-footer">
    <p>&copy; 2026 CSS Mini Project</p>
  </footer>
</body>
</html>`,
        css: `/* === Mini Project Complete CSS === */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Kantumruy Pro', sans-serif;
  background: #0f172a;
  color: #f8fafc;
}

/* Header & Nav */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: rgba(15,23,42,0.95);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.logo { font-size: 1.4rem; font-weight: 700; color: #3b82f6; }
.main-nav a { color: #94a3b8; margin-left: 20px; text-decoration: none; }
.main-nav a:hover { color: #3b82f6; }

/* Hero */
.hero-section {
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
}

.hero-section h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
.cta-btn {
  display: inline-block;
  margin-top: 24px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}
.cta-btn:hover { transform: translateY(-3px); }

/* Card Section */
.card-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 60px 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: #1e293b;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(59,130,246,0.15);
}

/* Footer */
.site-footer {
  text-align: center;
  padding: 32px;
  border-top: 1px solid #1e293b;
  color: #64748b;
}

/* Responsive */
@media (max-width: 768px) {
  .site-header { flex-direction: column; gap: 12px; }
  .hero-section { padding: 60px 16px; }
}`,
        js: `// Mini Project: Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});`
      },
      quiz: [
        {
          question: "តើការអនុវត្ត CSS Mini Project ត្រូវចាប់ផ្ដើមពីអorg?",
          options: [
            "សរសេរ Animation មុន",
            "រៀបចំ Project Structure និង HTML មុន",
            "ទិញ Domain មុន",
            "រចនា Database មុន"
          ],
          correct: 1,
          explanation: "ការបង្កើត Website ចាប់ផ្តើមពី Project Structure (Folders/Files) រួចសរសេរ HTML (Structure) បន្ទាប់មក CSS (Style)។"
        }
      ]
    }
  ],

  // Learning Outcomes
  learningOutcomes: [
    "សរសេរ និងភ្ជាប់ CSS ជាមួយ HTML បានត្រឹមត្រូវ",
    "ប្រើ Selectors និង CSS Properties បាន",
    "រចនាពណ៌ អក្សរ Background និង Components បាន",
    "យល់ និងប្រើ CSS Box Model បាន",
    "គ្រប់គ្រង Display និង Positioning បាន",
    "បង្កើត Layout ដោយប្រើ Flexbox និង CSS Grid បាន",
    "រចនា Form, Table, Navigation និង Card Components បាន",
    "បង្កើត Hover Effects, Transitions និង Animations បាន",
    "បង្កើត Responsive Website សម្រាប់ Desktop, Tablet និង Mobile បាន",
    "អនុវត្ត CSS ដើម្បីបង្កើត Mini Web Project ពេញលេញបាន"
  ]
};
