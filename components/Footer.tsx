
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
          <div className="max-w-xs">
            <Logo size={50} className="mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed mt-4">
              Engineered infrastructure for coordinating AI tools, personas, and workflows. Founded 2024.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h6 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Company</h6>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Developments</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Resources</h6>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-sky-400 transition-colors">DeckerGUI Docs</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Agentic API</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Governance Lab</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Legal</h6>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">MIT License</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            &copy; 2024 CTECX Enterprise • Engineered Technology Research Developments & Solutions
          </p>
          <p className="text-slate-600 text-xs">
            Sarawak Innovation Hub, Malaysia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
