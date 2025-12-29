import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyles = {
  primary: `
    bg-nimbus-teal text-nimbus-black font-semibold
    hover:bg-nimbus-teal-light
    focus:ring-2 focus:ring-nimbus-teal focus:ring-offset-2 focus:ring-offset-nimbus-black
    disabled:bg-nimbus-teal/50 disabled:cursor-not-allowed
  `,
  secondary: `
    bg-nimbus-orange text-nimbus-black font-semibold
    hover:bg-nimbus-orange-light
    focus:ring-2 focus:ring-nimbus-orange focus:ring-offset-2 focus:ring-offset-nimbus-black
    disabled:bg-nimbus-orange/50 disabled:cursor-not-allowed
  `,
  outline: `
    bg-transparent text-nimbus-text-primary font-medium
    border border-nimbus-border
    hover:bg-nimbus-surface-hover hover:border-nimbus-text-tertiary
    focus:ring-2 focus:ring-nimbus-teal focus:ring-offset-2 focus:ring-offset-nimbus-black
    disabled:text-nimbus-text-disabled disabled:border-nimbus-border-subtle disabled:cursor-not-allowed
  `,
  ghost: `
    bg-transparent text-nimbus-text-secondary font-medium
    hover:bg-nimbus-surface-hover hover:text-nimbus-text-primary
    focus:ring-2 focus:ring-nimbus-teal focus:ring-offset-2 focus:ring-offset-nimbus-black
    disabled:text-nimbus-text-disabled disabled:cursor-not-allowed
  `,
  danger: `
    bg-nimbus-error text-white font-semibold
    hover:bg-red-600
    focus:ring-2 focus:ring-nimbus-error focus:ring-offset-2 focus:ring-offset-nimbus-black
    disabled:bg-nimbus-error/50 disabled:cursor-not-allowed
  `,
};

const sizeStyles = {
  sm: 'h-8 px-4 text-sm gap-1.5 rounded-full',
  md: 'h-11 px-6 text-base gap-2 rounded-full',
  lg: 'h-13 px-8 text-lg gap-2.5 rounded-full',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        transition-all duration-200 ease-out
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {rightIcon && !isLoading && rightIcon}
    </button>
  );
}

