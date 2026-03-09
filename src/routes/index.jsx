import { AuthLayout, DashboardLayout, SettingsLayout } from "@/layouts";
import { ResetPasswordPage, LoginPage } from "@/pages/auth";
import {
  AdminOverviewPage,
  CompaniesPage,
  CustomerOverviewPage,
  DesignSystemPage,
  PlatformAdminsPage,
  TasksPage,
} from "@/pages/dashboard";
import { CompanyAccountPage, VendorAccountPage } from "@/pages/settings";
import { useAuthStore } from "@/store/auth";
import { Routes as BaseRoutes, Route } from "react-router-dom";

export default function Routes() {
  const { permission } = useAuthStore.getState();
  const ROLE = permission?.role_id;
  const SUB_ROLE = permission?.subrole_id;

  console.log("Role");
  console.log(ROLE);

  console.log("sUB Role");
  console.log(SUB_ROLE);

  return (
    <BaseRoutes>
      <Route element={<DashboardLayout />}>
        <Route path="/design/system" element={<DesignSystemPage />} />
        {/* PLATFORM SUPER ADMIN */}
        {ROLE == 1 && SUB_ROLE == 1 && (
          <>
            <Route path="/" element={<AdminOverviewPage />} />
            <Route path="/admins" element={<PlatformAdminsPage />} />
          </>
        )}

        {ROLE === "CUSTOMER" && (
          <>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/" element={<CustomerOverviewPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
          </>
        )}
      </Route>

      <Route element={<AuthLayout />}>
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/password/reset" element={<ResetPasswordPage />} />
        </>
      </Route>

      <Route element={<SettingsLayout />}>
        <>
          <Route path="/settings/account" element={<VendorAccountPage />} />
          <Route path="/settings/company/general" element={<CompanyAccountPage />} />
        </>
      </Route>
    </BaseRoutes>
  );
}
