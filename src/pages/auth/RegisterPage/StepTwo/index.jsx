import { Input } from "@/components/ui";

/**
 * @param {Object} props
 * @param {any} props.formData
 * @param {(field: string, value: any) => void} props.onChange
 * @param {(field: string, value: any) => void} props.onBlur
 * @param {any} props.formErrors
 */
export default function StepTwo({ formData, onChange, onBlur, formErrors }) {
  return (
    <>
      <Input
        label="Company Name"
        name="company_name"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
      <Input
        label="Size"
        name="team_number"
        value={(name) => formData[name]}
        placeholder="e.g. 30"
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
      <Input
        name="address"
        label="Address"
        multiline
        rows={2}
        value={(name) => formData?.[name]}
        error={(name) => formErrors?.[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
      />
      <Input
        name="about_us"
        label="About Company"
        multiline
        rows={4}
        value={(name) => formData?.[name]}
        error={(name) => formErrors?.[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
      />
    </>
  );
}
