export function ToggleCheck({ ...props }: any) {
  return (
    <label className="relative inline-flex items-center cursor-pointer outline-none">
      <input type="checkbox" value="" className="sr-only peer outline-none" />
      <div className="w-14 h-8 bg-gray-200 outline-none transition-all duration-300 ease-in-out peer-focus:outline-none hover:ring-2 ring-[#6750A4] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-brand-primary after:border-brand-primary after:border after:rounded-full after:h-6 after:w-6 after:transition-all after:duration-200 after:ease-in-out dark:border-gray-600 peer-checked:after:bg-white peer-checked:bg-[#6750A4]"></div>
    </label>
  );
}
