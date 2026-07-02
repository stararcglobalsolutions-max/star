"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Equipment Sales – Terms & Conditions</h1>
        <p className="text-[#a0a0a0] mb-12 text-lg">STARARC Global Pvt. Ltd.</p>

        <div className="space-y-10 text-[#d8d8d8] leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Scope</h2>
            <p>These Terms & Conditions govern the sale of security equipment and related accessories supplied by STARARC Global Pvt. Ltd. (“STARARC”). Installation, monitoring, maintenance, and subscription services, where applicable, are governed by separate service agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Product Information</h2>
            <p>STARARC supplies genuine products sourced through authorized manufacturers, distributors, or channel partners. Product images, specifications, colours, and descriptions are provided for reference and may vary slightly from the actual product supplied without affecting functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Pricing & Taxes</h2>
            <p>All prices are quoted in Indian Rupees (INR) unless otherwise stated and are inclusive or exclusive of applicable taxes, duties, and levies as specified at the time of purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Order Confirmation</h2>
            <p>An order shall be deemed accepted only upon receipt of payment or confirmation from STARARC. STARARC reserves the right to decline or cancel any order prior to dispatch due to stock availability, pricing errors, suspected fraud, regulatory requirements, or other legitimate business reasons. In such cases, any payment received shall be refunded.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Delivery</h2>
            <p>Delivery timelines are estimates and may vary due to product availability, courier delays, logistics, customs, force majeure events, or circumstances beyond STARARC’s reasonable control. STARARC shall not be liable for delays caused by third-party carriers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Inspection Upon Delivery</h2>
            <p>Customers should inspect all products immediately upon delivery. Any shortage, transit damage, or incorrect item must be reported to STARARC within 48 hours of delivery, together with photographs and supporting information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. 30-Day Technical Defect Replacement & Upgrade Policy (Online Purchases Only)</h2>
            <p className="mb-3">Customers purchasing equipment through STARARC’s online platform are entitled to a 30-day replacement and modification policy from the date of delivery for verified manufacturing defects or technical malfunctions only.</p>
            <p className="mb-3">During this 30-day period, customers may also choose to upgrade to another compatible product by paying the applicable price difference, subject to product availability.</p>
            <p className="mb-2">This policy does not cover:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Physical, accidental, cosmetic, or water damage.</li>
              <li>Improper installation or misuse.</li>
              <li>Unauthorized repairs or modifications.</li>
              <li>Damage caused by power surges, fire, flooding, lightning, vandalism, theft, or negligence.</li>
              <li>Normal wear and consumable components.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Manufacturer’s Warranty</h2>
            <p>Products are covered under the applicable manufacturer’s warranty. Warranty claims shall be processed in accordance with the manufacturer’s warranty policies. STARARC will reasonably assist customers with the warranty process where applicable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Returns</h2>
            <p>Products may only be returned where expressly permitted by STARARC’s published return policy or where required under applicable law. Returned products must be complete, unused (unless returned due to a verified defect), and include all original packaging, accessories, manuals, and proof of purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Installation</h2>
            <p>Unless specifically purchased, installation services are not included in the equipment purchase. STARARC shall not be responsible for improper installation performed by third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Limitation of Purpose</h2>
            <p>Security equipment is designed to reduce security risks but cannot eliminate them entirely. No security system guarantees prevention of burglary, intrusion, theft, fire, vandalism, property damage, or personal injury.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by applicable law, STARARC’s total liability arising from the purchase or use of any product shall not exceed the amount paid by the customer for the specific product giving rise to the claim.</p>
            <p>STARARC shall not be liable for indirect, incidental, consequential, punitive, or special damages, including loss of profits, business interruption, data loss, property loss, or other consequential losses.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. No Insurance Substitute</h2>
            <p>STARARC products are intended to reduce risk and are not a substitute for property, business, health, or life insurance. Customers remain responsible for maintaining appropriate insurance coverage.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Software & Mobile Applications</h2>
            <p>Certain products may require manufacturer-operated software, mobile applications, cloud platforms, firmware, or internet connectivity. Such software and services remain subject to the applicable manufacturer’s licence agreements, terms of service, and privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Intellectual Property</h2>
            <p>All trademarks, product names, logos, software, documentation, and intellectual property relating to third-party products remain the exclusive property of their respective owners. STARARC makes no claim of ownership over third-party intellectual property.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">16. Force Majeure</h2>
            <p>STARARC shall not be responsible for delays or failure to perform arising from events beyond its reasonable control, including natural disasters, government actions, strikes, pandemics, supply chain disruptions, transportation delays, cyber incidents, or utility failures.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">17. Customer Responsibilities</h2>
            <p className="mb-2">The customer is responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing accurate delivery information.</li>
              <li>Using products in accordance with manufacturer instructions.</li>
              <li>Ensuring installation is performed correctly where STARARC is not the installer.</li>
              <li>Protecting products from misuse and environmental damage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">18. Severability</h2>
            <p>If any provision of these Terms & Conditions is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">19. Entire Agreement</h2>
            <p>These Terms & Conditions, together with the order confirmation and invoice, constitute the complete agreement relating to the purchase of equipment and supersede all prior discussions, representations, or understandings relating to such purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">20. Governing Law & Jurisdiction</h2>
            <p>These Terms & Conditions shall be governed by the laws of India. Any dispute arising from the purchase of equipment shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over STARARC Global Pvt. Ltd.’s registered office.</p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
