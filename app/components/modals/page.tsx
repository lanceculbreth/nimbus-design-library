'use client';

import { useState } from 'react';
import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import { Modal, ConfirmDialog, Button, Input } from '@/components/nimbus';
import { AlertTriangle } from 'lucide-react';

const modalProps = [
  { name: 'isOpen', type: 'boolean', required: true, description: 'Controls modal visibility' },
  { name: 'onClose', type: '() => void', required: true, description: 'Called when modal should close' },
  { name: 'title', type: 'string', description: 'Modal title in the header' },
  { name: 'description', type: 'string', description: 'Description text below the title' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | 'full'", default: "'md'", description: 'Width of the modal' },
  { name: 'showCloseButton', type: 'boolean', default: 'true', description: 'Show X button in top right' },
  { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', description: 'Close when clicking backdrop' },
  { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Close on Escape key' },
  { name: 'footer', type: 'ReactNode', description: 'Content for the modal footer' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Modal body content' },
];

const confirmDialogProps = [
  { name: 'isOpen', type: 'boolean', required: true, description: 'Controls dialog visibility' },
  { name: 'onClose', type: '() => void', required: true, description: 'Called when dialog should close' },
  { name: 'onConfirm', type: '() => void', required: true, description: 'Called when user confirms' },
  { name: 'title', type: 'string', required: true, description: 'Dialog title' },
  { name: 'description', type: 'string', required: true, description: 'Confirmation message' },
  { name: 'confirmText', type: 'string', default: "'Confirm'", description: 'Confirm button text' },
  { name: 'cancelText', type: 'string', default: "'Cancel'", description: 'Cancel button text' },
  { name: 'variant', type: "'default' | 'danger'", default: "'default'", description: 'Style variant for destructive actions' },
  { name: 'isLoading', type: 'boolean', default: 'false', description: 'Show loading state on confirm button' },
];

export default function ModalsPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);

  return (
    <DocLayout
      title="Modals"
      description="Modals display content that requires user attention or interaction. Use them sparingly for important actions."
      category="Components"
    >
      {/* Basic Modal */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Basic Modal</h2>
        <p className="text-nimbus-text-secondary mb-6">
          A simple modal with title, description, and content.
        </p>
        
        <ComponentPreview
          title="Basic Modal"
          code={`import { Modal, Button } from '@/components/nimbus';

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Welcome to Nimbus"
  description="Your healthcare journey starts here"
>
  <p>Modal content goes here...</p>
</Modal>`}
        >
          <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
          
          <Modal
            isOpen={basicOpen}
            onClose={() => setBasicOpen(false)}
            title="Welcome to Nimbus"
            description="Your healthcare journey starts here"
          >
            <p className="text-nimbus-text-secondary">
              This is a basic modal with a title and description. You can put any content here, 
              including forms, images, or complex layouts.
            </p>
          </Modal>
        </ComponentPreview>
      </section>

      {/* Modal with Footer */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Modal with Footer</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Add action buttons in the footer for confirmations or forms.
        </p>
        
        <ComponentPreview
          title="Modal with Form"
          code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Schedule Consultation"
  description="Book a time with your care team"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleSubmit}>
        Book Appointment
      </Button>
    </>
  }
>
  <Input label="Preferred Date" type="date" />
  <Textarea label="Notes" placeholder="Any concerns?" />
</Modal>`}
        >
          <Button onClick={() => setFormOpen(true)}>Schedule Consultation</Button>
          
          <Modal
            isOpen={formOpen}
            onClose={() => setFormOpen(false)}
            title="Schedule Consultation"
            description="Book a time with your care team"
            footer={
              <>
                <Button variant="ghost" onClick={() => setFormOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setFormOpen(false)}>
                  Book Appointment
                </Button>
              </>
            }
          >
            <div className="space-y-4">
              <Input label="Preferred Date" type="date" />
              <Input label="Preferred Time" type="time" />
              <Input label="Phone Number" type="tel" placeholder="(555) 123-4567" />
            </div>
          </Modal>
        </ComponentPreview>
      </section>

      {/* Confirm Dialog */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Confirm Dialog</h2>
        <p className="text-nimbus-text-secondary mb-6">
          A pre-built confirmation dialog for common use cases.
        </p>
        
        <ComponentPreview
          title="Confirmation Dialog"
          code={`import { ConfirmDialog, Button } from '@/components/nimbus';

<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  title="Accept Treatment Plan"
  description="By accepting, you agree to the WeightWise® program terms."
  confirmText="Accept Plan"
  cancelText="Review Again"
/>`}
        >
          <Button onClick={() => setConfirmOpen(true)}>Accept Plan</Button>
          
          <ConfirmDialog
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            onConfirm={() => setConfirmOpen(false)}
            title="Accept Treatment Plan"
            description="By accepting, you agree to the WeightWise® program terms and authorize us to process your order."
            confirmText="Accept Plan"
            cancelText="Review Again"
          />
        </ComponentPreview>
      </section>

      {/* Danger Variant */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Danger Confirmation</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Use the danger variant for destructive actions like cancellations or deletions.
        </p>
        
        <ComponentPreview
          title="Danger Dialog"
          code={`<ConfirmDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleCancel}
  title="Cancel Subscription"
  description="This will stop all future shipments. You can restart anytime."
  confirmText="Cancel Subscription"
  cancelText="Keep Subscription"
  variant="danger"
/>`}
        >
          <Button variant="danger" onClick={() => setDangerOpen(true)}>
            Cancel Subscription
          </Button>
          
          <ConfirmDialog
            isOpen={dangerOpen}
            onClose={() => setDangerOpen(false)}
            onConfirm={() => setDangerOpen(false)}
            title="Cancel Subscription"
            description="This will stop all future shipments and you will lose access to member pricing. You can restart your subscription anytime."
            confirmText="Cancel Subscription"
            cancelText="Keep Subscription"
            variant="danger"
          />
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Modal Sizes</h2>
        
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <div className="grid md:grid-cols-5 gap-4">
            {['sm', 'md', 'lg', 'xl', 'full'].map((size) => (
              <div key={size} className="text-center">
                <div className="font-medium text-nimbus-text-primary mb-1">{size}</div>
                <code className="text-xs text-nimbus-text-tertiary font-mono">
                  {size === 'sm' && 'max-w-sm'}
                  {size === 'md' && 'max-w-md'}
                  {size === 'lg' && 'max-w-lg'}
                  {size === 'xl' && 'max-w-xl'}
                  {size === 'full' && 'max-w-4xl'}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Props Tables */}
      <PropsTable props={modalProps} title="Modal Props" />
      <PropsTable props={confirmDialogProps} title="ConfirmDialog Props" />

      {/* Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-3">Do</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use modals for important, focused tasks</li>
              <li>• Provide clear titles and actions</li>
              <li>• Allow closing via overlay click and Escape</li>
              <li>• Keep content concise and scannable</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-3">Don't</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use modals for simple confirmations</li>
              <li>• Stack multiple modals</li>
              <li>• Put long forms in modals</li>
              <li>• Force users to complete without escape</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

