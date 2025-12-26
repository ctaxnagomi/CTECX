
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">Connect</h2>
            <h3 className="text-4xl font-extrabold text-white mb-8">Ready to integrate your future?</h3>
            <p className="text-slate-400 text-lg mb-12">
              Reach out to our experts to schedule a demo or discuss a customized AI coordination framework for your enterprise.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-sky-400 border border-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-slate-500 text-xs font-bold uppercase">Email Support</h5>
                  <p className="text-white font-medium">support@ctecx.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-sky-400 border border-slate-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-slate-500 text-xs font-bold uppercase">Phone Enquiry</h5>
                  <p className="text-white font-medium">+60-123-456-789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-sky-400 border border-slate-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-slate-500 text-xs font-bold uppercase">Location</h5>
                  <p className="text-white font-medium text-sm">Sarawak Innovation Hub, Kuching, Malaysia</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-800 flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <span className="text-slate-500 text-sm">Follow CTECX updates</span>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Business Email</label>
                  <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Subject</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-sky-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Schedule a Demo</option>
                  <option>Partnership Proposal</option>
                  <option>Consulting Request</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-sky-500 transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full accent-gradient py-5 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
