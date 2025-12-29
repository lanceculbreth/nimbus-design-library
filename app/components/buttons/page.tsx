'use client';

import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import { Button } from '@/components/nimbus';
import { ArrowRight, Download, Loader2, Plus, Heart } from 'lucide-react';

const buttonProps = [
  { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'", default: "'primary'", description: 'Visual style variant of the button' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the button' },
  { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows loading spinner and disables button' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon to display before the button text' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon to display after the button text' },
  { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Makes button take full width of container' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Button content/label' },
];

export default function ButtonsPage() {
  return (
    <DocLayout
      title="Buttons"
      description="Buttons trigger actions and events. Use the right variant to communicate importance and hierarchy."
      category="Components"
    >
      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Basic Usage</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Import the Button component and use it with the desired props.
        </p>
        
        <ComponentPreview
          title="Basic Button"
          code={`import { Button } from '@/components/nimbus';

<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
        >
          <Button>Click me</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </ComponentPreview>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Variants</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Choose the appropriate variant based on the action's importance.
        </p>
        
        <ComponentPreview
          title="All Variants"
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </ComponentPreview>

        <div className="mt-6 space-y-3">
          <div className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h4 className="font-medium text-nimbus-text-primary mb-1">Primary</h4>
            <p className="text-sm text-nimbus-text-secondary">Main calls to action. Use sparingly—one primary action per view.</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h4 className="font-medium text-nimbus-text-primary mb-1">Secondary</h4>
            <p className="text-sm text-nimbus-text-secondary">Important but not primary. Good for secondary CTAs or promotions.</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h4 className="font-medium text-nimbus-text-primary mb-1">Outline</h4>
            <p className="text-sm text-nimbus-text-secondary">Medium emphasis. Often paired with a primary button.</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h4 className="font-medium text-nimbus-text-primary mb-1">Ghost</h4>
            <p className="text-sm text-nimbus-text-secondary">Lowest emphasis. For tertiary actions or navigation.</p>
          </div>
          <div className="p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
            <h4 className="font-medium text-nimbus-text-primary mb-1">Danger</h4>
            <p className="text-sm text-nimbus-text-secondary">Destructive actions like delete or cancel subscription.</p>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Sizes</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Three sizes available for different contexts.
        </p>
        
        <ComponentPreview
          title="Button Sizes"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </ComponentPreview>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">With Icons</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Add icons to enhance meaning and visual interest.
        </p>
        
        <ComponentPreview
          title="Icon Buttons"
          code={`import { ArrowRight, Download, Plus } from 'lucide-react';

<Button leftIcon={<Plus size={18} />}>Add Item</Button>
<Button rightIcon={<ArrowRight size={18} />}>Continue</Button>
<Button variant="outline" leftIcon={<Download size={18} />}>
  Download
</Button>`}
        >
          <Button leftIcon={<Plus size={18} />}>Add Item</Button>
          <Button rightIcon={<ArrowRight size={18} />}>Continue</Button>
          <Button variant="outline" leftIcon={<Download size={18} />}>Download</Button>
        </ComponentPreview>
      </section>

      {/* States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">States</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Loading and disabled states for user feedback.
        </p>
        
        <ComponentPreview
          title="Button States"
          code={`<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled Outline</Button>`}
        >
          <Button isLoading>Loading...</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </ComponentPreview>
      </section>

      {/* Full Width */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Full Width</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Useful for mobile views or contained layouts.
        </p>
        
        <ComponentPreview
          title="Full Width Button"
          code={`<Button fullWidth>Full Width Button</Button>
<Button fullWidth variant="outline">Full Width Outline</Button>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Button fullWidth>Full Width Button</Button>
            <Button fullWidth variant="outline">Full Width Outline</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Props Table */}
      <PropsTable props={buttonProps} />

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-3">Do</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use verb phrases for labels ("Submit", "Download")</li>
              <li>• Limit primary buttons to one per view</li>
              <li>• Show loading state for async actions</li>
              <li>• Use icons to reinforce meaning</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-3">Don't</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use vague labels like "Click here"</li>
              <li>• Overuse primary buttons</li>
              <li>• Disable without explanation</li>
              <li>• Use icons that contradict the label</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

