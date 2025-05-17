import React, { forwardRef } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, helperText, error, fullWidth = false, className = '', ...props }, ref) => {
    const textareaBaseStyles = 'block w-full px-4 py-2 rounded-md border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0';
    
    const textareaErrorStyles = error
      ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500';
    
    const widthStyles = fullWidth ? 'w-full' : '';
    
    const textareaClassName = `${textareaBaseStyles} ${textareaErrorStyles} ${widthStyles} ${className}`;

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        
        <textarea ref={ref} className={textareaClassName} {...props} />
        
        {helperText && !error && (
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
        
        {error && (
          <p className="mt-1 text-xs text-error-600 dark:text-error-400">{error}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;