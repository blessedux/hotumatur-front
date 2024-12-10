// components/ui/input.tsx
import React from 'react';

interface InputProps {
  type?: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ type = "text", id, name, value, onChange, required }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export { Input };