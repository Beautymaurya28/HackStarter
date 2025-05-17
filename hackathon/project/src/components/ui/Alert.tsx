import React from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  title?: string;
  children: React.ReactNode;
  variant?: AlertVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  title,
  children,
  variant = 'info',
  dismissible = false,
  onDismiss,
  className = '',
}) => {
  const variantStyles: Record<AlertVariant, string> = {
    info: 'bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-300 border-primary-300 dark:border-primary-800',
    success: 'bg-success-50 dark:bg-gray-800 text-success-800 dark:text-success-300 border-success-300 dark:border-success-800',
    warning: 'bg-warning-50 dark:bg-gray-800 text-warning-800 dark:text-warning-300 border-warning-300 dark:border-warning-800',
    error: 'bg-error-50 dark:bg-gray-800 text-error-800 dark:text-error-300 border-error-300 dark:border-error-800',
  };

  const iconMap: Record<AlertVariant, React.ReactNode> = {
    info: <Info className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertCircle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
  };

  return (
    <div
      className={`flex border-l-4 p-4 rounded-r-md ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mr-3">
        {iconMap[variant]}
      </div>
      <div className="flex-1">
        {title && <h3 className="text-sm font-medium">{title}</h3>}
        <div className={`text-sm ${title ? 'mt-1' : ''}`}>{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          type="button"
          className="flex-shrink-0 ml-3 h-5 w-5 flex items-center justify-center"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;