import { useState } from "react"

export default function CustomSelect({ value, onValueChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-2 text-left bg-white border border-pink-200 rounded-lg focus:outline-none hover:border-pink-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">{options.find((option) => option.value === value)?.label || placeholder}</span>
        <span className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-pink-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full px-3 py-2 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
              onClick={() => {
                onValueChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
