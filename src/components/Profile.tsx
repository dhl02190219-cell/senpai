import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Phone, Video, MoreVertical, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REDIRECT_URL = "https://share.crack.wrtn.ai/w8u68m";

const PROFILE_IMAGES = [
  "https://i.postimg.cc/VvXzbkR1/image.png",
  "https://i.postimg.cc/vB9J0S68/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-456542845.png",
  "https://i.postimg.cc/13nJ0VFF/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-2454213452.png",
  "https://i.postimg.cc/gcgDfHqG/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-1000641996.png",
  "https://i.postimg.cc/fR9fSn4b/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-3001886418.png"
];

export default function Profile({ onClose }: { onClose: () => void }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const handleRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <>
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute inset-0 bg-[#8b95a1] z-50 flex flex-col overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={PROFILE_IMAGES[0]} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 flex justify-between items-center p-4 pt-8 text-white">
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24} /></button>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Star size={22} /></button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><MoreVertical size={22} /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 flex flex-col">
          <div className="flex-1 min-h-[100px]"></div>

          {/* Profile Info */}
          <div className="flex flex-col items-center px-6 pt-4 pb-6">
            <div 
              onClick={() => { setViewerOpen(true); setCurrentImgIdx(0); }}
              className="w-24 h-24 rounded-[2rem] overflow-hidden mb-4 shadow-2xl relative cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img src={PROFILE_IMAGES[0]} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-white text-xl font-bold mb-2">장한별</h2>
            <p className="text-white/90 text-sm mb-6 text-center font-medium">
              한국대 건축학과 2학년 🏛️<br/>
              과제 지옥 ㅠ
            </p>

            {/* Action Buttons */}
            <div className="flex gap-8 mb-8 border-b border-white/20 pb-8 w-full justify-center">
              <div onClick={handleRedirect} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/30 transition-colors">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <span className="text-white/90 text-xs font-medium">1:1 채팅</span>
              </div>
              <div onClick={handleRedirect} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/30 transition-colors">
                  <Phone size={20} fill="currentColor" />
                </div>
                <span className="text-white/90 text-xs font-medium">통화하기</span>
              </div>
              <div onClick={handleRedirect} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/30 transition-colors">
                  <Video size={20} fill="currentColor" />
                </div>
                <span className="text-white/90 text-xs font-medium">페이스톡</span>
              </div>
            </div>

            {/* Info */}
            <div className="w-full bg-black/30 rounded-2xl p-5 backdrop-blur-md border border-white/10">
               <h3 className="text-white text-sm font-bold mb-3">성격 키워드</h3>
               <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-xs font-medium border border-white/5">#ENTJ</span>
                  <span className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-xs font-medium border border-white/5">#완벽주의자</span>
                  <span className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-xs font-medium border border-white/5">#건축학과</span>
                  <span className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-xs font-medium border border-white/5">#능글맞음</span>
                  <span className="px-2.5 py-1.5 bg-[#fee500]/20 hover:bg-[#fee500]/30 transition-colors rounded-lg text-[#fee500] text-xs font-medium border border-[#fee500]/30">#소악마</span>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Image Viewer */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-[60] flex items-center justify-center"
          >
            <button onClick={() => setViewerOpen(false)} className="absolute top-6 left-4 text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors">
              <X size={28} />
            </button>
            
            {currentImgIdx > 0 && (
              <button onClick={() => setCurrentImgIdx(i => i - 1)} className="absolute left-2 text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors">
                <ChevronLeft size={36} />
              </button>
            )}
            
            <motion.img 
              key={currentImgIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              src={PROFILE_IMAGES[currentImgIdx]} 
              className="w-full h-full object-contain" 
              alt="Profile Full" 
            />
            
            {currentImgIdx < PROFILE_IMAGES.length - 1 && (
              <button onClick={() => setCurrentImgIdx(i => i + 1)} className="absolute right-2 text-white p-2 z-10 hover:bg-white/10 rounded-full transition-colors">
                <ChevronRight size={36} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
