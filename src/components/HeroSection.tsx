interface HeroSectionProps {
  isLoaded: boolean;
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/30 mb-6 md:mb-8 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-wider">AUTONOMOUS INTELLIGENCE DEPLOYED</span>
        </div>

        {/* Main Heading */}
        <h1 className={`font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-white">Building the</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 animate-gradient">
            Next Generation
          </span>
          <br />
          <span className="text-white">of AI Agents</span>
        </h1>

        {/* Subtitle */}
        <p className={`font-mono text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          We design, build, and deploy autonomous AI systems that transform
          how businesses operate. Each agent is purpose-built for maximum impact.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 transition-all duration-700 delay-[400ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0a0e17] font-orbitron font-bold text-sm rounded-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all min-h-[56px]">
            EXPLORE AGENTS
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-orbitron font-bold text-sm rounded-lg hover:bg-white/5 hover:border-white/40 transition-all min-h-[56px]">
            HOW IT WORKS
          </button>
        </div>

        {/* Decorative Elements */}
        <div className={`relative transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Terminal Preview */}
          <div className="max-w-xl mx-auto backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-amber-400/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
              <span className="ml-2 font-mono text-xs text-gray-500">agency_control.sh</span>
            </div>
            <div className="p-4 font-mono text-xs md:text-sm text-left overflow-x-auto">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-cyan-400">$</span>
                <span className="text-gray-300">agency status --all</span>
              </div>
              <div className="mt-2 text-emerald-400">
                <span className="opacity-60">→</span> 8 agents deployed, 5 active
              </div>
              <div className="text-amber-400">
                <span className="opacity-60">→</span> 2 agents on standby
              </div>
              <div className="text-violet-400">
                <span className="opacity-60">→</span> 1 agent in training
              </div>
              <div className="mt-2 flex items-center gap-2 text-gray-500">
                <span className="text-cyan-400">$</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-gray-600">SCROLL</span>
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
