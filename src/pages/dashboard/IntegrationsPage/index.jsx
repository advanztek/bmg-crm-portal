import {
  AddIntegrationModal,
  IntegrationCard,
  PreviewIntegrationModal,
} from "@/components/feature";
import { Button, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Stack, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IntegrationsPage() {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Stack gap={spacingTokens.xl}>
        <Stack direction="row" alignItems="start" justifyContent="space-between">
          <Stack gap={spacingTokens.xs}>
            <Typography color="secondary" fontWeight={600} variant="h2">
              Connect Workflow
            </Typography>
            <Typography color="tertiary" variant="body2" lineHeight={1.25}>
              Manage all your favorite tools and services in one place.
            </Typography>
          </Stack>
          <Button>Connections</Button>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(4, 1fr)" }}
          gap={spacingTokens.md}
        >
          <IntegrationCard
            name="Gmail"
            imageUrl="/gmail.webp"
            description="Connect Gmail to sync and manage your emails directly within your workflow."
            tags={["hot"]}
            connected={false}
            onClick={() => {}}
          />
          <IntegrationCard
            name="Google Calendar"
            imageUrl="/google-calendar.png"
            description="Sync your Google Calendar to schedule and manage events seamlessly."
            tags={["hot"]}
            connected={false}
            onClick={() => {}}
          />
          <IntegrationCard
            name="WhatsApp"
            imageUrl="/whatsapp.png"
            description="Integrate WhatsApp Business to communicate with customers without leaving your workspace."
            tags={["hot"]}
            connected={false}
            onClick={() => {}}
          />
          <IntegrationCard
            name="Calendly"
            imageUrl="/calendly.png"
            description="Connect Calendly to automate meeting scheduling and avoid back-and-forth emails."
            tags={["hot"]}
            connected={false}
            onClick={() => {}}
          />
          <IntegrationCard
            name="Paystack"
            imageUrl="/paystack.png"
            description="Integrate Paystack to securely receive and manage payments within your platform."
            tags={["vital"]}
            connected={false}
            onClick={() => {}}
          />
          <IntegrationCard
            name="Meta Ads"
            imageUrl="/meta.png"
            description="Integrate Meta Ads to communicate with customers without leaving your workspace."
            tags={["hot"]}
            connected={false}
            onClick={() => {
              navigate("/meta-ads/connect");
            }}
          />
        </Box>
      </Stack>

      {openAdd && selected && (
        <AddIntegrationModal
          open
          onClose={() => {
            setSelected(null);
            setOpenAdd(false);
          }}
          selected={selected}
        />
      )}

      {openPreview && selected && (
        <PreviewIntegrationModal
          open
          onClose={() => {
            setSelected(null);
            setOpenPreview(false);
          }}
          selected={selected}
        />
      )}
    </>
  );
}
