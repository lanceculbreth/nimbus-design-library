'use client';

import { useState } from 'react';
import { DocLayout } from '@/components/layout';
import { CodeBlock } from '@/components/docs';
import { Check, Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/copy-to-clipboard';

interface ColorSwatchProps {
  name: string;
  variable: string;
  value: string;
  textColor?: string;
}

function ColorSwatch({ name, variable, value, textColor = 'text-white' }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(variable);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group text-left rounded-xl overflow-hidden border border-nimbus-border hover:border-nimbus-teal/50 transition-colors"
    >
      <div
        className={`h-24 flex items-end p-4 ${textColor}`}
        style={{ backgroundColor: value }}
      >
        <span className="text-sm font-medium opacity-90">{name}</span>
      </div>
      <div className="p-3 bg-nimbus-surface">
        <div className="flex items-center justify-between">
          <code className="text-xs text-nimbus-text-secondary font-mono">{value}</code>
          {copied ? (
            <Check size={14} className="text-nimbus-success" />
          ) : (
            <Copy size={14} className="text-nimbus-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <code className="text-xs text-nimbus-text-tertiary font-mono block mt-1">{variable}</code>
      </div>
    </button>
  );
}

const colorGroups = [
  {
    title: 'Primary',
    description: 'The primary teal is our signature color, used for CTAs, active states, and brand emphasis.',
    colors: [
      { name: 'Teal', variable: '--nimbus-teal', value: '#00A69C' },
      { name: 'Teal Dark', variable: '--nimbus-teal-dark', value: '#008F87' },
      { name: 'Teal Light', variable: '--nimbus-teal-light', value: '#33B8B0' },
    ],
  },
  {
    title: 'Backgrounds',
    description: 'Dark backgrounds create the foundation of our interface. Use these for layering and hierarchy.',
    colors: [
      { name: 'Black', variable: '--nimbus-black', value: '#0A0A0A', textColor: 'text-white' },
      { name: 'Surface', variable: '--nimbus-surface', value: '#1A1A1A', textColor: 'text-white' },
      { name: 'Surface Elevated', variable: '--nimbus-surface-elevated', value: '#242424', textColor: 'text-white' },
      { name: 'Surface Hover', variable: '--nimbus-surface-hover', value: '#2A2A2A', textColor: 'text-white' },
    ],
  },
  {
    title: 'Accent',
    description: 'Orange is used sparingly for secondary emphasis, badges, alerts, and warm accents.',
    colors: [
      { name: 'Orange', variable: '--nimbus-orange', value: '#F5A623', textColor: 'text-black' },
      { name: 'Orange Dark', variable: '--nimbus-orange-dark', value: '#D4901E', textColor: 'text-black' },
      { name: 'Orange Light', variable: '--nimbus-orange-light', value: '#FFBE4D', textColor: 'text-black' },
    ],
  },
  {
    title: 'Text',
    description: 'Text colors provide hierarchy and readability against dark backgrounds.',
    colors: [
      { name: 'Primary', variable: '--nimbus-text-primary', value: '#FFFFFF' },
      { name: 'Secondary', variable: '--nimbus-text-secondary', value: '#A0A0A0' },
      { name: 'Tertiary', variable: '--nimbus-text-tertiary', value: '#6B6B6B' },
      { name: 'Disabled', variable: '--nimbus-text-disabled', value: '#4A4A4A' },
    ],
  },
  {
    title: 'Borders',
    description: 'Border colors define boundaries and separation between elements.',
    colors: [
      { name: 'Border', variable: '--nimbus-border', value: '#2E2E2E' },
      { name: 'Border Subtle', variable: '--nimbus-border-subtle', value: '#1F1F1F' },
    ],
  },
  {
    title: 'Status',
    description: 'Semantic colors communicate meaning and state.',
    colors: [
      { name: 'Success', variable: '--nimbus-success', value: '#00A69C' },
      { name: 'Warning', variable: '--nimbus-warning', value: '#F5A623', textColor: 'text-black' },
      { name: 'Error', variable: '--nimbus-error', value: '#E53935' },
      { name: 'Info', variable: '--nimbus-info', value: '#2196F3' },
    ],
  },
];

const usageCode = `/* Using CSS variables */
.button-primary {
  background-color: var(--nimbus-teal);
  color: var(--nimbus-black);
}

.button-primary:hover {
  background-color: var(--nimbus-teal-light);
}

/* Using Tailwind classes */
<button className="bg-nimbus-teal text-nimbus-black hover:bg-nimbus-teal-light">
  Click me
</button>`;

export default function ColorsPage() {
  return (
    <DocLayout
      title="Colors"
      description="Our color system creates visual hierarchy and consistency across all Nimbus Healthcare products."
      category="Design"
    >
      {/* Overview */}
      <section className="mb-16">
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <h2 className="text-lg font-semibold text-nimbus-text-primary mb-3">Color Philosophy</h2>
          <p className="text-nimbus-text-secondary mb-4">
            Our color palette is built on a dark foundation with a signature teal that represents 
            health, trust, and innovation. The color system prioritizes:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-nimbus-text-secondary">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal" />
              Accessibility and contrast
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal" />
              Clarity in medical contexts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal" />
              Calm, professional aesthetic
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal" />
              Consistent across platforms
            </li>
          </ul>
        </div>
      </section>

      {/* Color Palettes */}
      {colorGroups.map((group) => (
        <section key={group.title} className="mb-12">
          <h2 className="text-xl font-semibold text-nimbus-text-primary mb-2">{group.title}</h2>
          <p className="text-nimbus-text-secondary mb-6">{group.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.variable}
                name={color.name}
                variable={color.variable}
                value={color.value}
                textColor={color.textColor}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-nimbus-text-primary mb-4">Usage</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Colors are available as CSS custom properties and Tailwind classes.
        </p>
        <CodeBlock code={usageCode} language="css" filename="styles.css" />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-xl font-semibold text-nimbus-text-primary mb-4">Accessibility</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Contrast Ratios</h3>
            <p className="text-sm text-nimbus-text-secondary mb-3">
              All text colors meet WCAG 2.1 AA standards against their intended backgrounds.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-nimbus-text-secondary">Primary on Black</span>
                <span className="text-nimbus-success font-mono">21:1 ✓</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-nimbus-text-secondary">Secondary on Black</span>
                <span className="text-nimbus-success font-mono">7.5:1 ✓</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-nimbus-text-secondary">Teal on Black</span>
                <span className="text-nimbus-success font-mono">6.2:1 ✓</span>
              </div>
            </div>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Color Blindness</h3>
            <p className="text-sm text-nimbus-text-secondary mb-3">
              Never use color alone to convey meaning. Always pair with text, icons, or patterns.
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-nimbus-success/10 border border-nimbus-success/20">
                <Check size={12} className="text-nimbus-success" />
                <span className="text-xs text-nimbus-success">Success</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-nimbus-error/10 border border-nimbus-error/20">
                <span className="text-xs text-nimbus-error">✕ Error</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

