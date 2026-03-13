import { useColor } from "@/contexts/color";
import { radius, spacing, spacingTokens } from "@/lib/theme";
import { CloudArrowUpRegular } from "@fluentui/react-icons";
import { FormHelperText, FormLabel, Stack, Typography } from "@mui/material";
import { useRef } from "react";

/**
 * @typedef {Object} FilePickerProps
 * @property {(name: string) => any} [error]
 * @property {(name: string, value: any) => void} onChange
 * @property {(name: string, value: any) => void} [onBlur]
 * @property {string} [tag]
 * @property {string} [caption]
 * @property {string} [label]
 * @property {"filled" | "outlined"} [variant]
 * @property {string} name
 */

/**
 * @param {FilePickerProps} props
 */
export default function FilePicker({
  error,
  onChange,
  onBlur = () => null,
  tag = "Choose file to upload",
  caption = "Click to select a file",
  label,
  variant = "outlined",
  name,
}) {
  const { input: inputColor, main, fg } = useColor();
  const inputRef = useRef(/** @type {any} */(undefined));

  const input = variant === "filled" ? inputColor.filled : inputColor.outlined;

  const _error = error ? error(name) : null;

  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(name, file);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  /** @param {React.FocusEvent<HTMLInputElement>} e */
  const handleBlur = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onBlur(name, file);
    }
  };

  return (
    <Stack gap={spacingTokens.sm}>
      {label && <FormLabel error={!!_error}>{label}</FormLabel>}
      <Stack
        component="label"
        alignItems="center"
        justifyContent="center"
        border={_error ? `1px dashed ${input.error.border}` : `1px solid ${input.default.border}`}
        bgcolor={_error ? input.error.bg : input.default.bg}
        py="32px"
        overflow="hidden"
        gap={spacing[4]}
        sx={{ cursor: "pointer" }}
        borderRadius={radius[4]}
      >
        <CloudArrowUpRegular fontSize={42} color={_error ? input.error.fg : main.primary} />
        <Stack alignItems="center" gap={spacingTokens.xs}>
          <Typography variant="body2" fontWeight={600} sx={{ userSelect: "none" }} lineHeight={1}>
            {tag}
          </Typography>
          <Typography
            variant="body2"
            color={fg.tertiary}
            sx={{ userSelect: "none" }}
            lineHeight={1}
          >
            {caption}
          </Typography>
        </Stack>
        <input
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Stack>
      {_error && <FormHelperText error>{_error}</FormHelperText>}
    </Stack>
  );
}
