import React from 'react';
import { SelestiaLogo } from '../components/SelestiaLogo';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-selestia-gray-border pb-6 space-y-4">
          <SelestiaLogo variant="dark" size="md" />
          <h1 className="text-4xl font-extrabold font-display text-selestia-black">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-gray-500">Effective Date: September 26, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            At <strong>Selestia Rituel Creative &amp; Digital Studio</strong> ("Selestia Rituel", "we", "us", or "our"), we respect your privacy and are committed to protecting the personal data you share with us when visiting our website, subscribing to our services, or interacting with our digital agency.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">1. Information We Collect</h2>
          <p>We may collect personal details including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: Name, email address, phone number, company name.</li>
            <li>Inquiry data: Project budgets, service preferences, and message contents submitted via inquiry forms.</li>
            <li>Technical data: IP address, browser type, device information, and web interaction cookies.</li>
          </ul>

          <h2 className="text-xl font-bold text-selestia-black font-display">2. How We Use Your Information</h2>
          <p>Your data is strictly utilized to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to project inquiries and provide tailored proposals.</li>
            <li>Deliver digital marketing, web engineering, and commercial production services.</li>
            <li>Send requested email newsletters, industry insights, and studio updates.</li>
            <li>Optimize website performance, user interface experience, and security.</li>
          </ul>

          <h2 className="text-xl font-bold text-selestia-black font-display">3. Data Security &amp; Protection</h2>
          <p>
            We implement enterprise-grade encryption (TLS/SSL), strict access controls, and secure cloud servers to prevent unauthorized data access, disclosure, or modification. We never sell or rent client data to third parties.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact our Data Protection Officer at:
            <br />
            <strong>Email:</strong> privacy@selestiarituel.com
          </p>
        </div>
      </div>
    </div>
  );
};
