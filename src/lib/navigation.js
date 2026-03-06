import {
  AppsListRegular,
  BuildingRegular,
  CheckboxCheckedRegular,
  ClockRegular,
  CubeRegular,
  DataPieRegular,
  DeleteRegular,
  DiversityRegular,
  DocumentFolderRegular,
  DocumentLandscapeDataRegular,
  DocumentSquareRegular,
  FolderPeopleRegular,
  FormRegular,
  GlanceRegular,
  HandshakeRegular,
  MoneyRegular,
  PeopleAudienceRegular,
  PeopleTeamRegular,
  PeopleRegular,
  ProjectionScreenTextSparkleRegular,
  ReceiptRegular,
  SettingsRegular,
  TargetArrowRegular,
  TargetRegular,
  TextBulletListSquareRegular,
  TextQuoteFilled,
  WrenchSettingsRegular,
  CircleSparkleRegular,
  PersonRegular,
  BuildingHomeRegular,
  GridDotsRegular,
  PaymentRegular,
} from "@fluentui/react-icons";

/** @typedef {import("@/types/global.d.js").NavItem} NavItemProps */

export function useNavigationMenu() {
  const role = "customer";

  /**
   * @type {{
   *  admin?: NavItemProps[],
   *  customer?: NavItemProps[]
   * }}
   */
  const menu = {
    admin: [
      { label: "Overview", path: "/", icon: GlanceRegular },
      { label: "Users", path: "/users", icon: PeopleRegular },
      {
        label: "Category",
        path: "/category",
        icon: DiversityRegular,
        sub: [
          { label: "Sub Category", path: "/category/sub-category", icon: DiversityRegular },
          { label: "Add Category", path: "/category/add-category", icon: DiversityRegular },
        ],
      },
      { label: "Settings", path: "/settings", icon: SettingsRegular },
    ],
    customer: [
      { label: "Overview", path: "/", icon: GlanceRegular },
      { label: "Tasks", path: "/tasks", icon: TextBulletListSquareRegular, color: "#00FF5E" },
      {
        label: "Team",
        path: "/team",
        icon: FolderPeopleRegular,
        color: "#05A6F0",
      },
      {
        label: "CRM",
        path: "",
        icon: PeopleTeamRegular,
        color: "#05970F",
        sub: [
          { label: "Leads", path: "/leads", icon: TargetRegular },
          { label: "Deals", path: "/deals", icon: HandshakeRegular },
          { label: "Goals", path: "/goals", icon: TargetArrowRegular },
        ],
      },
      {
        label: "Sales",
        path: "",
        icon: DataPieRegular,
        color: "#0A62C7",
        sub: [
          { label: "Quotations", path: "/quotations", icon: TextQuoteFilled },
          { label: "Invoices", path: "/invoices", icon: ReceiptRegular },
          { label: "Proforma", path: "/proforma", icon: DocumentSquareRegular },
          { label: "Payments", path: "/payments", icon: MoneyRegular },
          { label: "Clients", path: "/clients", icon: PeopleAudienceRegular },
          { label: "Products", path: "/products", icon: CubeRegular },
        ],
      },
      {
        label: "Projects",
        path: "",
        icon: ProjectionScreenTextSparkleRegular,
        color: "#FF0004",
        sub: [
          { label: "Projects", path: "/projects", icon: AppsListRegular },
          { label: "Tasks", path: "/project/tasks", icon: CheckboxCheckedRegular },
          { label: "Templates", path: "/templates", icon: TargetArrowRegular },
          { label: "Timesheets", path: "/timesheets", icon: ClockRegular },
        ],
      },
      {
        label: "Files",
        color: "#2C3891",
        path: "",
        icon: DocumentFolderRegular,
        sub: [
          { label: "Files", path: "/files", icon: AppsListRegular },
          { label: "Trash", path: "/file/trash", icon: DeleteRegular },
        ],
      },
      { label: "Forms", color: "#3B009D", path: "/forms", icon: FormRegular },
      { label: "Automation", color: "#F1592A", path: "/automation", icon: WrenchSettingsRegular },
      { label: "Reports", color: "#00FF5E", path: "/reports", icon: DocumentLandscapeDataRegular },
      { label: "Integration", color: "#ff0099", path: "/integration", icon: CircleSparkleRegular },
    ],
  };

  return menu[role] || [];
}

export function useSettingsMenu() {
  const role = "customer";

  /**
   * @type {{
   *  admin?: NavItemProps[],
   *  customer?: NavItemProps[]
   * }}
   */
  const menu = {
    admin: [
      { label: "Account", path: "/settings/account", icon: PersonRegular },
      {
        label: "Organization",
        path: "",
        icon: BuildingHomeRegular,
        sub: [
          { label: "General", path: "/settings/organization/general", icon: GridDotsRegular },
          { label: "Members", path: "/settings/organization/members", icon: PeopleRegular },
          { label: "Billing", path: "/settings/organization/billing", icon: PaymentRegular },
        ],
      },
    ],
    customer: [
      { label: "Account", path: "/settings/account", icon: PersonRegular },
      {
        label: "Organization",
        path: "",
        icon: BuildingRegular,
        sub: [
          { label: "General", path: "/settings/organization/general", icon: GridDotsRegular },
          { label: "Members", path: "/settings/organization/members", icon: PeopleRegular },
          { label: "Billing", path: "/settings/organization/billing", icon: PaymentRegular },
        ],
      },
    ],
  };

  return menu[role] || [];
}
