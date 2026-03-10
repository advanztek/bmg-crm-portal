import { AuthLayout, DashboardLayout, SettingsLayout } from "@/layouts";
import { ResetPasswordPage, LoginPage } from "@/pages/auth";
import {
  AdminOverviewPage,
  CompaniesPage,
  CustomerOverviewPage,
  DesignSystemPage,
  InvoicePage,
  LeadsPage,
  QuotationPage,
  TasksPage,
} from "@/pages/dashboard";
import { CompanyAccountPage, VendorAccountPage } from "@/pages/settings";
import { Routes as BaseRoutes, Route } from "react-router-dom";

export default function Routes() {
  const AUTHENTICATED_USER = /** @type {"CUSTOMER" | "ADMIN"} */ ("CUSTOMER");

  return (
    <BaseRoutes>
      <Route element={<DashboardLayout />}>
        <Route path="/design/system" element={<DesignSystemPage />} />
        {AUTHENTICATED_USER === "ADMIN" && (
          <>
            <Route path="/" element={<AdminOverviewPage />} />
          </>
        )}

        {AUTHENTICATED_USER === "CUSTOMER" && (
          <>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/" element={<CustomerOverviewPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/quotations" element={<QuotationPage />} />
            <Route path="/invoices" element={<InvoicePage />} />
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
