const fs = require('fs');
const path = require('path');

const messengerPath = path.join(__dirname, 'src/components/Messenger.tsx');
let content = fs.readFileSync(messengerPath, 'utf8');

// 1. Replace all text-right with text-left in yellow bubbles
content = content.replace(/<div className="bg-\[#fee500\]([^"]+)text-right([^"]*)">\s*([^<]+)\s*<\/div>/g, (match, before, after, text) => {
    return `<div className="bg-[#fee500]${before}text-left${after}">${text.trim()}</div>`;
});

// 2. Replace Group 1 specifically to include the <br />
const group1Old = `<div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 max-w-[85%] text-[14.5px] text-left text-gray-900 shadow-sm leading-snug break-keep w-fit">볼 때 마다 느끼는건데</div>`;
const group1New = `{/* 직접 <br />을 넣어 텍스트 좌측 정렬 및 잉여 여백을 없앱니다 */}
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 max-w-[85%] text-[14.5px] text-left text-gray-900 shadow-sm leading-snug break-keep w-fit">
              볼 때 마다<br />느끼는건데
            </div>`;

content = content.replace(group1Old, group1New);

fs.writeFileSync(messengerPath, content, 'utf8');
console.log('Done');
