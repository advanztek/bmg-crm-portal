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
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";
import { useForm } from "@/lib/form";
import { rules } from "./lib";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";

/**
 * @typedef {Object} Props
 * @property {Array<any>} countries
 * @property {boolean} countriesLoading
 */

/**
 * @param {import("@/types/global.d").ModalConfig & Props} props
 */
export default function AddAdminModal({ open, onClose, countries, countriesLoading }) {
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
  const [selectedCountry, setSelectedCountry] = useState(/** @type {any} */ (null));

  async function handleSubmit() {
    if (!validateForm()) return;
  }

  useEffect(() => {
    if (formData?.country_id) {
      setSelectedCountry(
        countries?.find((currentCountry) => currentCountry?.id == formData?.country_id),
      );
    }
  }, [formData?.country_id]);

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
          <Button
            onClick={handleSubmit}
            disabled={countriesLoading}
            size="small"
            round={0}
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
          startAdornment={countriesLoading ? <PulseLoader /> : <FlagRegular />}
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
              {selectedCountry && selectedCountry?.phone_code && (
                <span>{selectedCountry?.phone_code}</span>
              )}
            </>
          }
          name="mobile"
          label="Phone"
          value={(name) => formData?.[name]}
          error={(name) => formErrors?.[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
        />
      </Stack>
    </ModalLayout>
  );
}
