function RadioInput({ id, label, name, value, onChange, checked }) {
  return (
    <div className="flex items-center gap-x-1 text-secondary-600">
      <label htmlFor="OWNER">{label}</label>
      <input
        className="cursor-pointer w-4 h-4 accent-blue-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  )
}

export default RadioInput
