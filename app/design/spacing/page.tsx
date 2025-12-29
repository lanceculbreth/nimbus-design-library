import { DocLayout } from '@/components/layout';
import { CodeBlock } from '@/components/docs';

const spacingScale = [
  { name: '0', value: '0', pixels: '0px' },
  { name: 'px', value: '1px', pixels: '1px' },
  { name: '0.5', value: '0.125rem', pixels: '2px' },
  { name: '1', value: '0.25rem', pixels: '4px' },
  { name: '1.5', value: '0.375rem', pixels: '6px' },
  { name: '2', value: '0.5rem', pixels: '8px' },
  { name: '2.5', value: '0.625rem', pixels: '10px' },
  { name: '3', value: '0.75rem', pixels: '12px' },
  { name: '4', value: '1rem', pixels: '16px' },
  { name: '5', value: '1.25rem', pixels: '20px' },
  { name: '6', value: '1.5rem', pixels: '24px' },
  { name: '8', value: '2rem', pixels: '32px' },
  { name: '10', value: '2.5rem', pixels: '40px' },
  { name: '12', value: '3rem', pixels: '48px' },
  { name: '16', value: '4rem', pixels: '64px' },
  { name: '20', value: '5rem', pixels: '80px' },
  { name: '24', value: '6rem', pixels: '96px' },
];

const radiusScale = [
  { name: 'none', value: '0', preview: 'rounded-none' },
  { name: 'sm', value: '4px', preview: 'rounded-sm' },
  { name: 'md', value: '8px', preview: 'rounded-md' },
  { name: 'lg', value: '12px', preview: 'rounded-lg' },
  { name: 'xl', value: '16px', preview: 'rounded-xl' },
  { name: '2xl', value: '24px', preview: 'rounded-2xl' },
  { name: '3xl', value: '32px', preview: 'rounded-3xl' },
  { name: 'full', value: '9999px', preview: 'rounded-full' },
];

const usageCode = `/* Spacing with CSS variables */
.card {
  padding: var(--space-6);    /* 24px */
  margin-bottom: var(--space-4); /* 16px */
  gap: var(--space-3);        /* 12px */
}

/* Border radius */
.button {
  border-radius: var(--radius-xl); /* 16px */
}

.card {
  border-radius: var(--radius-2xl); /* 24px */
}

/* Tailwind usage */
<div className="p-6 mb-4 gap-3 rounded-xl">
  Content with consistent spacing
</div>`;

export default function SpacingPage() {
  return (
    <DocLayout
      title="Spacing"
      description="Consistent spacing creates visual rhythm and hierarchy. Our spacing system uses an 4px base unit."
      category="Design"
    >
      {/* Overview */}
      <section className="mb-16">
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <h2 className="text-lg font-semibold text-nimbus-text-primary mb-3">Spacing Philosophy</h2>
          <p className="text-nimbus-text-secondary">
            Our spacing system is based on a 4px grid. This creates visual consistency and makes 
            it easier to maintain proportional relationships between elements. Most commonly used 
            values are multiples of 4: 4px, 8px, 12px, 16px, 24px, 32px.
          </p>
        </div>
      </section>

      {/* Spacing Scale */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Spacing Scale</h2>
        
        <div className="rounded-xl border border-nimbus-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-nimbus-surface-elevated">
              <tr className="border-b border-nimbus-border">
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Name</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Value</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Pixels</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Preview</th>
              </tr>
            </thead>
            <tbody className="bg-nimbus-surface">
              {spacingScale.map((space, index) => (
                <tr key={space.name} className={index !== spacingScale.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-teal font-mono">space-{space.name}</code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-text-secondary font-mono">{space.value}</code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-text-tertiary font-mono">{space.pixels}</code>
                  </td>
                  <td className="px-4 py-3">
                    <div 
                      className="h-4 bg-nimbus-teal rounded-sm"
                      style={{ width: space.pixels === '0px' ? '2px' : space.pixels }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Common Spacing Patterns</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-4">Component Padding</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Small button</span>
                <code className="text-xs text-nimbus-teal font-mono">px-4 py-2</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Medium button</span>
                <code className="text-xs text-nimbus-teal font-mono">px-6 py-3</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Card</span>
                <code className="text-xs text-nimbus-teal font-mono">p-6</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Input</span>
                <code className="text-xs text-nimbus-teal font-mono">px-4 py-3</code>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <h3 className="font-semibold text-nimbus-text-primary mb-4">Layout Spacing</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Section gap</span>
                <code className="text-xs text-nimbus-teal font-mono">mb-16 (64px)</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Card gap</span>
                <code className="text-xs text-nimbus-teal font-mono">gap-6 (24px)</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Text gap</span>
                <code className="text-xs text-nimbus-teal font-mono">gap-4 (16px)</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-nimbus-text-secondary">Icon gap</span>
                <code className="text-xs text-nimbus-teal font-mono">gap-2 (8px)</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Border Radius</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Rounded corners soften the interface and create a modern, approachable feel.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {radiusScale.map((radius) => (
            <div key={radius.name} className="p-4 rounded-xl bg-nimbus-surface border border-nimbus-border text-center">
              <div 
                className="w-16 h-16 bg-nimbus-teal mx-auto mb-3"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-sm font-medium text-nimbus-text-primary">{radius.name}</p>
              <code className="text-xs text-nimbus-text-tertiary font-mono">{radius.value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-2">Do</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use consistent spacing within component types</li>
              <li>• Increase spacing as hierarchy increases</li>
              <li>• Use 8px or 16px for most UI gaps</li>
              <li>• Match radius to element size</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-2">Don't</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use arbitrary pixel values</li>
              <li>• Mix spacing inconsistently</li>
              <li>• Use full radius on large rectangles</li>
              <li>• Crowd elements with minimal spacing</li>
            </ul>
          </div>
        </div>
        
        <CodeBlock code={usageCode} language="css" filename="spacing.css" />
      </section>
    </DocLayout>
  );
}

