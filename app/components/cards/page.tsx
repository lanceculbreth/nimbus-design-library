'use client';

import { DocLayout } from '@/components/layout';
import { ComponentPreview, PropsTable } from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@/components/nimbus';
import { ArrowRight, Heart, Star } from 'lucide-react';

const cardProps = [
  { name: 'variant', type: "'default' | 'elevated' | 'outlined' | 'interactive'", default: "'default'", description: 'Visual style variant' },
  { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding size' },
  { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
  { name: 'className', type: 'string', description: 'Additional CSS classes' },
];

export default function CardsPage() {
  return (
    <DocLayout
      title="Cards"
      description="Cards are containers for content and actions about a single subject. Use them to group related information."
      category="Components"
    >
      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Basic Usage</h2>
        
        <ComponentPreview
          title="Simple Card"
          code={`import { Card } from '@/components/nimbus';

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
        >
          <Card className="max-w-sm">
            <h3 className="text-lg font-semibold text-nimbus-text-primary mb-2">Card Title</h3>
            <p className="text-nimbus-text-secondary">This is a basic card with some content inside.</p>
          </Card>
        </ComponentPreview>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Variants</h2>
        
        <ComponentPreview
          title="Card Variants"
          code={`<Card variant="default">Default card</Card>
<Card variant="elevated">Elevated card</Card>
<Card variant="outlined">Outlined card</Card>
<Card variant="interactive">Interactive card</Card>`}
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
            <Card variant="default">
              <p className="text-sm font-medium text-nimbus-text-primary">Default</p>
              <p className="text-xs text-nimbus-text-secondary mt-1">Standard card style</p>
            </Card>
            <Card variant="elevated">
              <p className="text-sm font-medium text-nimbus-text-primary">Elevated</p>
              <p className="text-xs text-nimbus-text-secondary mt-1">With shadow</p>
            </Card>
            <Card variant="outlined">
              <p className="text-sm font-medium text-nimbus-text-primary">Outlined</p>
              <p className="text-xs text-nimbus-text-secondary mt-1">Transparent background</p>
            </Card>
            <Card variant="interactive">
              <p className="text-sm font-medium text-nimbus-text-primary">Interactive</p>
              <p className="text-xs text-nimbus-text-secondary mt-1">Hover to see effect</p>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* With Subcomponents */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Structured Cards</h2>
        <p className="text-nimbus-text-secondary mb-6">
          Use subcomponents for consistent card structure.
        </p>
        
        <ComponentPreview
          title="Card with Header and Footer"
          code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Button 
} from '@/components/nimbus';

<Card>
  <CardHeader>
    <CardTitle>WeightWise® Program</CardTitle>
    <CardDescription>Your personalized weight management plan</CardDescription>
  </CardHeader>
  <CardContent>
    <p>GLP-1 medication with clinician oversight...</p>
  </CardContent>
  <CardFooter>
    <Button>Get Started</Button>
  </CardFooter>
</Card>`}
        >
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>WeightWise® Program</CardTitle>
              <CardDescription>Your personalized weight management plan</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-nimbus-text-secondary">
                GLP-1 medication with clinician oversight, regular check-ins, and 
                continuous support throughout your journey.
              </p>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button>Get Started</Button>
              <Button variant="ghost">Learn More</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </section>

      {/* Padding Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Padding Sizes</h2>
        
        <ComponentPreview
          title="Padding Variants"
          code={`<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding (default)</Card>
<Card padding="lg">Large padding</Card>`}
        >
          <div className="flex flex-wrap gap-4">
            <Card padding="sm" className="flex-1 min-w-[150px]">
              <p className="text-sm text-nimbus-text-primary">Small</p>
            </Card>
            <Card padding="md" className="flex-1 min-w-[150px]">
              <p className="text-sm text-nimbus-text-primary">Medium</p>
            </Card>
            <Card padding="lg" className="flex-1 min-w-[150px]">
              <p className="text-sm text-nimbus-text-primary">Large</p>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* Complex Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Complex Examples</h2>
        
        <ComponentPreview
          title="Program Cards"
          code={`// Program card example
<Card variant="interactive">
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-nimbus-teal/10 flex items-center justify-center">
      <Heart className="text-nimbus-teal" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-nimbus-text-primary">NimCore® Men</h3>
      <p className="text-sm text-nimbus-text-secondary mt-1">
        Hormone optimization program
      </p>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-nimbus-teal font-semibold">$125/mo</span>
        <ArrowRight size={16} className="text-nimbus-teal" />
      </div>
    </div>
  </div>
</Card>`}
        >
          <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
            <Card variant="interactive">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-nimbus-teal/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="text-nimbus-teal" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-nimbus-text-primary">NimCore® Men</h3>
                  <p className="text-sm text-nimbus-text-secondary mt-1">
                    Hormone optimization program
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-nimbus-teal font-semibold">$125/mo</span>
                    <ArrowRight size={16} className="text-nimbus-teal" />
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="interactive">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-nimbus-orange/10 flex items-center justify-center flex-shrink-0">
                  <Star className="text-nimbus-orange" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-nimbus-text-primary">WeightWise®</h3>
                  <p className="text-sm text-nimbus-text-secondary mt-1">
                    GLP-1 weight management
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-nimbus-orange font-semibold">$179/mo</span>
                    <ArrowRight size={16} className="text-nimbus-orange" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      {/* Props Table */}
      <PropsTable props={cardProps} />

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold text-nimbus-text-primary mb-4">Usage Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg bg-nimbus-success/10 border border-nimbus-success/20">
            <h3 className="font-semibold text-nimbus-success mb-3">Do</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Group related content together</li>
              <li>• Use consistent padding within a view</li>
              <li>• Make interactive cards obvious</li>
              <li>• Provide clear visual hierarchy</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-lg bg-nimbus-error/10 border border-nimbus-error/20">
            <h3 className="font-semibold text-nimbus-error mb-3">Don't</h3>
            <ul className="space-y-2 text-sm text-nimbus-text-secondary">
              <li>• Nest cards within cards</li>
              <li>• Overload with too much content</li>
              <li>• Mix different padding sizes</li>
              <li>• Use cards for single pieces of info</li>
            </ul>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}

