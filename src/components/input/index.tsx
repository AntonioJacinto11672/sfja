
// 🔹 InputField Component
export const InputField = ({
  label,
  type = "text",
  register,
  name,
  errors,
  rules,
}: {
  label: string;
  type?: string;
  register: any;
  name: keyof FormData | string;
  errors: any;
  rules?: any;
}) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      {...register(name, rules)}
      className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        errors[name] ? "border-red-500" : "border-gray-300"
      }`}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);