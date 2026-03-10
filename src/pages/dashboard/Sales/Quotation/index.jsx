import { Toolbar } from "@/components/shared";
import { Button, Chip, Table, TableBody, TableHead } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { renderText } from "@/helpers/text";
import {
  CircleRegular,
  AddRegular,
  CalendarRegular,
  CircleSmallFilled,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import { Quotation, columns } from "./lib";
import { QuotationModal } from "@/components/feature";
import { COMPANY_STATUS_VARIANT, TASK_STATUS_VARIANT } from "@/lib/data";

export default function QuotationPage() {
  const [filterValues, setFilterValues] = useState({});
  const [openQuotation, setOpenQuotation] = useState(false);

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
  ];

  const handleFilterChange = useCallback(
    (/** @type {string} */ key, /** @type {string} */ value) => {
      setFilterValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  function handleAdd() {
    setOpenQuotation(true);
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
              <Button onClick={handleAdd} startContent={<AddRegular />}>
                Quotation
              </Button>
            </>
          }
        />
        <Table>
          <TableHead columns={columns}></TableHead>
          <TableBody loading={false} count={Quotation.length} span={columns.length}>
            {Quotation.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{renderText(row.id)}</TableCell>
                <TableCell>{renderText(row.Clients)}</TableCell>
                <TableCell>
                  <Chip
                    icon={<CircleSmallFilled />}
                    label={row.Status}
                    color={TASK_STATUS_VARIANT[row.Status]}
                    variant="filled"
                  />
                </TableCell>
                <TableCell>{renderText(row.Amount)}</TableCell>
                <TableCell>{renderText(row.Date)}</TableCell>
                <TableCell>{renderText(row.Services)}</TableCell>
                <TableCell>
                  <Chip
                    icon={<CircleSmallFilled />}
                    label={row.Tag}
                    color={COMPANY_STATUS_VARIANT[row.Tag]}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
      {openQuotation && <QuotationModal open onClose={() => setOpenQuotation(false)} />}
    </>
  );
}
