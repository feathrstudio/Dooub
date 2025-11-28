import React, { useEffect, useRef, useState } from 'react';

// --- Graphic Components ---

// 1. Tech Leadership: Central glowing node with concentric rings and badge
const TechLeadershipGraphic: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer dashed ring */}
    <div className="absolute w-32 h-32 border border-dashed border-neutral-700/50 rounded-full" />
    
    {/* Inner solid ring */}
    <div className="absolute w-20 h-20 border border-neutral-700/80 rounded-full" />
    
    {/* Radial Lines */}
    <svg className="absolute inset-0 w-full h-full text-[#01C853]/20 pointer-events-none">
       <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="1" />
       <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" />
       <circle cx="20%" cy="20%" r="2" fill="#01C853" />
       <circle cx="80%" cy="20%" r="2" fill="#01C853" />
    </svg>

    {/* Center Node */}
    <div className="relative z-10 w-12 h-12 bg-neutral-900 border border-[#01C853]/50 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(1,200,83,0.3)]">
        <div className="w-5 h-5 bg-[#01C853] rounded-sm shadow-[0_0_10px_#01C853]" />
    </div>

    {/* Badge */}
    <div className="absolute bottom-4 bg-[#01C853]/20 border border-[#01C853]/30 px-3 py-1 rounded text-[10px] text-[#01C853] font-medium tracking-wider">
      VERSION 4.0 ACTIVE
    </div>
  </div>
);

// 2. Cost Efficiency: Old stack vs New single block
const CostEfficiencyGraphic: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-12">
    
    {/* Old Stack */}
    <div className="flex flex-col gap-1.5 items-center opacity-70">
      <div className="w-12 h-7 bg-neutral-800/20 border border-neutral-700 rounded-sm" />
      <div className="w-12 h-7 bg-neutral-800/20 border border-neutral-700 rounded-sm" />
      <div className="w-12 h-7 bg-neutral-800/20 border border-neutral-700 rounded-sm" />
      <div className="w-12 h-7 bg-neutral-800/20 border border-neutral-700 rounded-sm" />
      <span className="text-[10px] text-neutral-500 mt-2">Old</span>
    </div>

    {/* Arrow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-6">
        <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>

    {/* New Stack */}
    <div className="flex flex-col justify-end h-[142px] items-center">
      <div className="relative w-12 h-7 bg-[#01C853]/10 border border-[#01C853] rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(1,200,83,0.15)]">
        <span className="text-xs font-bold text-[#01C853]">1/4</span>
      </div>
      <span className="text-[10px] text-[#01C853] mt-2">New</span>
    </div>

  </div>
);

// 3. Global Scale: Globe wireframe with green dots
const GlobalScaleGraphic: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     {/* Globe Structure */}
     <div className="relative flex items-center justify-center">
        {/* Main Sphere */}
        <div className="w-28 h-28 border border-neutral-800 rounded-full opacity-50" />
        
        {/* Orbit Rings */}
        <div className="absolute w-36 h-12 border border-neutral-700/40 rounded-[50%] rotate-[-25deg]" />
        <div className="absolute w-36 h-12 border border-neutral-700/40 rounded-[50%] rotate-[25deg]" />
        <div className="absolute w-28 h-28 border border-neutral-800/30 rounded-full scale-125" />
     </div>

     {/* Trajectory Overlay */}
     <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 300 200">
        {/* 
            Quadratic Bezier Curve for smooth orbital arc.
            Start: (50, 140) - Bottom Left
            Control: (150, 60) - Top Center
            End: (250, 60) - Top Right
        */}
        <path 
            d="M 50 140 Q 150 60, 250 60" 
            fill="none" 
            stroke="#01C853" 
            strokeWidth="1.5" 
            strokeDasharray="3 3" 
            opacity="0.6" 
        />
        
        {/* Start Dot on Trajectory */}
        <circle cx="50" cy="140" r="2" fill="#01C853" />
        
        {/* Mid Dot */}
        <circle cx="150" cy="80" r="2" fill="#01C853" />
        
        {/* End Dot */}
        <circle cx="250" cy="60" r="2" fill="#01C853" />
     </svg>

     {/* Label - moved down to avoid overlap */}
     <div className="absolute top-[82%] left-[16.6%] -translate-y-1/2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#01C853] shadow-[0_0_5px_rgba(1,200,83,0.8)]" />
        <span className="text-[10px] text-[#01C853] font-mono tracking-widest uppercase shadow-black drop-shadow-md">REGION: AUTO</span>
     </div>
  </div>
);

// 4. AI Independence: Core connected to nodes
const AIIndependenceGraphic: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Badge */}
    <div className="absolute top-4 left-4 px-2 py-0.5 border border-[#01C853]/50 bg-[#01C853]/10 rounded text-[9px] text-[#01C853] tracking-wider">
        HYBRID_MODE
    </div>

    {/* Connections */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <line x1="30%" y1="65%" x2="50%" y2="50%" stroke="#01C853" strokeWidth="1" />
        <line x1="70%" y1="40%" x2="50%" y2="50%" stroke="#01C853" strokeWidth="1" />
    </svg>

    {/* Left Node (Square) */}
    <div className="absolute bottom-[25%] left-[25%] w-8 h-8 bg-neutral-900 border border-neutral-600 rounded flex items-center justify-center z-10">
        <div className="w-3 h-3 bg-neutral-600 rounded-sm" />
    </div>

    {/* Center Core */}
    <div className="relative z-10 w-16 h-12 bg-neutral-950 border border-neutral-600 rounded-xl flex items-center justify-center">
        <span className="text-[9px] text-neutral-300 font-bold tracking-widest">CORE</span>
    </div>

    {/* Right Node (Circle) */}
    <div className="absolute top-[30%] right-[25%] w-8 h-8 bg-neutral-900 border border-neutral-600 rounded-full flex items-center justify-center z-10">
        <div className="w-2 h-2 bg-neutral-600 rounded-full" />
    </div>
  </div>
);

// 5. Innovation: Grid and curve
const InnovationGraphic: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Chart Container */}
    <div className="relative w-[220px] h-[120px] border-b border-l border-neutral-800/80">
        {/* Grid Background - confined to chart area */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* SVG Curve and Dots */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 220 120">
            <defs>
                <linearGradient id="innovGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="1" />
                </linearGradient>
            </defs>
            
            <path 
                d="M 40 100 Q 120 90, 200 40" 
                fill="none" 
                stroke="url(#innovGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            
            {/* Start Point */}
            <circle cx="40" cy="100" r="3" fill="#22c55e" />
            
            {/* Mid Point */}
            <circle cx="120" cy="80" r="3" fill="#22c55e" />
            
            {/* End Point */}
            <circle cx="200" cy="40" r="3" fill="#4ade80" />
        </svg>

        {/* Label */}
        <div className="absolute bottom-2 right-2 text-[9px] text-neutral-600 font-mono tracking-tight uppercase">
            Continuous_Evolution
        </div>
    </div>
  </div>
);

// 6. Productivity: Detailed progress bars
const ProductivityGraphic: React.FC = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center px-8 gap-4">
    
    {/* Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded px-2 py-0.5">
        <div className="w-1.5 h-1.5 bg-[#01C853] rounded-full" />
        <span className="text-[8px] text-neutral-300 font-mono font-bold">OPTIMIZED</span>
    </div>

    {/* Spacer */}
    <div className="h-4"></div>

    {/* Bar 1 */}
    <div className="w-full flex items-center gap-3 opacity-90">
        <div className="text-[9px] font-mono text-neutral-500 w-6">BLD</div>
        <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-[#01C853] w-[92%] rounded-full" />
        </div>
        <div className="text-[9px] font-mono text-[#01C853] w-6 text-right">92%</div>
    </div>

    {/* Bar 2 */}
    <div className="w-full flex items-center gap-3 opacity-90">
        <div className="text-[9px] font-mono text-neutral-500 w-6">DEP</div>
        <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-[#01C853] w-[88%] rounded-full" />
        </div>
        <div className="text-[9px] font-mono text-[#01C853] w-6 text-right">88%</div>
    </div>

    {/* Bar 3 */}
    <div className="w-full flex items-center gap-3">
        <div className="text-[9px] font-mono text-neutral-500 w-6">OPT</div>
        <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 w-[98%] rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
        </div>
        <div className="text-[9px] font-mono text-emerald-400 w-6 text-right">98%</div>
    </div>

  </div>
);

// --- Feature Card Component ---
interface FeatureCardProps {
  title: string;
  subTitle: string;
  description: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subTitle, description, children }) => {
  return (
    <div className="group relative bg-neutral-950/50 rounded-2xl border border-neutral-800 hover:border-[#01C853]/30 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Card Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01C853]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Graphic Container */}
      <div className="h-48 w-full bg-neutral-900/30 border-b border-neutral-800/50 flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid background for all cards */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
            {children}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="mb-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#01C853] transition-colors duration-300">
            {title}
            </h3>
            <h4 className="text-sm font-medium text-[#01C853]/80 mb-1">{subTitle}</h4>
        </div>
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Main Value Component ---

export const Value: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "Cost Efficiency",
      subTitle: "비용 효율성 극대화",
      description: "동일 기능 서비스도 인프라 비용을 1/4 수준으로 구현합니다.",
      Graphic: CostEfficiencyGraphic
    },
    {
      id: 2,
      title: "Global Scale",
      subTitle: "글로벌 확장성",
      description: "최소한의 리소스와 유연한 설계로 리전 확장을 최소화합니다.",
      Graphic: GlobalScaleGraphic
    },
    {
      id: 3,
      title: "AI Independence",
      subTitle: "AI 기술 독립성 확보",
      description: "특정 AI 모델에 의존하지 않는 하이브리드 구조를 추구합니다.",
      Graphic: AIIndependenceGraphic
    },
    {
      id: 4,
      title: "Tech Leadership",
      subTitle: "선제적인 기술 리더십",
      description: "혁신적인 신기술을 빠르게 검토하고 도입하여 시장을 리드합니다.",
      Graphic: TechLeadershipGraphic
    },
    {
      id: 5,
      title: "Innovation",
      subTitle: "지속적 혁신",
      description: "새로운 기술을 적극적으로 수용하여 끊임없이 진화합니다.",
      Graphic: InnovationGraphic
    },
    {
      id: 6,
      title: "Productivity",
      subTitle: "압도적인 생산성",
      description: "효율적인 개발 스택과 최적화된 프로세스로 생산성을 높입니다.",
      Graphic: ProductivityGraphic
    }
  ];

  return (
    <section 
      id="value" 
      ref={containerRef} 
      className="bg-black text-white py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10 border-t border-zinc-900/50"
    >
      
      {/* Global Typography System Header */}
      <div 
        className={`mb-16 md:mb-20 transition-all duration-1000 ease-out flex flex-col items-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge - Restored */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-[#01C853] mr-2.5 animate-pulse"></div>
            <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">CORE VALUES</span>
        </div>

        <h2 className="font-bold text-white leading-[1.1] tracking-[-0.005em]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            The Standard of<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01C853] to-emerald-400">Extreme Efficiency</span>
        </h2>
        <p className="font-normal text-[#A0A7B0] leading-[1.5] tracking-[-0.003em] max-w-[720px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginTop: 'clamp(8px, 1vw, 16px)' }}>
            최적화된 기술은 비즈니스의 가장 강력한 경쟁력입니다.<br />
            우리는 모든 기술의 단계에서 극한의 효율을 추구합니다.
        </p>
      </div>

      {/* Value Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {features.map((feature, index) => (
            <div 
                key={feature.id}
                className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + (index * 100)}ms` }}
            >
                <FeatureCard 
                    title={feature.title} 
                    subTitle={feature.subTitle} 
                    description={feature.description}
                >
                    <feature.Graphic />
                </FeatureCard>
            </div>
        ))}
      </div>

    </section>
  );
};