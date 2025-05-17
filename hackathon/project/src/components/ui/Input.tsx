import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, fullWidth = false, leftIcon, rightIcon, className = '', ...props }, ref) => {
    const inputBaseStyles = 'block px-4 py-2 rounded-md border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0';
    
    const inputErrorStyles = error
      ? 'border-error-500 focus:border-error-500 focus:ring-error-500 dark:border-error-500'
      : 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500';
    
    const widthStyles = fullWidth ? 'w-full' : '';
    
    const paddingStyles = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';
    
    const inputClassName = `${inputBaseStyles} ${inputErrorStyles} ${widthStyles} ${paddingStyles} ${className}`;

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
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input ref={ref} className={inputClassName} {...props} />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        
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

Input.displayName = 'Input';

export default Input;