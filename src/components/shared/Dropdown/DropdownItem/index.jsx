import { spacingTokens } from "@/constants/theme";
import { Box, MenuItem } from "@mui/material";
import { Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {import("react").ComponentType<{fontSize?: number, color?: string}>} [props.icon]
 * @param {string} props.children
 * @param {() => void} [props.onClick]
 * @param {boolean} [props.disabled]
 */
export default function DropdownItem({ icon: Icon, children, onClick, disabled }) {
  return (
    <MenuItem onClick={onClick} disabled={disabled}>
      <Stack direction="row" alignItems="center" gap={spacingTokens.xs}>
        {Icon && (
          <Stack alignItems="center" justifyContent="center">
            <Icon />
          </Stack>
        )}
        <Box component="span" lineHeight={1}>
          {children}
        </Box>
      </Stack>
    </MenuItem>
  );
}
