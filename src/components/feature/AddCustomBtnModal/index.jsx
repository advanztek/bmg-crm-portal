import { Button, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import { AddRegular } from "@fluentui/react-icons";
import { Box, MenuItem, OutlinedInput, Select, Stack } from "@mui/material";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddCustomBtnModal({ open, onClose }) {
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title="Add Customize Leads"
      actionSlot={
        <>
          <Button size="small" startContent={<AddRegular />}>
            Add Lead
          </Button>
        </>
      }
    >
      <Stack gap={spacingTokens.sm}>
        <Box>
          <Typography>Entity</Typography>
          <Select variant="filled" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Select Option
            </MenuItem>
            <MenuItem value="j">Johnwhite</MenuItem>
            <MenuItem value="C">Carmella</MenuItem>
            <MenuItem value="G">Tartor</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography>Text</Typography>
          <Select variant="filled" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Type here
            </MenuItem>
            <MenuItem value="j">Johnwhite</MenuItem>
            <MenuItem value="C">Carmella</MenuItem>
            <MenuItem value="G">Tartor</MenuItem>
          </Select>
        </Box>
        <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
          <OutlinedInput placeholder="Label" fullWidth />
          <OutlinedInput placeholder="Name" fullWidth />
        </Stack>
        <OutlinedInput placeholder="Helper Text" fullWidth />
      </Stack>
    </ModalLayout>
  );
}
