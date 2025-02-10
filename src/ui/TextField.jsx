import PropTypes from "prop-types"
function TextField({
  name,
  label,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}) {
  return (
    <>
      <div>
        <label className="mb-2 block text-secondary-700" htmlFor={name}>
          {label}
          {required && <span className="text-error">*</span>}
        </label>
        <input
          {...register(name, validationSchema)}
          className="textField__input"
          id={name}
          name={name}
          type={type}
          autoComplete="off"
        />
        {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </>
  )
}
export default TextField

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  validationSchema: PropTypes.object,
  errors: PropTypes.object,
}
