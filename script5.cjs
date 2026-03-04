const fs = require('fs');
const path = require('path');

const messengerPath = path.join(__dirname, 'src/components/Messenger.tsx');
let messengerContent = fs.readFileSync(messengerPath, 'utf8');

// Replace text-left with text-right in yellow bubbles
messengerContent = messengerContent.replace(/<div className="bg-\[#fee500\]([^"]+)text-left([^"]*)">\s*([^<]+)\s*<\/div>/g, (match, before, after, text) => {
    return `<div className="bg-[#fee500]${before}text-right${after}">${text.trim()}</div>`;
});

fs.writeFileSync(messengerPath, messengerContent, 'utf8');
console.log('Done');
