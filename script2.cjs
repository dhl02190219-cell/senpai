const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Messenger.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Yellow bubbles
content = content.replace(/className="bg-\[#fee500\] rounded-2xl rounded-tr-sm pl-3 pr-4 py-2 max-w-\[85%\] text-\[14px\] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-[#fee500] rounded-2xl rounded-tr-sm pl-5 pr-3 py-1.5 max-w-[85%] text-[14.5px] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit"');

content = content.replace(/className="bg-\[#fee500\] rounded-2xl pl-3 pr-4 py-2 max-w-\[85%\] text-\[14px\] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-[#fee500] rounded-2xl pl-5 pr-3 py-1.5 max-w-[85%] text-[14.5px] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit"');

// White bubbles
content = content.replace(/className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-\[85%\] text-\[14px\] text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-1.5 max-w-[85%] text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit"');

content = content.replace(/className="bg-white rounded-2xl px-4 py-2 max-w-\[85%\] text-\[14px\] text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-white rounded-2xl px-3.5 py-1.5 max-w-[85%] text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit"');

// Spacing
content = content.replace(/space-y-5/g, 'space-y-3');
content = content.replace(/pt-2/g, 'pt-1');
content = content.replace(/gap-2\.5/g, 'gap-2');

// Image size
content = content.replace(/w-48 h-64/g, 'w-44 h-56');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
