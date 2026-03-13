import { Input } from "@/components/ui";

/**
 * @param {Object} props
 * @param {any} props.formData
 * @param {(field: string, value: any) => void} props.onChange
 * @param {(field: string, value: any) => void} props.onBlur
 * @param {any} props.formErrors
 */
export default function StepFive({ formData, onChange, onBlur, formErrors }) {
  return (
    <>
      <Input
        label="Password"
        name="password"
        type="password"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
      <Input
        label="Confirm Password"
        name="confirm_password"
        type="password"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
    </>
  );
}
