import { Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Box, Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 * @param {React.ReactNode} [props.actions]
 */
export default function AuthSlot({ children, title, subtitle, actions }) {
  return (
    <>
      {(title || subtitle) && (
        <Box>
          {title && (
            <Typography variant="h1" lineHeight={1.5} fontWeight={500}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography color="secondary" fontWeight={400} variant="h3" lineHeight={1.25}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <Stack flex={1} gap={spacingTokens.md} sx={{ overflowY: "auto" }}>
        {children}
      </Stack>
      {actions && <Stack gap={spacingTokens.md}>{actions}</Stack>}
    </>
  );
}
