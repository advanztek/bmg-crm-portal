import { ModalLayout } from "@/layouts";
import { Stack } from "@mui/material";
import Integration from "./Integration";

/**
 * @typedef {Object} Props
 * @property {Record<string, any>} selected
 */

/**
 * @param {import("@/types/global.d").ModalConfig & Props} props
 */
export default function PreviewIntegrationModal({ open, onClose, selected }) {
  return (
    <ModalLayout open={open} onClose={onClose}>
      <Stack>
        <Integration
          name={selected?.name}
          username="aondoahemenjeho@gmail.com"
          imageUrl={selected?.imageUrl}
        />
      </Stack>
    </ModalLayout>
  );
}
