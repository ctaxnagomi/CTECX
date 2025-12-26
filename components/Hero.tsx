
import React from 'react';
import { ChevronRight, Database, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background elements - Blueprints and Large Spirograph */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Large Spirograph Background Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] opacity-10 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={`hero-spirograph-${i}`}
            className="absolute inset-0 border-[0.5px] border-sky-400 rounded-full"
            style={{
              transform: `rotate(${i * 4.5}deg) scale(${1 - i * 0.01})`,
              animation: `rotateOrbit ${30 + i}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full text-sky-400 text-xs font-semibold mb-6">
            <Zap className="w-3 h-3" />
            <span>ENGINEERED TECHNOLOGY • RESEARCH DEVELOPMENTS</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            CTEC<span className="text-sky-400 italic">X</span><br />
            <span className="text-3xl md:text-5xl font-light text-slate-400 block mt-4">
              AI COORDINATION SYSTEMS
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Infrastructure for orchestrating AI tools and workflows with extreme precision and structural integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="accent-gradient px-8 py-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform flex items-center shadow-xl shadow-sky-500/20">
              Request a Demo
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-colors">
              Explore Research
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-8 rounded-2xl hover:border-sky-500/30 transition-colors">
            <Shield className="w-10 h-10 text-sky-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Governance Framework</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Structural compliance for agentic ecosystems at enterprise scale.</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-8 rounded-2xl hover:border-sky-500/30 transition-colors">
            <Database className="w-10 h-10 text-sky-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Lifecycle Logic</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Managing data integrity from raw ingestion to sophisticated inference.</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-8 rounded-2xl hover:border-sky-500/30 transition-colors">
            <Zap className="w-10 h-10 text-sky-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Core Integration</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Seamless bridging of fragmented AI tools via unified orchestration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
