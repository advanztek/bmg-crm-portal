import { Input, RadioGroup } from "@/components/ui";
import { capitalizeWords } from "@/helpers/text";

/**
 * @param {Object} props
 * @param {any} props.formData
 * @param {(field: string, value: any) => void} props.onChange
 * @param {(field: string, value: any) => void} props.onBlur
 * @param {any} props.formErrors
 */
export default function StepFour({ formData, onChange, onBlur, formErrors }) {
  return (
    <>
      <RadioGroup
        name="how_you_heard_about_us"
        label="Who told you?"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        error={(name) => formErrors?.[name]}
        options={[
          "linkedin",
          "facebook",
          "instagram",
          "google",
          "friend",
          "advertisement",
          "other",
        ]}
        renderOptionLabel={(option) => capitalizeWords(option)}
        renderOptionValue={(option) => option}
      />
      {formData?.how_you_heard_about_us === "other" && (
        <Input
          label="Specity"
          name="other_specify"
          value={(name) => formData[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          error={(name) => formErrors?.[name]}
        />
      )}
    </>
  );
}
