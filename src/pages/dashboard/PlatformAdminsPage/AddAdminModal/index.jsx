import { Button, Input, Select } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import {
  AddRegular,
  CallRegular,
  DismissRegular,
  FlagRegular,
  MailRegular,
  PersonBoardRegular,
  PersonCircleRegular,
  ShieldRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";
import { useForm } from "@/lib/form";
import { rules } from "./lib";
import { PulseLoader } from "react-spinners";
import { useMemo } from "react";
import { useGetCountries } from "@/queries/country";
import { useGetRoleSubRoles } from "@/queries/auth";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddAdminModal({ open, onClose }) {
  const { data: countries, loading: countriesLoading } = useGetCountries();
  const { data: subRoles, loading: subRolesLoading } = useGetRoleSubRoles(1);
  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      country_id: "",
      subrole_id: "",
    },
    rules: () => rules,
  });

  const selectedCountry = useMemo(
    () =>
      countries?.find((/** @type {any} */ country) => country?.id == formData?.country_id) ?? null,
    [countries, formData?.country_id],
  );

  async function handleSubmit() {
    if (!validateForm()) return;
    const req = { ...formData, role_id: 1 };
    console.log(req);
  }

  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title="Admin+"
      actionSlot={
        <>
          <Button
            size="small"
            color="secondary"
            onClick={onClose}
            startContent={<DismissRegular />}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={countriesLoading}
            size="small"
            startContent={<AddRegular />}
          >
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
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
        />
        <Input
          startAdornment={<PersonBoardRegular />}
          name="last_name"
          label="Last Name"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
        />
        <Input
          startAdornment={<MailRegular />}
          name="email"
          label="Email"
          type="email"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
        />
        <Select
          startAdornment={countriesLoading ? <PulseLoader size={10} /> : <FlagRegular />}
          name="country_id"
          label="Country"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          options={countries}
          disabled={countriesLoading || !countries || countries?.length < 1}
          renderOption={(option) => ({
            label: option?.name,
            value: option?.id,
          })}
        />
        <Input
          startAdornment={
            <>
              <CallRegular />
              {selectedCountry?.phone_code && <span>{selectedCountry.phone_code}</span>}
            </>
          }
          name="mobile"
          label="Phone"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
        />
        <Select
          startAdornment={subRolesLoading ? <PulseLoader size={10} /> : <ShieldRegular />}
          name="subrole_id"
          label="Role"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          options={subRoles}
          disabled={subRolesLoading || !subRoles || subRoles?.length < 1}
          renderOption={(option) => ({
            label: option?.name,
            value: option?.id,
          })}
        />
      </Stack>
    </ModalLayout>
  );
}
