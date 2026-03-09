import { Button, Input, Select } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import {
  AddRegular,
  DismissRegular,
  DiversityRegular,
  MailRegular,
  PersonBoardRegular,
  PersonCircleRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";
import { useGetCountries } from "@/queries/country";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddAdminModal({ open, onClose }) {
  const { data: countries, loading: countriesLoading } = useGetCountries();
  console.log("countries");
  console.log(countriesLoading);

  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title="Admin+"
      actionSlot={
        <>
          <Button size="small" round={0} color="secondary" startContent={<DismissRegular />}>
            Cancel
          </Button>
          <Button disabled={countriesLoading} size="small" round={0} startContent={<AddRegular />}>
            Submit
          </Button>
        </>
      }
    >
      <Stack gap={spacingTokens.md}>
        <Input
          startAdornment={<PersonCircleRegular />}
          name="first_name"
          label="First Name"
          value={() => ""}
          onChange={() => console.log("dfdf")}
        />
        <Input
          startAdornment={<PersonBoardRegular />}
          name="last_name"
          label="Last Name"
          value={() => ""}
          onChange={() => console.log("dfdf")}
        />
        <Input
          startAdornment={<MailRegular />}
          name="email"
          label="Email"
          type="email"
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
