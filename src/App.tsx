/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Messenger from './components/Messenger';
import Profile from './components/Profile';
import { AnimatePresence, motion } from 'motion/react';

const PRELOAD_IMAGES = [
  "https://i.postimg.cc/VvXzbkR1/image.png",
  "https://i.postimg.cc/vB9J0S68/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-456542845.png",
  "https://i.postimg.cc/13nJ0VFF/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-2454213452.png",
  "https://i.postimg.cc/gcgDfHqG/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-1000641996.png",
  "https://i.postimg.cc/fR9fSn4b/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-3001886418.png",
  "https://i.postimg.cc/MHJvL43G/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-2699535373.png"
];

export default function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    PRELOAD_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full font-sans overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute -inset-10 z-0">
        <img 
          src="https://i.postimg.cc/qRm1HXck/35.webp" 
          alt="Background" 
          className="w-full h-full object-cover blur-md opacity-80" 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 11시 방향 텍스트 추가 */}
      <div className="hidden md:block absolute top-12 left-8 md:top-20 md:left-20 lg:top-32 lg:left-32 xl:left-48 z-20 drop-shadow-lg pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-snug tracking-wider">
          <span className="text-[#ff0000]" style={{ fontSize: '1.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>오</span>
          <span className="text-[#222]" style={{ fontSize: '0.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>늘 </span>
          <span className="text-[#888]" style={{ fontSize: '1.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>양</span>
          <span className="text-[#222]" style={{ fontSize: '0.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>말<br/></span>
          <span className="text-[#ffbda1]" style={{ fontSize: '1.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>무</span>
          <span className="text-[#222]" style={{ fontSize: '0.5em', textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 0px 4px 8px rgba(0,0,0,0.4)' }}>슨 색이게?</span>
        </h1>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center md:py-4 md:px-4">
        
        {/* Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 md:relative w-full h-full md:w-[440px] md:h-[95vh] md:max-h-[920px] bg-white md:rounded-[3rem] shadow-2xl overflow-hidden md:border-[12px] border-gray-900 flex-shrink-0"
        >
          {/* Phone Notch */}
          <div className="hidden md:flex absolute top-0 inset-x-0 h-6 justify-center z-50">
            <div className="w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
          </div>

          <Messenger onOpenProfile={() => setIsProfileOpen(true)} />
          <AnimatePresence>
            {isProfileOpen && <Profile onClose={() => setIsProfileOpen(false)} />}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
