// import { AddTaskModal } from "@/components/feature";
import { Toolbar } from "@/components/shared";
import { Button, Checkbox, Table, TableBody, TableHead } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { renderText } from "@/helpers/text";
import {
  CircleRegular,
  AddRegular,
  CalendarRegular,
  CheckmarkCircleHintFilled,
  NoteRegular,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import { Leads, columns } from "./lib";
import { AddLeadsModal } from "@/components/feature";

export default function LeadsPage() {
  const [filterValues, setFilterValues] = useState({});
  const [openAdd, setOpenAdd] = useState(false);

  const userOptions = [
    { name: "New", id: "new" },
    { name: "Follow up", id: "followup" },
  ];

  const statusOptions = [
    { name: "Active", id: "active" },
    { name: "In Active", id: "inactive" },
  ];

  /** @type {import("@/types/global.d").FilterConfig[]} */
  const filters = [
    { type: "search", key: "query" },
    {
      type: "field",
      key: "field",
      items: [
        {
          label: "Date From",
          value: "date_from",
          icon: CalendarRegular,
        },
        {
          label: "Date To",
          value: "date_to",
          icon: CalendarRegular,
        },
        {
          label: "Status",
          value: "status",
          icon: CircleRegular,
        },
      ],
      renderItem: (field) => ({
        label: field.label,
        value: field.value,
        icon: field.icon,
      }),
    },
    {
      type: "select",
      key: "user",
      label: { label: "Next activity Date", icon: CalendarRegular, accent: "" },
      items: userOptions,
      renderItem: (user) => ({
        label: user.name,
        value: user.id,
      }),
    },
    {
      type: "select",
      key: "status",
      label: { label: "Status", icon: CheckmarkCircleHintFilled, accent: "red" },
      items: statusOptions,
      renderItem: (user) => ({
        label: user.name,
        value: user.id,
      }),
    },
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
            <>
              <Button color="secondary" startContent={<NoteRegular />}>
                Import
              </Button>
              <Button onClick={handleAdd} startContent={<AddRegular />}>
                Leads
              </Button>
            </>
          }
        />
        <Table>
          <TableHead columns={columns}></TableHead>
          <TableBody loading={false} count={Leads.length} span={columns.length}>
            {Leads.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell>{renderText(row.id)}</TableCell>
                <TableCell>{renderText(row.Name)}</TableCell>
                <TableCell>{renderText(row.Title)}</TableCell>
                <TableCell>{renderText(row.Stage)}</TableCell>
                <TableCell>{renderText(row.Mobile)}</TableCell>
                <TableCell>{renderText(row.Email)}</TableCell>
                <TableCell>{renderText(row.Notes)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
      {openAdd && <AddLeadsModal open onClose={() => setOpenAdd(false)} />}
    </>
  );
}
