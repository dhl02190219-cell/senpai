const fs = require('fs');
const path = require('path');

const messengerPath = path.join(__dirname, 'src/components/Messenger.tsx');
let messengerContent = fs.readFileSync(messengerPath, 'utf8');

// Yellow bubbles
messengerContent = messengerContent.replace(/<div className="bg-\[#fee500\]([^"]+)">\s*([^<]+)\s*<\/div>/g, (match, classes, text) => {
    // Replace padding and alignment
    let newClasses = classes
        .replace(/pl-5 pr-3/g, 'px-3.5')
        .replace(/px-4/g, 'px-3.5')
        .replace(/text-right/g, 'text-left')
        .replace(/whitespace-nowrap/g, 'break-words')
        .replace(/\s+/g, ' ')
        .trim();
        
    if (!newClasses.includes('break-words')) {
        newClasses += ' break-words';
    }
    if (!newClasses.includes('w-fit')) {
        newClasses += ' w-fit';
    }
    
    return `<div className="bg-[#fee500] ${newClasses}">${text.trim()}</div>`;
});

// White bubbles
messengerContent = messengerContent.replace(/<div className="bg-white([^"]+)">\s*([^<]+)\s*<\/div>/g, (match, classes, text) => {
    let newClasses = classes
        .replace(/whitespace-nowrap/g, 'break-words')
        .replace(/\s+/g, ' ')
        .trim();
        
    if (!newClasses.includes('break-words')) {
        newClasses += ' break-words';
    }
    if (!newClasses.includes('w-fit')) {
        newClasses += ' w-fit';
    }
    
    return `<div className="bg-white ${newClasses}">${text.trim()}</div>`;
});

fs.writeFileSync(messengerPath, messengerContent, 'utf8');

// 2. Update index.css
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(
    /@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Inter:wght@400;500;600;700&display=swap'\);/,
    `@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');`
);

cssContent = cssContent.replace(
    /--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;/,
    `--font-sans: "Jua", ui-sans-serif, system-ui, sans-serif;`
);

fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('Done');
