import { DocLayout } from '@/components/layout';
import { Heart, Stethoscope, Network, Sparkles, Users } from 'lucide-react';

const pillars = [
  {
    icon: <Stethoscope size={24} />,
    title: 'Clinician-led, patient-first',
    description: 'Every experience is designed with medical expertise at its core while prioritizing patient clarity and comfort. Our clinicians guide the technology, not the other way around.',
  },
  {
    icon: <Network size={24} />,
    title: 'Connected, continuous care',
    description: 'From data to delivery, we create seamless healthcare experiences. No gaps, no dropped handoffs—just one continuous loop of care from diagnostics to treatment.',
  },
  {
    icon: <Users size={24} />,
    title: 'Personalized and preventative',
    description: 'We design for the individual, not the average. Every interface adapts to personal health journeys, focusing on prevention rather than just treatment.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Technology as enabler',
    description: 'Innovation serves human connection. Technology enhances the care relationship without replacing the human touch that healthcare demands.',
  },
];

export default function BrandFoundationsPage() {
  return (
    <DocLayout
      title="Brand Foundations"
      description="The core principles and values that define Nimbus Healthcare's identity and guide every design decision."
      category="Brand"
    >
      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-nimbus-teal/10 to-emerald-500/10 border border-nimbus-teal/20">
            <h2 className="text-sm font-semibold text-nimbus-teal uppercase tracking-wider mb-3">Mission</h2>
            <p className="text-2xl font-semibold text-nimbus-text-primary leading-snug">
              Transform "sick care" into true healthcare by making care connected, preventative, and personalized.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
            <h2 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-3">Vision</h2>
            <p className="text-2xl font-semibold text-nimbus-text-primary leading-snug">
              A continuous, closed-loop system where data, clinicians, and pharmacy work together so people can optimize health and extend vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Role */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Core Role</h2>
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <p className="text-lg text-nimbus-text-secondary leading-relaxed">
            Nimbus Healthcare is a <strong className="text-nimbus-text-primary">clinician-led, tech-enabled platform</strong> connecting diagnostics, guidance, treatment, and in-house compounding into one continuous loop of care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1.5 text-sm bg-nimbus-surface-elevated rounded-full text-nimbus-text-secondary border border-nimbus-border-subtle">Diagnostics</span>
            <span className="text-nimbus-text-tertiary">→</span>
            <span className="px-3 py-1.5 text-sm bg-nimbus-surface-elevated rounded-full text-nimbus-text-secondary border border-nimbus-border-subtle">Guidance</span>
            <span className="text-nimbus-text-tertiary">→</span>
            <span className="px-3 py-1.5 text-sm bg-nimbus-surface-elevated rounded-full text-nimbus-text-secondary border border-nimbus-border-subtle">Treatment</span>
            <span className="text-nimbus-text-tertiary">→</span>
            <span className="px-3 py-1.5 text-sm bg-nimbus-surface-elevated rounded-full text-nimbus-text-secondary border border-nimbus-border-subtle">Compounding</span>
            <span className="text-nimbus-text-tertiary">→</span>
            <span className="px-3 py-1.5 text-sm bg-nimbus-teal/10 rounded-full text-nimbus-teal border border-nimbus-teal/20">Continuous Care</span>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Brand Pillars</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="group p-6 rounded-xl bg-nimbus-surface border border-nimbus-border hover:border-nimbus-teal/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal flex-shrink-0 group-hover:bg-nimbus-teal/20 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-nimbus-teal">0{index + 1}</span>
                    <h3 className="text-lg font-semibold text-nimbus-text-primary">{pillar.title}</h3>
                  </div>
                  <p className="text-nimbus-text-secondary leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Design Principles</h2>
        <p className="text-nimbus-text-secondary mb-6">These principles translate our brand pillars into actionable design guidelines.</p>
        
        <div className="space-y-4">
          <div className="p-5 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Clarity + Compassion + Science</h3>
            <p className="text-sm text-nimbus-text-secondary">Clean, minimal design that doesn't overwhelm. Every element should have purpose and bring comfort.</p>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Progressive Disclosure</h3>
            <p className="text-sm text-nimbus-text-secondary">Show what's needed, when it's needed. Complex medical information should unfold naturally.</p>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Trust Through Transparency</h3>
            <p className="text-sm text-nimbus-text-secondary">Always be clear about what's happening. No surprises, no hidden fees, no confusing medical jargon.</p>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Accessible Excellence</h3>
            <p className="text-sm text-nimbus-text-secondary">Premium quality doesn't mean exclusive. Design for everyone, regardless of technical ability or health literacy.</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">What Makes Us Different</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <div className="w-10 h-10 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal mb-4">
              <Heart size={20} />
            </div>
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Pharmacist & MD-led</h3>
            <p className="text-sm text-nimbus-text-secondary">Real clinicians guide every treatment, not algorithms making decisions in isolation.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <div className="w-10 h-10 rounded-lg bg-nimbus-orange/10 flex items-center justify-center text-nimbus-orange mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Pharmaceutical-Grade</h3>
            <p className="text-sm text-nimbus-text-secondary">Compounded medications with batch testing and full transparency. NABP-accredited quality.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
              <Network size={20} />
            </div>
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Integrated Platform</h3>
            <p className="text-sm text-nimbus-text-secondary">Portal, follow-ups, and prescription management in one place—not one-off prescriptions.</p>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

