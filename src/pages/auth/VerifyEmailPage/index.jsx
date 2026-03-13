import { AuthSlot } from "@/components/shared";
import { Button, Input } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { useForm } from "@/lib/form";
import { fontSizes } from "@/lib/theme";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { rules } from "./lib";
import { useVerifyEmail } from "@/queries/auth";

export default function VerifyEmailPage() {
  const [params] = useSearchParams();
  const accountEmail = params.get("account");
  const navigate = useNavigate();
  const { verifyEmail, loading } = useVerifyEmail();

  const { main, fg } = useColor();

  useEffect(() => {
    if (!accountEmail) {
      navigate(-1);
    }
  }, [accountEmail, navigate]);

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      email: accountEmail || "",
      otp: "",
    },
    rules: () => rules,
  });

  function goToLogin() {
    navigate("/login");
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    await verifyEmail({ ...formData, otp_type: "email_verification" });
  }

  return (
    <AuthSlot
      title="Unlock Possibility!"
      subtitle="Enter verification code."
      actions={
        <>
          <Button size="large" onClick={handleSubmit} loading={loading}>
            Submit
          </Button>

          <Box component="p" m={0} p={0} fontSize={fontSizes.caption} color={fg.primary}>
            Have an account?{" "}
            <Box
              component="span"
              fontWeight={500}
              color={main.primary}
              onClick={goToLogin}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Go to Login
            </Box>
          </Box>
        </>
      }
    >
      <Input
        label="Email"
        name="email"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
        disabled
      />
      <Input
        label="Code"
        name="token"
        type="text"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
    </AuthSlot>
  );
}
