import { DocLayout } from '@/components/layout';
import { CodeBlock } from '@/components/docs';

const shadows = [
  { 
    name: 'none', 
    variable: '--shadow-none',
    value: 'none',
    usage: 'Base state, flat elements'
  },
  { 
    name: 'sm', 
    variable: '--shadow-sm',
    value: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    usage: 'Subtle depth, small elements'
  },
  { 
    name: 'md', 
    variable: '--shadow-md',
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    usage: 'Cards, dropdowns'
  },
  { 
    name: 'lg', 
    variable: '--shadow-lg',
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
    usage: 'Modals, popovers'
  },
  { 
    name: 'xl', 
    variable: '--shadow-xl',
    value: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
    usage: 'High-elevation elements'
  },
  { 
    name: '2xl', 
    variable: '--shadow-2xl',
    value: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    usage: 'Maximum elevation'
  },
];

const glowEffects = [
  {
    name: 'Teal Glow',
    variable: '--glow-teal',
    value: '0 0 20px rgba(0, 166, 156, 0.3)',
    color: 'nimbus-teal',
  },
  {
    name: 'Orange Glow',
    variable: '--glow-orange',
    value: '0 0 20px rgba(245, 166, 35, 0.3)',
    color: 'nimbus-orange',
  },
];

const zIndexScale = [
  { name: 'dropdown', value: '100', usage: 'Dropdowns, selects' },
  { name: 'sticky', value: '200', usage: 'Sticky headers' },
  { name: 'fixed', value: '300', usage: 'Fixed navigation' },
  { name: 'modal-backdrop', value: '400', usage: 'Modal overlay' },
  { name: 'modal', value: '500', usage: 'Modal content' },
  { name: 'popover', value: '600', usage: 'Popovers, tooltips' },
  { name: 'tooltip', value: '700', usage: 'Tooltips (highest)' },
];

const usageCode = `/* Shadow usage */
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.modal {
  box-shadow: var(--shadow-2xl);
}

/* Glow effects for interactive elements */
.button-primary:focus {
  box-shadow: var(--glow-teal);
}

/* Z-index layering */
.dropdown {
  z-index: var(--z-dropdown);
}

.modal-overlay {
  z-index: var(--z-modal-backdrop);
}

.modal-content {
  z-index: var(--z-modal);
}`;

export default function ElevationPage() {
  return (
    <DocLayout
      title="Elevation"
      description="Elevation creates depth and hierarchy through shadows, glow effects, and z-index layering."
      category="Design"
    >
      {/* Overview */}
      <section className="mb-16">
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <h2 className="text-lg font-semibold text-nimbus-text-primary mb-3">Elevation Philosophy</h2>
          <p className="text-nimbus-text-secondary">
            On our dark backgrounds, elevation is subtle. We use soft shadows with high opacity 
            to create depth without harsh contrasts. Glow effects add emphasis to interactive 
            elements in our signature teal.
          </p>
        </div>
      </section>

      {/* Shadow Scale */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Shadows</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Shadows indicate elevation and help users understand UI layering.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div 
                className="h-24 mb-4 rounded-xl bg-nimbus-surface border border-nimbus-border flex items-center justify-center"
                style={{ boxShadow: shadow.value }}
              >
                <span className="text-sm text-nimbus-text-secondary">{shadow.name}</span>
              </div>
              <code className="text-xs text-nimbus-teal font-mono block mb-1">{shadow.variable}</code>
              <p className="text-xs text-nimbus-text-tertiary">{shadow.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Glow Effects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Glow Effects</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Glow effects add emphasis to interactive elements and create visual interest.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {glowEffects.map((glow) => (
            <div key={glow.name} className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
              <div 
                className="h-20 mb-4 rounded-xl bg-nimbus-surface-elevated flex items-center justify-center"
                style={{ boxShadow: glow.value }}
              >
                <div 
                  className={`w-16 h-16 rounded-xl bg-${glow.color}`}
                  style={{ 
                    backgroundColor: glow.color === 'nimbus-teal' ? '#00A69C' : '#F5A623',
                    boxShadow: glow.value 
                  }}
                />
              </div>
              <h3 className="font-semibold text-nimbus-text-primary">{glow.name}</h3>
              <code className="text-xs text-nimbus-text-tertiary font-mono">{glow.variable}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation in Practice */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Elevation in Practice</h2>
        
        <div className="relative h-80 rounded-xl bg-nimbus-black border border-nimbus-border p-6 overflow-hidden">
          {/* Base layer */}
          <div className="absolute inset-x-6 bottom-6 h-20 rounded-xl bg-nimbus-surface border border-nimbus-border flex items-center justify-center">
            <span className="text-sm text-nimbus-text-tertiary">Base Layer (z-0)</span>
          </div>
          
          {/* Card layer */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-20 w-64 h-32 rounded-xl bg-nimbus-surface border border-nimbus-border flex items-center justify-center"
            style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}
          >
            <span className="text-sm text-nimbus-text-secondary">Card (z-10)</span>
          </div>
          
          {/* Dropdown layer */}
          <div 
            className="absolute right-12 top-12 w-40 rounded-xl bg-nimbus-surface-elevated border border-nimbus-border p-3"
            style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4)' }}
          >
            <span className="text-xs text-nimbus-text-secondary block mb-2">Dropdown (z-100)</span>
            <div className="space-y-1">
              <div className="h-6 rounded bg-nimbus-surface-hover" />
              <div className="h-6 rounded bg-nimbus-surface-hover" />
            </div>
          </div>
          
          {/* Tooltip */}
          <div 
            className="absolute left-12 top-8 px-3 py-1.5 rounded-lg bg-nimbus-text-primary"
            style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}
          >
            <span className="text-xs text-nimbus-black font-medium">Tooltip (z-700)</span>
          </div>
        </div>
      </section>

      {/* Z-Index Scale */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Z-Index Scale</h2>
        <p className="text-nimbus-text-secondary mb-6">
          A consistent z-index scale prevents stacking issues and ensures predictable layering.
        </p>
        
        <div className="rounded-xl border border-nimbus-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-nimbus-surface-elevated">
              <tr className="border-b border-nimbus-border">
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Name</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Value</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Usage</th>
              </tr>
            </thead>
            <tbody className="bg-nimbus-surface">
              {zIndexScale.map((z, index) => (
                <tr key={z.name} className={index !== zIndexScale.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-teal font-mono">--z-{z.name}</code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-sm text-nimbus-orange font-mono">{z.value}</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-nimbus-text-secondary">
                    {z.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage</h2>
        <CodeBlock code={usageCode} language="css" filename="elevation.css" />
      </section>
    </DocLayout>
  );
}

