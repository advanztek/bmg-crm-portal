import { FileInput, FileStatus, Input } from "@/components/ui";
import { FILE_UNITS } from "@/lib/data";

/**
 * @param {Object} props
 * @param {any} props.formData
 * @param {(field: string, value: any) => void} props.onChange
 * @param {(field: string, value: any) => void} props.onBlur
 * @param {any} props.formErrors
 */
export default function StepThree({ formData, onChange, onBlur, formErrors }) {
  return (
    <>
      <FileInput
        name="logo"
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
      {formData?.logo && (
        <FileStatus
          type="image"
          name={formData?.logo?.name}
          size={(parseFloat(formData?.logo?.size) / FILE_UNITS.mb).toFixed(2) + " MB"}
          onClick={() => onChange("logo", "")}
        />
      )}
      <Input
        label="Brand Color"
        name="primary_color"
        value={(name) => formData[name]}
        placeholder="e.g. #006aff"
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
    </>
  );
}
