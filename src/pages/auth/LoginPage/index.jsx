import { Button, Input } from "@/components/ui";
import { fontSizes } from "@/lib/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";
import { useForm } from "@/lib/form";
import { rules } from "./lib";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLogin } from "@/queries/auth";
import { filterObj } from "@/helpers/validation";
import { AuthSlot } from "@/components/shared";

export default function LoginPage() {
  const [params] = useSearchParams();
  const otpEnabled = params.get("otp_enabled");

  const navigate = useNavigate();

  const { fg, main } = useColor();
  const { loading, login } = useLogin();

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      email: "",
      password: "",
      otp: "",
    },
    rules: () => rules({ otpEnabled: !!otpEnabled && otpEnabled === "true" }),
  });

  async function handleSubmit() {
    if (!validateForm()) return;
    await login(filterObj(formData));
  }

  function goToPasswordReset() {
    navigate("/password/reset");
  }

  return (
    <AuthSlot
      title="Sell Smarter. Connect Better."
      subtitle="Your deals, contacts, and insights are waiting."
      actions={
        <>
          <Button size="large" loading={loading} onClick={handleSubmit}>
            Submit
          </Button>

          <Box component="p" m={0} p={0} fontSize={fontSizes.caption} color={fg.primary}>
            Forgot Password?{" "}
            <Box
              component="span"
              fontWeight={500}
              color={main.primary}
              onClick={goToPasswordReset}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Reset
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
      />

      <Input
        label="Password"
        name="password"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
        type="password"
      />
    </AuthSlot>
  );
}
