import { Box } from "@mui/material";
import StepCard from "./StepCard";
import { spacingTokens } from "@/lib/theme";

export default function ConnectMetaAddsPage() {
  return (
    <Box
      gap={spacingTokens.xl}
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
    >
      <StepCard
        label="1. Facebook Login"
        iconSrc="/facebook.png"
        description="Securely authorize your Meta Business account via Facebook's official OAuth flow. We never store your password."
      />
      <StepCard
        highlighted
        label="2. Select Ad Account"
        iconSrc="/select-announcement.png"
        description="Choose the specific Ads account you'd like to run your campaigns on. If you manage multiple accounts, you can easily switch between them at any time."
      />
      <StepCard
        label="3. Start Publishing"
        iconSrc="/success.png"
        description="Launch your ads directly to your selected Ads account with just a few clicks. Track performance and manage your campaigns all from one place."
      />
    </Box>
  );
}
