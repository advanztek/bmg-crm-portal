import { ActionButton, Toolbar } from "@/components/shared";
import { Button, Checkbox, Chip, Table, TableBody, TableHead } from "@/components/ui";
import { COMPANY_STATUS_VARIANT } from "@/constants/lib";
import { spacingTokens } from "@/constants/theme";
import { renderDateTime } from "@/helpers/date";
import { renderText } from "@/helpers/text";
import {
  AddRegular,
  AlignBottomRegular,
  BuildingRegular,
  CheckboxUncheckedRegular,
  CircleRegular,
  CircleSmallFilled,
  MoneyRegular,
  NumberSymbolRegular,
  PersonRegular,
  SlideSizeRegular,
  TimeAndWeatherRegular,
} from "@fluentui/react-icons";
import { MailRegular } from "@fluentui/react-icons/fonts";
import { Stack, TableCell, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import AddCompanyModal from "./AddCompanyModal";

const companies = [
  {
    id: "cmp_001",
    name: "NovaTech Solutions",
    industry: "Information Technology",
    companySize: "51-200",
    website: "https://novatechsolutions.com",
    email: "contact@novatechsolutions.com",
    phone: "+1-415-555-0123",
    status: "prospect",
    annualRevenue: 4200000,
    currency: "USD",
    address: {
      street: "455 Market Street",
      city: "San Francisco",
      state: "CA",
      country: "United States",
      postalCode: "94105",
    },
    socialLinks: {
      linkedin: "https://linkedin.com/company/novatechsolutions",
      twitter: "https://twitter.com/novatech",
    },
    tags: ["B2B", "SaaS", "High Priority"],
    ownerId: "user_001",
    createdAt: "2026-02-10T09:15:00Z",
    updatedAt: "2026-02-15T11:22:00Z",
  },
  {
    id: "cmp_002",
    name: "GreenHarvest Agro Ltd",
    industry: "Agriculture",
    companySize: "201-500",
    website: "https://greenharvestagro.ng",
    email: "info@greenharvestagro.ng",
    phone: "+234-803-555-7788",
    status: "customer",
    annualRevenue: 12000000,
    currency: "NGN",
    address: {
      street: "12 Aba Road",
      city: "Port Harcourt",
      state: "Rivers",
      country: "Nigeria",
      postalCode: "500102",
    },
    socialLinks: {
      linkedin: "https://linkedin.com/company/greenharvestagro",
    },
    tags: ["Enterprise", "Long-Term Client"],
    ownerId: "user_002",
    createdAt: "2026-01-05T14:45:00Z",
    updatedAt: "2026-02-20T08:30:00Z",
  },
  {
    id: "cmp_003",
    name: "Pulse Fitness Group",
    industry: "Health & Wellness",
    companySize: "11-50",
    website: "https://pulsefitnessgroup.com",
    email: "support@pulsefitnessgroup.com",
    phone: "+44-20-5555-9988",
    status: "lead",
    annualRevenue: 850000,
    currency: "GBP",
    address: {
      street: "22 Baker Street",
      city: "London",
      country: "United Kingdom",
      postalCode: "NW1 6XE",
    },
    tags: ["SMB", "Inbound Lead"],
    ownerId: "user_001",
    createdAt: "2026-02-22T16:10:00Z",
    updatedAt: "2026-02-22T16:10:00Z",
  },
];

/** @type {Array<import("@/types/global.d").TableColumn>} */
const columns = [
  { label: "", icon: CheckboxUncheckedRegular },
  { label: "ID", icon: NumberSymbolRegular },
  { label: "Company", icon: BuildingRegular },
  { label: "Email", icon: MailRegular },
  { label: "Status", icon: CircleRegular },
  { label: "Currency", icon: MoneyRegular },
  { label: "Size", icon: SlideSizeRegular },
  { label: "Revenue", icon: AlignBottomRegular },
  { label: "Created At", icon: TimeAndWeatherRegular },
  { label: "Action", icon: CircleRegular, align: "left" },
];

export default function CompaniesPage() {
  const [filterValues, setFilterValues] = useState({});
  const [openAdd, setOpenAdd] = useState(false);

  const userOptions = [
    { name: "Alice", id: "alice" },
    { name: "Bob", id: "bob" },
  ];

  /** @type {import("@/types/global.d").FilterConfig[]} */
  const filters = [
    { type: "search", key: "query" },
    { type: "field", key: "field" },
    {
      type: "select",
      key: "user",
      label: { icon: PersonRegular, label: "Assignee", accent: "#0078D4" },
      items: userOptions,
      renderItem: (user) => ({
        label: user.name,
        value: user.id,
      }),
    },
    { type: "date", fromKey: "dateFrom", toKey: "dateTo" },
  ];

  const handleFilterChange = useCallback(
    (/** @type {string} */ key, /** @type {string} */ value) => {
      setFilterValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  function handleAdd() {
    setOpenAdd(true);
  }

  return (
    <>
      <Stack gap={spacingTokens.xl}>
        <Toolbar
          filters={filters}
          filterValues={filterValues}
          onFilterChange={handleFilterChange}
          action={
            <Button onClick={handleAdd} startContent={<AddRegular />}>
              Company
            </Button>
          }
        />

        <Table>
          <TableHead columns={columns}></TableHead>
          <TableBody loading={false} count={companies.length} span={columns.length}>
            {companies.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>{renderText(row.id)}</TableCell>
                <TableCell>{renderText(row.name)}</TableCell>
                <TableCell>{renderText(row.email)}</TableCell>
                <TableCell>
                  <Chip
                    icon={<CircleSmallFilled></CircleSmallFilled>}
                    label={row.status}
                    color={COMPANY_STATUS_VARIANT[row.status]}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{renderText(row.currency)}</TableCell>
                <TableCell>{renderText(row.companySize)}</TableCell>
                <TableCell>{row.annualRevenue}</TableCell>
                <TableCell>{renderDateTime(row.createdAt)}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" gap={spacingTokens.sm}>
                    <ActionButton
                      variation="edit"
                      onClick={() => console.log("null")}
                    ></ActionButton>
                    <ActionButton
                      variation="preview"
                      onClick={() => console.log("null")}
                    ></ActionButton>
                    <ActionButton
                      variation="delete"
                      onClick={() => console.log("null")}
                    ></ActionButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>

      {openAdd && <AddCompanyModal open onClose={() => setOpenAdd(false)} />}
    </>
  );
}
