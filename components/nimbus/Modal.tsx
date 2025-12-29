'use client';

import { ReactNode, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  footer?: ReactNode;
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-4xl',
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  footer,
}: ModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEscape) {
      onClose();
    }
  }, [onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nimbus-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className={`
          relative w-full ${sizeStyles[size]}
          bg-nimbus-surface border border-nimbus-border rounded-2xl
          shadow-2xl
          animate-in fade-in zoom-in-95 duration-200
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-nimbus-text-tertiary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        )}
        
        {/* Header */}
        {(title || description) && (
          <div className="px-6 pt-6 pb-4">
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold text-nimbus-text-primary pr-8">
                {title}
              </h2>
            )}
            {description && (
              <p id="modal-description" className="text-sm text-nimbus-text-secondary mt-1">
                {description}
              </p>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className={`px-6 ${title ? 'pb-6' : 'py-6'}`}>
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-nimbus-border-subtle flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Confirmation Dialog variant
export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger';
  isLoading?: boolean;
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
  isLoading = false,
}: ConfirmDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={onClose} disabled={isLoading}>
            {cancelText}
          </Button>
          <Button 
            variant={variant === 'danger' ? 'danger' : 'primary'}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmText}
          </Button>
        </>
      }
    >
      <></>
    </Modal>
  );
}

