import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-9 text-sm px-3',
  md: 'h-11 text-base px-4',
  lg: 'h-13 text-lg px-5',
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  size = 'md',
  className = '',
  disabled,
  id,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-nimbus-text-primary mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-nimbus-text-tertiary">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={`
            w-full rounded-full
            bg-nimbus-surface border
            text-nimbus-text-primary placeholder:text-nimbus-text-tertiary
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nimbus-black
            disabled:bg-nimbus-surface-elevated disabled:text-nimbus-text-disabled disabled:cursor-not-allowed
            ${error 
              ? 'border-nimbus-error focus:ring-nimbus-error' 
              : 'border-nimbus-border focus:border-nimbus-teal focus:ring-nimbus-teal'
            }
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${sizeStyles[size]}
            ${className}
          `}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-nimbus-text-tertiary">
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || hint) && (
        <p className={`mt-2 text-sm ${error ? 'text-nimbus-error' : 'text-nimbus-text-tertiary'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

// Textarea variant
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  hint,
  className = '',
  disabled,
  id,
  ...props
}, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-nimbus-text-primary mb-2"
        >
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={inputId}
        disabled={disabled}
        className={`
          w-full rounded-3xl p-4 min-h-[120px]
          bg-nimbus-surface border
          text-nimbus-text-primary placeholder:text-nimbus-text-tertiary
          transition-all duration-200 resize-y
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nimbus-black
          disabled:bg-nimbus-surface-elevated disabled:text-nimbus-text-disabled disabled:cursor-not-allowed
          ${error 
            ? 'border-nimbus-error focus:ring-nimbus-error' 
            : 'border-nimbus-border focus:border-nimbus-teal focus:ring-nimbus-teal'
          }
          ${className}
        `}
        {...props}
      />
      
      {(error || hint) && (
        <p className={`mt-2 text-sm ${error ? 'text-nimbus-error' : 'text-nimbus-text-tertiary'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

