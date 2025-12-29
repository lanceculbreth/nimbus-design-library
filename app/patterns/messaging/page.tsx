import { DocLayout } from '@/components/layout';
import { Card, Badge } from '@/components/nimbus';
import { Check, X, AlertTriangle, Info, Bell, Mail, MessageSquare } from 'lucide-react';

const emailTemplates = [
  {
    type: 'Welcome',
    subject: 'Welcome to Nimbus Healthcare',
    preview: 'Your healthcare journey starts here. We\'re excited to have you...',
    timing: 'Immediately after signup',
  },
  {
    type: 'Order Confirmation',
    subject: 'Your Nimbus order has been received',
    preview: 'Order #12345 confirmed. We\'ll process your medication...',
    timing: 'After payment processed',
  },
  {
    type: 'Shipment Update',
    subject: 'Your medication is on the way',
    preview: 'Great news! Your order has shipped and will arrive...',
    timing: 'When shipped',
  },
  {
    type: 'Refill Reminder',
    subject: 'Time to complete your refill request',
    preview: 'Your next dose is coming up. Complete your refill intake...',
    timing: '7 days before refill due',
  },
  {
    type: 'Check-in',
    subject: 'Month 1 check-in – How are you feeling?',
    preview: 'It\'s been 30 days since starting your program. Let us know...',
    timing: '30 days after start',
  },
];

const notificationTypes = [
  {
    icon: <Check className="text-nimbus-success" size={20} />,
    type: 'Success',
    color: 'bg-nimbus-success/10 border-nimbus-success/20',
    example: 'Your plan has been accepted successfully.',
    usage: 'Completed actions, successful submissions',
  },
  {
    icon: <AlertTriangle className="text-nimbus-warning" size={20} />,
    type: 'Warning',
    color: 'bg-nimbus-warning/10 border-nimbus-warning/20',
    example: 'Your refill request is due in 3 days.',
    usage: 'Time-sensitive reminders, important notices',
  },
  {
    icon: <X className="text-nimbus-error" size={20} />,
    type: 'Error',
    color: 'bg-nimbus-error/10 border-nimbus-error/20',
    example: 'Payment failed. Please update your card.',
    usage: 'Failed actions, validation errors',
  },
  {
    icon: <Info className="text-nimbus-info" size={20} />,
    type: 'Info',
    color: 'bg-nimbus-info/10 border-nimbus-info/20',
    example: 'Your provider has sent you a new message.',
    usage: 'General information, updates',
  },
];

export default function MessagingPatternsPage() {
  return (
    <DocLayout
      title="Messaging Patterns"
      description="Consistent communication patterns across email, SMS, push notifications, and in-app messaging."
      category="Patterns"
    >
      {/* Overview */}
      <section className="mb-16">
        <div className="p-6 rounded-xl bg-gradient-to-r from-nimbus-teal/10 to-transparent border border-nimbus-teal/20">
          <h2 className="text-lg font-semibold text-nimbus-text-primary mb-3">Communication Principles</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-nimbus-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-nimbus-teal">•</span>
              <span><strong className="text-nimbus-text-primary">Clear next steps:</strong> Always tell users what to do next</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nimbus-teal">•</span>
              <span><strong className="text-nimbus-text-primary">Consistent timing:</strong> Send messages at expected moments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nimbus-teal">•</span>
              <span><strong className="text-nimbus-text-primary">Cross-channel parity:</strong> Same message, any channel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-nimbus-teal">•</span>
              <span><strong className="text-nimbus-text-primary">Respectful frequency:</strong> Don't overwhelm users</span>
            </li>
          </ul>
        </div>
      </section>

      {/* In-App Notifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">In-App Notifications</h2>
        
        <div className="space-y-4">
          {notificationTypes.map((notif) => (
            <div 
              key={notif.type}
              className={`p-4 rounded-xl border ${notif.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">{notif.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-nimbus-text-primary">{notif.type}</h3>
                  </div>
                  <p className="text-nimbus-text-primary mb-2">"{notif.example}"</p>
                  <p className="text-sm text-nimbus-text-tertiary">
                    <strong className="text-nimbus-text-secondary">Use for: </strong>
                    {notif.usage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Templates */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Email Templates</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Consistent subject lines and preview text for common transactional emails.
        </p>
        
        <div className="rounded-xl border border-nimbus-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-nimbus-surface-elevated">
              <tr className="border-b border-nimbus-border">
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Type</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Subject Line</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary hidden md:table-cell">Timing</th>
              </tr>
            </thead>
            <tbody className="bg-nimbus-surface">
              {emailTemplates.map((email, index) => (
                <tr 
                  key={email.type}
                  className={index !== emailTemplates.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}
                >
                  <td className="px-4 py-3">
                    <Badge variant="teal" size="sm">{email.type}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-nimbus-text-primary">{email.subject}</p>
                    <p className="text-sm text-nimbus-text-tertiary truncate max-w-xs">{email.preview}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-nimbus-text-secondary hidden md:table-cell">
                    {email.timing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SMS Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">SMS Patterns</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Keep SMS messages short, actionable, and include links when needed.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-nimbus-teal" />
              <h3 className="font-semibold text-nimbus-text-primary">Appointment Reminder</h3>
            </div>
            <div className="p-3 rounded-lg bg-nimbus-surface-elevated text-sm">
              <p className="text-nimbus-text-primary">
                Nimbus: Your consultation is tomorrow at 2pm ET. 
                Join here: nbus.co/join/abc123
              </p>
            </div>
            <p className="text-xs text-nimbus-text-tertiary mt-3">160 characters max • Sent 24hr before</p>
          </Card>
          
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-nimbus-orange" />
              <h3 className="font-semibold text-nimbus-text-primary">Refill Alert</h3>
            </div>
            <div className="p-3 rounded-lg bg-nimbus-surface-elevated text-sm">
              <p className="text-nimbus-text-primary">
                Nimbus: Time for your refill! Complete your intake to keep your medication on schedule: nbus.co/refill
              </p>
            </div>
            <p className="text-xs text-nimbus-text-tertiary mt-3">160 characters max • Sent 7 days before</p>
          </Card>
          
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-nimbus-success" />
              <h3 className="font-semibold text-nimbus-text-primary">Shipment Notification</h3>
            </div>
            <div className="p-3 rounded-lg bg-nimbus-surface-elevated text-sm">
              <p className="text-nimbus-text-primary">
                Nimbus: Your order has shipped! Track: nbus.co/track/xyz789. Expected delivery: Dec 20.
              </p>
            </div>
            <p className="text-xs text-nimbus-text-tertiary mt-3">160 characters max • Sent when shipped</p>
          </Card>
          
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare size={18} className="text-nimbus-info" />
              <h3 className="font-semibold text-nimbus-text-primary">Lab Results</h3>
            </div>
            <div className="p-3 rounded-lg bg-nimbus-surface-elevated text-sm">
              <p className="text-nimbus-text-primary">
                Nimbus: Your lab results are ready. View them in your portal: nbus.co/labs
              </p>
            </div>
            <p className="text-xs text-nimbus-text-tertiary mt-3">160 characters max • Sent when results ready</p>
          </Card>
        </div>
      </section>

      {/* Push Notifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Push Notifications</h2>
        
        <div className="space-y-4">
          <Card padding="sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-nimbus-teal/10 flex items-center justify-center flex-shrink-0">
                <Bell size={18} className="text-nimbus-teal" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-nimbus-text-primary text-sm">Nimbus Healthcare</h4>
                  <span className="text-xs text-nimbus-text-tertiary">now</span>
                </div>
                <p className="text-sm text-nimbus-text-secondary truncate">
                  Your provider has responded to your message. Tap to view.
                </p>
              </div>
            </div>
          </Card>
          
          <Card padding="sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-nimbus-orange/10 flex items-center justify-center flex-shrink-0">
                <Bell size={18} className="text-nimbus-orange" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-nimbus-text-primary text-sm">Nimbus Healthcare</h4>
                  <span className="text-xs text-nimbus-text-tertiary">2h ago</span>
                </div>
                <p className="text-sm text-nimbus-text-secondary truncate">
                  Reminder: Complete your weekly check-in to track your progress.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-nimbus-surface border border-nimbus-border">
          <h4 className="font-semibold text-nimbus-text-primary mb-2">Push Notification Guidelines</h4>
          <ul className="space-y-2 text-sm text-nimbus-text-secondary">
            <li>• Title: "Nimbus Healthcare" (consistent sender identity)</li>
            <li>• Body: Max 50 characters for full visibility</li>
            <li>• Deep link to relevant screen in the app</li>
            <li>• Respect user notification preferences</li>
            <li>• Limit to 2-3 non-urgent notifications per week</li>
          </ul>
        </div>
      </section>

      {/* Error Messages */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Error Messages</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-3 flex items-center gap-2">
              <Check size={18} /> Do
            </h3>
            <ul className="space-y-3 text-sm text-nimbus-text-secondary">
              <li>
                <p className="font-medium text-nimbus-text-primary">"We couldn't process your payment. Please check your card details and try again."</p>
                <p className="text-xs mt-1">Clear problem + clear action</p>
              </li>
              <li>
                <p className="font-medium text-nimbus-text-primary">"This email is already registered. Try logging in instead."</p>
                <p className="text-xs mt-1">Explains issue + offers alternative</p>
              </li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-3 flex items-center gap-2">
              <X size={18} /> Don't
            </h3>
            <ul className="space-y-3 text-sm text-nimbus-text-secondary">
              <li>
                <p className="font-medium text-nimbus-text-primary line-through opacity-60">"Error 500: Internal server error"</p>
                <p className="text-xs mt-1">Technical jargon, no action</p>
              </li>
              <li>
                <p className="font-medium text-nimbus-text-primary line-through opacity-60">"Invalid input"</p>
                <p className="text-xs mt-1">Too vague, doesn't help user</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Empty States */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-6">Empty States</h2>
        <p className="text-nimbus-text-secondary mb-6">
          When there's no content to show, provide helpful context and next steps.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="text-center">
            <div className="w-16 h-16 rounded-full bg-nimbus-surface-elevated mx-auto mb-4 flex items-center justify-center">
              <Mail size={28} className="text-nimbus-text-tertiary" />
            </div>
            <h3 className="font-semibold text-nimbus-text-primary mb-2">No messages yet</h3>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              When you message your care team, conversations will appear here.
            </p>
            <button className="text-sm text-nimbus-teal font-medium">
              Start a conversation →
            </button>
          </Card>
          
          <Card className="text-center">
            <div className="w-16 h-16 rounded-full bg-nimbus-surface-elevated mx-auto mb-4 flex items-center justify-center">
              <Bell size={28} className="text-nimbus-text-tertiary" />
            </div>
            <h3 className="font-semibold text-nimbus-text-primary mb-2">All caught up!</h3>
            <p className="text-sm text-nimbus-text-secondary mb-4">
              You have no new notifications. We'll let you know when something needs your attention.
            </p>
          </Card>
        </div>
      </section>
    </DocLayout>
  );
}

