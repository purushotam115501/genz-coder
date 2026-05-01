const fs = require('fs');
const path = require('path');

const viewerPath = path.join('E:', 'genz-coder', 'course-viewer.html');
const dbPath = path.join('E:', 'genz-coder', 'courses-data.js');

let html = fs.readFileSync(viewerPath, 'utf8');

// The chapters array is between "const chapters = [" and the closing "];" just before "let currentChapterIndex".
const match = html.match(/const chapters = (\[[\s\S]*?\]);\s*let currentChapterIndex = 0;/);

if (!match) {
    console.error("Could not find chapters array!");
    process.exit(1);
}

const excelChaptersStr = match[1];

// Generate 18 new courses logic
const newCourses = {
  html: [
    { id: 1, title: "HTML Basics: The Skeleton", text: "HTML is the skeleton of the web. Har tag ka ek open `<tag>` aur close `</tag>` hota hai.", mission: "Hello World ko h1 tag ke andar likho.", validate: "val.toLowerCase().includes('<h1>hello world</h1>')", successVal: "<h1>Hello World</h1>" },
    { id: 2, title: "Attributes & Links", text: "Tags mein extra details (`id`, `class`, `href`) attributes hote hain.", mission: "Ek link tag banao (anchor tag) jo 'click' likha ho.", validate: "val.toLowerCase().includes('<a') && val.toLowerCase().includes('</a>')", successVal: "<a href='#'>click</a>" },
    { id: 3, title: "HTML Final Exam", text: "HTML5 semantic tags (header, footer, section) search engine optimize karne mein madat karte hain.", mission: "Type 'DONE' to complete HTML module.", validate: "val.toUpperCase() === 'DONE'", successVal: "DONE" }
  ],
  css: [
    { id: 1, title: "CSS Basics: Make it drip", text: "CSS is the swag of your website. Ise `style` block ya externally link kiya jata hai.", mission: "Color ko red karne ka property likho (e.g. color: red;)", validate: "val.toLowerCase().replace(/\\s/g, '').includes('color:red')", successVal: "color: red;" },
    { id: 2, title: "Flexbox: Magic Layout", text: "`display: flex;` se items automatically distribute ho jate hain. It's the most used CSS property basically.", mission: "Flexbox activate karne ki property likho.", validate: "val.toLowerCase().includes('display: flex') || JSON.stringify(val).toLowerCase().includes('display:flex')", successVal: "display: flex;" },
    { id: 3, title: "CSS Done", text: "Congratulations, your stylesheet is looking fire. Grid aur Animations baad me try karna.", mission: "Type 'READY' for the next language.", validate: "val.toUpperCase() === 'READY'", successVal: "READY" }
  ],
  javascript: [
    { id: 1, title: "Variables: const & let", text: "JS me variables data save karte hain. `const` fixed hota hai, `let` change ho sakta hai.", mission: "Ek const variable `age` banao jisme 21 assign ho.", validate: "val.includes('const age') && val.includes('21')", successVal: "const age = 21;" },
    { id: 2, title: "Functions: Reusable Code", text: "Functions blocks hote hain. `function doSomething() { }` ya arrow functions `() => {}`", mission: "Ek function `hello` banao.", validate: "val.includes('function hello') || val.includes('hello = () =>')", successVal: "function hello() {}" },
    { id: 3, title: "JS Champion", text: "DOM manipulation seekh kar aap pure GenZ Coder style interactive websites bana sakte ho.", mission: "Type 'JS OP' to finish.", validate: "val.toUpperCase() === 'JS OP'", successVal: "JS OP" }
  ],
  sql: [
    { id: 1, title: "SQL 101: Get the Data", text: "Database se data nikalne ke liye `SELECT * FROM table;` use karte hain.", mission: "Users table se saara data nikalne ka query likho.", validate: "val.toUpperCase().includes('SELECT * FROM USERS')", successVal: "SELECT * FROM Users;" },
    { id: 2, title: "WHERE Clause", text: "Filters lagane ke liye `WHERE age > 18` lagate hain.", mission: "Query jisme users jinki age 18 se upar ho.", validate: "val.toUpperCase().includes('WHERE AGE > 18')", successVal: "SELECT * FROM Users WHERE age > 18;" }
  ],
  python: [
    { id: 1, title: "Python: Print Magic", text: "Python sabse readable language hai. `print('Hello')` se display hota hai.", mission: "Screen par 'GenZ' print karo.", validate: "val.includes('print') && val.includes('GenZ')", successVal: "print('GenZ')" },
    { id: 2, title: "Lists & Loops", text: "`for x in list:` se aap asani se loop chala sakte hain.", mission: "Loop chalaney ka keyword likhe (starts with f).", validate: "val.toLowerCase().includes('for')", successVal: "for item in list:" },
    { id: 3, title: "Data Science Gateway", text: "Python se Machine Learning aur Data Science bahut easy ho jata hai Pandas aur Numpy libraries se.", mission: "Type 'ML READY'", validate: "val.toUpperCase() === 'ML READY'", successVal: "ML READY" }
  ],
  java: [
    { id: 1, title: "Java OOPs", text: "Java object oriented hai. Har cheez Class mein likhi jati hai.", mission: "Ek public class `Main` banao.", validate: "val.includes('public class Main')", successVal: "public class Main {}" }
  ],
  php: [
    { id: 1, title: "Server-side PHP", text: "PHP code <?php aur ?> ke beech likha jata hai.", mission: "Echo use karke 'Hi' print karein.", validate: "val.toLowerCase().includes('echo')", successVal: "echo 'Hi';" }
  ],
  howto: [
    { id: 1, title: "How To: Centering a Div", text: "Flexbox best way hai: `display: flex; justify-content: center; align-items: center;`", mission: "Type 'CENTER' to finish.", validate: "val.toUpperCase() === 'CENTER'", successVal: "CENTER" }
  ],
  w3css: [
    { id: 1, title: "W3.CSS Framework", text: "Yeh bootstrap jaisa ek utility CSS framework hai jisme `w3-` classes aati hain.", mission: "Type 'W3 CSS'", validate: "val.toUpperCase() === 'W3 CSS'", successVal: "W3 CSS" }
  ],
  c: [
    { id: 1, title: "C Programming", text: "Har C program `main()` function se shuru hota hai.", mission: "Print karne ke liye `printf()` likhein.", validate: "val.includes('printf')", successVal: "printf('Hello');" }
  ],
  cpp: [
    { id: 1, title: "C++ (C with Classes)", text: "C++ mein output ke liye `std::cout` ka use kiya jata hai.", mission: "cout ke saath konsa operator lagta hai? (Hint: <<)", validate: "val.includes('<<')", successVal: "<<" }
  ],
  csharp: [
    { id: 1, title: "C# Microsofts Java", text: "C# usually .NET development aur Unity game dev mein kaam aata hai.", mission: "Output console mein likhne ke liye function la naam bataye? (Console.Write...)", validate: "val.includes('WriteLine') || val.includes('Write')", successVal: "Console.WriteLine();" }
  ],
  bootstrap: [
    { id: 1, title: "Bootstrap 5", text: "Responsive layout system 12 columns par based hota hai. Container, row, col-md-4 iske structure hain.", mission: "Ek row div likhein.", validate: "val.includes('row')", successVal: "<div class='row'></div>" }
  ],
  react: [
    { id: 1, title: "React JS", text: "React state aur components pe based hai. `useState` sabse common Hook hai.", mission: "Component export karne ka keyword batao.", validate: "val.includes('export default')", successVal: "export default App;" }
  ],
  mysql: [
    { id: 1, title: "MySQL DB", text: "Data relations table form me rhte hain. Primary key identity hoti hai.", mission: "Naya table banane ki command kya hai?", validate: "val.toUpperCase().includes('CREATE TABLE')", successVal: "CREATE TABLE users;" }
  ],
  jquery: [
    { id: 1, title: "jQuery Classic", text: "$ sign se elements select hote hain. Example: `$('#id').hide()`", mission: "jQuery chalu karne ka universal sign kya hai?", validate: "val.includes('$')", successVal: "$" }
  ],
  xml: [
    { id: 1, title: "XML Data", text: "Extensible Markup Language. HTML tags browser define karta hai, XML tags aap khud.", mission: "Type 'XML DONE'", validate: "val.toUpperCase() === 'XML DONE'", successVal: "XML DONE" }
  ],
  django: [
    { id: 1, title: "Django (Python Web)", text: "Django MVC/MVT architecture pe chalta hai. Views, URLs, aur Models.", mission: "Type 'DJANGO OP'", validate: "val.toUpperCase().includes('DJANGO')", successVal: "DJANGO OP" }
  ],
  numpy: [
    { id: 1, title: "Numpy Arrays", text: "Numpy matrix aur math calculations Python me C ki speed jaisa banata hai. `import numpy as np`", mission: "Numpy ko import karne ka standard zariya likho.", validate: "val.includes('import numpy as np')", successVal: "import numpy as np" }
  ]
};

let dbString = `// Dynamic Course Database generated automatically
const courseDataDB = {
  excel: ${excelChaptersStr},\n`;

Object.keys(newCourses).forEach(key => {
  dbString += `  ${key}: [\n`;
  newCourses[key].forEach(ch => {
     dbString += `    {
      id: ${ch.id},
      title: ${JSON.stringify(ch.title)},
      text: ${JSON.stringify(ch.text)},
      mission: ${JSON.stringify(ch.mission)},
      validate: (val) => ${ch.validate},
      successVal: ${JSON.stringify(ch.successVal)}
    },\n`;
  });
  dbString += `  ],\n`;
});

dbString += `};\n`;

fs.writeFileSync(dbPath, dbString, 'utf8');

// Now we modify the course-viewer.html to use this dynamically
let newHtml = html.replace(/const chapters = \[[\s\S]*?\];\s*let currentChapterIndex = 0;/, `
    // DYNAMIC COURSE LOADER
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course') || 'excel';
    let chapters = courseDataDB[courseId];
    if (!chapters) chapters = courseDataDB['excel']; // fallback
    
    // UI adjustment for non-excel modules
    document.addEventListener('DOMContentLoaded', () => {
      const isExcel = courseId === 'excel';
      if (!isExcel) {
         document.querySelector('.practice-header h3').innerHTML = '<i data-lucide="terminal" width="20" color="#00f2fe"></i> Code Editor <span style="font-size: 1rem; color: var(--text-muted); font-weight: normal; margin-left: 10px;">(GenZ Virtual Env)</span>';
         // Replace entire grid with a massive terminal input box
         const ws = document.querySelector('.practice-workspace');
         ws.innerHTML = \`
           <p style="color: var(--text-muted); margin-bottom: 16px;">Type your code answer below and click Run Code.</p>
           <div style="background: #1e1e2e; border-radius: 12px; padding: 16px; border: 1px solid var(--glass-border); min-height: 250px;">
             <div style="display:flex; gap: 8px; margin-bottom: 16px;">
               <div style="width:12px;height:12px;border-radius:50%;background:#ff5f56"></div>
               <div style="width:12px;height:12px;border-radius:50%;background:#ffbd2e"></div>
               <div style="width:12px;height:12px;border-radius:50%;background:#27c93f"></div>
             </div>
             <div style="display:flex; align-items:flex-start; gap:12px;">
                <span style="color:#4facfe; font-family:'Space Grotesk'; font-weight:bold; margin-top:2px;">></span>
                <textarea id="codeTermInput" placeholder="Enter solution here..." spellcheck="false" style="width:100%; height: 180px; background: transparent; border: none; color: #f5f5f7; font-family: monospace; font-size: 1.1rem; outline: none; resize: none;"></textarea>
             </div>
           </div>
           <button class="btn btn-primary" id="runCodeBtn" style="margin-top: 24px;">
             <i data-lucide="play" width="16"></i> Run Code
           </button>
         \`;
         
         document.getElementById('runCodeBtn').addEventListener('click', () => {
             const input = document.getElementById('codeTermInput');
             if(input) checkAnswer(input.value);
         });
      }
    });

    let currentChapterIndex = 0;
`);

// Add script tag if not there
if (!newHtml.includes('courses-data.js')) {
    newHtml = newHtml.replace('<script>', `<script src="courses-data.js"></script>\n  <script>`);
}

// Modify checkAnswer to handle the code terminal
newHtml = newHtml.replace(/document\.getElementById\(\`cell-\$\{ch\.targetCell\}\`\)\.value = ch\.successVal;[\s\S]*?lucide\.createIcons\(\);/, `
        const tCell = document.getElementById(\`cell-\$\{ch.targetCell\}\`);
        if (tCell) {
            tCell.value = ch.successVal;
            tCell.style.background = '#dff6dd';
        }
        const termNode = document.getElementById('codeTermInput');
        if (termNode) {
            termNode.value = ch.successVal;
            termNode.style.color = '#2ecc71';
        }

        feedbackEl.innerHTML = '<span style="color:#2ecc71; display:flex; align-items:center; gap:6px;"><i data-lucide="check-circle" width="18"></i> Mission Passed! You can now proceed.</span>';
        
        if (!completedChapters.includes(currentChapterIndex)) {
           completedChapters.push(currentChapterIndex);
           localStorage.setItem('completedModules_' + courseId, JSON.stringify(completedChapters));
        }
        
        nextBtn.disabled = false;
        if(currentChapterIndex === chapters.length - 1) {
          nextBtn.innerHTML = \`Finish Course <i data-lucide="award" width="18"></i>\`;
        }
        renderSidebar();
        lucide.createIcons();
`);
// Handle error feedback visual
newHtml = newHtml.replace(/document\.getElementById\(\`cell-\$\{ch\.targetCell\}\`\)\.style\.background = '#ffe5e5';/, `
        const tCellErr = document.getElementById(\`cell-\$\{ch.targetCell\}\`);
        if(tCellErr) tCellErr.style.background = '#ffe5e5';
        const termNodeErr = document.getElementById('codeTermInput');
        if(termNodeErr) termNodeErr.style.color = '#e74c3c';
`);

fs.writeFileSync(viewerPath, newHtml, 'utf8');
console.log("Successfully extracted to courses-data.js and updated course-viewer.html");
