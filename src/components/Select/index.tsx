import type { FormData } from "../../screens/candidacy";

// 🔹 SelectField Component
export const SelectField = ({
  label,
  register,
  name,
  options,
  errors,
  rules,
}: {
  label: string;
  register: any;
  name: keyof FormData;
  options: string[];
  errors: any;
  rules?: any;
}) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <select
      {...register(name, rules)}
      className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Selecione...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);
