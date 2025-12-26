
import React from 'react';
import { Globe, HardDrive, ShieldAlert, Layout } from 'lucide-react';

const DeckerGUI: React.FC = () => {
  return (
    <section id="deckergui" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-sky-500/10 text-sky-400 px-4 py-1 rounded-full text-xs font-bold inline-block mb-6">
              FLAGSHIP PRODUCT
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              DeckerGUI: <br />
              <span className="text-sky-400">Agentic Ecosystem</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              DeckerGUI is our unified platform designed to manage and coordinate AI personas across diverse operational environments. It ensures that your AI tools work in harmony, whether on the cloud or at the edge.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex-shrink-0 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Cloud & Enterprise Modes</h4>
                  <p className="text-slate-400 text-sm">Scalable infrastructure for global AI operations and distributed teams.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex-shrink-0 flex items-center justify-center">
                  <HardDrive className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Local & Offline Capability</h4>
                  <p className="text-slate-400 text-sm">Full operational power without persistent internet connectivity for privacy and latency control.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex-shrink-0 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Air-Gapped Secure (Planned)</h4>
                  <p className="text-slate-400 text-sm">Upcoming extreme security mode for critical national infrastructure and sensitive R&D.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-sky-500/20 blur-[80px] rounded-full group-hover:bg-sky-500/30 transition-all"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-4 rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 aspect-square flex flex-col items-center justify-center text-center">
                <Layout className="w-20 h-20 text-sky-400 mb-6 animate-pulse" />
                <h5 className="text-2xl font-bold text-white mb-2">Platform Interface</h5>
                <p className="text-slate-400 text-sm mb-6">Centralized orchestration for all agentic workflows.</p>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                   <div className="h-full bg-sky-500 w-3/4 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeckerGUI;
