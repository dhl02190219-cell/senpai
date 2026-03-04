import React, { useEffect, useRef } from 'react';
import { ChevronLeft, Search, Menu, Plus, Smile, Hash } from 'lucide-react';

const PROFILE_IMG = "https://i.postimg.cc/VvXzbkR1/image.png";
const CHAT_IMG = "https://i.postimg.cc/MHJvL43G/1boy-solo-man-0-9-artist-try-(lsc)-0-5-artist-ciloranko-0-8-artist-h-s-2699535373.png";
const REDIRECT_URL = "https://share.crack.wrtn.ai/w8u68m";

export default function Messenger({ onOpenProfile }: { onOpenProfile: () => void }) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="flex flex-col absolute inset-0 bg-[#b2c7d9] pt-8 md:pt-6">
      {/* Header */}
      <div className="bg-[#b2c7d9] bg-opacity-90 backdrop-blur-sm flex items-center justify-between px-3 py-2 z-10 sticky top-0">
        <div className="flex items-center gap-2">
          <button className="text-gray-800 p-1"><ChevronLeft size={26} strokeWidth={2.5} /></button>
          <h1 className="text-[17px] font-semibold text-gray-900">장한별 선배</h1>
        </div>
        <div className="flex items-center gap-3 text-gray-800 pr-1">
          <Search size={22} strokeWidth={2.5} />
          <Menu size={24} strokeWidth={2.5} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-1 space-y-3 scrollbar-hide">
        <div className="flex justify-center my-2">
          <div className="bg-black/10 text-white text-[11px] px-4 py-1 rounded-full backdrop-blur-sm">
            2026년 3월 4일 수요일
          </div>
        </div>

        {/* Message Group 1 - User */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl rounded-tr-sm px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">선배</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">볼 때마다 느끼는 건데</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <span className="text-[10px] text-gray-500 mb-1">오후 2:14</span>
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">양말이 화려하신 듯</div>
          </div>
        </div>

        {/* Message Group 2 - Han-byul */}
        <div className="flex gap-2 pt-1">
          <button onClick={onOpenProfile} className="w-10 h-10 rounded-[18px] overflow-hidden flex-shrink-0 shadow-sm hover:opacity-90 transition-opacity">
            <img src={PROFILE_IMG} alt="Profile" className="w-full h-full object-cover" />
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-gray-700 ml-0.5">장한별 선배</span>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-1.5 text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">ㅋㅋ</div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl px-3.5 py-1.5 text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">그런가?</div>
              <span className="text-[10px] text-gray-500 mb-1">오후 2:15</span>
            </div>
          </div>
        </div>

        {/* Message Group 3 - User */}
        <div className="flex flex-col items-end gap-1 pt-1">
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl rounded-tr-sm px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">빨간 양말도 신고...</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">호피무늬 이런 거 신는 사람</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">처음 봤어요</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <span className="text-[10px] text-gray-500 mb-1">오후 2:16</span>
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">그런게 많으신가 봄</div>
          </div>
        </div>

        {/* Message Group 4 - Han-byul */}
        <div className="flex gap-2 pt-1">
          <button onClick={onOpenProfile} className="w-10 h-10 rounded-[18px] overflow-hidden flex-shrink-0 shadow-sm hover:opacity-90 transition-opacity">
            <img src={PROFILE_IMG} alt="Profile" className="w-full h-full object-cover" />
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-gray-700 ml-0.5">장한별 선배</span>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-1.5 text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">깔맞춤이야</div>
              <span className="text-[10px] text-gray-500 mb-1">오후 2:16</span>
            </div>
          </div>
        </div>

        {/* Message Group 5 - User */}
        <div className="flex flex-col items-end gap-1 pt-1">
          <div className="flex justify-end items-end gap-1.5">
            <span className="text-[10px] text-gray-500 mb-1">오후 2:17</span>
            <div className="bg-[#fee500] rounded-2xl rounded-tr-sm px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">??</div>
          </div>
        </div>

        {/* Message Group 6 - Han-byul */}
        <div className="flex gap-2 pt-1">
          <button onClick={onOpenProfile} className="w-10 h-10 rounded-[18px] overflow-hidden flex-shrink-0 shadow-sm hover:opacity-90 transition-opacity">
            <img src={PROFILE_IMG} alt="Profile" className="w-full h-full object-cover" />
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-gray-700 ml-0.5">장한별 선배</span>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-1.5 text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">속옷이랑</div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="text-[40px] leading-none drop-shadow-sm">
                😂
              </div>
            </div>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl p-1.5 shadow-sm">
                <div className="w-44 h-56 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden relative">
                  <img src={CHAT_IMG} alt="발 사진" className="w-full h-full object-cover opacity-90" />
                </div>
              </div>
              <span className="text-[10px] text-gray-500 mb-1">오후 2:17</span>
            </div>
          </div>
        </div>

        {/* Message Group 7 - User */}
        <div className="flex flex-col items-end gap-1 pt-1">
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl rounded-tr-sm px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">??</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">그럼</div>
          </div>
          <div className="flex justify-end items-end gap-1.5">
            <span className="text-[10px] text-gray-500 mb-1">오후 2:18</span>
            <div className="bg-[#fee500] rounded-2xl px-3.5 py-1.5 text-[14.5px] text-left text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">이건?</div>
          </div>
        </div>

        {/* Message Group 8 - Han-byul */}
        <div className="flex gap-2 pt-1">
          <button onClick={onOpenProfile} className="w-10 h-10 rounded-[18px] overflow-hidden flex-shrink-0 shadow-sm hover:opacity-90 transition-opacity">
            <img src={PROFILE_IMG} alt="Profile" className="w-full h-full object-cover" />
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-gray-700 ml-0.5">장한별 선배</span>
            <div className="flex items-end gap-1.5">
              <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-1.5 text-[14.5px] text-gray-900 shadow-sm leading-snug whitespace-nowrap w-fit">정답❤️</div>
              <span className="text-[10px] text-gray-500 mb-1">오후 2:18</span>
            </div>
          </div>
        </div>

        <div ref={messagesEndRef} className="h-2" />
      </div>

      {/* Input Area */}
      <div className="bg-white px-3 py-2.5 flex items-center gap-2 border-t border-gray-200 pb-8 md:pb-6">
        <button onClick={handleRedirect} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Plus size={24} strokeWidth={2.5} />
        </button>
        <div onClick={handleRedirect} className="flex-1 bg-[#f0f0f0] rounded-full flex items-center px-4 py-2 border border-gray-200 cursor-pointer">
          <input type="text" placeholder="메시지 보내기" className="bg-transparent w-full outline-none text-[14px] text-gray-800 placeholder-gray-400 pointer-events-none" disabled />
          <Smile className="text-gray-400 ml-2 flex-shrink-0" size={20} />
        </div>
        <button onClick={handleRedirect} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Hash size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
