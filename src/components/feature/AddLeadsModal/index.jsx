import { Button } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import { AddRegular, SettingsRegular } from "@fluentui/react-icons";
import { MenuItem, OutlinedInput, Select, Stack } from "@mui/material";
import { useState } from "react";
import AddCustomBtnModal from "../AddCustomBtnModal";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddTaskModal({ open, onClose }) {
  const [openCustomBtn, setOpenCustomBtn] = useState(false);

  const handleOpenCustomBtn = () => {
    setOpenCustomBtn(true);
  };

  return (
    <>
      <ModalLayout
        open={open}
        onClose={onClose}
        title="Add Leads"
        caption="Add a new lead to your pipeline"
        actionSlot={
          <>
            <Button size="small" startContent={<AddRegular />} color="primary">
              Add Lead
            </Button>
            <Button
              onClick={handleOpenCustomBtn}
              size="small"
              startContent={<SettingsRegular />}
              color="primary"
            >
              Customize
            </Button>
          </>
        }
      >
        <Stack gap={spacingTokens.sm}>
          <OutlinedInput placeholder="Person/Business Name" fullWidth />
          <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
            <OutlinedInput placeholder="Phone No." fullWidth />
            <OutlinedInput placeholder="Email" fullWidth />
          </Stack>
          <OutlinedInput placeholder="Second Phone No." fullWidth />
          <OutlinedInput placeholder="Title" fullWidth />
          <OutlinedInput placeholder="Website" fullWidth />
          <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
            <OutlinedInput placeholder="NGN" fullWidth />
            <Select variant="filled" fullWidth displayEmpty>
              <MenuItem value="" disabled>
                Source
              </MenuItem>
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
            </Select>
          </Stack>
          <Select variant="filled" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Select Users
            </MenuItem>
            <MenuItem value="j">Johnwhite</MenuItem>
            <MenuItem value="C">Carmella</MenuItem>
            <MenuItem value="G">Tartor</MenuItem>
          </Select>
          <Select variant="filled" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Owner
            </MenuItem>
            <MenuItem value="j">Johnwhite</MenuItem>
            <MenuItem value="C">Carmella</MenuItem>
            <MenuItem value="G">Tartor</MenuItem>
          </Select>
          <Select variant="filled" aria-placeholder="List" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Select List
            </MenuItem>
            <MenuItem value="j">Johnwhite</MenuItem>
            <MenuItem value="C">Carmella</MenuItem>
            <MenuItem value="G">Tartor</MenuItem>
          </Select>
        </Stack>
      </ModalLayout>
      {openCustomBtn && <AddCustomBtnModal open onClose={() => setOpenCustomBtn(false)} />}
    </>
  );
}
