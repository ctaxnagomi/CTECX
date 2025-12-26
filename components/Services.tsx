
import React from 'react';
import { SERVICES } from '../constants';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

const IconMap: Record<string, any> = {
  Cpu,
  ShieldCheck,
  Zap
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl font-extrabold text-white mb-6">Comprehensive AI Infrastructure & Integration</h3>
            <p className="text-slate-400 text-lg">
              We tackle the complexity of AI fragmentation by providing structured services and tools that empower enterprises to build reliable agentic ecosystems.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors flex items-center">
              View all services
              <Zap className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = IconMap[service.icon];
            return (
              <div key={idx} className="group p-1 rounded-3xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all duration-300">
                <div className="p-8">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-sky-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors">
                    Learn More &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
