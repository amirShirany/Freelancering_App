import { Switch, Field, Label } from "@headlessui/react"

function Toggle({ label, enabled, onChange }) {
  return (
    <div>
      <Field className="flex items-center gap-x-2">
        <Label>{label}</Label>
        <Switch
          checked={status === "OPEN" ? enabled : false}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-900" : "bg-secondary-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}>
          <span
            aria-hidden="true"
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </Field>
    </div>
  )
}

export default Toggle
