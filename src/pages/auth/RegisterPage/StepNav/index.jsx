/**
 * @typedef {Object} Props
 * @property {number} total
 * @property {number} active
 * @property {string} title
 * @property {() => void} onBack
 */

import { RingProgress, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ArrowLeftRegular } from "@fluentui/react-icons";
import { Stack } from "@mui/material";

/**
 * @param {Props} props
 */
export default function StepNav({ active, total, title, onBack }) {
  const value = (active / total) * 100;
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" height="60px">
      <ArrowLeftRegular fontSize={22} onClick={onBack} style={{ cursor: "pointer" }} />
      <Stack direction="row" alignItems="center" gap={spacingTokens.md}>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography fontWeight={600} color="tertiary">{`${active} / ${total}`}</Typography>
        <RingProgress value={Math.min(100, Math.round(value))} size={32} strokeWidth={6} />
      </Stack>
    </Stack>
  );
}
