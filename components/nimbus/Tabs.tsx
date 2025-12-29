'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

// Context for tab state
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component');
  }
  return context;
}

// Main Tabs container
export interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
  onChange?: (value: string) => void;
}

export default function Tabs({ 
  defaultValue, 
  children, 
  className = '',
  onChange 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tab List (container for triggers)
export interface TabsListProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

const listVariantStyles = {
  default: 'bg-nimbus-surface rounded-full p-1 border border-nimbus-border',
  pills: 'gap-2',
  underline: 'border-b border-nimbus-border',
};

export function TabsList({ children, className = '', variant = 'default' }: TabsListProps) {
  return (
    <div 
      className={`flex ${listVariantStyles[variant]} ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}

// Tab Trigger (button)
export interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'default' | 'pills' | 'underline';
}

export function TabsTrigger({ 
  value, 
  children, 
  className = '', 
  disabled = false,
  variant = 'default'
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  const variantStyles = {
    default: `
      flex-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
      ${isActive 
        ? 'bg-nimbus-teal text-nimbus-black' 
        : 'text-nimbus-text-secondary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
      }
    `,
    pills: `
      px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border
      ${isActive 
        ? 'bg-nimbus-teal/10 text-nimbus-teal border-nimbus-teal/20' 
        : 'text-nimbus-text-secondary border-transparent hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
      }
    `,
    underline: `
      px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 -mb-px
      ${isActive 
        ? 'text-nimbus-teal border-nimbus-teal' 
        : 'text-nimbus-text-secondary border-transparent hover:text-nimbus-text-primary hover:border-nimbus-text-tertiary'
      }
    `,
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      onClick={() => setActiveTab(value)}
      className={`
        ${variantStyles[variant]}
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Tab Content
export interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className = '' }: TabsContentProps) {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={`mt-4 animate-in fade-in duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

