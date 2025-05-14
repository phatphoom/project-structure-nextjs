"use client";
import React, { useState } from "react";
type GreetingProps = {
  label: string;
  type: string;
  placeholder: string;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
};
function InputForm({
  label,
  type,
  placeholder,
  showPasswordToggle,
}: GreetingProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-black">
          {label}
        </label>
        <div className="flex">
          <input
            type={showPasswordToggle && showPassword ? "text" : type}
            id="large-input"
            className="block w-75 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          {showPasswordToggle && (
            <button
              type="button"
              className="flex items-center text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputForm;
