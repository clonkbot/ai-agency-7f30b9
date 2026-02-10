export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, transparent 0%, #0a0e17 70%)'
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, #0a0e17, transparent)'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-cyan-500/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-cyan-500/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-cyan-500/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-cyan-500/10" />
    </div>
  );
}
