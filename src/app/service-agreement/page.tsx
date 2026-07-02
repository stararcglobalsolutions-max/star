"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiceAgreement() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional Monitoring & Service Agreement</h1>
        <p className="text-[#a0a0a0] mb-12 text-lg">STARARC Global Pvt. Ltd.</p>

        <div className="space-y-10 text-[#d8d8d8] leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement</h2>
            <p>This Agreement governs the professional monitoring, maintenance, technical support, and managed security services provided by STARARC Global Pvt. Ltd. (“STARARC”) for installed security systems.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Service Term</h2>
            <p>The Agreement becomes effective on the date of successful system commissioning and remains valid for the subscription period selected by the Customer. Unless otherwise stated, STARARC Professional Security Packages include twenty-four (24) months of Professional Monitoring Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Services Included</h2>
            <p className="mb-2">During the active subscription period, STARARC shall provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>24/7 Professional Alarm Monitoring.</li>
              <li>Alarm event verification where applicable.</li>
              <li>Remote diagnostics and troubleshooting.</li>
              <li>Unlimited software, firmware, and security updates.</li>
              <li>Mobile application support.</li>
              <li>Professional technical assistance during business hours and emergency support where applicable.</li>
              <li>On-site service visits when required for covered warranty issues.</li>
              <li>Hardware repair or replacement for verified manufacturing defects at no additional cost.</li>
              <li>Labour charges for covered warranty service visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Warranty Coverage</h2>
            <p className="mb-3">Subscription warranty covers verified manufacturing defects occurring during normal operation.</p>
            <p className="mb-2">Warranty excludes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Physical or accidental damage.</li>
              <li>Fire, flood, lightning, earthquakes, or natural disasters.</li>
              <li>Power surges or unstable electrical supply.</li>
              <li>Improper use or negligence.</li>
              <li>Unauthorized repairs or modifications.</li>
              <li>Damage caused by third-party installers.</li>
              <li>Theft, vandalism, rodents, insects, or environmental contamination.</li>
              <li>Consumable items including batteries unless defective upon installation.</li>
            </ul>
            <p>STARARC reserves the right to repair or replace defective equipment with an equivalent or superior model where necessary.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Customer Responsibilities</h2>
            <p className="mb-2">The Customer agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain continuous electrical power where required.</li>
              <li>Maintain internet or cellular connectivity where required.</li>
              <li>Notify STARARC of any changes to contact information.</li>
              <li>Notify STARARC before any renovation affecting installed equipment.</li>
              <li>Permit STARARC reasonable access for servicing.</li>
              <li>Avoid unauthorized alterations to the installed system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Monitoring Limitations</h2>
            <p className="mb-3">Professional monitoring depends upon external communication networks, electrical power, internet connectivity, cellular services, cloud infrastructure, and emergency response agencies.</p>
            <p>STARARC does not guarantee uninterrupted monitoring where these services become unavailable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Emergency Response</h2>
            <p className="mb-3">STARARC will process alarm signals in accordance with its standard operating procedures.</p>
            <p className="mb-3">Emergency services dispatch remains subject to the policies and response times of local police, fire, ambulance, or other public authorities.</p>
            <p>STARARC does not guarantee attendance or response by any emergency agency.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. False Alarms</h2>
            <p className="mb-3">The Customer is responsible for ensuring authorized users understand proper system operation.</p>
            <p>Any fines, penalties, or charges imposed by authorities due to customer-caused false alarms shall remain the Customer’s responsibility.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Equipment Ownership</h2>
            <p className="mb-3">Unless otherwise agreed, purchased equipment becomes the property of the Customer after payment in full.</p>
            <p>Software, cloud services, firmware, monitoring platforms, and STARARC operational systems remain the property of their respective owners.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Upgrades</h2>
            <p className="mb-3">Customers may upgrade equipment or subscription packages at any time.</p>
            <p>Additional equipment, installation, and subscription charges shall apply where applicable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Renewal</h2>
            <p>Upon expiry of the included monitoring period, monitoring services may continue under STARARC’s prevailing subscription plans upon acceptance by both parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Limitation of Liability</h2>
            <p className="mb-3">The Customer acknowledges that the security system reduces risk but does not guarantee prevention of burglary, theft, intrusion, fire, vandalism, property loss, personal injury, or other incidents.</p>
            <p className="mb-3">To the fullest extent permitted by law, STARARC shall not be liable for indirect, consequential, incidental, exemplary, or special damages.</p>
            <p>STARARC’s aggregate liability shall not exceed the total monitoring fees paid during the preceding twelve (12) months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. No Insurance</h2>
            <p className="mb-3">Professional monitoring services are not insurance and do not replace property, life, business, or health insurance.</p>
            <p>The Customer remains responsible for maintaining adequate insurance coverage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Suspension</h2>
            <p>STARARC may suspend services where payments remain overdue, where misuse creates safety risks, or where continued service would violate applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Force Majeure</h2>
            <p>STARARC shall not be liable for delays or interruptions caused by events beyond its reasonable control, including natural disasters, war, strikes, government actions, telecommunications failures, cyber incidents, utility outages, or supply chain disruptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">16. Privacy</h2>
            <p>STARARC may collect, process, and retain alarm events, monitoring records, diagnostic information, contact details, and service history solely for providing contracted services and complying with legal obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">17. Software Licensing, Cloud Services & Technology Platform</h2>
            <p className="mb-3">STARARC Global Pvt. Ltd. utilizes proprietary software, cloud infrastructure, communication technologies, monitoring platforms, cybersecurity services, artificial intelligence, and related technologies provided by authorized technology partners and licensed service providers.</p>
            <p className="mb-3">All software licences, cloud platform authorizations, firmware, communication services, and related technology components are supplied, maintained, or licensed through STARARC’s authorized technology partners in accordance with applicable licence agreements and regulatory requirements.</p>
            <p className="mb-3">STARARC acts as the customer’s primary security solutions provider, including system design, equipment supply, professional installation, commissioning, technical support, maintenance, and 24/7 professional monitoring services.</p>
            <p className="mb-3">Certain platform features, mobile applications, cloud services, remote connectivity, software updates, artificial intelligence capabilities, analytics, and communication services may depend upon third-party infrastructure, internet connectivity, telecommunications providers, and licensed technology partners. STARARC shall use commercially reasonable efforts to maintain service continuity but shall not be responsible for interruptions, delays, modifications, or discontinuation of third-party services that are beyond its reasonable control.</p>
            <p className="mb-3">All copyrights, patents, trademarks, software, firmware, cloud platforms, proprietary technologies, and other intellectual property associated with third-party products and services remain the exclusive property of their respective owners. Nothing contained in these Terms & Conditions shall be construed as transferring ownership of such intellectual property to the Customer.</p>
            <p className="mb-3">STARARC reserves the right to replace, upgrade, or migrate software platforms, communication technologies, cloud infrastructure, or licensed technology partners where reasonably necessary to improve security, reliability, regulatory compliance, operational efficiency, or service quality, provided that such changes do not materially reduce the core functionality of the services purchased by the Customer.</p>
            <p>The Customer agrees to use all software, mobile applications, cloud services, and related technologies only in accordance with these Terms & Conditions, applicable laws, and any end-user licence terms accompanying the relevant products or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">18. Governing Law</h2>
            <p className="mb-3">This Agreement shall be governed by the laws of India.</p>
            <p>Any disputes shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over STARARC Global Pvt. Ltd.’s registered office.</p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
