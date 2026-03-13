import { FormControl, FormLabel, FormHelperText, FormGroup, FormControlLabel } from "@mui/material";
import { Radio } from "@/components/ui";

/**
 * @typedef {object} Props
 * @property {string} [label]
 * @property {(name: string) => any} [error]
 * @property {boolean} [disabled]
 * @property {string} name
 * @property {(name: string) => any} value
 * @property {(name: string, value: any) => void} [onChange]
 * @property {any[]} options
 * @property {(option: any) => string } renderOptionLabel
 * @property {(option: any) => any} renderOptionValue
 * @property {boolean} [row=true]
 * @property {boolean} [fullWidth=true]
 */

/**
 * @param {Props} props
 */
export default function RadioGroup({
  label,
  error,
  name,
  value,
  onChange,
  options = [],
  renderOptionLabel,
  renderOptionValue,
  row = true,
  fullWidth = true,
  ...rest
}) {
  const _error = error ? error(name) : null;
  const selected = value(name);

  const handleChange = (/** @type {any} */ optionValue) => {
    if (!onChange) return;
    onChange(name, optionValue);
  };

  return (
    <FormControl error={!!_error} fullWidth={fullWidth}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormGroup {...rest} row={row}>
        {options.map((option, i) => {
          const optionLabel = renderOptionLabel(option);
          const optionValue = renderOptionValue(option);
          return (
            <FormControlLabel
              key={i}
              value={optionValue}
              label={optionLabel}
              control={
                <Radio
                  checked={selected === optionValue}
                  onCheck={() => handleChange(optionValue)}
                />
              }
            />
          );
        })}
      </FormGroup>
      {_error && <FormHelperText>{_error}</FormHelperText>}
    </FormControl>
  );
}