"use client";

import React, { useState } from 'react';
import { ShopHeader } from '@/app/shop/page'; // reusing the ShopHeader for consistent navigation
import Footer from '@/components/Footer';
import { CheckCircle2, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    partnerType: 'Distributor',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ShopHeader />

      <main className="flex-1 w-full bg-[#f8f9fa] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight mb-4">
                  Partner with <span className="text-[#e60000]">StarArc</span>
                </h1>
                <p className="text-lg text-[#64748b] leading-relaxed">
                  Join our global network of security professionals. Whether you're an installer, distributor, or a security company, we provide the tools and hardware to help your business thrive.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fee2e2] p-3 rounded-full text-[#e60000]">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#111111] mb-1">Industry Leading Hardware</h3>
                    <p className="text-[#64748b]">Access our premium range of smart security devices and automation systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#fee2e2] p-3 rounded-full text-[#e60000]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#111111] mb-1">Dedicated Support</h3>
                    <p className="text-[#64748b]">Get priority technical support and dedicated account management for your team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#111]">Application Received</h2>
                  <p className="text-[#64748b] text-lg max-w-sm">
                    Thank you for your interest. Our partnership team will review your details and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold text-[#111] mb-2">Registration Form</h2>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#333]">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><User size={18} /></div>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#333]">Email Address <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Mail size={18} /></div>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#333]">Phone Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Phone size={18} /></div>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#333]">Company Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Building2 size={18} /></div>
                        <input required type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800" placeholder="Acme Security Ltd" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#333]">Partner Type <span className="text-red-500">*</span></label>
                      <select name="partnerType" value={formData.partnerType} onChange={handleChange} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800 appearance-none">
                        <option value="Distributor">Distributor</option>
                        <option value="Reseller">Authorized Reseller</option>
                        <option value="Installer">Professional Installer</option>
                        <option value="Security Company">Security Company</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#333]">Additional Information (Optional)</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-slate-400"><MessageSquare size={18} /></div>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium text-slate-800 resize-none" placeholder="Tell us a bit about your business..." />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#e60000] hover:bg-[#cc0000] text-white font-bold text-[15px] tracking-wide uppercase py-4 rounded-xl mt-4 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_20px_-10px_rgba(230,0,0,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(230,0,0,0.6)]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
