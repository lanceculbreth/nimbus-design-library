'use client';

import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import Tabs, { TabsList, TabsTrigger, TabsContent } from '@/components/nimbus/Tabs';
import { Settings, User, CreditCard, Bell } from 'lucide-react';

const tabsProps = [
  { name: 'defaultValue', type: 'string', required: true, description: 'The value of the tab that should be active by default' },
  { name: 'onChange', type: '(value: string) => void', description: 'Callback when the active tab changes' },
  { name: 'children', type: 'ReactNode', required: true, description: 'TabsList and TabsContent components' },
];

const tabsTriggerProps = [
  { name: 'value', type: 'string', required: true, description: 'Unique identifier for this tab' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the tab trigger' },
  { name: 'variant', type: "'default' | 'pills' | 'underline'", default: "'default'", description: 'Visual style variant' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Tab trigger content' },
];

export default function NavigationPage() {
  return (
    <DocLayout
      title="Navigation"
      description="Navigation components help users move through your application. Tabs organize content into sections."
      category="Components"
    >
      {/* Basic Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Tabs</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Tabs organize content into multiple sections and allow users to navigate between them.
        </p>
        
        <ComponentPreview
          title="Basic Tabs"
          code={`import Tabs, { TabsList, TabsTrigger, TabsContent } from '@/components/nimbus/Tabs';

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings content
  </TabsContent>
  <TabsContent value="password">
    Password settings content
  </TabsContent>
  <TabsContent value="notifications">
    Notification preferences content
  </TabsContent>
</Tabs>`}
        >
          <div className="w-full max-w-lg">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Manage your account settings and preferences.</p>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Update your password and security settings.</p>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Configure how you receive notifications.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ComponentPreview>
      </section>

      {/* Pill Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Pill Tabs</h2>
        
        <ComponentPreview
          title="Pill Style"
          code={`<Tabs defaultValue="all">
  <TabsList variant="pills">
    <TabsTrigger value="all" variant="pills">All</TabsTrigger>
    <TabsTrigger value="active" variant="pills">Active</TabsTrigger>
    <TabsTrigger value="completed" variant="pills">Completed</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
        >
          <div className="w-full max-w-lg">
            <Tabs defaultValue="all">
              <TabsList variant="pills">
                <TabsTrigger value="all" variant="pills">All Orders</TabsTrigger>
                <TabsTrigger value="active" variant="pills">Active</TabsTrigger>
                <TabsTrigger value="completed" variant="pills">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Showing all orders</p>
                </div>
              </TabsContent>
              <TabsContent value="active">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Showing active orders</p>
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Showing completed orders</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ComponentPreview>
      </section>

      {/* Underline Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Underline Tabs</h2>
        
        <ComponentPreview
          title="Underline Style"
          code={`<Tabs defaultValue="overview">
  <TabsList variant="underline">
    <TabsTrigger value="overview" variant="underline">Overview</TabsTrigger>
    <TabsTrigger value="analytics" variant="underline">Analytics</TabsTrigger>
    <TabsTrigger value="reports" variant="underline">Reports</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
        >
          <div className="w-full max-w-lg">
            <Tabs defaultValue="overview">
              <TabsList variant="underline">
                <TabsTrigger value="overview" variant="underline">Overview</TabsTrigger>
                <TabsTrigger value="analytics" variant="underline">Analytics</TabsTrigger>
                <TabsTrigger value="reports" variant="underline">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="p-4">
                  <p className="text-nimbus-text-secondary">Dashboard overview content</p>
                </div>
              </TabsContent>
              <TabsContent value="analytics">
                <div className="p-4">
                  <p className="text-nimbus-text-secondary">Analytics and metrics</p>
                </div>
              </TabsContent>
              <TabsContent value="reports">
                <div className="p-4">
                  <p className="text-nimbus-text-secondary">Generated reports</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ComponentPreview>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">With Icons</h2>
        
        <ComponentPreview
          title="Icon Tabs"
          code={`import { Settings, User, CreditCard, Bell } from 'lucide-react';

<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">
      <User size={16} /> Profile
    </TabsTrigger>
    <TabsTrigger value="billing">
      <CreditCard size={16} /> Billing
    </TabsTrigger>
    <TabsTrigger value="notifications">
      <Bell size={16} /> Notifications
    </TabsTrigger>
    <TabsTrigger value="settings">
      <Settings size={16} /> Settings
    </TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
        >
          <div className="w-full max-w-xl">
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">
                  <span className="flex items-center gap-2"><User size={16} /> Profile</span>
                </TabsTrigger>
                <TabsTrigger value="billing">
                  <span className="flex items-center gap-2"><CreditCard size={16} /> Billing</span>
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <span className="flex items-center gap-2"><Bell size={16} /> Alerts</span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <span className="flex items-center gap-2"><Settings size={16} /> Settings</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Edit your profile information</p>
                </div>
              </TabsContent>
              <TabsContent value="billing">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Manage billing and payments</p>
                </div>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Configure alert preferences</p>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="p-4 rounded-lg bg-nimbus-surface-elevated border border-nimbus-border-subtle">
                  <p className="text-nimbus-text-secondary">Application settings</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ComponentPreview>
      </section>

      {/* Props Tables */}
      <PropsTable props={tabsProps} title="Tabs Props" />
      <PropsTable props={tabsTriggerProps} title="TabsTrigger Props" />

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Accessibility</h2>
        
        <div className="p-6 rounded-xl bg-nimbus-surface border border-nimbus-border">
          <ul className="space-y-3 text-nimbus-text-secondary">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Uses proper ARIA roles: <code className="text-nimbus-teal">tablist</code>, <code className="text-nimbus-teal">tab</code>, <code className="text-nimbus-teal">tabpanel</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Arrow keys navigate between tabs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Tab panels are associated with their triggers via <code className="text-nimbus-teal">aria-controls</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-nimbus-teal mt-2 flex-shrink-0" />
              <span>Active state indicated with <code className="text-nimbus-teal">aria-selected</code></span>
            </li>
          </ul>
        </div>
      </section>
    </DocLayout>
  );
}

