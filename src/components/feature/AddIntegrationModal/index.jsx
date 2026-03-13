import { Button, CheckboxGroup, Input, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import { AddRegular } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";
import { capitalizeWords, replaceCharacter } from "@/helpers/text";

/**
 * @typedef {Object} Props
 * @property {Record<string, any>} selected
 */

/**
 * @param {import("@/types/global.d").ModalConfig & Props} props
 */
export default function AddIntegrationModal({ open, onClose, selected }) {
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title={selected?.name || "Untitled"}
      actionSlot={
        <Button size="small" fullWidth startContent={<AddRegular />}>
          Connect
        </Button>
      }
    >
      {selected?.fields ? (
        <Stack gap={spacingTokens.sm}>
          {Object.keys(selected?.fields || {}).map((field, index) => {
            const fieldMeta = selected?.fields[field];
            const type = fieldMeta?.type;

            return (
              <Box key={index}>
                {(type == "text" || type == "email") && (
                  <Input
                    name={field}
                    label={capitalizeWords(replaceCharacter(field, "_", " "))}
                    value={() => ""}
                    onChange={() => console.log("dfdf")}
                  />
                )}

                {type == "secret" && (
                  <Input
                    name={field}
                    type="password"
                    label={capitalizeWords(replaceCharacter(field, "_", " "))}
                    value={() => ""}
                    onChange={() => console.log("dfdf")}
                  />
                )}

                {type == "multi_choice" && (
                  <CheckboxGroup
                    name={field}
                    label={capitalizeWords(replaceCharacter(field, "_", " "))}
                    value={() => ""}
                    onChange={() => console.log("dfdf")}
                    options={fieldMeta?.options}
                    renderOptionLabel={(option) => option?.label}
                    renderOptionValue={(option) => option?.value}
                  />
                )}
              </Box>
            );
          })}
        </Stack>
      ) : (
        <Typography variant="caption" color="tertiary" textAlign="center">
          No Requirements! Proceed to Connect.
        </Typography>
      )}
    </ModalLayout>
  );
}
