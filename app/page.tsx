import Link from 'next/link';
import { ArrowRight, Heart, Palette, Box, LayoutGrid, Sparkles } from 'lucide-react';

const sections = [
  {
    title: 'Brand',
    description: 'Core identity, voice, tone, and messaging guidelines that define the Nimbus Healthcare experience.',
    icon: <Heart size={24} />,
    href: '/brand/foundations',
    color: 'bg-gradient-to-br from-rose-500/20 to-orange-500/20',
    iconColor: 'text-rose-400',
  },
  {
    title: 'Design',
    description: 'Design tokens including colors, typography, spacing, and elevation that form our visual foundation.',
    icon: <Palette size={24} />,
    href: '/design/colors',
    color: 'bg-gradient-to-br from-violet-500/20 to-blue-500/20',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Components',
    description: 'Reusable UI components built with React, ready to use with full documentation and examples.',
    icon: <Box size={24} />,
    href: '/components/buttons',
    color: 'bg-gradient-to-br from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-400',
  },
  {
    title: 'Patterns',
    description: 'Common design patterns and layouts for building consistent healthcare experiences.',
    icon: <LayoutGrid size={24} />,
    href: '/patterns/layouts',
    color: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-amber-400',
  },
];

const principles = [
  {
    title: 'Clinician-led, patient-first',
    description: 'Every design decision prioritizes clarity for patients while maintaining medical authority.',
  },
  {
    title: 'Connected, continuous care',
    description: 'From data to delivery, our design creates seamless healthcare experiences.',
  },
  {
    title: 'Personalized and preventative',
    description: 'Adaptive interfaces that support individual health journeys.',
  },
  {
    title: 'Technology as enabler',
    description: 'Innovation serves human connection, never replacing the care relationship.',
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-nimbus-teal" size={20} />
          <span className="text-sm font-medium text-nimbus-teal">Version 1.0</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-nimbus-text-primary">Nimbus</span>
          <br />
          <span className="text-gradient">Design System</span>
        </h1>
        
        <p className="text-xl text-nimbus-text-secondary max-w-2xl leading-relaxed mb-8">
          The official design language and component library for Nimbus Healthcare®. 
          Build consistent, accessible, and beautiful healthcare experiences that connect 
          diagnostics, guidance, treatment, and care.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="/brand/foundations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nimbus-teal text-nimbus-black font-semibold rounded-full hover:bg-nimbus-teal-light transition-colors"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/components/buttons"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nimbus-surface border border-nimbus-border text-nimbus-text-primary font-semibold rounded-full hover:bg-nimbus-surface-hover transition-colors"
          >
            Explore Components
          </Link>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group relative p-6 rounded-3xl bg-nimbus-surface border border-nimbus-border hover:border-nimbus-teal/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 ${section.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-full bg-nimbus-surface-elevated flex items-center justify-center mb-4 ${section.iconColor}`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-nimbus-text-primary mb-2 group-hover:text-nimbus-teal transition-colors">
                  {section.title}
                </h3>
                <p className="text-nimbus-text-secondary text-sm leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-nimbus-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Principles */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-2">Brand Pillars</h2>
        <p className="text-nimbus-text-secondary mb-8">The foundational principles that guide every design decision at Nimbus Healthcare.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div key={principle.title} className="p-6 rounded-3xl bg-nimbus-surface-elevated border border-nimbus-border-subtle">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nimbus-text-primary mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-nimbus-text-secondary text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-2">Programs & Products</h2>
        <p className="text-nimbus-text-secondary mb-8">Design systems tailored for each Nimbus Healthcare program.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-nimbus-teal/10 to-emerald-500/10 border border-nimbus-teal/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-2">WeightWise®</h3>
            <p className="text-nimbus-text-secondary text-sm mb-4">GLP-1 weight management program with personalized care.</p>
            <span className="text-xs text-nimbus-teal font-medium px-2 py-1 bg-nimbus-teal/10 rounded-full">Weight Loss</span>
          </div>
          
          <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-2">NimCore®</h3>
            <p className="text-nimbus-text-secondary text-sm mb-4">Hormone optimization for men and women.</p>
            <span className="text-xs text-violet-400 font-medium px-2 py-1 bg-violet-500/10 rounded-full">Hormones</span>
          </div>
          
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-2">Aura™</h3>
            <p className="text-nimbus-text-secondary text-sm mb-4">AI-powered health coaching and patient portal.</p>
            <span className="text-xs text-blue-400 font-medium px-2 py-1 bg-blue-500/10 rounded-full">Digital Health</span>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="border-t border-nimbus-border pt-8">
        <p className="text-sm text-nimbus-text-tertiary">
          This design system is maintained by the Nimbus Healthcare design and engineering teams. 
          For questions or contributions, reach out to{' '}
          <a href="mailto:design@nimbushealthcare.com" className="text-nimbus-teal hover:underline">
            design@nimbushealthcare.com
          </a>
        </p>
      </section>
    </div>
  );
}
