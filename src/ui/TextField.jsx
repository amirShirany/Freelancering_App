function TextField({ name, label, value, onchange }) {
  return (
    <>
      <div>
        <label className="mb-2 block" htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className="textField__input"
          id={name}
          value={value}
          onChange={onchange}
          name={name}
          autoComplete="off"
        />
      </div>
    </>
  )
}
export default TextField
