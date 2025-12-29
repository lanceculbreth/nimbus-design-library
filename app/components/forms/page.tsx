'use client';

import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import { Input, Textarea, Button } from '@/components/nimbus';
import { Search, Mail, Lock, Eye, User } from 'lucide-react';

const inputProps = [
  { name: 'label', type: 'string', description: 'Label text above the input' },
  { name: 'error', type: 'string', description: 'Error message to display' },
  { name: 'hint', type: 'string', description: 'Helper text below the input' },
  { name: 'leftIcon', type: 'ReactNode', description: 'Icon on the left side' },
  { name: 'rightIcon', type: 'ReactNode', description: 'Icon on the right side' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the input' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
];

const textareaProps = [
  { name: 'label', type: 'string', description: 'Label text above the textarea' },
  { name: 'error', type: 'string', description: 'Error message to display' },
  { name: 'hint', type: 'string', description: 'Helper text below the textarea' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
];

export default function FormsPage() {
  return (
    <DocLayout
      title="Form Elements"
      description="Form components for collecting user input. Built with accessibility and validation in mind."
      category="Components"
    >
      {/* Basic Input */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Input</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Text inputs allow users to enter and edit text.
        </p>
        
        <ComponentPreview
          title="Basic Input"
          code={`import { Input } from '@/components/nimbus';

<Input placeholder="Enter your email" />
<Input label="Email Address" placeholder="you@example.com" />
<Input label="With Hint" hint="We'll never share your email" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input placeholder="Enter your email" />
            <Input label="Email Address" placeholder="you@example.com" />
            <Input label="With Hint" placeholder="Enter something" hint="We'll never share your email" />
          </div>
        </ComponentPreview>
      </section>

      {/* Input Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Input Sizes</h2>
        
        <ComponentPreview
          title="Size Variants"
          code={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </ComponentPreview>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">With Icons</h2>
        
        <ComponentPreview
          title="Icon Inputs"
          code={`import { Search, Mail, Lock, Eye } from 'lucide-react';

<Input 
  leftIcon={<Search size={18} />} 
  placeholder="Search..." 
/>
<Input 
  label="Email" 
  leftIcon={<Mail size={18} />} 
  placeholder="you@example.com" 
/>
<Input 
  label="Password" 
  type="password"
  leftIcon={<Lock size={18} />}
  rightIcon={<Eye size={18} />}
  placeholder="••••••••" 
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input leftIcon={<Search size={18} />} placeholder="Search..." />
            <Input label="Email" leftIcon={<Mail size={18} />} placeholder="you@example.com" />
            <Input 
              label="Password" 
              type="password"
              leftIcon={<Lock size={18} />}
              rightIcon={<Eye size={18} />}
              placeholder="••••••••" 
            />
          </div>
        </ComponentPreview>
      </section>

      {/* States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">States</h2>
        
        <ComponentPreview
          title="Input States"
          code={`<Input label="Normal" placeholder="Normal input" />
<Input label="With Error" error="This field is required" placeholder="Invalid input" />
<Input label="Disabled" disabled placeholder="Cannot edit" />`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input label="Normal" placeholder="Normal input" />
            <Input label="With Error" error="This field is required" placeholder="Invalid input" />
            <Input label="Disabled" disabled placeholder="Cannot edit" />
          </div>
        </ComponentPreview>
      </section>

      {/* Textarea */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Textarea</h2>
        <p className="text-nimbus-text-secondary mb-6">
          For multi-line text input.
        </p>
        
        <ComponentPreview
          title="Textarea"
          code={`import { Textarea } from '@/components/nimbus';

<Textarea label="Message" placeholder="Tell us about yourself..." />
<Textarea 
  label="With Error" 
  error="Please provide more detail"
  placeholder="Too short..." 
/>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Textarea label="Message" placeholder="Tell us about yourself..." />
            <Textarea 
              label="With Error" 
              error="Please provide more detail"
              placeholder="Too short..." 
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Form Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Form Example</h2>
        
        <ComponentPreview
          title="Contact Form"
          code={`<form className="space-y-4">
  <Input 
    label="Full Name" 
    leftIcon={<User size={18} />}
    placeholder="John Smith" 
  />
  <Input 
    label="Email Address" 
    type="email"
    leftIcon={<Mail size={18} />}
    placeholder="john@example.com" 
  />
  <Textarea 
    label="Message" 
    placeholder="How can we help you?"
    hint="Minimum 50 characters"
  />
  <Button fullWidth>Send Message</Button>
</form>`}
        >
          <form className="w-full max-w-sm space-y-4">
            <Input 
              label="Full Name" 
              leftIcon={<User size={18} />}
              placeholder="John Smith" 
            />
            <Input 
              label="Email Address" 
              type="email"
              leftIcon={<Mail size={18} />}
              placeholder="john@example.com" 
            />
            <Textarea 
              label="Message" 
              placeholder="How can we help you?"
              hint="Minimum 50 characters"
            />
            <Button fullWidth>Send Message</Button>
          </form>
        </ComponentPreview>
      </section>

      {/* Props Tables */}
      <PropsTable props={inputProps} title="Input Props" />
      <PropsTable props={textareaProps} title="Textarea Props" />

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Accessibility</h2>
        
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <ul className="space-y-3 text-nimbus-text-secondary">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Labels are automatically associated with inputs using <code className="text-nimbus-teal">htmlFor</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Error messages are announced to screen readers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Focus states are clearly visible for keyboard navigation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Required fields should include <code className="text-nimbus-teal">aria-required</code></span>
            </li>
          </ul>
        </div>
      </section>
    </DocLayout>
  );
}

