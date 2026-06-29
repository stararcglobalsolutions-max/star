"use client";

import React from 'react';
import { Mail, Send, MessageCircle, AlertCircle, Lightbulb, ChevronUp, Apple, Play } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-white pt-16 pb-12 px-6 md:px-12 font-sans border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Products</h4>
            <ul className="space-y-[12px] mb-10">
              {['Intrusion protection', 'Video surveillance', 'Fire and life safety', 'Comfort and automation', 'All products', 'Services', 'System integrations', 'StarArc Ready products', 'Fibra wired protocol', 'StarArc radio protocols'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>

            <h4 className="font-semibold text-[15px] mb-5">Software</h4>
            <ul className="space-y-[12px] mb-8">
              {['StarArc Security System', 'StarArc PRO: Tool for Engineers', 'StarArc Desktop', 'StarArc PRO Desktop', 'StarArc TV', 'StarArc Translator PRO', 'StarArc Cloud Signaling', 'StarArc Media Player', 'Scenarios'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>

            <div className="space-y-3 mt-8">
              <a href="#" className="flex items-center gap-3 border border-[#333] hover:border-white transition-colors rounded-xl px-4 py-2.5 w-max group">
                <Apple size={24} className="group-hover:text-white text-gray-200" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#a1a1a1] leading-none mb-0.5">Available on</span>
                  <span className="text-[13px] font-semibold leading-tight">App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 border border-[#333] hover:border-white transition-colors rounded-xl px-4 py-2.5 w-max group">
                <Play size={22} className="group-hover:text-white text-gray-200 ml-0.5" />
                <div className="flex flex-col ml-0.5">
                  <span className="text-[10px] text-[#a1a1a1] leading-none mb-0.5">Available on</span>
                  <span className="text-[13px] font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Solutions</h4>
            <ul className="space-y-[12px]">
              {['Customer stories', 'Solutions by facility type', 'Commercial fire detection and alarm system', 'Wireless Grade 3 solution', 'Video surveillance solution', 'Integration with Yale smart locks', 'Upgrades and retrofits', 'Why StarArc', 'How it works'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Support</h4>
            <ul className="space-y-[12px] mb-10">
              {['Manuals and articles', 'Compliance with standards'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>

            <h4 className="font-semibold text-[15px] mb-5">Tools</h4>
            <ul className="space-y-[12px] mb-10">
              {['StarArc device compatibility', 'CMS software compatibility', 'StarArc Services availability', 'Video storage calculator', 'Video device calculator', 'Battery life calculator', 'Radio communication range calculator', 'Switches and outlets configurator', 'Fibra power supply calculator', 'All web tools'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>

            <h4 className="font-semibold text-[15px] mb-5 pr-4 leading-snug">Monitoring solutions and integrations</h4>
            <ul className="space-y-[12px]">
              {['Intrusion alarm monitoring', 'Video monitoring and visual alarm verification', 'Audio alarm verification'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Company</h4>
            <ul className="space-y-[12px] mb-10">
              {['Blog', 'About us', 'Press page', 'Events', 'Career', 'StarArc Next', 'Reviews and feedback'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>

            <h4 className="font-semibold text-[15px] mb-5">For partners</h4>
            <ul className="space-y-[12px]">
              {['For partners', 'StarArc Academy', 'Partner Portal', 'StarArc PRO channel'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Subscribe</h4>
            <p className="text-[#a1a1a1] text-[13.5px] mb-4">Subscribe to our emails about secure life. No spam.</p>
            <button className="bg-[#e60000] hover:bg-[#cc0000] text-white font-semibold text-[14px] px-7 py-2.5 rounded-full transition-colors mb-12">
              Subscribe
            </button>

            <h4 className="font-semibold text-[15px] mb-5">Request extra help</h4>
            <ul className="space-y-[14px] mb-12">
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <Mail size={18} /> support@stararc.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <Send size={18} /> @StarArcSystemsSupport_Bot
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <MessageCircle size={18} /> Ask a question
                </a>
              </li>
            </ul>

            <div className="flex items-start gap-4 mb-12">
              <div className="flex flex-col">
                <div className="flex items-center text-white font-bold gap-1 text-[15px] mb-1.5 tracking-wide">
                  <span className="text-[#e60000] text-[18px] leading-none">★</span> Trustpilot
                </div>
                <div className="flex gap-[2px]">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-[#e60000] w-[22px] h-[22px] flex items-center justify-center text-white text-[14px]">★</div>
                  ))}
                </div>
                <span className="text-[#a1a1a1] text-[11px] mt-1.5 font-medium">Rating 4.8</span>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-white font-bold text-[16px] tracking-wide mb-0.5">4,500,000</span>
                <span className="text-[#a1a1a1] text-[11px] leading-tight max-w-[120px]">people worldwide under StarArc protection</span>
              </div>
            </div>

            <ul className="space-y-[14px] mb-12">
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <AlertCircle size={18} /> Report mistake
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <Lightbulb size={18} /> Suggest a feature
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-5 text-[#a1a1a1]">
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 9.2 5 9.2s1.5.8 2.8.5c-3.1-2-3-7.5-3-7.5s1.5 1 3 1C5.4 1.2 2 6 2 6c3 3.8 7.5 4.5 10 4.5 0-4.5 3-7.5 7-5.5 1.5.5 3-1.5 3-1.5z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* Floating Scroll to Top */}
        <div className="relative mt-8">
           <button 
             onClick={scrollToTop}
             className="absolute right-0 bottom-0 border border-[#333] hover:border-white text-[#a1a1a1] hover:text-white rounded-full p-3 transition-colors flex items-center justify-center bg-[#181818]" 
             aria-label="Scroll to top"
           >
              <ChevronUp size={20} />
           </button>
        </div>
      </div>
    </footer>
  );
}
