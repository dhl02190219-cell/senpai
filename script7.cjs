const fs = require('fs');
const path = require('path');

const messengerPath = path.join(__dirname, 'src/components/Messenger.tsx');
let content = fs.readFileSync(messengerPath, 'utf8');

// 1. Fix root div to ensure it fills the parent and scrolls properly
content = content.replace(
  '<div className="flex flex-col h-full bg-[#b2c7d9] pt-8 md:pt-6 relative">',
  '<div className="flex flex-col absolute inset-0 bg-[#b2c7d9] pt-8 md:pt-6">'
);

// 2. Remove max-w-[85%] to let bubbles size to their content
content = content.replace(/max-w-\[85%\]\s*/g, '');

// 3. Replace break-keep with whitespace-nowrap to prevent ANY line breaks
content = content.replace(/break-keep/g, 'whitespace-nowrap');

// 4. Remove <br /> in the specific message
content = content.replace(/볼 때마다<br \/>느끼는 건데/g, '볼 때마다 느끼는 건데');

fs.writeFileSync(messengerPath, content, 'utf8');
console.log('Messenger updated');

const appPath = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Fix App.tsx layout to ensure mobile height is strictly bounded
appContent = appContent.replace(
  '<div className="flex-1 w-full flex items-center justify-center z-10 md:py-4 md:px-4">',
  '<div className="flex-1 w-full relative z-10 flex items-center justify-center md:py-4 md:px-4">'
);

appContent = appContent.replace(
  'className="w-full h-full md:w-[440px] md:h-[95vh] md:max-h-[920px] bg-white md:rounded-[3rem] shadow-2xl overflow-hidden relative md:border-[12px] border-gray-900 flex-shrink-0"',
  'className="absolute inset-0 md:relative w-full h-full md:w-[440px] md:h-[95vh] md:max-h-[920px] bg-white md:rounded-[3rem] shadow-2xl overflow-hidden md:border-[12px] border-gray-900 flex-shrink-0"'
);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('App updated');
