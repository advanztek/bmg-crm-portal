import { Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { radiusTokens, spacingTokens } from "@/lib/theme";
import { Stack, Box } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.iconSrc
 * @param {string} props.description
 * @param {boolean} [props.highlighted]
 * @param {() => void} [props.onClick]
 */
export default function StepCard({ label, iconSrc, description, highlighted = false, onClick }) {
  const { main, border, bg } = useColor();

  return (
    <Stack
      component="div"
      gap={spacingTokens.md}
      onClick={onClick}
      alignItems="start"
      sx={{
        border: `1px solid ${highlighted ? main.primary + "26" : border.primary}`,
        backgroundColor: bg.tertiary,
        borderRadius: radiusTokens.xl,
        padding: `${spacingTokens.sm} ${spacingTokens.lg}`,
        transition: "border 0.35s ease-in-out, background-color 0.35s ease-in-out",
      }}
    >
      <Box component="img" src={iconSrc} height="30px" />
      <Stack gap={spacingTokens.xs}>
        <Typography fontWeight={600}>{label}</Typography>
        <Typography variant="caption" color="secondary" lineHeight={1.5}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
