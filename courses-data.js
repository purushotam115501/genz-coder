// Dynamic Course Database generated automatically
const courseDataDB = {
  excel: [
      {
        id: 1,
        title: "Arithmetic (+, -, *, /)",
        text: "<b>Basic Math Operations:</b><br><br><code>=A1+B1</code> Addition<br><code>=A1-B1</code> Subtraction<br><code>=A1*B1</code> Multiplication<br><code>=A1/B1</code> Division<br><br>हर फ़ॉर्मूला <b>=</b> से शुरू होता है।",
        mission: "Cell B4 में Apple से Mango के दाम (Price) को घटाएं (Subtract)।",
        gridData: {
          "A1": "Fruit", "B1": "Price",
          "A2": "Apple", "B2": "100",
          "A3": "Mango", "B3": "40",
          "A4": "Diff", "B4": ""
        },
        targetCell: "B4",
        validate: (val) => val.toUpperCase().replace(/\s/g, '') === "=B2-B3" || val === "60" || val === "=100-40",
        successVal: "60"
      },
      {
        id: 2,
        title: "Common Stats (SUM, AVERAGE)",
        text: "<b>Aggregations:</b><br><br><code>=AVERAGE(A1:A5)</code> औसत (Average)<br><code>=MIN(A1:A5)</code> सबसे कम<br><code>=MAX(A1:A5)</code> सबसे ज़्यादा<br><code>=COUNT(range)</code> सिर्फ Numbers को गिनता है<br><code>=COUNTA(range)</code> Empty Cells छोड़कर सबको गिनता है।",
        mission: "Cell C5 में B2, B3, B4 का Average निकालें।",
        gridData: {
          "A1": "Name", "B1": "Score",
          "A2": "Rahul", "B2": "50",
          "A3": "Amit", "B3": "70",
          "A4": "Neha", "B4": "90",
          "B5": "Avg", "C5": ""
        },
        targetCell: "C5",
        validate: (val) => val.toUpperCase().includes("AVERAGE") || val === "70" || val === "=70" || val.includes("B2:B4"),
        successVal: "70"
      },
      {
        id: 3,
        title: "Logical Functions (IF, AND, OR)",
        text: "<b>Decision Making:</b><br><br><code>=IF(A1>50, \"Pass\", \"Fail\")</code><br><code>=AND(A1>50, B1>50)</code> - दोनों शर्तें सच होनी चाहिए।<br><code>=OR(A1>50, B1>50)</code> - कोई एक शर्त सच हो।",
        mission: "Cell C2 में: अगर B2 की Value 50 से ज़्यादा है तो 'Pass', वरना 'Fail' लिखें।",
        gridData: {
          "A1": "Student", "B1": "Marks", "C1": "Result",
          "A2": "Amit", "B2": "85", "C2": ""
        },
        targetCell: "C2",
        validate: (val) => val.toUpperCase().includes("IF") || val.toUpperCase().includes("PASS") || val === "Pass",
        successVal: "Pass"
      },
      {
        id: 4,
        title: "Text & Data Cleaning (TRIM, UPPER)",
        text: "<b>Text Functions:</b><br><br><code>=TRIM(A1)</code> अतिरिक्त स्पेस (Extra Space) हटाता है।<br><code>=UPPER(A1)</code> बड़े अक्षरों (Caps) में बदलता है।<br><code>=LEFT(A1, 4)</code> शुरू के 4 अक्षर निकालता है।<br><code>=LEN(A1)</code> अक्षरों की गिनती करता है।",
        mission: "Cell B2 में A2 के टेक्स्ट ('  hello  ') का फालतू स्पेस हटाएँ (TRIM का इस्तेमाल करें)।",
        gridData: {
          "A1": "Raw", "B1": "Cleaned",
          "A2": "  hello  ", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("TRIM") || val === "hello" || val.includes('"hello"'),
        successVal: "hello"
      },
      {
        id: 5,
        title: "Date Functions (TODAY, NOW)",
        text: "<b>Time Travel:</b><br><br><code>=TODAY()</code> आज की तारीख़।<br><code>=NOW()</code> आज की तारीख़ और समय।<br><code>=YEAR(A1)</code> साल निकालता है।<br><code>=MONTH(A1)</code> और <code>=DAY(A1)</code> महीने और दिन निकालते हैं।",
        mission: "Cell B2 में आज की तारीख़ निकालने का फ़ॉर्मूला लिखें।",
        gridData: {
          "A1": "Description", "B1": "Formula",
          "A2": "Current Date", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("TODAY") || val.includes("NOW"),
        successVal: "=TODAY()"
      },
      {
        id: 6,
        title: "Advanced Stats (SUMIF, COUNTIF)",
        text: "<b>Conditional Functions:</b><br><br><code>=COUNTIF(A1:A10, \"Yes\")</code> सिर्फ 'Yes' वालों को गिनता है।<br><code>=SUMIF(A1:A10, \"Yes\", B1:B10)</code> शर्त पूरी होने पर ही जोड़ता है।<br><b>SUMIFS</b> और <b>COUNTIFS</b> में आप कई शर्तें (Multiple Criteria) लगा सकते हैं!",
        mission: "Cell B4 में सिर्फ 'IT' डिपार्टमेंट वालों को Count करें। (A2:A3 में डिपार्टमेंट हैं)",
        gridData: {
          "A1": "Dept", "B1": "People",
          "A2": "IT", "B2": "Rahul",
          "A3": "HR", "B3": "Neha",
          "A4": "IT Count", "B4": ""
        },
        targetCell: "B4",
        validate: (val) => val.toUpperCase().includes("COUNTIF") || val === "1" || val === "=1",
        successVal: "1"
      },
      {
        id: 7,
        title: "VLOOKUP & HLOOKUP",
        text: "<b>Search engine of Excel:</b><br><br><code>=VLOOKUP(ढूंढना_क्या_है, टेबल, कॉलम_नंबर, 0)</code> वर्टिकल सर्च करता है (Top to Bottom)।<br><code>=HLOOKUP(...)</code> हॉरिजॉन्टल सर्च करता है (Left to Right)।",
        mission: "Cell D2 में 'Amit' का Score ढूंढें (VLOOKUP यूज करें)। टेबल A2:B4, कॉलम 2।",
        gridData: {
          "A1": "Name", "B1": "Score",
          "A2": "Rahul", "B2": "85",
          "A3": "Amit", "B3": "92",
          "A4": "Neha", "B4": "78",
          "D1": "Amit Score", "D2": ""
        },
        targetCell: "D2",
        validate: (val) => val.toUpperCase().includes("VLOOKUP") || val === "92" || val === "=92",
        successVal: "92"
      },
      {
        id: 8,
        title: "XLOOKUP (Modern Excel)",
        text: "VLOOKUP की खामियों को दूर करता है। <br><br><code>=XLOOKUP(lookup_value, lookup_array, return_array)</code><br>यह लेफ्ट में भी सर्च कर सकता है और कॉलम नंबर गिनने का झंझट नहीं है!",
        mission: "Cell C2 में 'Sales' डिपार्टमेंट वाले का नाम ढूँढें। XLOOKUP यूज़ करें।",
        gridData: {
          "A1": "Name", "B1": "Dept",
          "A2": "Amit", "B2": "HR",
          "A3": "Neha", "B3": "Sales",
          "A4": "Rahul", "B4": "IT",
          "C1": "Sales Person", "C2": ""
        },
        targetCell: "C2",
        validate: (val) => val.toUpperCase().includes("XLOOKUP") || val.toUpperCase() === "NEHA" || val === "=NEHA",
        successVal: "Neha"
      },
      {
        id: 9,
        title: "Dynamic Duo: INDEX & MATCH",
        text: "VLOOKUP से भी पावरफुल! <br><br><code>=INDEX(A1:B10, 2, 1)</code> (Row 2, Column 1 की वैल्यू देता है)<br><code>=MATCH(\"Amit\", A1:A10, 0)</code> (Amit की पोजीशन बताता है)<br><br><b>Mix:</b> <code>=INDEX(return_col, MATCH(value, search_col, 0))</code>",
        mission: "Cell B5 में Rahul का स्कोर निकालें।",
        gridData: {
          "A1": "Score", "B1": "Name",
          "A2": "85", "B2": "Rahul",
          "A3": "92", "B3": "Amit",
          "A5": "Rahul", "B5": ""
        },
        targetCell: "B5",
        validate: (val) => val.toUpperCase().includes("MATCH") || val.toUpperCase().includes("INDEX") || val === "85",
        successVal: "85"
      },
      {
        id: 10,
        title: "Dealing with Errors (IFERROR)",
        text: "जब फ़ॉर्मूले में Error (#DIV/0!, #N/A) आता है तो आपकी शीट बेकार लगती है।<br><br><code>=IFERROR(A1/B1, \"Error\")</code><br>अगर A1/B1 में एरर आता है, तो यह 'Error' (या आपका मैसेज) प्रिंट करेगा।",
        mission: "Cell B2 में: '10/0' को IFERROR में रखकर 'Zero Div' मैसेज प्रिंट करें।",
        gridData: {
          "A1": "Math", "B1": "Safe Result",
          "A2": "10 / 0", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("IFERROR") || val.toUpperCase().includes("ZERO DIV") || val === "Zero Div",
        successVal: "Zero Div"
      },
      {
        id: 11,
        title: "Array Magic (FILTER, SORT, UNIQUE)",
        text: "<b>Dynamic Arrays:</b><br><br><code>=FILTER(A1:B10, B1:B10=\"IT\")</code> सिर्फ़ IT वालों की लिस्ट निकालता है।<br><code>=SORT(A1:A10)</code> A-Z या Z-A सॉर्ट करता है।<br><code>=UNIQUE(A1:A10)</code> डुप्लीकेट्स हटाकर सिर्फ़ Unique आइटम्स की लिस्ट बनाता है!",
        mission: "Cell C2 में यूनिक (UNIQUE) फ़ॉर्मूला लगाकर डिपार्टमेंट्स की लिस्ट (A2:A4) में से सिंगल नाम निकालें।",
        gridData: {
          "A1": "Dept", "B1": "", "C1": "Unique",
          "A2": "IT", "B2": "", "C2": ""
        },
        targetCell: "C2",
        validate: (val) => val.toUpperCase().includes("UNIQUE") || val.toUpperCase().includes("IT"),
        successVal: "IT"
      },
      {
        id: 12,
        title: "Data Tools (Cleaning Job 🔥)",
        text: "<b>Job-Ready Skills:</b><br><br><b>Text to Columns:</b> एक सेल के डेटा ('John, Doe') को दो सेल्स ('John', 'Doe') में तोड़ता है।<br><b>Remove Duplicates:</b> डाटा क्लिनिंग के लिए सबसे ज़रूरी।<br><b>Flash Fill (Ctrl+E):</b> आपके पैटर्न को समझकर ऑटोमैटिकली डेटा भरता है।",
        mission: "पैटर्न समझकर ऑटो फिल करने वाले शॉर्टकट टूल का नाम क्या है? (Cell B2 में लिखें: Flash Fill)",
        gridData: {
          "A1": "Question", "B1": "Answer",
          "A2": "Ctrl+E Tool?", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("FLASH"),
        successVal: "Flash Fill"
      },
      {
        id: 13,
        title: "Pivot Tables (Ultimate Data Tool)",
        text: "हज़ारों लाइनों के डेटा को 10 सेकंड में समराइज़ करना है? <b>Pivot Table ⭐</b> आपका बेस्ट हथियार है।<br>Insert > Pivot Table पर क्लिक करें। <br><br>इसके साथ <b>Goal Seek</b> और <b>What-If Analysis</b> का कॉम्बो आपको एक प्रो (Pro) डेटा एनालिस्ट बना देगा!",
        mission: "Pivot Table में बाय डिफ़ॉल्ट कौन सा Calculation (SUM/AVERAGE) होता है?",
        gridData: {
          "A1": "Question", "B1": "Answer",
          "A2": "Default Function?", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("SUM"),
        successVal: "SUM"
      },
      {
        id: 14,
        title: "Filtering & Sorting",
        text: "<b>Analysis Base:</b><br><br><b>Filter (Ctrl+Shift+L):</b><br>- Text Filter: ('Contains' / 'Begins With')<br>- Number Filter: ('>50000', 'Top 10')<br>- Date Filter: ('Last Month', 'Today')<br>- Color Filter: हाइलाइटेड सेल्स को छांटना!<br>Sorting: A-Z, Z-A या कस्टम सॉर्ट।",
        mission: "फ़िल्टर लगाने का शॉर्टकट (Shortcut) क्या है? (Hint: Ctrl+Shift+?)",
        gridData: {
          "A1": "Shortcut", "B1": "Answer",
          "A2": "Filter", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("L") || val.toUpperCase().includes("SHIFT"),
        successVal: "Ctrl+Shift+L"
      },
      {
        id: 15,
        title: "Job Focus (Pro Shortcuts)",
        text: "<b>Interview में 10x फ़ास्ट काम करें:</b><br><br><code>Ctrl + C / V / Z</code> (Copy, Paste, Undo)<br><code>Ctrl + T</code> (बोरिंग डेटा को स्मार्ट 'Table' में बदले)<br><code>Alt + =</code> (ऑटोमैटिक SUM लगाता है!)<br><code>F4</code> (सेल रेफरेंस को लॉक करना $A$1)",
        mission: "Auto Sum लगाने का शॉर्टकट क्या है? (Cell B2 में लिखें: Alt+=)",
        gridData: {
          "A1": "Tip", "B1": "Shortcut",
          "A2": "Auto Sum", "B2": ""
        },
        targetCell: "B2",
        validate: (val) => val.toUpperCase().includes("ALT") || val.includes("="),
        successVal: "Alt+="
      },
      {
        id: 16, title: "1. Tutorial Basics (Home, Intro & Grid)",
        text: "<b>Excel 101:</b><br><br>Excel rows (1,2,3) aur columns (A,B,C) ka ek matrix hai jise Workspace (Grid) bolte hain. Isme hum Data store aur analyze karte hain. <br><i>Topics Covered: Home, Intro, Get Started, Overview.</i>",
        mission: "Cell B2 mein 'READY' likhein aur aage badhein.",
        gridData: {"A1":"Status", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase() === "READY", successVal: "READY"
      },
      {
        id: 17, title: "2. Navigating the Grid (Syntax & Ranges)",
        text: "<b>Cell Navigation:</b><br><br>Ek box ko Cell kahte hain (jaise A1). Ek box ke group ko <b>Range</b> kahte hain (jaise <code>A1:A5</code>). Columns aur rows ko Delete/Add karne ke liye Right Click karke 'Insert' ya 'Delete' dabayein.<br><i>Topics: Syntax, Ranges, Add Cells, Delete Cells.</i>",
        mission: "A1 se A5 ki range ko formula me kaise likhenge? (Cell B1 mein likhein: A1:A5)",
        gridData: {"A1":"Q: Range?", "B1":""}, targetCell: "B1",
        validate: (val) => val.includes("A1:A5"), successVal: "A1:A5"
      },
      {
        id: 18, title: "3. Smart Actions (Fill & Undo/Redo)",
        text: "<b>Time Savers:</b><br><br>- <b>Auto Fill:</b> Cell ke corner par double click karke series ko drag karein.<br>- <b>Move Cells:</b> Drag karke shift karein.<br>- <b>Undo/Redo:</b> <code>Ctrl+Z</code> (Pichla step cancel) aur <code>Ctrl+Y</code> (Dobara lana).<br><i>Topics: Fill, Move Cells, Undo Redo.</i>",
        mission: "Undo ka shortcut kya hai? (Cell B1 mein likhein: Ctrl+Z)",
        gridData: {"A1":"Undo?", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().replace(/\s/g, '').includes("CTRL+Z"), successVal: "Ctrl+Z"
      },
      {
        id: 19, title: "4. Formula Foundations",
        text: "<b>Math in Excel:</b><br><br>Har formula <code>=</code> se start hota hai. Parentheses <code>()</code> ka use karke aap BODMAS rule apply kar sakte hain. <br><i>Topics: Formulas, Arithmetic Operators (+ - * /), Parentheses, Functions Intro.</i>",
        mission: "Formula hamesha kis symbol se start hota hai?",
        gridData: {"A1":"Symbol?", "B1":""}, targetCell: "B1",
        validate: (val) => val.includes("="), successVal: "="
      },
      {
        id: 20, title: "5. Relative vs Absolute Reference",
        text: "<b>Cell Lock Trick:</b><br><br>- <b>Relative (A1):</b> Copy karne par cell automatically change ho jata hai.<br>- <b>Absolute ($A$1):</b> F4 press karne se cell 'Lock' ho jata hai aur fix rahta hai.<br><i>Topics: Relative Reference, Absolute Reference.</i>",
        mission: "Cell B1 mein $A$1 type karke lock reference likhein.",
        gridData: {"A1":"Lock Ref", "B1":""}, targetCell: "B1",
        validate: (val) => val.includes("$") && val.toUpperCase().includes("A"), successVal: "$A$1"
      },
      {
        id: 21, title: "6. Mastering Formatting",
        text: "<b>Make it aesthetic:</b><br><br><b>Format Painter (Brush Icon):</b> Ek cell ka design copy karke dusre par lagana.<br>Fonts, Colors, aur Borders change karke Data ko 'GenZ' aesthetic look dein.<br><i>Topics: Formatting, Format Painter, Colors, Fonts, Borders.</i>",
        mission: "Painters brush wale tool ka naam kya hai?",
        gridData: {"A1":"Tool Name:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("PAINTER"), successVal: "Format Painter"
      },
      {
        id: 22, title: "7. Number & Grid Settings",
        text: "<b>Data Cleansing:</b><br><br>Numbers ko Currency ($/₹), Dates, ya Percentages (%) mein Format karein. Grids (Lines) ko hide/show karne ke liye View > Gridlines ka use karein.<br><i>Topics: Format Numbers, Format Grids, Settings.</i>",
        mission: "Agar 50% likhna hai, toh usko kis format me convert karenge? (Cell B1 mein likhein: Percentage)",
        gridData: {"A1":"Format type:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("PERCENT"), successVal: "Percentage"
      },
      {
        id: 23, title: "8. Data Analysis 101",
        text: "<b>Basic Analytics:</b><br><br><b>Sort:</b> Data ko A to Z ya Chote se Bade (Low to High) set karna. <br><b>Filter:</b> Sirf zaroorat ka data dekhna. <br><b>Tables (Ctrl+T):</b> Data ko smart dynamic table me badalna.<br><i>Topics: Sort, Filter, Tables.</i>",
        mission: "Filter me agar 'Delhi' search karenge toh baaki data kya hota hai? (Cell B1: Hidet)",
        gridData: {"A1":"Action:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("HIDE") || val.toUpperCase().includes("HIDDEN"), successVal: "Hidden"
      },
      {
        id: 24, title: "9. Conditional Formatting Magic",
        text: "<b>Auto-Highlights:</b><br><br>Agar sales > 5000 hai, toh cell ko Green kar do! <br>Aap <b>Highlight Cell Rules</b> (> , < , =) aur <b>Top/Bottom Rules</b> (Top 10 items) ka use karke data scan fast kar sakte hain.<br><i>Topics: Conditional Format, Highlight Cell Rules, Top Bottom Rules.</i>",
        mission: "Ye rules manually text color badalte hain ya 'Auto'? (B1 mein likhein: Auto)",
        gridData: {"A1":"Type?", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("AUTO"), successVal: "Auto"
      },
      {
        id: 25, title: "10. Visual Data Formatting",
        text: "<b>Charts in Cells:</b><br><br>Cell ke andar chote graph banane ke liye <b>Data Bars</b>. Temps/Heat dikhane ke liye <b>Color Scales</b>. Arrows ya Traffic Lights dikhane ke liye <b>Icon Sets</b> ka use hota hai. (Manage Rules se sab edit hota hai).<br><i>Topics: Data Bars, Color Scales, Icon Sets, Manage Rules.</i>",
        mission: "Traffic lights wale rules ko kya kahte hain? (Hint: Icon Sets)",
        gridData: {"A1":"Name?", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("ICON") || val.toUpperCase().includes("SET"), successVal: "Icon Sets"
      },
      {
        id: 26, title: "11. Charts & Visualizations",
        text: "<b>Graphs:</b><br><br>Boring numbers ko Bar Charts, Pie Charts, aur Line Graphs se visual banayein (Insert > Charts). Business meeting ka sabse strong tool!<br><i>Topics: Charts.</i>",
        mission: "Gol (round) chart ko kya kahte hain?",
        gridData: {"A1":"Chart Type:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("PIE"), successVal: "Pie Chart"
      },
      {
        id: 27, title: "12. Pivot Tables Mastery",
        text: "<b>The Ultimate Tool:</b><br><br>Sirf columns ko drag-n-drop karke hazaro rows ka summary report banana. Ye sabse important tool hai data analytics jobs ke liye.<br><i>Topics: Table Pivot Intro.</i>",
        mission: "Pivot Table data ko kya karti hain? (Cell B1: Summarize)",
        gridData: {"A1":"Function?", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("SUMMAR"), successVal: "Summarize"
      },
      {
        id: 28, title: "13. Case Study: Poke Mart",
        text: "<b>Real-World Simulation:</b><br><br>Suppose aapke paas PokeBalls ki sales ka data hai. Aap isme pehle <b>Filter</b> lagayenge, fir Potion sales nikalne ke liye <b>SUMIF</b> use karenge, aur finally aesthetic dark theme mein format karenge.<br><i>Topics: Case Poke Mart, Case Poke Mart Styling.</i>",
        mission: "Cell B1 mein 'LET'S GO' likh kar Pokemon Master banein!",
        gridData: {"A1":"Start:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("LET") || val.toUpperCase().includes("GO"), successVal: "LET'S GO"
      },
      {
        id: 29, title: "14. Logical Functions (IF, AND, OR)",
        text: "<b>Decision Trees:</b><br><br><code>=IF()</code> - Condition true hui toh X vrna Y.<br><code>=IFS()</code> - Bohot saari IF conditions ek sath!<br><code>=AND() / =OR() / =XOR()</code> - Multiple logic mix karne ke liye.<br><i>Topics: IF, IFS, AND, OR, XOR.</i>",
        mission: "=IF(10>5, 'Yes', 'No') ka answer kya hoga?",
        gridData: {"A1":"Answer:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("YES"), successVal: "Yes"
      },
      {
        id: 30, title: "15. Text & String Functions",
        text: "<b>Clean the Text:</b><br><br><code>=LEFT/RIGHT(cell, number)</code> - Kone se words nikalna.<br><code>=LOWER(cell)</code> - Sab small letters mein.<br><code>=TRIM(cell)</code> - Extra spaces saaf karna.<br><code>=CONCAT(var1, var2)</code> - Do words jodna.<br><i>Topics: LEFT, LOWER, RIGHT, TRIM, CONCAT.</i>",
        mission: "TRIM() function kya remove karta hai?",
        gridData: {"A1":"Removes:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("SPACE"), successVal: "Spaces"
      },
      {
        id: 31, title: "16. Counting Functions",
        text: "<b>Track Metrics:</b><br><br><code>=COUNT()</code> - Numbers ginta hai.<br><code>=COUNTA()</code> - Non-empty items ginta hai.<br><code>=COUNTBLANK()</code> - Khaali boxes ginta hai.<br><code>=COUNTIF / COUNTIFS()</code> - Condition ke hisab se count!<br><i>Topics: COUNT, COUNTA, COUNTIF...</i>",
        mission: "Sirf khali (empty) cells ko ginne wala formula kya hai?",
        gridData: {"A1":"Formula:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("COUNTBLANK"), successVal: "COUNTBLANK"
      },
      {
        id: 32, title: "17. Math & Stats Suite",
        text: "<b>Analytics Core:</b><br><br><code>AVERAGE, AVERAGEIF/S</code> - Aukat nikalne ke liye.<br><code>MAX / MIN</code> - Sabse bada/chhota.<br><code>MEDIAN / MODE</code> - Middle aur most repeated item.<br><code>SUM, SUMIF/S</code> - Jodna.<br><code>STDEV.P/S</code> - Risk / Variance track karna.<br><code>=RAND()</code> - Random numbers!<br><i>Topics Covered: All stats functions.</i>",
        mission: "Sabse lowest value nikalne ke liye kya function lagta hai?",
        gridData: {"A1":"Lowest Fn:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("MIN"), successVal: "MIN()"
      },
      {
        id: 33, title: "18. Lookup & Finance (VLOOKUP, NPV)",
        text: "<b>Pro Features:</b><br><br><code>=VLOOKUP(ढूंढना_क्या_है, टेबल, कॉलम_नंबर, 0)</code><br><code>=NPV(rate, value1, value2...)</code> - Business me aage future me aane wale cash flows ki aaj (Present) ki value kya hoti hai, usko calculate karna.<br><i>Topics: VLOOKUP, NPV.</i>",
        mission: "VLOOKUP data ko vertically dhundta hai ya horizontally?",
        gridData: {"A1":"Direction:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("VERTIC"), successVal: "Vertically"
      },
      {
        id: 34, title: "19. Useful How-Tos",
        text: "<b>Daily Tasks:</b><br><br>- <b>Time diff:</b> Sirf Subtract karein `B2 - A2` aur usko 'Time format' dein. <br>- <b>Convert Time:</b> `Hour() * 3600` kar ke seconds nikalein.<br>- <b>Remove Duplicates:</b> 'Data' ribbon mein se duplicated junk single click mein hatayein.<br><i>Topics: Convert Time, Diff Times, Remove Duplicates.</i>",
        mission: "Duplicates hatane wala button kis ribbon tab (jaise Home/Insert) mein hota hai?",
        gridData: {"A1":"Tab Name:", "B1":""}, targetCell: "B1",
        validate: (val) => val.toUpperCase().includes("DATA"), successVal: "Data"
      },
      {
        id: 35, title: "20. Final Resources & Next Steps",
        text: "<b>GenZ OP Status Achieved 🚀!</b><br><br>Aapne successfully Excel module cover kar liya hai, from tutorial exercises to study plan aur syllabus implementation.<br><i>Download the Keyboard Shortcuts cheat-sheet, Training Modules aur apna Certificate claim karein!</i>",
        mission: "Apna naam Cell B1 mein likhein Certificate ke liye aur Course Finish karein!",
        gridData: {"A1":"Trainee Name:", "B1":""}, targetCell: "B1",
        validate: (val) => val.trim().length > 2, successVal: "Claimed 🎉"
      }
  ],
  html: [
    { 
      id: 1, title: "1. HTML Introduction & Editors", 
      text: "<b>Web ki Foundation:</b><br><br>HTML (HyperText Markup Language) waise hi hai jaise building ka skeleton. Har website isi ke upar khari hoti hai. Isme hum 'tags' (e.g., <code>&lt;html&gt;</code>) use karte hain elements bananey ke liye. Isay VS Code, Sublime ya Notepad me edit kar sakte hain.",
      mission: "Aap taiyar ho skeleton build karne ke liye? Type 'READY' and hit enter.", 
      validate: (val) => val.toUpperCase().includes('READY'), 
      successVal: "READY" 
    },
    { 
      id: 2, title: "2. HTML Basic Elements", 
      text: "<b>The Boilerplate:</b><br><br>Har file <code>&lt;!DOCTYPE html&gt;</code> se start hoti hai, fir <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> (metadata/title), aur <code>&lt;body&gt;</code> jisme actual page dikhta hai. Har Element ka ek open aur closing tag hota hai <code>&lt;p&gt;...&lt;/p&gt;</code>", 
      mission: "Main container tag kya hai jiske andar website ka contents hota hai?", 
      validate: (val) => val.toLowerCase().includes('body'), 
      successVal: "<body>" 
    },
    { 
      id: 3, title: "3. Attributes & Headings", 
      text: "<b>Extra Info & Hierarchy:</b><br><br>Attributes elements ko additional properties dete hain (src, href, style, id). Headings ko order me use karo: <code>&lt;h1&gt;</code> main title ke liye, aur <code>&lt;h6&gt;</code> sabse chote ke liye.", 
      mission: "GenZ likho h1 tag ka use karke.", 
      validate: (val) => val.toLowerCase().includes('<h1') && val.toLowerCase().includes('genz') && val.toLowerCase().includes('</h1>'), 
      successVal: "<h1>GenZ</h1>" 
    },
    { 
      id: 4, title: "4. Paragraphs & Styles", 
      text: "<b>Simple Text Block:</b><br><br>Text of blocks <code>&lt;p&gt;</code> tag me rakhe jate hain. Browser automatically margin add kar deta hai. Tag me CSS lagane ke liye inline Style attribute: <code>&lt;p style=\"color:red;\"&gt;</code> ka use karo.", 
      mission: "Ek paragraph tag bhejo jisme text 'hello' ho.", 
      validate: (val) => val.toLowerCase().includes('<p') && val.toLowerCase().includes('hello') && val.toLowerCase().includes('</p>'), 
      successVal: "<p>hello</p>" 
    },
    { 
      id: 5, title: "5. Text Formatting & Quotes", 
      text: "<b>Tags that format text:</b><br><br><code>&lt;b&gt;</code> aur <code>&lt;strong&gt;</code> (Bold)<br><code>&lt;i&gt;</code> aur <code>&lt;em&gt;</code> (Italic)<br><code>&lt;mark&gt;</code> (Highlight) aur <code>&lt;del&gt;</code> (Strikethrough). Comments `&lt;!-- --&gt;` me likhte hain, browser inhey ignore karta hai.", 
      mission: "Text ko highlight karne wale HTML5 tag ka naam likho.", 
      validate: (val) => val.toLowerCase().includes('mark'), 
      successVal: "<mark>" 
    },
    { 
      id: 6, title: "6. Links & Images", 
      text: "<b>Interconnectivity:</b><br><br>Links: <code>&lt;a href=\"url\"&gt;Link Text&lt;/a&gt;</code>. Image show karney ke lye <code>&lt;img src=\"img_url\" alt=\"Description\"&gt;</code>. In dono se hi website interactable banti hai.", 
      mission: "Image tag me destination batane wale attribute ka naam kya hai?", 
      validate: (val) => val.toLowerCase() === 'src' || val.toLowerCase().includes('src='), 
      successVal: "src" 
    },
    { 
      id: 7, title: "7. HTML Page Titles & Favicons", 
      text: "<b>Head Content:</b><br><br>Head tag ke andar <code>&lt;title&gt;Page Name&lt;/title&gt;</code> lagaya jata hai jo browser tab par show hota hai. Usi tab ke left mein jo logo aata hai usay Favicon kahte hain jo link tag se set hota hai.", 
      mission: "Browser tab icon ka short word/name kya hai?", 
      validate: (val) => val.toLowerCase().includes('favicon'), 
      successVal: "Favicon" 
    },
    { 
      id: 8, title: "8. HTML Tables", 
      text: "<b>Grid Data (Rows/Cols):</b><br><br><code>&lt;table&gt;</code> se shuru karein.<br><code>&lt;tr&gt;</code> (Table Row)<br><code>&lt;th&gt;</code> (Table Heading)<br><code>&lt;td&gt;</code> (Table Data Cell)", 
      mission: "Nayi row (line) add karne ka tag bataiye.", 
      validate: (val) => val.toLowerCase().includes('tr'), 
      successVal: "<tr>" 
    },
    { 
      id: 9, title: "9. HTML Lists", 
      text: "<b>Bullet Points & Sequences:</b><br><br><code>&lt;ul&gt;</code> Unordered List (bullets, discs)<br><code>&lt;ol&gt;</code> Ordered List (1,2,3... A,B,C)<br><code>&lt;li&gt;</code> List Item (Dono lists ke elements isi tag me aate hain)", 
      mission: "Number wali list banana ho (1, 2, 3) to konsa outer tag chalega?", 
      validate: (val) => val.toLowerCase().includes('ol'), 
      successVal: "<ol>" 
    },
    { 
      id: 10, title: "10. Block/Inline Elements & Divs", 
      text: "<b>Layout Physics:</b><br><br>Block elements (jese div, h1, p) poori chaurai (100% width) lelete hain.<br>Inline elements (span, a) utni hi width lete hain jitni contents me zaroorat ho. `&lt;div&gt;` sabse primary building container box hai web dunya mein.", 
      mission: "Div kis type ka element hai? (Block ya Inline)", 
      validate: (val) => val.toLowerCase().includes('block'), 
      successVal: "Block" 
    },
    { 
      id: 11, title: "11. Classes, IDs & Layout", 
      text: "<b>Grouping Power:</b><br><br><code>class</code> tag CSS/JS laganay ke liy multiple div ko same name dene ke liye aur <code>id</code> kisi HTML element ki uniq identifier ke tor par assign hoti hai. Ye pure visual layouts bananey ka secret hai.", 
      mission: "CSS mein class ko select karne ke liye konsa symbol prefix lagta hai? (Hint: id ke liye hashtagh # hai aur class k lye...)", 
      validate: (val) => val.includes('.'), 
      successVal: ". (Dot)" 
    },
    {
      id: 12, title: "12. Iframes, Head & File Paths",
      text: "<b>Embed and Route:</b><br><br><code>&lt;iframe src=\"...\"&gt;</code> se doosri web (jese Maps) ek block me embed hotay ha. Images/CSS connect karte waqt `../` aur `./` file paths zaroori hain. Aur `&lt;head&gt;` ke meta data me `viewport` se phone k hisab se zoom level control hota hy.",
      mission: "Youtube video embed karne ke liye wo konsa HTML Element best hai?",
      validate: (val) => val.toLowerCase().includes('iframe'),
      successVal: "<iframe>"
    },
    {
      id: 13, title: "13. HTML Semantics",
      text: "<b>Meaningful Tags (HTML5):</b><br><br>Har jagah `&lt;div&gt;` use karne ki jagah `&lt;header&gt;`, `&lt;footer&gt;`, `&lt;article&gt;`, aur `&lt;nav&gt;` use karna Search Engine Optimization (SEO) aur code reading dono ke lye best practice hai.",
      mission: "Navigation links list out karne k liye `div` ki jagah kon sa semantic tag zayada use ful ha?",
      validate: (val) => val.toLowerCase().includes('nav'),
      successVal: "<nav>"
    },
    {
      id: 14, title: "14. Entities, Symbols & Emojis",
      text: "<b>Special Web Texts:</b><br><br>HTML me `<` directly ni likh sakte warn browser tag smj lega to log `&lt;` use karte hain. UTF-8 Meta Charset hone ka fayda hta ap Emojis 😂 paste krsktey browser properly decode krlega usay. ",
      mission: "Browser me HTML ko characters render krwaney wali property konsy hai jo utf-8 pe set hai?",
      validate: (val) => val.toLowerCase().includes('charset'),
      successVal: "Charset (Character Set)"
    },
    {
      id: 15, title: "15. HTML Forms & Inputs",
      text: "<b>User Inputs Validation:</b><br><br><code>&lt;form action=\"/api\"&gt;</code> me inputs aatay hain. HTML5 mein naye input types (jese <code>type=\"email\"</code> ya `color`) hain jsey browser automatically valid emails hi accept karta hai bina kisi JS code k. Aur `required`, `placeholder` user experience improve karte hain.",
      mission: "Form me security k lye aesa password box dikhane wala input type likho jo dots show kry?",
      validate: (val) => val.toLowerCase().includes('password'),
      successVal: 'type="password"'
    },
    {
      id: 16, title: "16. HTML Graphics (Canvas & SVG)",
      text: "<b>Drawing Board in UI:</b><br><br><code>&lt;canvas&gt;</code> pixel-based space deta hai drawing/game loop k liye (by JS).<br>Lekin <code>&lt;svg&gt;</code> tag vector graphics produce karta ha (code-drawn lines) to screen kitni bhi badi hu blur/pixelate nhi hota.",
      mission: "Quality loss se bachne k liye icons me konsa format/tag sabse perfect maana jana hai?",
      validate: (val) => val.toLowerCase().includes('svg'),
      successVal: "SVG (Scalable Vector Graphic)"
    },
    {
      id: 17, title: "17. Media, Audio & Video",
      text: "<b>Play it out:</b><br><br>Bina kisi Youtube iframe ke khud k clips host k lye: <code>&lt;video controls src=\"file.mp4\"&gt;&lt;/video&gt;</code> aur <code>&lt;audio autoplay src=\"file.mp3\"&gt;</code><br>`controls` attribute se play/pause/mute k default UI show hojaegi.",
      mission: "Video mein by default play, pause and mute waghaira slider on rkhne ka attribute?",
      validate: (val) => val.toLowerCase().includes('control'),
      successVal: "controls"
    },
    {
      id: 18, title: "18. Web APIs (Geolocation, Web Storage)",
      text: "<b>Advanced Native Functions:</b><br><br>HTML bas boxes / markup nahe raha. HTML5 me inbuilt features: Geolocation API (user lat/long lena), Local Storage API (browser db - 5mb offline store in PC), aur Web Workers jo background JS chalate hain without crashing site UI.",
      mission: "User PC me login state jesi cheezain persistent store krne wale us HTML API ka naam?",
      validate: (val) => val.toLowerCase().includes('storage') || val.toLowerCase().includes('local'),
      successVal: "Web Storage (Local Storage)"
    },
    {
      id: 19, title: "19. Summary, References & Wrap Up",
      text: "<b>HTML Architect Verified ✅</b><br><br>Aapne HTML Syllabus cover kya: Intro, Semantics, Media, Layout, API aur Forms sab completed! Ap references (Tag List, Global Attributes, Browser Events wghera) verify kar payenge humare Study Plan block me. Make website accessible using properties like ARIA or basic tab-index order.",
      mission: "GenZ OP ban gaye! Claim apny complete HTML Developer skill by typing 'PRO CODER'.",
      validate: (val) => val.toUpperCase().includes('PRO CODER') || val.toUpperCase().includes('PROCODER'),
      successVal: "Claimed 🎉 GenZ OP!"
    }
  ],
  css: [
    { id: 1, title: "CSS Basics: Make it drip", text: "CSS is the swag of your website. Ise `style` block ya externally link kiya jata hai.", mission: "Color ko red karne ka property likho (e.g. color: red;)", validate: (val) => val.toLowerCase().replace(/\s/g, '').includes('color:red'), successVal: "color: red;" },
    { id: 2, title: "Flexbox: Magic Layout", text: "`display: flex;` se items automatically distribute ho jate hain. It's the most used CSS property basically.", mission: "Flexbox activate karne ki property likho.", validate: (val) => val.toLowerCase().includes('display: flex') || val.replace(/\s/g,'').toLowerCase().includes('display:flex'), successVal: "display: flex;" },
    { id: 3, title: "CSS Done", text: "Congratulations, your stylesheet is looking fire. Grid aur Animations baad me try karna.", mission: "Type 'READY' for the next language.", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  javascript: [
    { id: 1, title: "Variables: const & let", text: "JS me variables data save karte hain. `const` fixed hota hai, `let` change ho sakta hai.", mission: "Ek const variable `age` banao jisme 21 assign ho.", validate: (val) => val.includes('const age') && val.includes('21'), successVal: "const age = 21;" },
    { id: 2, title: "Functions: Reusable Code", text: "Functions blocks hote hain. `function doSomething() { }` ya arrow functions `() => {}`", mission: "Ek function `hello` banao.", validate: (val) => val.includes('function hello') || val.includes('hello = () =>'), successVal: "function hello() {}" },
    { id: 3, title: "JS Champion", text: "DOM manipulation seekh kar aap pure GenZ Coder style interactive websites bana sakte ho.", mission: "Type 'JS OP' to finish.", validate: (val) => val.toUpperCase() === 'JS OP', successVal: "JS OP" }
  ],
  sql: [
    { id: 1, title: "SQL 101: Get the Data", text: "Database se data nikalne ke liye `SELECT * FROM table;` use karte hain.", mission: "Users table se saara data nikalne ka query likho.", validate: (val) => val.toUpperCase().includes('SELECT * FROM USERS'), successVal: "SELECT * FROM Users;" },
    { id: 2, title: "WHERE Clause", text: "Filters lagane ke liye `WHERE age > 18` lagate hain.", mission: "Query jisme users jinki age 18 se upar ho.", validate: (val) => val.toUpperCase().includes('WHERE AGE > 18'), successVal: "SELECT * FROM Users WHERE age > 18;" }
  ],
  python: [
    { id: 1, title: "Python: Print Magic", text: "Python sabse readable language hai. `print('Hello')` se display hota hai.", mission: "Screen par 'GenZ' print karo.", validate: (val) => val.includes('print') && val.includes('GenZ'), successVal: "print('GenZ')" },
    { id: 2, title: "Lists & Loops", text: "`for x in list:` se aap asani se loop chala sakte hain.", mission: "Loop chalaney ka keyword likhe (starts with f).", validate: (val) => val.toLowerCase().includes('for'), successVal: "for item in list:" },
    { id: 3, title: "Data Science Gateway", text: "Python se Machine Learning aur Data Science bahut easy ho jata hai Pandas aur Numpy libraries se.", mission: "Type 'ML READY'", validate: (val) => val.toUpperCase() === 'ML READY', successVal: "ML READY" }
  ],
  java: [
    { id: 1, title: "Java OOPs", text: "Java object oriented hai. Har cheez Class mein likhi jati hai.", mission: "Ek public class `Main` banao.", validate: (val) => val.includes('public class Main'), successVal: "public class Main {}" }
  ],
  php: [
    { id: 1, title: "Server-side PHP", text: "PHP code `<?php` aur `?>` ke beech likha jata hai.", mission: "Echo use karke 'Hi' print karein.", validate: (val) => val.toLowerCase().includes('echo'), successVal: "echo 'Hi';" }
  ],
  howto: [
    { id: 1, title: "How To: Centering a Div", text: "Flexbox best way hai: `display: flex; justify-content: center; align-items: center;`", mission: "Type 'CENTER' to finish.", validate: (val) => val.toUpperCase() === 'CENTER', successVal: "CENTER" }
  ],
  w3css: [
    { id: 1, title: "W3.CSS", text: "Yeh utility based framework hai jo w3classes pe based hai.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  c: [
    { id: 1, title: "C Programming", text: "Har C program main() se shuru hota hai.", mission: "Print karne ke liye kya likhte hain?", validate: (val) => val.toLowerCase().includes('printf'), successVal: "printf();" }
  ],
  cpp: [
    { id: 1, title: "C++", text: "C++ is C with classes.", mission: "Output ke liye std::cout << likhein", validate: (val) => val.includes('cout'), successVal: "cout" }
  ],
  csharp: [
    { id: 1, title: "C#", text: "Microsoft's Java, heavily used in .NET.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  bootstrap: [
    { id: 1, title: "Bootstrap 5", text: "Responsive layout system.", mission: "Container banane k liye class ka naam likho", validate: (val) => val.includes('container'), successVal: "container" }
  ],
  react: [
    { id: 1, title: "React JS", text: "State aur components basis pe chalta hai.", mission: "State change hook kya hota hai?", validate: (val) => val.includes('useState'), successVal: "useState" }
  ],
  mysql: [
    { id: 1, title: "MySQL", text: "Relational DB query language.", mission: "Naya DB bananey ki command?", validate: (val) => val.toUpperCase().includes('CREATE DATABASE'), successVal: "CREATE DATABASE" }
  ],
  jquery: [
    { id: 1, title: "jQuery", text: "$ sign se DOM manipulate karta hai.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  xml: [
    { id: 1, title: "XML Data", text: "Extensible Markup Language. Tags apne man ke lagau.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  django: [
    { id: 1, title: "Django", text: "Python advanced web framework for scalable backends.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ],
  numpy: [
    { id: 1, title: "Numpy", text: "Python arrays & mathematical operations fast karta hai.", mission: "Type 'READY'", validate: (val) => val.toUpperCase() === 'READY', successVal: "READY" }
  ]
};
