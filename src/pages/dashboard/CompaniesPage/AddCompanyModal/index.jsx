import { Button, Input, Select } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import {
  AddRegular,
  DismissRegular,
  DiversityRegular,
  MailRegular,
  PersonRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddCompanyModal({ open, onClose }) {
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title="Company"
      actionSlot={
        <>
          <Button size="small" color="secondary" startContent={<DismissRegular />}>
            Cancel
          </Button>
          <Button size="small" startContent={<AddRegular />}>
            Submit
          </Button>
        </>
      }
    >
      <Stack gap={spacingTokens.md}>
        <Input
          startAdornment={<PersonRegular />}
          name="name"
          label="Name"
          value={() => ""}
          onChange={() => console.log("dfdf")}
        />
        <Input
          startAdornment={<MailRegular />}
          name="email"
          label="Email"
          value={() => ""}
          onChange={() => console.log("dfdf")}
        />
        <Select
          startAdornment={<DiversityRegular />}
          name="industry"
          label="Industry"
          value={() => ""}
          onChange={() => console.log("dfdf")}
          onBlur={() => console.log("dfdf")}
          options={["Algeria", "Ghana", "South Africa"]}
          renderOption={(option) => ({
            label: option,
            value: option,
          })}
        />
      </Stack>
    </ModalLayout>
  );
}
