import { DocLayout } from '@/components/layout';
import { CodeBlock } from '@/components/docs';

const typeScale = [
  { name: 'text-6xl', size: '3.75rem', lineHeight: '1', weight: '700', sample: 'Display Large' },
  { name: 'text-5xl', size: '3rem', lineHeight: '1', weight: '700', sample: 'Display Medium' },
  { name: 'text-4xl', size: '2.25rem', lineHeight: '1.1', weight: '700', sample: 'Heading 1' },
  { name: 'text-3xl', size: '1.875rem', lineHeight: '1.2', weight: '600', sample: 'Heading 2' },
  { name: 'text-2xl', size: '1.5rem', lineHeight: '1.25', weight: '600', sample: 'Heading 3' },
  { name: 'text-xl', size: '1.25rem', lineHeight: '1.4', weight: '600', sample: 'Heading 4' },
  { name: 'text-lg', size: '1.125rem', lineHeight: '1.5', weight: '400', sample: 'Large Body' },
  { name: 'text-base', size: '1rem', lineHeight: '1.5', weight: '400', sample: 'Body Text' },
  { name: 'text-sm', size: '0.875rem', lineHeight: '1.5', weight: '400', sample: 'Small Text' },
  { name: 'text-xs', size: '0.75rem', lineHeight: '1.5', weight: '500', sample: 'Caption' },
];

const fontWeights = [
  { name: 'Normal', value: '400', variable: '--font-normal' },
  { name: 'Medium', value: '500', variable: '--font-medium' },
  { name: 'Semibold', value: '600', variable: '--font-semibold' },
  { name: 'Bold', value: '700', variable: '--font-bold' },
];

const usageCode = `/* Typography CSS Variables */
body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

h1 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-tight);
}

code {
  font-family: var(--font-mono);
}

/* Tailwind Usage */
<h1 className="text-4xl font-bold tracking-tight">
  Heading
</h1>

<p className="text-base text-nimbus-text-secondary leading-relaxed">
  Body text with secondary color
</p>`;

export default function TypographyPage() {
  return (
    <DocLayout
      title="Typography"
      description="Typography creates hierarchy and improves readability. Our type system is designed for clarity in healthcare contexts."
      category="Design"
    >
      {/* Font Families */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Font Families</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-nimbus-teal/10 flex items-center justify-center">
                <span className="text-nimbus-teal font-semibold">Aa</span>
              </div>
              <div>
                <h3 className="font-semibold text-nimbus-text-primary">Inter</h3>
                <p className="text-xs text-nimbus-text-tertiary">Primary • Sans-serif</p>
              </div>
            </div>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              Inter is our primary typeface for all UI elements, body text, and headings. 
              It's highly legible and optimized for screens.
            </p>
            <code className="text-xs text-nimbus-text-tertiary font-mono bg-nimbus-surface-elevated px-2 py-1 rounded">
              var(--font-sans)
            </code>
            <div className="mt-4 p-4 bg-nimbus-surface-elevated rounded-lg">
              <p className="text-2xl font-light text-nimbus-text-primary mb-2">
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-sm text-nimbus-text-secondary">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-nimbus-orange/10 flex items-center justify-center">
                <span className="text-nimbus-orange font-mono font-semibold text-sm">{'{}'}</span>
              </div>
              <div>
                <h3 className="font-semibold text-nimbus-text-primary">JetBrains Mono</h3>
                <p className="text-xs text-nimbus-text-tertiary">Code • Monospace</p>
              </div>
            </div>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              JetBrains Mono is used for code blocks, technical values, and inline code. 
              It features coding ligatures and clear distinction between similar characters.
            </p>
            <code className="text-xs text-nimbus-text-tertiary font-mono bg-nimbus-surface-elevated px-2 py-1 rounded">
              var(--font-mono)
            </code>
            <div className="mt-4 p-4 bg-nimbus-surface-elevated rounded-lg font-mono">
              <p className="text-lg text-nimbus-text-primary mb-2">
                const health = optimized;
              </p>
              <p className="text-sm text-nimbus-text-secondary">
                0O 1lI {'=> -> !== === </>'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Type Scale</h2>
        <p className="text-nimbus-text-secondary mb-6">
          A harmonious type scale creates visual rhythm and hierarchy.
        </p>
        
        <div className="rounded-xl border border-nimbus-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-nimbus-surface-elevated">
              <tr className="border-b border-nimbus-border">
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Sample</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary hidden md:table-cell">Class</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary hidden md:table-cell">Size</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary hidden lg:table-cell">Line Height</th>
              </tr>
            </thead>
            <tbody className="bg-nimbus-surface">
              {typeScale.map((type, index) => (
                <tr key={type.name} className={index !== typeScale.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}>
                  <td className="px-4 py-4">
                    <span 
                      className="text-nimbus-text-primary block"
                      style={{ 
                        fontSize: type.size, 
                        lineHeight: type.lineHeight,
                        fontWeight: type.weight as unknown as number
                      }}
                    >
                      {type.sample}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <code className="text-sm text-nimbus-teal font-mono">{type.name}</code>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <code className="text-sm text-nimbus-text-secondary font-mono">{type.size}</code>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <code className="text-sm text-nimbus-text-secondary font-mono">{type.lineHeight}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Font Weights</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="p-4 rounded-xl bg-nimbus-surface border border-nimbus-border text-center">
              <span 
                className="text-3xl text-nimbus-text-primary block mb-3"
                style={{ fontWeight: parseInt(weight.value) }}
              >
                Aa
              </span>
              <p className="text-sm font-medium text-nimbus-text-primary">{weight.name}</p>
              <code className="text-xs text-nimbus-text-tertiary font-mono">{weight.value}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Line Heights</h2>
        
        <div className="space-y-4">
          {[
            { name: 'Tight', value: '1.25', usage: 'Headings, display text' },
            { name: 'Snug', value: '1.375', usage: 'Subheadings' },
            { name: 'Normal', value: '1.5', usage: 'Body text (default)' },
            { name: 'Relaxed', value: '1.625', usage: 'Long-form content' },
            { name: 'Loose', value: '2', usage: 'Extra spacing' },
          ].map((lh) => (
            <div key={lh.name} className="flex items-center gap-4 p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
              <div className="w-24">
                <p className="font-medium text-nimbus-text-primary">{lh.name}</p>
                <code className="text-xs text-nimbus-teal font-mono">{lh.value}</code>
              </div>
              <div className="flex-1 text-sm text-nimbus-text-secondary" style={{ lineHeight: lh.value }}>
                <p>This is an example of text with {lh.name.toLowerCase()} line height. {lh.usage}.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="css" filename="typography.css" />
      </section>
    </DocLayout>
  );
}

