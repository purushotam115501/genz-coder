import os
import json

viewer_path = r"E:\genz-coder\course-viewer.html"
db_path = r"E:\genz-coder\courses-data.js"

with open(viewer_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find start and end of chapters array
start_marker = "const chapters = ["
end_marker = "];\n\n    let currentChapterIndex = 0;"

start_idx = content.find(start_marker)

if start_idx == -1:
    print("Could not find chapters array")
    exit(1)

# Find the end of the array, we can use the exact string
end_idx = content.find(end_marker, start_idx)

if end_idx == -1:
    # Try another common ending
    end_marker = "];\n    let currentChapterIndex = 0;"
    end_idx = content.find(end_marker, start_idx)

if end_idx == -1:
     # Just search for "let currentChapterIndex = 0;"
     end_idx = content.find("let currentChapterIndex = 0;", start_idx)
     if end_idx != -1:
         # step back to the closing bracket
         bracket_idx = content.rfind("];", start_idx, end_idx)
         if bracket_idx != -1:
             end_idx = bracket_idx

if end_idx == -1:
    print("Could not find end of array")
    exit(1)

excel_chapters_str = content[start_idx + len("const chapters = "):end_idx + 2].strip().rstrip(";")

new_courses = {
  "html": [
    { "id": 1, "title": "HTML Basics: The Skeleton", "text": "HTML is the skeleton of the web. Har tag ka ek open `<tag>` aur close `</tag>` hota hai.", "mission": "Hello World ko h1 tag ke andar likho.", "validate": "val.toLowerCase().includes('<h1>hello world</h1>')", "successVal": "<h1>Hello World</h1>" },
    { "id": 2, "title": "Attributes & Links", "text": "Tags mein extra details (`id`, `class`, `href`) attributes hote hain.", "mission": "Ek link tag banao (anchor tag) jo 'click' likha ho.", "validate": "val.toLowerCase().includes('<a') && val.toLowerCase().includes('</a>')", "successVal": "<a href='#'>click</a>" },
    { "id": 3, "title": "HTML Final Exam", "text": "HTML5 semantic tags (header, footer, section) search engine optimize karne mein madat karte hain.", "mission": "Type 'DONE' to complete HTML module.", "validate": "val.toUpperCase() === 'DONE'", "successVal": "DONE" }
  ],
  "css": [
    { "id": 1, "title": "CSS Basics: Make it drip", "text": "CSS is the swag of your website. Ise `style` block ya externally link kiya jata hai.", "mission": "Color ko red karne ka property likho (e.g. color: red;)", "validate": "val.toLowerCase().replace(/\\s/g, '').includes('color:red')", "successVal": "color: red;" },
    { "id": 2, "title": "Flexbox: Magic Layout", "text": "`display: flex;` se items automatically distribute ho jate hain. It's the most used CSS property basically.", "mission": "Flexbox activate karne ki property likho.", "validate": "val.toLowerCase().includes('display: flex') || '" + 'display:flex' + "' in val.toLowerCase()", "successVal": "display: flex;" }
  ],
  "javascript": [
    { "id": 1, "title": "Variables: const & let", "text": "JS me variables data save karte hain. `const` fixed hota hai, `let` change ho sakta hai.", "mission": "Ek const variable `age` banao jisme 21 assign ho.", "validate": "val.includes('const age') && val.includes('21')", "successVal": "const age = 21;" },
    { "id": 2, "title": "Functions: Reusable Code", "text": "Functions blocks hote hain. `function doSomething() { }` ya arrow functions `() => {}`", "mission": "Ek function `hello` banao.", "validate": "val.includes('function hello') || val.includes('hello = () =>')", "successVal": "function hello() {}" }
  ],
  "sql": [
    { "id": 1, "title": "SQL 101: Get the Data", "text": "Database se data nikalne ke liye `SELECT * FROM table;` use karte hain.", "mission": "Users table se saara data nikalne ka query likho.", "validate": "val.toUpperCase().includes('SELECT * FROM USERS')", "successVal": "SELECT * FROM Users;" },
    { "id": 2, "title": "WHERE Clause", "text": "Filters lagane ke liye `WHERE age > 18` lagate hain.", "mission": "Query jisme users jinki age 18 se upar ho.", "validate": "val.toUpperCase().includes('WHERE AGE > 18')", "successVal": "SELECT * FROM Users WHERE age > 18;" }
  ],
  "python": [
    { "id": 1, "title": "Python: Print Magic", "text": "Python sabse readable language hai. `print('Hello')` se display hota hai.", "mission": "Screen par 'GenZ' print karo.", "validate": "val.includes('print') && val.includes('GenZ')", "successVal": "print('GenZ')" },
    { "id": 2, "title": "Lists & Loops", "text": "`for x in list:` se aap asani se loop chala sakte hain.", "mission": "Loop chalaney ka keyword likhe (starts with f).", "validate": "val.toLowerCase().includes('for')", "successVal": "for item in list:" }
  ],
  "java": [
    { "id": 1, "title": "Java OOPs", "text": "Java object oriented hai. Har cheez Class mein likhi jati hai.", "mission": "Ek public class `Main` banao.", "validate": "val.includes('public class Main')", "successVal": "public class Main {}" }
  ],
  "php": [
    { "id": 1, "title": "Server-side PHP", "text": "PHP code <?php aur ?> ke beech likha jata hai.", "mission": "Echo use karke 'Hi' print karein.", "validate": "val.toLowerCase().includes('echo')", "successVal": "echo 'Hi';" }
  ],
  "howto": [
    { "id": 1, "title": "How To: Centering a Div", "text": "Flexbox best way hai: `display: flex; justify-content: center; align-items: center;`", "mission": "Type 'CENTER' to finish.", "validate": "val.toUpperCase() === 'CENTER'", "successVal": "CENTER" }
  ],
  "w3css": [
    { "id": 1, "title": "W3.CSS", "text": "Yeh utility based framework hai.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "c": [
    { "id": 1, "title": "C Programming", "text": "Har C program main() se shuru hota hai.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "cpp": [
    { "id": 1, "title": "C++", "text": "C++ is C with classes.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "csharp": [
    { "id": 1, "title": "C#", "text": "Microsoft's Java.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "bootstrap": [
    { "id": 1, "title": "Bootstrap 5", "text": "Responsive layout system.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "react": [
    { "id": 1, "title": "React JS", "text": "React state aur components.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "mysql": [
    { "id": 1, "title": "MySQL", "text": "Relational DB.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "jquery": [
    { "id": 1, "title": "jQuery", "text": "$ sign selector.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "xml": [
    { "id": 1, "title": "XML Data", "text": "Extensible Markup Language.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "django": [
    { "id": 1, "title": "Django", "text": "Python web framework.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ],
  "numpy": [
    { "id": 1, "title": "Numpy Elements", "text": "Python arrays.", "mission": "Type 'READY'", "validate": "val.toUpperCase() === 'READY'", "successVal": "READY" }
  ]
}

db_parts = [
    "// Dynamic Course Database generated automatically\n",
    "const courseDataDB = {\n",
    f"  excel: {excel_chapters_str},\n"
]

for key, courses in new_courses.items():
    db_parts.append(f"  {key}: [\n")
    for ch in courses:
        title_str = json.dumps(ch["title"])
        text_str = json.dumps(ch["text"])
        mission_str = json.dumps(ch["mission"])
        successVal_str = json.dumps(ch["successVal"])
        db_parts.append(f"    {{ id: {ch['id']}, title: {title_str}, text: {text_str}, mission: {mission_str}, validate: (val) => {ch['validate']}, successVal: {successVal_str} }},\n")
    db_parts.append("  ],\n")

db_parts.append("};\n")

with open(db_path, "w", encoding="utf-8") as f:
    f.write("".join(db_parts))

# Prepare new html content
top_part = content[:start_idx]
bottom_part = content[end_idx + 2:]  # past ];

dynamic_loader = """
    // DYNAMIC COURSE LOADER
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course') || 'excel';
    let chapters = courseDataDB[courseId];
    if (!chapters) chapters = courseDataDB['excel']; // fallback
    
    document.addEventListener('DOMContentLoaded', () => {
      const isExcel = courseId === 'excel';
      // Change sidebar title
      const titleEl = document.querySelector('.lms-header h2');
      if (titleEl) {
         titleEl.innerHTML = '<i data-lucide="book-open" width="20" color="#00f2fe"></i> ' + courseId.toUpperCase() + ' Course';
      }

      if (!isExcel) {
         const ph = document.querySelector('.practice-header h3');
         if (ph) ph.innerHTML = '<i data-lucide="terminal" width="20" color="#00f2fe"></i> Code Editor <span style="font-size: 1rem; color: var(--text-muted); font-weight: normal; margin-left: 10px;">(GenZ Virtual Env)</span>';
         
         const divInst = document.querySelector('.instructions-block .btn-secondary');
         if (divInst) divInst.style.display = 'none'; // hide try it yourself in terminal

         const ws = document.querySelector('.practice-workspace');
         if(ws) {
            ws.innerHTML = `
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
            `;
            const runCodeBtn = document.getElementById('runCodeBtn');
            if(runCodeBtn) {
               runCodeBtn.addEventListener('click', () => {
                   const input = document.getElementById('codeTermInput');
                   if(input) window.checkAnswer(input.value);
               });
            }
         }
      }
    });
"""

# replace old answer checking
new_html = top_part + dynamic_loader + bottom_part

if '<script src="courses-data.js"></script>' not in new_html:
    new_html = new_html.replace("<script>", '<script src="courses-data.js"></script>\n  <script>')

# Safely replace checkAnswer internals
target1 = "document.getElementById(`cell-${ch.targetCell}`).value = ch.successVal;"
repl1 = """
        const tCell = document.getElementById(`cell-${ch.targetCell}`);
        if (tCell) {
            tCell.value = ch.successVal;
            tCell.style.background = '#dff6dd';
        }
        const termNode = document.getElementById('codeTermInput');
        if (termNode) {
            termNode.value = ch.successVal;
            termNode.style.color = '#2ecc71';
        }
"""
new_html = new_html.replace(target1, repl1)

target2 = "document.getElementById(`cell-${ch.targetCell}`).style.background = '#dff6dd';"
repl2 = "        // handled above"
new_html = new_html.replace(target2, repl2)

target3 = "document.getElementById(`cell-${ch.targetCell}`).style.background = '#ffe5e5';"
repl3 = """
        const tCellErr = document.getElementById(`cell-${ch.targetCell}`);
        if(tCellErr) tCellErr.style.background = '#ffe5e5';
        const termNodeErr = document.getElementById('codeTermInput');
        if(termNodeErr) termNodeErr.style.color = '#e74c3c';
"""
new_html = new_html.replace(target3, repl3)

# make checkAnswer accessible from event listener
new_html = new_html.replace("function checkAnswer(val) {", "window.checkAnswer = function(val) {")

with open(viewer_path, "w", encoding="utf-8") as f:
    f.write(new_html)

print("Python extraction complete.")
