import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  const baseStyles = 'shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-text text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input id={id} className={`${baseStyles} ${className || ''}`} {...props} />
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = ({ label, id, className, ...props }: TextAreaProps) => {
  const baseStyles = 'shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-text text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <textarea id={id} className={`${baseStyles} ${className || ''}`} {...props} />
    </div>
  );
};
