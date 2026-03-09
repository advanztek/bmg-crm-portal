import {
  BuildingRegular,
  CheckboxCheckedRegular,
  GlanceRegular,
  PersonRegular,
  PersonStarRegular,
} from "@fluentui/react-icons";

/** @type {Record<string, import("@mui/material").ChipProps["color"]>} */
export const TASK_STATUS_VARIANT = {
  done: "success",
  "in-progress": "primary",
  "to-do": "warning",
  overdue: "error",
  cancelled: "default",
};

/** @type {Record<string, import("@mui/material").ChipProps["color"]>} */
export const TASK_PRIORITY_VARIANT = {
  low: "info",
  urgent: "error",
  high: "warning",
  medium: "primary",
};

/** @type {Record<string, import("@mui/material").ChipProps["color"]>} */
export const COMPANY_STATUS_VARIANT = {
  lead: "success",
  customer: "primary",
  prospect: "warning",
};

/** @type {Record<string, Omit<import("@/types/global.d.js").NavItem, "path" | "sub">>} */
export const namedRoutes = {
  "/": {
    label: "Overview",
    icon: GlanceRegular,
  },
  "/tasks": {
    label: "Tasks",
    icon: CheckboxCheckedRegular,
  },
  "/companies": {
    label: "Companies",
    icon: BuildingRegular,
  },
  "/settings/account": {
    label: "Account",
    icon: PersonRegular,
  },
  "/settings/company/general": {
    label: "Company",
    icon: BuildingRegular,
  },
  "/admins": {
    label: "Admins",
    icon: PersonStarRegular,
  },
};
/** @type {any} */
export const ROLES = {
  "1:1": "platform_super_admin",
};
