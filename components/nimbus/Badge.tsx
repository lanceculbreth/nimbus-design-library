import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'teal' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-nimbus-surface-elevated text-nimbus-text-secondary border-nimbus-border',
  success: 'bg-nimbus-success/10 text-nimbus-success border-nimbus-success/20',
  warning: 'bg-nimbus-warning/10 text-nimbus-warning border-nimbus-warning/20',
  error: 'bg-nimbus-error/10 text-nimbus-error border-nimbus-error/20',
  info: 'bg-nimbus-info/10 text-nimbus-info border-nimbus-info/20',
  teal: 'bg-nimbus-teal/10 text-nimbus-teal border-nimbus-teal/20',
  orange: 'bg-nimbus-orange/10 text-nimbus-orange border-nimbus-orange/20',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-1',
  lg: 'text-sm px-3 py-1.5',
};

const dotColors = {
  default: 'bg-nimbus-text-tertiary',
  success: 'bg-nimbus-success',
  warning: 'bg-nimbus-warning',
  error: 'bg-nimbus-error',
  info: 'bg-nimbus-info',
  teal: 'bg-nimbus-teal',
  orange: 'bg-nimbus-orange',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full border
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
}

// Status Badge with predefined states
export interface StatusBadgeProps {
  status: 'active' | 'pending' | 'completed' | 'cancelled' | 'new';
  className?: string;
}

const statusConfig = {
  active: { variant: 'success' as const, label: 'Active', dot: true },
  pending: { variant: 'warning' as const, label: 'Pending', dot: true },
  completed: { variant: 'teal' as const, label: 'Completed', dot: true },
  cancelled: { variant: 'error' as const, label: 'Cancelled', dot: true },
  new: { variant: 'orange' as const, label: 'New', dot: false },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} dot={config.dot} className={className}>
      {config.label}
    </Badge>
  );
}

// Notification Badge (for counts)
export interface NotificationBadgeProps {
  count: number;
  max?: number;
  className?: string;
}

export function NotificationBadge({ count, max = 99, className = '' }: NotificationBadgeProps) {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  if (count === 0) return null;
  
  return (
    <span 
      className={`
        inline-flex items-center justify-center
        min-w-5 h-5 px-1.5
        text-xs font-semibold
        bg-nimbus-error text-white
        rounded-full
        ${className}
      `}
    >
      {displayCount}
    </span>
  );
}

