"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CheckCircle2, Building2, User, Mail, Phone, MessageSquare, 
  Globe, MapPin, Map, BadgePercent, GraduationCap, HeadphonesIcon, 
  Truck, ShieldCheck, Link as LinkIcon, DollarSign
} from 'lucide-react';

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    // Step 1: Short Required
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    partnerType: 'Installer',
    
    // Step 2: Business Info
    website: '',
    yearsInBusiness: '',
    employees: '',
    annualProjects: '1–25',

    // Step 3: Areas of Interest
    interests: [] as string[],

    // Step 4: Business Details
    brandsInstalled: '',
    monthlyVolume: '',
    inHouseTeam: 'Yes',

    // Step 5: Additional Info
    message: '',

    // Step 6: Consent
    consentTerms: false,
    consentContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      
      // Handle array of checkboxes (interests)
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(item => item !== value)
        }));
      } else {
        // Handle boolean checkboxes
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentTerms || !formData.consentContact) {
      alert("Please agree to the terms and consent before submitting.");
      return;
    }

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

  const interestsList = [
    "Intrusion Alarm Systems", "CCTV Surveillance", "Access Control", 
    "Video Intercom", "Smart Home Automation", "Fire Alarm Systems", 
    "24/7 Monitoring Services"
  ];

  const benefits = [
    { icon: BadgePercent, text: "Exclusive Partner Pricing" },
    { icon: Globe, text: "Sales & Marketing Support" },
    { icon: GraduationCap, text: "Certified Training Programs" },
    { icon: HeadphonesIcon, text: "Priority Technical Support" },
    { icon: Truck, text: "Fast Product Delivery" },
    { icon: User, text: "Dedicated Account Manager" },
    { icon: ShieldCheck, text: "Extended Product Warranty" },
    { icon: LinkIcon, text: "Lead Referral Opportunities" },
  ];

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col text-white font-sans pt-[120px]">
      <Header />

      <main className="flex-1 w-full relative z-10 py-16 md:py-24 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-800/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Content */}
            <div className="flex flex-col gap-10 sticky top-32">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-red-600"></span>
                  <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">Partnership</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 font-heading">
                  Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">STARARC</span> Partner
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Join our global network of trusted security professionals and gain access to premium products, technical training, exclusive pricing, and dedicated business support.
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/10"></div>

              <div>
                <h3 className="text-xl font-bold mb-6 font-heading">Partner Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-red-600/10 p-2 rounded-lg text-red-500 border border-red-500/20">
                        <b.icon size={18} />
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[32px] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-2 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl font-extrabold font-heading">Application Received</h2>
                  <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    Thank you for your interest in joining the STARARC network. Our partnership team will review your details and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  
                  {/* Step 1: Short Required */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold font-heading text-red-500 border-b border-white/10 pb-4">1. Primary Contact</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Full Name *</label>
                        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Company Name *</label>
                        <input required type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="Acme Security Ltd" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="john@company.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Phone Number *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="+1 234 567 8900" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Country *</label>
                        <input required type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="Canada" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">State / Province *</label>
                        <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="Ontario" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">City *</label>
                        <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="Toronto" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-300">Partner Type *</label>
                      <select name="partnerType" value={formData.partnerType} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white appearance-none">
                        <option value="Installer">Installer</option>
                        <option value="Dealer">Dealer</option>
                        <option value="Distributor">Distributor</option>
                        <option value="System Integrator">System Integrator</option>
                        <option value="Monitoring Company">Monitoring Company</option>
                        <option value="Electrical Contractor">Electrical Contractor</option>
                        <option value="Builder / Developer">Builder / Developer</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 2: Business Info */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold font-heading text-red-500 border-b border-white/10 pb-4">2. Business Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Company Website</label>
                        <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="https://www.company.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Years in Business</label>
                        <input type="number" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="e.g. 5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Number of Employees</label>
                        <input type="number" name="employees" value={formData.employees} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="e.g. 15" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Annual Projects Completed</label>
                        <select name="annualProjects" value={formData.annualProjects} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white appearance-none">
                          <option value="1–25">1–25</option>
                          <option value="26–100">26–100</option>
                          <option value="101–500">101–500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Areas of Interest */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold font-heading text-red-500 border-b border-white/10 pb-4 mb-2">3. Areas of Interest</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {interestsList.map((interest, idx) => (
                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            name="interests" 
                            value={interest} 
                            onChange={handleChange}
                            className="w-5 h-5 rounded bg-black/50 border-white/20 text-red-600 focus:ring-red-500 focus:ring-offset-black accent-red-600"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Business Details */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold font-heading text-red-500 border-b border-white/10 pb-4">4. Business Details</h3>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-300">Current Security Brands You Install (Optional)</label>
                      <input type="text" name="brandsInstalled" value={formData.brandsInstalled} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="e.g. Dahua, Hikvision, Honeywell" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">Monthly Project Volume</label>
                        <input type="text" name="monthlyVolume" value={formData.monthlyVolume} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600" placeholder="e.g. $50,000 or 10 projects" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-gray-300">In-house Installation Team?</label>
                        <select name="inHouseTeam" value={formData.inHouseTeam} onChange={handleChange} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white appearance-none">
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Additional Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-heading text-red-500 border-b border-white/10 pb-4 mb-2">5. Additional Information</h3>
                    <label className="text-sm font-bold text-gray-300">Tell us about your business</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3.5 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-red-500 transition-all text-white placeholder-gray-600 resize-none" placeholder="We specialize in..." />
                  </div>

                  {/* Step 6: Consent */}
                  <div className="flex flex-col gap-4 bg-red-600/5 p-6 rounded-2xl border border-red-500/10">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        required
                        type="checkbox" 
                        name="consentTerms"
                        checked={formData.consentTerms}
                        onChange={handleChange}
                        className="w-5 h-5 mt-0.5 rounded bg-black/50 border-white/20 text-red-600 focus:ring-red-500 focus:ring-offset-black accent-red-600 shrink-0"
                      />
                      <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">I agree to the Partner Terms & Conditions</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        required
                        type="checkbox" 
                        name="consentContact"
                        checked={formData.consentContact}
                        onChange={handleChange}
                        className="w-5 h-5 mt-0.5 rounded bg-black/50 border-white/20 text-red-600 focus:ring-red-500 focus:ring-offset-black accent-red-600 shrink-0"
                      />
                      <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">I agree to be contacted by STARARC</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-lg tracking-wide py-5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] flex items-center justify-center gap-3 mt-4"
                  >
                    {isSubmitting ? 'Processing Application...' : 'Apply to Become a Partner'}
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
