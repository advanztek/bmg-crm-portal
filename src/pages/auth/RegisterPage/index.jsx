import { AuthSlot } from "@/components/shared";
import { Button } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { useForm } from "@/lib/form";
import { fontSizes } from "@/lib/theme";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { rules, steps } from "./lib";
import { useState } from "react";
import StepOne from "./StepOne";
import StepNav from "./StepNav";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { useRegister } from "@/queries/auth";
import { filterObj } from "@/helpers/validation";
import { convertToBase64 } from "@/helpers/text";
import { useMemo } from "react";
import { useGetCountries } from "@/queries/country";

export default function RegisterPage() {
  const { fg, main } = useColor();
  const { data: countries, loading: countriesLoading } = useGetCountries();
  const navigate = useNavigate();
  const { register, loading } = useRegister();
  const [step, setStep] = useState(0);

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      0: {
        first_name: "",
        last_name: "",
        email: "",
        country_id: "",
        mobile: "",
      },
      1: {
        company_name: "",
        team_number: "",
        address: "",
        about_us: "",
      },
      2: {
        logo: "",
        primary_color: "",
      },
      3: {
        how_you_heard_about_us: "",
        other_specify: "",
      },
      4: {
        password: "",
        confirm_password: "",
      },
    },
    rules: (formData) => rules(formData),
    step,
  });

  const selectedCountry = useMemo(
    () =>
      countries?.find((/** @type {any} */ country) => country?.id == formData?.[0]?.country_id) ??
      null,
    [countries, formData?.[0]?.country_id],
  );

  async function handleSubmit() {
    if (!validateForm()) return;
    if (step === 4) {
      const req = Object.values(formData).reduce((acc, curr) => ({ ...acc, ...curr }), {});
      const response = await register(
        filterObj(
          {
            ...req,
            mobile: `${selectedCountry.phone_code}${req.mobile}`,
            logo: formData?.logo ? await convertToBase64(formData?.logo) : "",
          },
          ["confirm_password"],
        ),
      );
      if (response === "SUCCESS") {
        navigate(`/email/verification?account=${encodeURIComponent(req?.email)}`);
      }
    } else {
      setStep(step + 1);
    }
  }

  function goToLogin() {
    if (loading) return;
    navigate("/login");
  }

  return (
    <AuthSlot
      title="Start Growing Your Business."
      subtitle="The magic starts from here."
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
      <StepNav
        active={step + 1}
        total={steps.length}
        title={steps[step]}
        onBack={() => setStep(step - 1)}
      />
      {step === 0 && (
        <StepOne
          formData={formData[step]}
          onChange={onChange}
          onBlur={onBlur}
          formErrors={formErrors[step]}
          countries={countries}
          countriesLoading={countriesLoading}
          selectedCountry={selectedCountry}
        />
      )}
      {step === 1 && (
        <StepTwo
          formData={formData[step]}
          onChange={onChange}
          onBlur={onBlur}
          formErrors={formErrors[step]}
        />
      )}
      {step === 2 && (
        <StepThree
          formData={formData[step]}
          onChange={onChange}
          onBlur={onBlur}
          formErrors={formErrors[step]}
        />
      )}
      {step === 3 && (
        <StepFour
          formData={formData[step]}
          onChange={onChange}
          onBlur={onBlur}
          formErrors={formErrors[step]}
        />
      )}
      {step === 4 && (
        <StepFive
          formData={formData[step]}
          onChange={onChange}
          onBlur={onBlur}
          formErrors={formErrors[step]}
        />
      )}
    </AuthSlot>
  );
}
