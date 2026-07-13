"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Send, MessageCircle, AlertCircle, Lightbulb, ChevronUp, Apple, Play } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-white pt-16 pb-8 px-6 md:px-12 font-sans border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Products</h4>
            <ul className="space-y-[12px] mb-10">
              <li><Link href="/intrusion-protection" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Intrusion protection</Link></li>
              <li><Link href="/video-surveillance" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Video surveillance</Link></li>
              <li><Link href="/fire-and-life-safety" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Fire and life safety</Link></li>
              <li><Link href="/comfort-and-automation" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Comfort and automation</Link></li>
              <li><Link href="/shop" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">All products</Link></li>
              <li><Link href="/monitoring-packages" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Services</Link></li>
              <li><Link href="/system-integrations" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">System integrations</Link></li>
            </ul>

            <h4 className="font-semibold text-[15px] mb-5">Software</h4>
            <ul className="space-y-[12px] mb-8">
              {['Stararc Security System', 'Stararc PRO: Tool for Engineers', 'Stararc Desktop', 'Stararc Cloud Signaling', 'Stararc Mobile App'].map(link => (
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
              {['Solutions by facility type', 'Commercial fire detection and alarm system', 'Wireless Grade 3 solution', 'Video surveillance solution', 'Integration with Yale smart locks', 'Upgrades and retrofits', 'Why Stararc', 'How it works', '24/7 Monitoring', 'Maintenance', 'Laser Detection'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Support</h4>
            <ul className="space-y-[12px] mb-10">
              {['Compliance with standards'].map(link => (
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
              {['Blog', 'About us', 'Career', 'Stararc Next', 'Reviews and feedback'].map(link => (
                <li key={link}><a href="#" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">{link}</a></li>
              ))}
              <li><a href="/terms-and-conditions" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Terms & Conditions</a></li>
              <li><a href="/service-agreement" className="text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">Service Agreement</a></li>
            </ul>

            <h4 className="font-semibold text-[15px] mb-5">For partners</h4>
            <ul className="space-y-[12px]">
              {['For partners', 'Stararc Academy', 'Partner Portal'].map(link => (
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
                <a href="mailto:info@stararc.systems" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <Mail size={18} /> info@stararc.systems
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-[#a1a1a1] hover:text-white text-[13.5px] transition-colors">
                  <MessageCircle size={18} /> Ask a question
                </a>
              </li>
            </ul>



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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom / Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[#a1a1a1] text-sm relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} STARARC. All rights reserved.</p>
            <p className="hidden md:block">|</p>
            <p>
              Developed by{" "}
              <a 
                href="https://eveswebworkspvtltd.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors font-medium"
              >
                Eves Web Works Pvt Ltd
              </a>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="border border-[#333] hover:border-white text-[#a1a1a1] hover:text-white rounded-full p-2 md:p-3 transition-colors flex items-center justify-center bg-[#181818]"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
