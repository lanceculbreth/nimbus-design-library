'use client';

import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import { Badge, StatusBadge, NotificationBadge } from '@/components/nimbus';
import { Bell, MessageSquare } from 'lucide-react';

const badgeProps = [
  { name: 'variant', type: "'default' | 'success' | 'warning' | 'error' | 'info' | 'teal' | 'orange'", default: "'default'", description: 'Color variant' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Badge size' },
  { name: 'dot', type: 'boolean', default: 'false', description: 'Show status dot before text' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Badge content' },
];

const statusBadgeProps = [
  { name: 'status', type: "'active' | 'pending' | 'completed' | 'cancelled' | 'new'", required: true, description: 'Predefined status type' },
];

const notificationBadgeProps = [
  { name: 'count', type: 'number', required: true, description: 'Number to display' },
  { name: 'max', type: 'number', default: '99', description: 'Maximum before showing "+"' },
];

export default function BadgesPage() {
  return (
    <DocLayout
      title="Badges"
      description="Badges highlight status, categories, or counts. They provide quick visual information at a glance."
      category="Components"
    >
      {/* Basic Badges */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Basic Badges</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Simple badges for labeling and categorization.
        </p>
        
        <ComponentPreview
          title="Badge Variants"
          code={`import { Badge } from '@/components/nimbus';

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="teal">Teal</Badge>
<Badge variant="orange">Orange</Badge>`}
        >
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="teal">Teal</Badge>
          <Badge variant="orange">Orange</Badge>
        </ComponentPreview>
      </section>

      {/* With Dot */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">With Status Dot</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Add a dot indicator for status emphasis.
        </p>
        
        <ComponentPreview
          title="Dot Badges"
          code={`<Badge dot variant="success">Active</Badge>
<Badge dot variant="warning">Pending</Badge>
<Badge dot variant="error">Offline</Badge>
<Badge dot variant="teal">Connected</Badge>`}
        >
          <Badge dot variant="success">Active</Badge>
          <Badge dot variant="warning">Pending</Badge>
          <Badge dot variant="error">Offline</Badge>
          <Badge dot variant="teal">Connected</Badge>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Sizes</h2>
        
        <ComponentPreview
          title="Badge Sizes"
          code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
        >
          <Badge size="sm" variant="teal">Small</Badge>
          <Badge size="md" variant="teal">Medium</Badge>
          <Badge size="lg" variant="teal">Large</Badge>
        </ComponentPreview>
      </section>

      {/* Status Badge */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Status Badge</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Pre-configured status badges for common states.
        </p>
        
        <ComponentPreview
          title="Status Badges"
          code={`import { StatusBadge } from '@/components/nimbus';

<StatusBadge status="active" />
<StatusBadge status="pending" />
<StatusBadge status="completed" />
<StatusBadge status="cancelled" />
<StatusBadge status="new" />`}
        >
          <StatusBadge status="active" />
          <StatusBadge status="pending" />
          <StatusBadge status="completed" />
          <StatusBadge status="cancelled" />
          <StatusBadge status="new" />
        </ComponentPreview>
      </section>

      {/* Notification Badge */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Notification Badge</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Display counts for notifications, messages, or items.
        </p>
        
        <ComponentPreview
          title="Notification Badges"
          code={`import { NotificationBadge } from '@/components/nimbus';
import { Bell, MessageSquare } from 'lucide-react';

<div className="relative inline-flex">
  <Bell size={24} />
  <NotificationBadge count={5} className="absolute -top-2 -right-2" />
</div>

<NotificationBadge count={12} />
<NotificationBadge count={99} />
<NotificationBadge count={150} max={99} /> // Shows "99+"`}
        >
          <div className="flex items-center gap-8">
            <div className="relative inline-flex">
              <Bell size={24} className="text-nimbus-text-secondary" />
              <NotificationBadge count={5} className="absolute -top-2 -right-2" />
            </div>
            
            <div className="relative inline-flex">
              <MessageSquare size={24} className="text-nimbus-text-secondary" />
              <NotificationBadge count={12} className="absolute -top-2 -right-2" />
            </div>
            
            <NotificationBadge count={99} />
            <NotificationBadge count={150} max={99} />
          </div>
        </ComponentPreview>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Common Use Cases</h2>
        
        <ComponentPreview
          title="Real-World Examples"
          code={`// Order status
<div className="flex items-center gap-3">
  <span>Order #12345</span>
  <StatusBadge status="pending" />
</div>

// New feature label
<div className="flex items-center gap-2">
  <span>Aura™ AI Assistant</span>
  <Badge variant="orange">New</Badge>
</div>

// Program tag
<Badge variant="teal">WeightWise®</Badge>
<Badge variant="info">NimCore®</Badge>`}
        >
          <div className="w-full space-y-6">
            {/* Order status */}
            <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-nimbus-text-primary font-medium">Order #12345</span>
                  <span className="text-nimbus-text-tertiary text-sm ml-2">Dec 15, 2024</span>
                </div>
                <StatusBadge status="pending" />
              </div>
            </div>
            
            {/* Feature labels */}
            <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-nimbus-text-primary font-medium">Aura™ AI Assistant</span>
                <Badge variant="orange" size="sm">New</Badge>
              </div>
              <p className="text-nimbus-text-secondary text-sm">Your personal AI health guide</p>
            </div>
            
            {/* Program tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="teal">WeightWise®</Badge>
              <Badge variant="info">NimCore® Men</Badge>
              <Badge variant="default">Hair</Badge>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Props Tables */}
      <PropsTable props={badgeProps} title="Badge Props" />
      <PropsTable props={statusBadgeProps} title="StatusBadge Props" />
      <PropsTable props={notificationBadgeProps} title="NotificationBadge Props" />

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-3">Do</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use consistent colors for similar meanings</li>
              <li>• Keep badge text short (1-2 words)</li>
              <li>• Use status badges for state indicators</li>
              <li>• Position notification badges consistently</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-3">Don't</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Use too many badges in one area</li>
              <li>• Put long text in badges</li>
              <li>• Use random colors without meaning</li>
              <li>• Hide important info behind badges only</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

