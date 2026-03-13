import { Button, Input } from "@/components/ui";
import { spacingTokens, fontSizes } from "@/lib/theme";
import { Box, Stack } from "@mui/material";
import { useForm } from "@/lib/form";
import { rules } from "./lib";
import { useResetPassword, useVerifyPasswordReset } from "@/queries/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthSlot } from "@/components/shared";
import { useColor } from "@/contexts/color";

export default function ResetPasswordPage() {
  const [params, setParams] = useSearchParams();
  const otpSent = params.get("code_sent");
  const accountEmail = params.get("account");

  const isOtpSent = otpSent === "yes" && !!accountEmail;

  const navigate = useNavigate();
  const { fg, main } = useColor();

  const { loading, resetPassword } = useResetPassword();
  const { loading: verificationLoading, verifyPasswordReset } = useVerifyPasswordReset();

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      email: accountEmail || "",
      token: "",
      password: "",
      confirmPassword: "",
    },
    rules: (formData) =>
      rules({
        otpSent: isOtpSent,
        password: formData?.password,
      }),
  });

  async function handleSubmit() {
    if (!validateForm()) return;

    const response = await resetPassword(formData);

    if (response === "SUCCESS") {
      setParams({
        code_sent: "yes",
        account: formData?.email,
      });
    }
  }

  async function handleVerification() {
    if (!validateForm()) return;

    const response = await verifyPasswordReset(formData);

    if (response === "SUCCESS") {
      navigate("/login");
    }
  }

  function goToLogin() {
    navigate("/login");
  }

  return (
    <AuthSlot
      title="Forgot Password?"
      subtitle="Say no more. Get another password!"
      actions={
        <>
          {isOtpSent ? (
            <Button size="large" loading={verificationLoading} onClick={handleVerification}>
              Submit
            </Button>
          ) : (
            <Button size="large" loading={loading} onClick={handleSubmit}>
              Send Code
            </Button>
          )}

          <Box component="p" m={0} p={0} fontSize={fontSizes.caption} color={fg.primary}>
            Remember your password?{" "}
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
      <Stack gap={spacingTokens.md}>
        <Input
          label="Email"
          name="email"
          value={(name) => formData[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          error={(name) => formErrors?.[name]}
          disabled={isOtpSent}
        />

        {isOtpSent && (
          <>
            <Input
              label="Code"
              name="token"
              type="text"
              value={(name) => formData[name]}
              onChange={(name, value) => onChange(name, value)}
              onBlur={(name, value) => onBlur(name, value)}
              error={(name) => formErrors?.[name]}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={(name) => formData[name]}
              onChange={(name, value) => onChange(name, value)}
              onBlur={(name, value) => onBlur(name, value)}
              error={(name) => formErrors?.[name]}
            />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={(name) => formData[name]}
              onChange={(name, value) => onChange(name, value)}
              onBlur={(name, value) => onBlur(name, value)}
              error={(name) => formErrors?.[name]}
            />
          </>
        )}
      </Stack>
    </AuthSlot>
  );
}
