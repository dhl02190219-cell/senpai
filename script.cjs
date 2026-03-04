const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Messenger.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/className="bg-\[#fee500\] rounded-2xl rounded-tr-sm px-4 py-2 max-w-\[85%\] text-\[14px\] text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-[#fee500] rounded-2xl rounded-tr-sm pl-3 pr-4 py-2 max-w-[85%] text-[14px] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap"');

content = content.replace(/className="bg-\[#fee500\] rounded-2xl px-4 py-2 max-w-\[85%\] text-\[14px\] text-gray-900 shadow-sm leading-snug whitespace-nowrap"/g, 'className="bg-[#fee500] rounded-2xl pl-3 pr-4 py-2 max-w-[85%] text-[14px] text-right text-gray-900 shadow-sm leading-snug whitespace-nowrap"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
