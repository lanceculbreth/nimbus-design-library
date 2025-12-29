import { DocLayout } from '@/components/layout';
import { Check, X, AlertTriangle } from 'lucide-react';

const products = [
  {
    name: 'Nimbus Healthcare®',
    type: 'Masterbrand',
    description: 'The primary brand for all patient and partner-facing communications.',
    usage: 'Use as the overarching brand. Always include the ® on first use in a document.',
    color: 'bg-nimbus-teal/10 border-nimbus-teal/20 text-nimbus-teal',
  },
  {
    name: 'WeightWise®',
    type: 'GLP-1 Program',
    description: 'The weight management program using GLP-1 medications. Includes Core and Sustain variants.',
    usage: 'Always capitalize both W\'s: "WeightWise" not "Weightwise" or "Weight Wise".',
    color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  },
  {
    name: 'NimCore®',
    type: 'Hormone Program',
    description: 'Hormone optimization program for men and women.',
    usage: 'Always written as one word with capital C: "NimCore" never "Nim Core" or "Nimcore".',
    color: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  },
  {
    name: 'Aura™',
    type: 'Patient Platform',
    description: 'The patient-facing AI assistant and coaching environment.',
    usage: 'Use trademark symbol (™) on first mention. Patient-facing communications only.',
    color: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  {
    name: 'IntelliHealth®',
    type: 'Clinician Platform',
    description: 'The clinician-facing decision support engine.',
    usage: 'Include disclaimer that it\'s not a substitute for provider judgment.',
    color: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  },
  {
    name: 'NovaMed™',
    type: 'B2B Platform',
    description: 'Enterprise platform for healthcare providers.',
    usage: 'Use for B2B communications. Maintain professional, factual tone.',
    color: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
  },
];

const affiliates = [
  {
    name: 'Lake Hills Pharmacy',
    description: 'NABP-accredited compounding pharmacy partner.',
    note: 'Always use proper casing. Never abbreviate.',
  },
];

const spellingRules = [
  { correct: 'WeightWise', incorrect: ['Weightwise', 'Weight Wise', 'Weight-Wise', 'WEIGHTWISE'] },
  { correct: 'NimCore®', incorrect: ['Nim Core', 'Nimcore', 'NimCORE', 'Nim-Core'] },
  { correct: 'Nimbus Healthcare®', incorrect: ['NIMBUS', 'nimbus healthcare', 'Nimbus Health'] },
  { correct: 'GLP-1', incorrect: ['GLP1', 'glp-1', 'GLP 1', 'Glp-1'] },
  { correct: 'NABP-accredited', incorrect: ['NABP Accredited', 'nabp-accredited', 'NABP accredited'] },
];

export default function NamingPage() {
  return (
    <DocLayout
      title="Naming & Nomenclature"
      description="Consistent naming creates trust. Follow these guidelines to ensure brand coherence across all touchpoints."
      category="Brand"
    >
      {/* Products & Programs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Products & Programs</h2>
        <div className="grid gap-4">
          {products.map((product) => (
            <div key={product.name} className={`p-6 rounded-xl bg-nimbus-surface border ${product.color.split(' ')[1]}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-nimbus-text-primary">{product.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.color}`}>
                      {product.type}
                    </span>
                  </div>
                  <p className="text-nimbus-text-secondary mb-3">{product.description}</p>
                  <p className="text-sm text-nimbus-text-tertiary">
                    <strong className="text-nimbus-text-secondary">Usage: </strong>
                    {product.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Affiliates & Partners</h2>
        <div className="space-y-4">
          {affiliates.map((affiliate) => (
            <div key={affiliate.name} className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
              <h3 className="font-semibold text-nimbus-text-primary mb-1">{affiliate.name}</h3>
              <p className="text-sm text-nimbus-text-secondary mb-2">{affiliate.description}</p>
              <p className="text-xs text-nimbus-text-tertiary flex items-center gap-1">
                <AlertTriangle size={12} className="text-nimbus-warning" />
                {affiliate.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Spelling & Casing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Spelling & Casing</h2>
        <p className="text-nimbus-text-secondary mb-6">Consistency in spelling builds brand recognition. Always use these exact spellings.</p>
        
        <div className="rounded-xl border border-nimbus-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-nimbus-surface-elevated">
              <tr className="border-b border-nimbus-border">
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">
                  <span className="flex items-center gap-2">
                    <Check size={14} className="text-nimbus-success" />
                    Correct
                  </span>
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">
                  <span className="flex items-center gap-2">
                    <X size={14} className="text-nimbus-error" />
                    Incorrect
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-nimbus-surface">
              {spellingRules.map((rule, index) => (
                <tr key={rule.correct} className={index !== spellingRules.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-success font-mono bg-nimbus-success/10 px-2 py-1 rounded">
                      {rule.correct}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {rule.incorrect.map((wrong) => (
                        <code key={wrong} className="text-sm text-nimbus-error font-mono bg-nimbus-error/10 px-2 py-1 rounded line-through">
                          {wrong}
                        </code>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trademark Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Trademark Usage</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Registered Trademarks (®)</h3>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              Use ® symbol on first prominent use in marketing materials, website pages, and legal documents.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                Nimbus Healthcare®
              </li>
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                WeightWise®
              </li>
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                NimCore®
              </li>
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                IntelliHealth®
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Trademarks (™)</h3>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              Use ™ symbol for marks that are claimed but not yet registered, or for product names.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                Aura™
              </li>
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                NovaMed™
              </li>
              <li className="flex items-center gap-2 text-nimbus-text-secondary">
                <Check size={14} className="text-nimbus-success flex-shrink-0" />
                Nimbus OS™
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Terms */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Technical & Medical Terms</h2>
        <p className="text-nimbus-text-secondary mb-6">When referencing technical or medical terminology, use standard formatting.</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">GLP-1</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">Always hyphenated, all caps</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">SMART-on-FHIR</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">Exact casing with hyphens</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">NABP</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">All caps, no periods</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">FDA</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">All caps, no periods</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">TRT</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">Testosterone Replacement Therapy</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <code className="text-nimbus-teal text-sm">HCG</code>
            <p className="text-xs text-nimbus-text-tertiary mt-1">Human Chorionic Gonadotropin</p>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

