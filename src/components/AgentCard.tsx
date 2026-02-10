import { useState } from 'react';
import type { Agent } from '../App';

interface AgentCardProps {
  agent: Agent;
  index: number;
  isLoaded: boolean;
}

export default function AgentCard({ agent, index, isLoaded }: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    active: { bg: 'bg-emerald-400', glow: 'shadow-emerald-400/50', text: 'text-emerald-400' },
    standby: { bg: 'bg-amber-400', glow: 'shadow-amber-400/50', text: 'text-amber-400' },
    training: { bg: 'bg-violet-400', glow: 'shadow-violet-400/50', text: 'text-violet-400' }
  };

  const status = statusColors[agent.status];

  return (
    <div
      className={`group relative transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${900 + index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative backdrop-blur-xl bg-white/[0.03] border rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ${
        isHovered ? 'border-cyan-500/50 bg-white/[0.06]' : 'border-white/10'
      }`}>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${status.bg} animate-pulse shadow-lg ${status.glow}`} />
        </div>

        {/* Agent ID */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] md:text-xs text-gray-600 tracking-wider">{agent.id}</span>
          <span className={`font-mono text-[10px] md:text-xs uppercase ${status.text}`}>{agent.status}</span>
        </div>

        {/* Avatar */}
        <div className="relative mb-4">
          <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center border border-cyan-500/30 transition-all duration-300 ${
            isHovered ? 'shadow-[0_0_30px_rgba(0,240,255,0.2)]' : ''
          }`}>
            <span className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-400">{agent.avatar}</span>
          </div>
          {/* Decorative ring */}
          <div className={`absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-xl border border-cyan-400/30 transition-all duration-500 ${
            isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`} />
        </div>

        {/* Agent Info */}
        <h3 className="font-orbitron text-lg md:text-xl font-bold mb-1 text-white">{agent.name}</h3>
        <p className="font-mono text-xs text-cyan-400/70 mb-3">{agent.codename}</p>
        <p className="text-xs md:text-sm text-gray-400 font-mono mb-4">{agent.specialization}</p>

        {/* Performance Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] md:text-xs font-mono mb-1">
            <span className="text-gray-500">Performance</span>
            <span className="text-cyan-400">{agent.performance}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000"
              style={{ width: `${agent.performance}%` }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-gray-500 mb-4">
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <span>{agent.tasksCompleted.toLocaleString()} tasks completed</span>
        </div>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-1.5">
          {agent.capabilities.slice(0, 2).map((cap, i) => (
            <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400">
              {cap}
            </span>
          ))}
          {agent.capabilities.length > 2 && (
            <span className="px-2 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded text-[10px] font-mono text-cyan-400">
              +{agent.capabilities.length - 2}
            </span>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(0,240,255,0.1), transparent 60%)'
        }} />
      </div>
    </div>
  );
}
