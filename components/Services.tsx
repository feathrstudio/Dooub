import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Type, Languages, Mic2, Clock, 
  TrendingUp, BarChart3, PieChart, Newspaper, 
  ArrowRight, Play, Maximize2, MoreHorizontal,
  CheckCircle2, Sparkles, SlidersHorizontal
} from 'lucide-react';

export const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#FF4D4D] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#33B5A5] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Global Typography System Header */}
        <div className="mb-24 text-center flex flex-col items-center">
            <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                Our Services
            </h2>
            <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
                지능형 기술을 통해 콘텐츠와 사용자 사이의 간격을 좁히고 새로운 가치를 창출합니다.
            </p>
        </div>

        <div ref={ref} className="space-y-32">
          
          {/* ================= SUBSY SECTION ================= */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-5 mb-4"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,77,77,0.4)] flex-shrink-0 bg-[#FF4D4D] p-2 flex items-center justify-center">
                <img 
                    src="https://raw.githubusercontent.com/jiyoungpark94/dooubb1.2/main/logo_subsy.svg" 
                    alt="Subsy Logo" 
                    className="w-full h-full object-contain brightness-0 invert scale-125"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Subsy</h3>
                <p className="text-[#FF4D4D] font-medium tracking-wide">AI Subtitle & Translation Platform</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card 1: Main Brand & Intro */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-5 bg-neutral-900/80 backdrop-blur-sm rounded-3xl p-10 border border-neutral-800 flex flex-col justify-between overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4D4D] opacity-[0.05] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Subtitles,<br />
                    <span className="text-[#FF4D4D]">made easy.</span>
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    AI 기반 자동 자막 생성 및 번역 서비스.<br/>
                    영상과 오디오를 AI가 분석하여 정확한 자막을 생성하고, 100개 이상의 언어로 번역합니다. 낮은 품질의 오디오에서도 문맥을 이해하여 탁월한 정확도를 제공합니다.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-neutral-800 text-sm font-medium text-gray-300 border border-neutral-700">SRT/VTT Export</span>
                    <span className="px-4 py-2 rounded-full bg-neutral-800 text-sm font-medium text-gray-300 border border-neutral-700">Context Aware</span>
                    <span className="px-4 py-2 rounded-full bg-neutral-800 text-sm font-medium text-gray-300 border border-neutral-700">Team Collab</span>
                  </div>
                </div>

                <a 
                    href="https://subsy.ai/ko/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FF4D4D] font-bold mt-10 hover:gap-3 transition-all cursor-pointer group/link"
                >
                  섭씨 더 알아보기 <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Card 2: UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-7 bg-[#111] rounded-3xl border border-neutral-800 overflow-hidden relative min-h-[400px]"
              >
                 {/* UI Header */}
                 <div className="absolute top-0 left-0 right-0 h-12 bg-[#1a1a1a] border-b border-neutral-800 flex items-center px-4 justify-between z-20">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-[#01C853]/50"></div>
                    </div>
                    <div className="text-xs text-neutral-500 font-mono">Subsy Studio - Project_01.mp4</div>
                    <div className="w-4"></div>
                 </div>

                 {/* UI Body */}
                 <div className="absolute inset-0 pt-12 flex">
                    {/* Left: Video Preview */}
                    <div className="flex-1 bg-black relative flex flex-col">
                       <div className="flex-1 flex items-center justify-center relative overflow-hidden group">
                          {/* Fake Video Content */}
                          <div className="w-[80%] aspect-video bg-neutral-800 rounded-lg relative overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Play fill="white" className="w-12 h-12 text-white opacity-50" />
                             </div>
                             {/* Subtitle Overlay */}
                             <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                                <span className="bg-black/60 text-white px-2 py-1 rounded text-sm md:text-base">
                                   자막 제작이 이렇게 쉬울 수 있나요?
                                </span>
                             </div>
                          </div>
                       </div>
                       
                       {/* Timeline */}
                       <div className="h-32 bg-[#1a1a1a] border-t border-neutral-800 p-4">
                          <div className="flex justify-between text-[10px] text-neutral-500 mb-2">
                             <span>00:00</span>
                             <span>00:15</span>
                             <span>00:30</span>
                          </div>
                          <div className="relative h-16 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
                             {/* Audio Waveform Fake */}
                             <div className="absolute top-2 left-0 right-0 h-4 flex items-end gap-[2px] px-2 opacity-30">
                                {Array.from({ length: 40 }).map((_, i) => (
                                   <div key={i} className="w-1 bg-[#FF4D4D]" style={{ height: `${Math.random() * 100}%` }}></div>
                                ))}
                             </div>
                             {/* Subtitle Blocks */}
                             <div className="absolute top-8 left-4 w-24 h-6 bg-[#FF4D4D] rounded text-[10px] text-black font-bold flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer">안녕하세요</div>
                             <div className="absolute top-8 left-32 w-32 h-6 bg-[#FF4D4D]/80 rounded text-[10px] text-black font-bold flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform cursor-pointer">Subsy 입니다</div>
                             
                             {/* Playhead */}
                             <div className="absolute top-0 left-28 w-[2px] h-full bg-white z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                          </div>
                       </div>
                    </div>

                    {/* Right: Transcript (Desktop only) */}
                    <div className="w-64 bg-[#151515] border-l border-neutral-800 p-4 hidden lg:block overflow-y-auto custom-scrollbar">
                       <div className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">Transcript</div>
                       <div className="space-y-3">
                          {[
                             { time: '00:01', text: '안녕하세요, 오늘 소개해드릴 서비스는 섭씨입니다.', active: false },
                             { time: '00:05', text: '자막 제작이 이렇게 쉬울 수 있나요?', active: true },
                             { time: '00:08', text: 'AI가 문맥을 이해하고 화자를 구분합니다.', active: false },
                             { time: '00:12', text: '지금 바로 무료로 시작해보세요.', active: false },
                          ].map((item, i) => (
                             <div key={i} className={`p-3 rounded-lg border ${item.active ? 'bg-[#FF4D4D]/10 border-[#FF4D4D] text-white' : 'bg-neutral-900 border-neutral-800 text-gray-500'} transition-colors`}>
                                <div className="text-[10px] mb-1 opacity-70">{item.time}</div>
                                <div className="text-xs leading-relaxed">{item.text}</div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Feature Cards Grid */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="md:col-span-4 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#FF4D4D]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#FF4D4D]">
                    <Mic2 size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">화자 구분 기술</h5>
                 <p className="text-sm text-gray-400">여러 사람의 대화를 자동으로 구분하여 각 인물별로 정확한 스크립트를 생성합니다.</p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="md:col-span-4 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#FF4D4D]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#FF4D4D]">
                    <Languages size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">다국어 번역 지원</h5>
                 <p className="text-sm text-gray-400">자막 파일의 타임코드 손상 없이 100개 이상의 언어로 고품질 번역을 제공합니다.</p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.5 }}
                 className="md:col-span-4 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#FF4D4D]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#FF4D4D]">
                    <Clock size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">완벽한 싱크</h5>
                 <p className="text-sm text-gray-400">영상과 자막의 타이밍을 프레임 단위로 정밀하게 맞춰 자연스러운 시청 경험을 제공합니다.</p>
              </motion.div>

            </div>
          </div>


          {/* ================= SELECTT SECTION ================= */}
          <div className="space-y-8">
             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-5 mb-4"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(51,181,165,0.4)] flex-shrink-0 bg-[#33B5A5] p-4 flex items-center justify-center">
                <img 
                    src="https://raw.githubusercontent.com/jiyoungpark94/dooubb1.2/main/logo_selectt.svg" 
                    alt="Selectt Logo" 
                    className="w-full h-full object-contain brightness-0 invert scale-125"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Selectt</h3>
                <p className="text-[#33B5A5] font-medium tracking-wide">AI Investment Assistant</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
               
               {/* Card 1: UI Dashboard Mockup (Left Side) */}
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-7 md:order-1 order-2 bg-[#121212] rounded-3xl border border-neutral-800 overflow-hidden relative min-h-[500px] text-white"
              >
                  {/* Dashboard UI */}
                  <div className="p-6 md:p-8 h-full flex flex-col">
                     {/* Top Bar */}
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#33B5A5] flex items-center justify-center text-white shadow-lg">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                    오늘의 추천 종목
                                </h4>
                                <p className="text-xs text-gray-400">AI 분석 기반 추천 포트폴리오</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart3 size={16} className="text-gray-500" />
                            <div className="w-8 h-4 bg-neutral-700 rounded-full relative cursor-pointer">
                                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow"></div>
                            </div>
                        </div>
                     </div>

                     {/* Stock Grid */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {[
                            { name: '한올바이오파마', price: '43,100', target: '50,000', change: '-4.54%', up: false, comment: 'AI 분석 결과 상위 20% 고득점 종목으로 강력 추천' },
                            { name: '두산로보틱스', price: '73,500', target: '65,000', change: '+2.08%', up: true, comment: 'AI 분석 결과 상위 40% 우수 종목으로 추천' },
                        ].map((stock, i) => (
                           <div key={i} className="bg-[#1E1E1E] p-4 rounded-xl shadow-sm border border-neutral-800 hover:border-[#33B5A5] transition-colors">
                              <div className="flex justify-between items-center mb-2">
                                 <h5 className="font-bold text-gray-200 text-sm">{stock.name}</h5>
                                 <span className={`text-xs font-bold ${stock.up ? 'text-red-400' : 'text-blue-400'}`}>
                                    {stock.up ? '↗' : '↘'} {stock.change}
                                 </span>
                              </div>
                              <div className="flex justify-between items-end mb-3">
                                  <div>
                                    <div className="text-xs text-gray-500">현재가</div>
                                    <div className="text-base font-bold text-white">{stock.price}원</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-xs text-gray-500">목표가</div>
                                    <div className="text-sm font-bold text-gray-300">{stock.target}원</div>
                                  </div>
                              </div>
                              <div className="text-[10px] text-[#33B5A5] font-medium bg-[#33B5A5]/10 px-2 py-1 rounded border border-[#33B5A5]/20 truncate">
                                 {stock.comment}
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Performance Chart Section */}
                     <div className="flex-1 bg-[#1E1E1E] rounded-2xl p-5 border border-neutral-800 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-2">
                                <div className="text-sm font-bold text-gray-200">기간별 성과 분석</div>
                           </div>
                           <div className="flex bg-neutral-800 rounded p-0.5">
                               <button className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#333] shadow-sm text-gray-200">일</button>
                               <button className="px-2 py-0.5 text-[10px] font-medium text-gray-500 hover:text-gray-300">주</button>
                               <button className="px-2 py-0.5 text-[10px] font-medium text-gray-500 hover:text-gray-300">월</button>
                           </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-[10px] mb-4">
                            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#01C853]"></div><span className="text-gray-400">전략 수익률</span></div>
                            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div><span className="text-gray-400">KOSPI</span></div>
                        </div>
                        
                        {/* Chart Area */}
                        <div className="relative h-32 w-full mb-6">
                           {/* Chart Lines (CSS SVG) */}
                           <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 120">
                              {/* Grid */}
                              <line x1="0" y1="0" x2="600" y2="0" stroke="#333" strokeWidth="1" />
                              <line x1="0" y1="40" x2="600" y2="40" stroke="#333" strokeWidth="1" />
                              <line x1="0" y1="80" x2="600" y2="80" stroke="#333" strokeWidth="1" />
                              
                              {/* KOSPI Line (Blue) */}
                              <path d="M0,80 C50,75 100,85 150,82 C200,79 250,90 300,85 C350,80 400,82 450,80 C500,78 550,75 600,70" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
                              <circle cx="150" cy="82" r="3" fill="#3b82f6" stroke="#1E1E1E" strokeWidth="1" />
                              <circle cx="300" cy="85" r="3" fill="#3b82f6" stroke="#1E1E1E" strokeWidth="1" />
                              <circle cx="450" cy="80" r="3" fill="#3b82f6" stroke="#1E1E1E" strokeWidth="1" />
                              
                              {/* Strategy Line (Green) */}
                              <path d="M0,80 C50,70 100,60 150,65 C200,50 250,45 300,30 C350,35 400,20 450,15 C500,10 550,5 600,0" fill="none" stroke="#01C853" strokeWidth="3" className="drop-shadow-md" />
                              {/* Strategy Area */}
                              <path d="M0,80 C50,70 100,60 150,65 C200,50 250,45 300,30 C350,35 400,20 450,15 C500,10 550,5 600,0 L600,120 L0,120 Z" fill="url(#gradient-strategy-dark)" opacity="0.2" />
                              
                              <circle cx="150" cy="65" r="3" fill="#01C853" stroke="#1E1E1E" strokeWidth="2" />
                              <circle cx="300" cy="30" r="3" fill="#01C853" stroke="#1E1E1E" strokeWidth="2" />
                              <circle cx="450" cy="15" r="3" fill="#01C853" stroke="#1E1E1E" strokeWidth="2" />
                              
                              <defs>
                                 <linearGradient id="gradient-strategy-dark" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#01C853" />
                                    <stop offset="100%" stopColor="transparent" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>
                        
                        {/* Bottom Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-neutral-800">
                           <div className="bg-red-900/10 p-2 rounded">
                              <div className="text-[9px] text-gray-500 mb-0.5">총 수익률 (30개월)</div>
                              <div className="text-sm font-bold text-red-500">+82.95%</div>
                           </div>
                           <div className="bg-red-900/10 p-2 rounded">
                              <div className="text-[9px] text-gray-500 mb-0.5">코스피 대비</div>
                              <div className="text-sm font-bold text-red-500">+29.29%</div>
                           </div>
                           <div className="bg-red-900/10 p-2 rounded">
                              <div className="text-[9px] text-gray-500 mb-0.5">올해 수익률</div>
                              <div className="text-sm font-bold text-red-500">+51.09%</div>
                           </div>
                           <div className="bg-red-900/10 p-2 rounded">
                              <div className="text-[9px] text-gray-500 mb-0.5">승률</div>
                              <div className="text-sm font-bold text-red-500">+49.84%</div>
                           </div>
                        </div>
                     </div>
                  </div>
              </motion.div>

              {/* Card 2: Main Brand & Intro (Right Side) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-5 md:order-2 order-1 bg-neutral-900/80 backdrop-blur-sm rounded-3xl p-10 border border-neutral-800 flex flex-col justify-between overflow-hidden relative group"
              >
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#33B5A5] opacity-[0.05] rounded-full blur-3xl group-hover:opacity-[0.1] transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Smart Investing<br />
                    <span className="text-[#33B5A5]">starts here.</span>
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    AI 기반 지능형 투자 보조 서비스.<br/>
                    매일 아침 5만여 건의 뉴스와 시장 동향을 AI가 분석하여, 상승 가능성이 높은 종목을 추천합니다. 데이터 기반의 스마트한 투자 의사결정을 지원합니다.
                  </p>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#33B5A5]" size={20} />
                        <span className="text-gray-300">실시간 시장 이슈 분석</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#33B5A5]" size={20} />
                        <span className="text-gray-300">테마별 수익률 랭킹</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#33B5A5]" size={20} />
                        <span className="text-gray-300">맞춤형 종목 리포트</span>
                     </div>
                  </div>
                </div>

                <a 
                    href="https://selectt.ai/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#33B5A5] font-bold mt-10 hover:gap-3 transition-all cursor-pointer group/link"
                >
                  셀렉트 더 알아보기 <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Feature Cards Grid */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="md:col-span-4 md:order-3 order-3 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#33B5A5]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#33B5A5]">
                    <PieChart size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">섹터별 분석</h5>
                 <p className="text-sm text-gray-400">시장 주도 테마와 섹터를 AI가 실시간으로 파악하여 흐름을 읽습니다.</p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 className="md:col-span-4 md:order-4 order-4 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#33B5A5]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#33B5A5]">
                    <Newspaper size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">뉴스 요약</h5>
                 <p className="text-sm text-gray-400">수많은 금융 뉴스를 핵심만 요약하여 투자에 필요한 정보만 제공합니다.</p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: 0.5 }}
                 className="md:col-span-4 md:order-5 order-5 bg-neutral-900/50 rounded-3xl p-6 border border-neutral-800 hover:border-[#33B5A5]/50 transition-colors"
              >
                 <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-4 text-[#33B5A5]">
                    <BarChart3 size={24} />
                 </div>
                 <h5 className="text-xl font-bold mb-2">수익률 예측</h5>
                 <p className="text-sm text-gray-400">과거 데이터와 현재 모멘텀을 분석하여 향후 수익 가능성을 예측합니다.</p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};