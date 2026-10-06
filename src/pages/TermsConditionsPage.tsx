import React from 'react';
import { SelestiaLogo } from '../components/SelestiaLogo';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-selestia-gray-border pb-6 space-y-4">
          <SelestiaLogo variant="dark" size="md" />
          <h1 className="text-4xl font-extrabold font-display text-selestia-black">
            TERMS &amp; CONDITIONS
          </h1>
          <p className="text-xs text-gray-500">Effective Date: September 26, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to <strong>Selestia Rituel Creative &amp; Digital Studio</strong>. By accessing or using our website, digital platforms, or studio services, you agree to comply with and be bound by the following Terms &amp; Conditions.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">1. Intellectual Property &amp; Branding</h2>
          <p>
            All content on this site—including the official SELESTIA RITUEL logo, visual designs, editorial copy, custom graphics, and code architecture—is the exclusive intellectual property of Selestia Rituel. The official logo shall not be redesigned, distorted, recolored, or modified without prior written authorization.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">2. Studio Engagement Terms</h2>
          <p>
            Client engagements for web design &amp; development, e-commerce, digital marketing, social media management, and commercial video production are governed by individual Master Services Agreements (MSA) and Statements of Work (SOW) executed between Selestia Rituel and the client.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">3. Limitation of Liability</h2>
          <p>
            Selestia Rituel strives for 100% platform uptime and performance excellence. However, we are not liable for indirect or consequential damages arising from third-party server downtime, external platform API changes (e.g., Meta or Google algorithm updates), or unauthorized user breaches beyond our reasonable control.
          </p>

          <h2 className="text-xl font-bold text-selestia-black font-display">4. Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and construed in accordance with the laws applicable to our registered corporate headquarters.
          </p>
        </div>
      </div>
    </div>
  );
};
