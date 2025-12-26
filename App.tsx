
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DeckerGUI from './components/DeckerGUI';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Intro from './components/Intro';

const App: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen relative selection:bg-sky-500/30">
      <Intro />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Summary */}
        <section id="about" className="py-24 border-y border-slate-900 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Unified Governance for a <br />Fragmented AI World
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  <span className="font-bold text-slate-200">CTEC<span className="text-sky-400">X</span></span> specializes in addressing the challenges related to AI tool fragmentation. We empower enterprises with the infrastructure needed to coordinate tools, personas, and workflows while promoting governance, compliance, and operational efficiency.
                </p>
                <div className="flex space-x-12">
                  <div>
                    <span className="block text-4xl font-bold text-white mb-1">2024</span>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Founded</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-bold text-white mb-1">4+</span>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Key Sectors</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-sky-500/20 rounded-full blur-xl"></div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-baseline">
                  CTEC<span className="text-sky-400 text-2xl font-black ml-0.5">X</span> Core Values
                </h4>
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h5 className="text-sky-400 font-bold mb-1">Innovation</h5>
                    <p className="text-slate-400 text-sm">Developing structured solutions for complex AI workflows.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h5 className="text-sky-400 font-bold mb-1">Integrity</h5>
                    <p className="text-slate-400 text-sm">Maintaining transparent practices in data and coordination.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h5 className="text-sky-400 font-bold mb-1">Excellence</h5>
                    <p className="text-slate-400 text-sm">Ensuring reliable outcomes for mission-critical systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <DeckerGUI />
        <Industries />
        <Contact />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
