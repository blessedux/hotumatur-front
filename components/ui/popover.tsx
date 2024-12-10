// components/ui/popover.tsx
import React, { ReactNode, useState } from 'react';

interface PopoverProps {
  children: ReactNode;
  trigger: ReactNode;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({ children, trigger, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      <div onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white p-4 border rounded shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

interface PopoverTriggerProps {
  children: ReactNode;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};