const fs = require('fs');
const path = require('path');

// 1. Update Messenger.tsx
const messengerPath = path.join(__dirname, 'src/components/Messenger.tsx');
let messengerContent = fs.readFileSync(messengerPath, 'utf8');

// Replace yellow bubbles
messengerContent = messengerContent.replace(/<div className="bg-\[#fee500\]([^"]+whitespace-nowrap[^"]*)">\s*([^<]+)\s*<\/div>/g, (match, classes, text) => {
    const newClasses = classes.replace('whitespace-nowrap', 'break-words').trim();
    return `<div className="bg-[#fee500] ${newClasses}">${text.trim()}</div>`;
});

// Replace white bubbles
messengerContent = messengerContent.replace(/<div className="bg-white([^"]+whitespace-nowrap[^"]*)">\s*([^<]+)\s*<\/div>/g, (match, classes, text) => {
    const newClasses = classes.replace('whitespace-nowrap', 'break-words').trim();
    return `<div className="bg-white ${newClasses}">${text.trim()}</div>`;
});

fs.writeFileSync(messengerPath, messengerContent, 'utf8');

// 2. Update index.css
const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(
    /@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Inter:wght@400;500;600;700&display=swap'\);/,
    `@import url('https://fonts.googleapis.com/css2?family=Jua&family=Hi+Melody&display=swap');`
);

cssContent = cssContent.replace(
    /--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;/,
    `--font-sans: "Jua", "Hi Melody", ui-sans-serif, system-ui, sans-serif;`
);

fs.writeFileSync(cssPath, cssContent, 'utf8');

console.log('Done');
