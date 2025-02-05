import PropTypes from "prop-types"

function RadioInput({
  id,
  label,
  value,
  name,
  register,
  watch,
  validationSchema,
  errors,
}) {
  return (
    <div className="flex items-center gap-x-1 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 accent-blue-500"
        type="radio"
        name={name}
        id={id}
        {...register(name, validationSchema)}
        value={value}
        // onChange={onChange}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}

export default RadioInput

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  validationSchema: PropTypes.object,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
}
