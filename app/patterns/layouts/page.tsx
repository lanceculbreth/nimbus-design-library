import { DocLayout } from '@/components/layout';
import { CodeBlock } from '@/components/docs';
import { Card } from '@/components/nimbus';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const layoutPatterns = [
  {
    name: 'Single Column',
    description: 'Best for focused content like forms, articles, or step-by-step flows.',
    usage: 'Onboarding, checkout, long-form content',
    maxWidth: '640px',
  },
  {
    name: 'Two Column',
    description: 'Primary content with supporting sidebar. Great for dashboards.',
    usage: 'Dashboard, settings, documentation',
    maxWidth: '1200px',
  },
  {
    name: 'Card Grid',
    description: 'Equal-weight items displayed in a responsive grid.',
    usage: 'Product listings, feature cards, team members',
    maxWidth: '1400px',
  },
  {
    name: 'Split Screen',
    description: '50/50 layout for landing pages or authentication.',
    usage: 'Login, signup, landing hero sections',
    maxWidth: 'Full width',
  },
];

const singleColumnCode = `// Single column layout
<main className="max-w-2xl mx-auto px-6 py-12">
  <header className="mb-8">
    <h1 className="text-3xl font-bold">Page Title</h1>
    <p className="text-nimbus-text-secondary mt-2">
      Page description
    </p>
  </header>
  
  <section className="space-y-6">
    {/* Content */}
  </section>
</main>`;

const twoColumnCode = `// Two column layout with sidebar
<div className="flex min-h-screen">
  {/* Sidebar */}
  <aside className="w-64 border-r border-nimbus-border p-6">
    <nav className="space-y-2">
      {/* Navigation items */}
    </nav>
  </aside>
  
  {/* Main content */}
  <main className="flex-1 p-8">
    <div className="max-w-4xl">
      {/* Content */}
    </div>
  </main>
</div>`;

const cardGridCode = `// Responsive card grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id}>
      <CardTitle>{item.title}</CardTitle>
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</div>`;

export default function LayoutsPage() {
  return (
    <DocLayout
      title="Layouts"
      description="Common layout patterns for building consistent page structures across Nimbus Healthcare products."
      category="Patterns"
    >
      {/* Responsive Principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Responsive Breakpoints</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <Smartphone size={32} className="mx-auto mb-3 text-nimbus-teal" />
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Mobile</h3>
            <code className="text-sm text-nimbus-text-tertiary">{'< 768px'}</code>
            <p className="text-sm text-nimbus-text-secondary mt-2">
              Single column, stacked layouts
            </p>
          </Card>
          
          <Card className="text-center">
            <Tablet size={32} className="mx-auto mb-3 text-nimbus-orange" />
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Tablet</h3>
            <code className="text-sm text-nimbus-text-tertiary">768px - 1024px</code>
            <p className="text-sm text-nimbus-text-secondary mt-2">
              Two column, collapsible sidebars
            </p>
          </Card>
          
          <Card className="text-center">
            <Monitor size={32} className="mx-auto mb-3 text-violet-400" />
            <h3 className="font-semibold text-nimbus-text-primary mb-2">Desktop</h3>
            <code className="text-sm text-nimbus-text-tertiary">{'>= 1024px'}</code>
            <p className="text-sm text-nimbus-text-secondary mt-2">
              Full layouts, persistent navigation
            </p>
          </Card>
        </div>
      </section>

      {/* Layout Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Layout Patterns</h2>
        
        <div className="space-y-6">
          {layoutPatterns.map((pattern) => (
            <Card key={pattern.name}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-nimbus-text-primary">{pattern.name}</h3>
                  <p className="text-nimbus-text-secondary mt-1">{pattern.description}</p>
                  <p className="text-sm text-nimbus-text-tertiary mt-2">
                    <strong className="text-nimbus-text-secondary">Use for: </strong>
                    {pattern.usage}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-nimbus-text-tertiary">Max width</span>
                  <code className="block text-nimbus-teal font-mono">{pattern.maxWidth}</code>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Single Column */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Single Column Layout</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Ideal for focused tasks where user attention should be on one primary content area.
        </p>
        
        <div className="mb-6 p-6 rounded-xl bg-nimbus-surface-elevated border border-nimbus-border">
          <div className="max-w-md mx-auto">
            <div className="h-8 w-48 bg-nimbus-surface rounded mb-2" />
            <div className="h-4 w-64 bg-nimbus-surface rounded mb-6" />
            <div className="space-y-3">
              <div className="h-12 bg-nimbus-surface rounded" />
              <div className="h-12 bg-nimbus-surface rounded" />
              <div className="h-24 bg-nimbus-surface rounded" />
              <div className="h-12 bg-nimbus-teal/20 rounded" />
            </div>
          </div>
        </div>
        
        <CodeBlock code={singleColumnCode} language="tsx" filename="SingleColumnLayout.tsx" />
      </section>

      {/* Two Column */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Two Column Layout</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Primary content with a supporting sidebar. The sidebar collapses on mobile.
        </p>
        
        <div className="mb-6 p-6 rounded-xl bg-nimbus-surface-elevated border border-nimbus-border">
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0">
              <div className="h-4 w-16 bg-nimbus-surface rounded mb-3" />
              <div className="space-y-2">
                <div className="h-6 bg-nimbus-teal/20 rounded" />
                <div className="h-6 bg-nimbus-surface rounded" />
                <div className="h-6 bg-nimbus-surface rounded" />
                <div className="h-6 bg-nimbus-surface rounded" />
              </div>
            </div>
            <div className="flex-1 border-l border-nimbus-border pl-4">
              <div className="h-6 w-48 bg-nimbus-surface rounded mb-4" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 bg-nimbus-surface rounded" />
                <div className="h-24 bg-nimbus-surface rounded" />
                <div className="h-24 bg-nimbus-surface rounded" />
                <div className="h-24 bg-nimbus-surface rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <CodeBlock code={twoColumnCode} language="tsx" filename="TwoColumnLayout.tsx" />
      </section>

      {/* Card Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Card Grid Layout</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Responsive grid that adapts from 1 to 3+ columns based on viewport.
        </p>
        
        <div className="mb-6 p-6 rounded-xl bg-nimbus-surface-elevated border border-nimbus-border">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-3 bg-nimbus-surface rounded-lg">
                <div className="h-12 bg-nimbus-surface-hover rounded mb-2" />
                <div className="h-3 w-16 bg-nimbus-surface-hover rounded mb-1" />
                <div className="h-3 w-24 bg-nimbus-surface-hover rounded" />
              </div>
            ))}
          </div>
        </div>
        
        <CodeBlock code={cardGridCode} language="tsx" filename="CardGridLayout.tsx" />
      </section>

      {/* Spacing Guidelines */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Layout Spacing</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Page Margins</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex justify-between">
                <span>Mobile</span>
                <code className="text-nimbus-teal">px-4 (16px)</code>
              </li>
              <li className="flex justify-between">
                <span>Tablet</span>
                <code className="text-nimbus-teal">px-6 (24px)</code>
              </li>
              <li className="flex justify-between">
                <span>Desktop</span>
                <code className="text-nimbus-teal">px-8 (32px)</code>
              </li>
            </ul>
          </Card>
          
          <Card>
            <h3 className="font-semibold text-nimbus-text-primary mb-3">Section Spacing</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li className="flex justify-between">
                <span>Between sections</span>
                <code className="text-nimbus-teal">py-12 (48px)</code>
              </li>
              <li className="flex justify-between">
                <span>Between components</span>
                <code className="text-nimbus-teal">gap-6 (24px)</code>
              </li>
              <li className="flex justify-between">
                <span>Within cards</span>
                <code className="text-nimbus-teal">p-6 (24px)</code>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Mobile-First Principles */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Mobile-First Principles</h2>
        
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <ul className="space-y-4 text-nimbus-text-secondary">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal text-sm font-semibold flex-shrink-0">1</span>
              <div>
                <strong className="text-nimbus-text-primary">Design for mobile first</strong>
                <p className="text-sm mt-1">Start with the smallest screen and progressively enhance for larger viewports.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal text-sm font-semibold flex-shrink-0">2</span>
              <div>
                <strong className="text-nimbus-text-primary">Touch-friendly targets</strong>
                <p className="text-sm mt-1">Minimum 44x44px touch targets for interactive elements.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal text-sm font-semibold flex-shrink-0">3</span>
              <div>
                <strong className="text-nimbus-text-primary">Content priority</strong>
                <p className="text-sm mt-1">Most important content and actions should be immediately visible.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-nimbus-teal/10 flex items-center justify-center text-nimbus-teal text-sm font-semibold flex-shrink-0">4</span>
              <div>
                <strong className="text-nimbus-text-primary">Avoid horizontal scrolling</strong>
                <p className="text-sm mt-1">All content should fit within the viewport width.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </DocLayout>
  );
}

