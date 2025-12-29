import { DocLayout } from '@/components/layout';
import { Check, X, Shield, AlertTriangle } from 'lucide-react';

const doExamples = [
  {
    category: 'Simple Language',
    examples: [
      'One place for your diagnostics, guidance, and treatment.',
      'We connect labs, clinicians, and pharmacy so your care doesn\'t fall through the cracks.',
      'GLP-1 medication for weight loss.',
    ],
  },
  {
    category: 'Safety & Quality',
    examples: [
      'Pharmacist- and MD-led programs with continuous oversight.',
      'Compounded medications with batch testing and full transparency.',
      'NABP-accredited compounding pharmacy.',
    ],
  },
  {
    category: 'Clear Value Props',
    examples: [
      'Integrated portal + follow-ups, not one-off prescriptions.',
      'Regular labs plus provider oversight dial in your hormones.',
      'Three comprehensive lab panels a year and proactive check-ins are built in.',
    ],
  },
];

const dontExamples = [
  {
    category: 'Over-Technicalized',
    examples: [
      'We integrate multi-modal datasets into a unified care continuum.',
      'Leveraging AI-driven insights to optimize your metabolic parameters.',
      'Our proprietary algorithms enable seamless care orchestration.',
    ],
  },
  {
    category: 'Unconfirmed Promises',
    examples: [
      'Coming soon: revolutionary new features!',
      'By end of year, we\'ll be expanding nationwide.',
      'Our AI will transform your entire health experience.',
    ],
  },
  {
    category: 'Fear-Based Messaging',
    examples: [
      'Don\'t let obesity destroy your life.',
      'Your hormones are failing you.',
      'Other providers are putting you at risk.',
    ],
  },
];

const disclaimers = [
  {
    title: 'Compounding Disclaimer',
    text: 'Medications are compounded at our NABP-accredited pharmacy. Compounded medications are not FDA-approved but are prepared in compliance with federal and state regulations.',
    usage: 'Include in social media, ads, website, and patient-facing materials.',
    required: true,
  },
  {
    title: 'Clinical Decision Support',
    text: 'IntelliHealth® provides decision support recommendations but is not a substitute for provider clinical judgment. All treatment decisions must be made by licensed healthcare providers.',
    usage: 'Include when describing IntelliHealth® or AI-assisted recommendations.',
    required: true,
  },
  {
    title: 'Results Disclaimer',
    text: 'Individual results may vary. Weight loss and health outcomes depend on adherence to the program, individual metabolism, and other factors. This program requires a prescription after medical evaluation.',
    usage: 'Include in testimonials, before/after content, and outcomes claims.',
    required: true,
  },
];

export default function MessagingPage() {
  return (
    <DocLayout
      title="Messaging Guidelines"
      description="Clear guardrails for what we say and how we say it. These guidelines ensure consistency and compliance across all communications."
      category="Brand"
    >
      {/* Messaging Mantra */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-nimbus-surface to-nimbus-surface-elevated border border-nimbus-border">
          <h2 className="text-sm font-semibold text-nimbus-teal uppercase tracking-wider mb-3">Messaging Principle</h2>
          <p className="text-2xl font-semibold text-nimbus-text-primary mb-4">
            Say what Nimbus actually does in simple language.
          </p>
          <p className="text-nimbus-text-secondary">
            Emphasize safety, licensing, and pharmacy-grade quality. Highlight unique proof points that differentiate us from cosmetic weight-loss brands.
          </p>
        </div>
      </section>

      {/* Do / Don't Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Messaging Guardrails</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Do Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-nimbus-success/10 flex items-center justify-center">
                <Check size={18} className="text-nimbus-success" />
              </div>
              <h3 className="text-lg font-semibold text-nimbus-success">Do</h3>
            </div>
            <div className="space-y-4">
              {doExamples.map((group) => (
                <div key={group.category} className="p-4 rounded-xl bg-nimbus-success/5 border border-nimbus-success/20">
                  <h4 className="text-sm font-semibold text-nimbus-text-primary mb-3">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-nimbus-text-secondary">
                        <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                        "{example}"
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Don't Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-nimbus-error/10 flex items-center justify-center">
                <X size={18} className="text-nimbus-error" />
              </div>
              <h3 className="text-lg font-semibold text-nimbus-error">Don't</h3>
            </div>
            <div className="space-y-4">
              {dontExamples.map((group) => (
                <div key={group.category} className="p-4 rounded-xl bg-nimbus-error/5 border border-nimbus-error/20">
                  <h4 className="text-sm font-semibold text-nimbus-text-primary mb-3">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-nimbus-text-secondary">
                        <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                        <span className="line-through opacity-70">"{example}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Disclaimers */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Required Disclaimers</h2>
        <p className="text-nimbus-text-secondary mb-6">
          These disclaimers must be included in relevant communications. Non-compliance creates legal and regulatory risk.
        </p>
        
        <div className="space-y-4">
          {disclaimers.map((disclaimer) => (
            <div key={disclaimer.title} className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-nimbus-warning/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={16} className="text-nimbus-warning" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-nimbus-text-primary">{disclaimer.title}</h3>
                    {disclaimer.required && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-nimbus-error/10 text-nimbus-error">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-nimbus-text-secondary mb-3 p-3 bg-nimbus-surface-elevated rounded-lg border border-nimbus-border-subtle">
                    {disclaimer.text}
                  </p>
                  <p className="text-xs text-nimbus-text-tertiary">
                    <strong className="text-nimbus-text-secondary">When to use: </strong>
                    {disclaimer.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program-Specific Messaging */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Program-Specific Messaging</h2>
        
        <div className="space-y-6">
          {/* WeightWise */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-4">WeightWise® / GLP-1</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Key Messages</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Simple, low-friction enrollment
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Medical supervision and safety guardrails
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Refill management built-in
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Avoid</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Heavy before/after aesthetics
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Gimmicky promotional language
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    "Miracle" or "effortless" claims
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NimCore */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/5 to-transparent border border-violet-500/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-4">NimCore® / Hormones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Key Messages</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Labs, specialist doctor, and continuous monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Access to discounted medications as membership benefit
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    "Restore your edge" or similar empowering language
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Avoid</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    "Cheap peptides" positioning
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Unsubstantiated performance claims
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Masculinity stereotypes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NovaMed / B2B */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-4">NovaMed™ / B2B</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Key Messages</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Factual, straightforward, enterprise-grade
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Focus on "ready now" capabilities
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-nimbus-success flex-shrink-0 mt-0.5" />
                    Correct terminology and casing
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-nimbus-text-secondary mb-2">Avoid</h4>
                <ul className="space-y-2 text-sm text-nimbus-text-secondary">
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Speculative roadmap claims
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Consumer-focused emotional appeals
                  </li>
                  <li className="flex items-start gap-2">
                    <X size={14} className="text-nimbus-error flex-shrink-0 mt-0.5" />
                    Casual or informal tone
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Review Checklist */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Content Review Checklist</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Before publishing any content, verify these items are addressed.
        </p>
        
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Metrics and data are current and verified',
              'Terminology and trademarks are correct',
              'Beta/speculative language removed',
              'Professional, clinical tone maintained',
              'Required disclaimers included',
              'Grammar and formatting reviewed',
              'Mobile-friendly formatting verified',
              'Links tested and working',
            ].map((item) => (
              <label key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-nimbus-surface-hover transition-colors cursor-pointer">
                <div className="w-5 h-5 rounded border border-nimbus-border flex items-center justify-center">
                  <Check size={12} className="text-nimbus-teal opacity-0" />
                </div>
                <span className="text-sm text-nimbus-text-secondary">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

