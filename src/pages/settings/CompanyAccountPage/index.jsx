import { Button, Typography, Input, Avatar, Select } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { AddRegular, SendRegular, SubtractRegular } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";

export default function CompanyAccountPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Stack direction="row" alignItems="stretch" gap={spacingTokens.md}>
        <Avatar size={50} imageUrl="" name="Lumcrea8" />
        <Stack justifyContent="space-between">
          <Stack direction="row" gap={spacingTokens.sm}>
            <Button size="small" startContent={<AddRegular />}>
              Change
            </Button>
            <Button size="small" color="secondary" startContent={<SubtractRegular />}>
              Remove
            </Button>
          </Stack>
          <Typography color="secondary" variant="caption" lineHeight={1}>
            We support PNGs, JPEGs, JPGs under 2MB.
          </Typography>
        </Stack>
      </Stack>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gap={spacingTokens.xl}
      >
        <Stack gap={spacingTokens.lg}>
          <Input name="max_users" label="Size" value={(name) => ""} />
          <Input name="name" label="Name" value={(name) => ""} />
          <Input name="phone" label="Phone" value={(name) => ""} />
          <Input name="website" label="Website" value={(name) => ""} />
        </Stack>
        <Stack gap={spacingTokens.lg}>
          <Input name="about" label="About" multiline rows={2} value={(name) => ""} />
          <Input name="address" label="Address" multiline rows={3} value={(name) => ""} />
          <Select
            name="country"
            label="Country"
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
        <Stack gap={spacingTokens.lg}>
          <Input name="facebook" label="Facebook" value={(name) => ""} />
          <Input name="twitter" label="Twitter" value={(name) => ""} />
          <Input name="instagram" label="Instagram" value={(name) => ""} />
          <Input name="tiktok" label="Tiktok" value={(name) => ""} />
        </Stack>
      </Box>

      <Stack direction="row" gap={spacingTokens.sm}>
        <Button size="large" className="rect" startContent={<SendRegular />}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}
