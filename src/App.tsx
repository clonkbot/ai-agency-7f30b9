import { useState, useEffect } from 'react';
import AgentCard from './components/AgentCard';
import HeroSection from './components/HeroSection';
import GridBackground from './components/GridBackground';

export interface Agent {
  id: string;
  name: string;
  codename: string;
  status: 'active' | 'standby' | 'training';
  capabilities: string[];
  specialization: string;
  performance: number;
  tasksCompleted: number;
  avatar: string;
}

const agents: Agent[] = [
  {
    id: 'AGT-001',
    name: 'NEXUS',
    codename: 'The Orchestrator',
    status: 'active',
    capabilities: ['Multi-agent coordination', 'Task delegation', 'Resource optimization'],
    specialization: 'Workflow Automation',
    performance: 98.7,
    tasksCompleted: 12847,
    avatar: 'N'
  },
  {
    id: 'AGT-002',
    name: 'CIPHER',
    codename: 'The Analyst',
    status: 'active',
    capabilities: ['Data analysis', 'Pattern recognition', 'Predictive modeling'],
    specialization: 'Business Intelligence',
    performance: 96.4,
    tasksCompleted: 8923,
    avatar: 'C'
  },
  {
    id: 'AGT-003',
    name: 'ECHO',
    codename: 'The Communicator',
    status: 'active',
    capabilities: ['Natural language', 'Multi-lingual support', 'Sentiment analysis'],
    specialization: 'Customer Engagement',
    performance: 97.2,
    tasksCompleted: 45632,
    avatar: 'E'
  },
  {
    id: 'AGT-004',
    name: 'PRISM',
    codename: 'The Creator',
    status: 'standby',
    capabilities: ['Content generation', 'Image synthesis', 'Brand consistency'],
    specialization: 'Creative Production',
    performance: 94.8,
    tasksCompleted: 6721,
    avatar: 'P'
  },
  {
    id: 'AGT-005',
    name: 'SENTINEL',
    codename: 'The Guardian',
    status: 'active',
    capabilities: ['Threat detection', 'Anomaly analysis', 'Compliance monitoring'],
    specialization: 'Security Operations',
    performance: 99.1,
    tasksCompleted: 3289,
    avatar: 'S'
  },
  {
    id: 'AGT-006',
    name: 'FLUX',
    codename: 'The Integrator',
    status: 'training',
    capabilities: ['API orchestration', 'System bridging', 'Data transformation'],
    specialization: 'System Integration',
    performance: 89.3,
    tasksCompleted: 1547,
    avatar: 'F'
  },
  {
    id: 'AGT-007',
    name: 'ORACLE',
    codename: 'The Strategist',
    status: 'active',
    capabilities: ['Market analysis', 'Trend forecasting', 'Decision support'],
    specialization: 'Strategic Planning',
    performance: 95.6,
    tasksCompleted: 2834,
    avatar: 'O'
  },
  {
    id: 'AGT-008',
    name: 'ATLAS',
    codename: 'The Navigator',
    status: 'standby',
    capabilities: ['Knowledge mapping', 'Research synthesis', 'Information retrieval'],
    specialization: 'Research & Discovery',
    performance: 93.9,
    tasksCompleted: 4567,
    avatar: 'A'
  }
];

function App() {
  const [filter, setFilter] = useState<'all' | 'active' | 'standby' | 'training'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredAgents = agents.filter(agent => {
    const matchesFilter = filter === 'all' || agent.status === filter;
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.codename.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusCounts = {
    all: agents.length,
    active: agents.filter(a => a.status === 'active').length,
    standby: agents.filter(a => a.status === 'standby').length,
    training: agents.filter(a => a.status === 'training').length
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white overflow-x-hidden relative">
      <GridBackground />

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
           style={{
             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.1) 2px, rgba(0,240,255,0.1) 4px)'
           }} />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="backdrop-blur-xl bg-[#0a0e17]/80 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center relative overflow-hidden">
                <span className="font-orbitron font-bold text-lg md:text-xl text-[#0a0e17]">AI</span>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              </div>
              <div>
                <h1 className="font-orbitron font-bold text-lg md:text-xl tracking-wider">AGENCY</h1>
                <p className="text-[10px] md:text-xs text-cyan-400/70 font-mono tracking-widest">AUTONOMOUS SYSTEMS</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#agents" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors">AGENTS</a>
              <a href="#capabilities" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors">CAPABILITIES</a>
              <a href="#deploy" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors">DEPLOY</a>
            </nav>
            <button className="px-4 py-2 md:px-6 md:py-2.5 bg-cyan-400 text-[#0a0e17] font-orbitron font-bold text-xs md:text-sm rounded hover:bg-cyan-300 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
              CONTACT
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection isLoaded={isLoaded} />

      {/* Stats Bar */}
      <section className={`relative z-10 transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 md:-mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: 'Active Agents', value: statusCounts.active, color: 'cyan' },
              { label: 'Tasks Completed', value: '80K+', color: 'amber' },
              { label: 'Uptime', value: '99.9%', color: 'emerald' },
              { label: 'Response Time', value: '<50ms', color: 'violet' }
            ].map((stat, i) => (
              <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                <div className={`absolute top-0 left-0 w-1 h-full bg-${stat.color}-400`} />
                <p className="text-2xl md:text-4xl font-orbitron font-bold mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm font-mono text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Registry Section */}
      <section id="agents" className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className={`mb-8 md:mb-12 transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs md:text-sm text-cyan-400 tracking-widest">AGENT REGISTRY</span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Deployed</span> Agents
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm md:text-base font-mono">
              Each agent is purpose-built for specific operational domains, continuously learning and optimizing performance.
            </p>
          </div>

          {/* Filters */}
          <div className={`flex flex-col md:flex-row gap-4 mb-8 transition-all duration-700 delay-[800ms] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap gap-2">
              {(['all', 'active', 'standby', 'training'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-mono text-xs md:text-sm uppercase tracking-wider transition-all min-h-[44px] ${
                    filter === status
                      ? 'bg-cyan-400 text-[#0a0e17] shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {status} ({statusCounts[status]})
                </button>
              ))}
            </div>
            <div className="relative flex-1 md:max-w-xs">
              <input
                type="text"
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors min-h-[44px]"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} isLoaded={isLoaded} />
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <p className="font-mono text-gray-500">No agents match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.1),transparent_50%)]" />
            <h2 className="font-orbitron text-2xl md:text-4xl font-bold mb-4 md:mb-6 relative">
              Ready to Deploy Your Own Agent?
            </h2>
            <p className="text-gray-400 mb-6 md:mb-8 font-mono text-sm md:text-base max-w-xl mx-auto relative">
              Let us build a custom AI agent tailored to your specific operational needs.
              From concept to deployment in weeks, not months.
            </p>
            <button className="px-8 py-4 md:px-12 md:py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0a0e17] font-orbitron font-bold text-sm md:text-base rounded-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all relative min-h-[44px]">
              START YOUR PROJECT
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-mono text-[10px] md:text-xs text-gray-600">
            Requested by @vladyy__01 · Built by @clonkbot
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
