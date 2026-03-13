import { Input, Loader, Select } from "@/components/ui";

/**
 * @param {Object} props
 * @param {any} props.formData
 * @param {(field: string, value: any) => void} props.onChange
 * @param {(field: string, value: any) => void} props.onBlur
 * @param {any} props.formErrors
 * @param {any} props.countries
 * @param {boolean} props.countriesLoading
 * @param {any} props.selectedCountry
 */
export default function StepOne({
  formData,
  onChange,
  onBlur,
  formErrors,
  countries,
  countriesLoading,
  selectedCountry,
}) {
  return (
    <>
      <Input
        label="First Name"
        name="first_name"
        value={(name) => formData[name]}
        onChange={(name, value) => {
          onChange(name, value.replace(/\s/g, ""));
        }}
        onBlur={(name, value) => onBlur(name, value.replace(/\s/g, ""))}
        error={(name) => formErrors?.[name]}
      />
      <Input
        label="Last Name"
        name="last_name"
        value={(name) => formData[name]}
        onChange={(name, value) => {
          onChange(name, value.replace(/\s/g, ""));
        }}
        onBlur={(name, value) => onBlur(name, value.replace(/\s/g, ""))}
        error={(name) => formErrors?.[name]}
      />
      <Input
        label="Email"
        name="email"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
      <Select
        startAdornment={countriesLoading && <Loader size={10} />}
        name="country_id"
        label="Country"
        value={(name) => formData?.[name]}
        error={(name) => formErrors?.[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        options={countries}
        disabled={countriesLoading || !countries || countries?.length < 1}
        renderOption={(option) => ({
          label: option?.name,
          value: option?.id,
        })}
      />

      <Input
        startAdornment={
          selectedCountry &&
          selectedCountry?.phone_code && <span>{selectedCountry?.phone_code}</span>
        }
        name="mobile"
        label="Phone"
        value={(name) => formData?.[name]}
        error={(name) => formErrors?.[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
      />
    </>
  );
}
