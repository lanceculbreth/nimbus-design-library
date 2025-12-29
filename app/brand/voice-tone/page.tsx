import { DocLayout } from '@/components/layout';
import { MessageSquare, Volume2, Heart, Lightbulb } from 'lucide-react';

const voicePrinciples = [
  {
    icon: <MessageSquare size={20} />,
    title: 'Clinician-led authority, low jargon',
    description: 'Sound like an experienced clinician explaining clearly to a smart layperson.',
    example: {
      good: 'GLP-1 medication for weight loss',
      bad: 'multi-modal datasets into a unified care continuum',
    },
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Clarity over complexity',
    description: 'Prefer simple, direct statements. Short sentences and concrete benefits over abstract tech language.',
    example: {
      good: 'We connect your labs, provider visits, and prescriptions in one place.',
      bad: 'We integrate multi-modal datasets into a unified care continuum.',
    },
  },
  {
    icon: <Heart size={20} />,
    title: 'Empathy and empowerment',
    description: 'Meet people where they are (weight, hormones, anxiety about meds). Emphasize support, safety, and partnership—not shame or fear.',
    example: {
      good: 'We\'re here to support your health journey, wherever you\'re starting from.',
      bad: 'Don\'t let obesity control your life anymore.',
    },
  },
  {
    icon: <Volume2 size={20} />,
    title: 'Future-forward, never hype-driven',
    description: 'Avoid wild promises, vague "AI magic," or unconfirmed timelines. Be honest about what\'s available now.',
    example: {
      good: 'Our AI assistant helps track your progress and answers common questions.',
      bad: 'Revolutionary AI will transform your entire health experience forever!',
    },
  },
];

const toneSliders = [
  { left: 'Professional', right: 'warm', position: 70 },
  { left: 'Evidence-based', right: 'approachable', position: 60 },
  { left: 'Direct', right: 'non-alarmist', position: 65 },
  { left: 'Optimistic', right: 'grounded', position: 55 },
];

export default function VoiceTonePage() {
  return (
    <DocLayout
      title="Voice & Tone"
      description="How we communicate with patients, providers, and partners. Our voice is consistent; our tone adapts to context."
      category="Brand"
    >
      {/* Voice Mantra */}
      <section className="mb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-nimbus-teal/10 via-transparent to-nimbus-orange/10 border border-nimbus-border">
          <h2 className="text-sm font-semibold text-nimbus-teal uppercase tracking-wider mb-3">Voice Mantra</h2>
          <p className="text-3xl font-semibold text-nimbus-text-primary italic">
            "Professional-led, patient-first. Clear, compassionate, connected."
          </p>
        </div>
      </section>

      {/* Voice Principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Voice Principles</h2>
        <div className="space-y-6">
          {voicePrinciples.map((principle) => (
            <div key={principle.title} className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal flex-shrink-0">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nimbus-text-primary">{principle.title}</h3>
                  <p className="text-nimbus-text-secondary mt-1">{principle.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4 pl-14">
                <div className="p-4 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
                  <span className="text-xs font-semibold text-nimbus-success uppercase tracking-wider">Do</span>
                  <p className="text-sm text-nimbus-text-primary mt-2">"{principle.example.good}"</p>
                </div>
                <div className="p-4 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
                  <span className="text-xs font-semibold text-nimbus-error uppercase tracking-wider">Don't</span>
                  <p className="text-sm text-nimbus-text-primary mt-2">"{principle.example.bad}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tone Sliders */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Tone Balance</h2>
        <p className="text-nimbus-text-secondary mb-6">Our tone balances between these qualities. The slider shows our typical position.</p>
        
        <div className="space-y-6">
          {toneSliders.map((slider) => (
            <div key={slider.left} className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-nimbus-text-primary">{slider.left}</span>
                <span className="text-sm font-medium text-nimbus-text-primary">{slider.right}</span>
              </div>
              <div className="relative h-2 bg-nimbus-surface-elevated rounded-full">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-nimbus-teal to-nimbus-teal-light rounded-full"
                  style={{ width: `${slider.position}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-nimbus-teal rounded-full border-2 border-nimbus-black"
                  style={{ left: `calc(${slider.position}% - 8px)` }}
                />
              </div>
              <div className="text-center mt-2">
                <span className="text-xs text-nimbus-text-tertiary">
                  {slider.left} <span className="text-nimbus-teal font-medium">but</span> {slider.right}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Context-Specific Tone */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Context-Specific Tone</h2>
        <p className="text-nimbus-text-secondary mb-6">While our voice stays consistent, tone adapts based on context.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Patient-Facing (DTC)</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Warm, supportive, encouraging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Simple language, relatable examples
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Focus on benefits and outcomes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Address common concerns proactively
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Provider-Facing (B2B)</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                More clinical, precise terminology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Factual, data-driven messaging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Focus on efficiency and compliance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Professional, enterprise-grade feel
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Error & System Messages</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Short, clear, actionable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Apologetic without over-explaining
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Always provide a next step
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Consistent with design system
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Success & Celebrations</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Genuinely encouraging
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Acknowledge effort and progress
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Not over-the-top or patronizing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nimbus-teal">•</span>
                Maintain medical credibility
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Writing Examples</h2>
        
        <div className="space-y-4">
          <div className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h3 className="text-sm font-semibold text-nimbus-text-tertiary uppercase tracking-wider mb-3">Welcome Message</h3>
            <p className="text-nimbus-text-primary">
              "Welcome to Nimbus. You've taken an important step toward better health. Your care team is ready to support you—let's get started together."
            </p>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h3 className="text-sm font-semibold text-nimbus-text-tertiary uppercase tracking-wider mb-3">Refill Reminder</h3>
            <p className="text-nimbus-text-primary">
              "Time to complete your refill request. It only takes a minute, and we can't ship your next dose until it's submitted."
            </p>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h3 className="text-sm font-semibold text-nimbus-text-tertiary uppercase tracking-wider mb-3">Success Confirmation</h3>
            <p className="text-nimbus-text-primary">
              "Great! Your plan will ship soon. We'll process your order and ship your medication to your address. You'll receive a confirmation email with tracking details shortly."
            </p>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

