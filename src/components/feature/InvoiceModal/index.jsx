import { Button, Table, TableBody, TableHead } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { ModalLayout } from "@/layouts";
import { AddRegular } from "@fluentui/react-icons";
import { MenuItem, OutlinedInput, Select, Stack, TableCell, TableRow } from "@mui/material";
import { ActionButton } from "@/components/shared";
import { columns, Invoice } from "./lib";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function InvoiceModal({ open, onClose }) {
  return (
    <ModalLayout
      open={open}
      width={{ xs: "800px" }}
      onClose={onClose}
      title="Invoice Template"
      actionSlot={
        <Button size="small" startContent={<AddRegular />} color="primary">
          Add Invoice
        </Button>
      }
    >
      <Stack gap={spacingTokens.sm}>
        <OutlinedInput placeholder="Basic Invoice" fullWidth />

        <Stack direction="row" gap={spacingTokens.sm}>
          <OutlinedInput type="date" fullWidth />
          <OutlinedInput type="date" fullWidth />
          <OutlinedInput placeholder="Sales Person" fullWidth />
        </Stack>

        <OutlinedInput placeholder="Tags" fullWidth />
        <OutlinedInput placeholder="Client" fullWidth />

        <Stack direction="row" gap={spacingTokens.sm}>
          <OutlinedInput placeholder="Contact" fullWidth />

          <Select variant="filled" fullWidth displayEmpty>
            <MenuItem value="" disabled>
              Deals
            </MenuItem>
            <MenuItem value="g">Golden</MenuItem>
            <MenuItem value="p">Premium</MenuItem>
            <MenuItem value="b">Basic</MenuItem>
          </Select>
        </Stack>

        <Select variant="filled" fullWidth displayEmpty>
          <MenuItem value="" disabled>
            Subject
          </MenuItem>
          <MenuItem value="j">Norm</MenuItem>
          <MenuItem value="c">Create</MenuItem>
          <MenuItem value="g">Bluey</MenuItem>
        </Select>

        <Table>
          <TableHead columns={columns} />

          <TableBody loading={false} count={Invoice.length} span={columns.length}>
            {Invoice.map((_, index) => (
              <TableRow key={index}>
                <TableCell sx={{ verticalAlign: "top", minWidth: 320 }}>
                  <Stack gap={spacingTokens.sm}>
                    <OutlinedInput placeholder="Type or Select Product/Service" fullWidth />
                    <OutlinedInput placeholder="Add Description" multiline rows={3} fullWidth />
                    <Stack
                      direction="row"
                      gap={1}
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "6px",
                        padding: "6px",
                        width: "fit-content",
                      }}
                    >
                      <Button size="small">☑</Button>
                      <Button size="small">≡</Button>
                      <Button size="small">≣</Button>
                      <Button size="small">🔗</Button>
                      <Button size="small">
                        <b>B</b>
                      </Button>
                    </Stack>

                    <Button size="small" startContent={<AddRegular />} color="secondary">
                      Add Product
                    </Button>
                  </Stack>
                </TableCell>

                {/* Quantity Cell */}
                <TableCell sx={{ verticalAlign: "top", width: 150 }}>
                  <Select variant="filled" fullWidth displayEmpty>
                    <MenuItem value="" disabled>
                      Quantity
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </TableCell>

                <TableCell sx={{ verticalAlign: "top", width: 150 }}>
                  <Select variant="filled" fullWidth displayEmpty>
                    <MenuItem value="" disabled>
                      Rates
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </TableCell>

                <TableCell sx={{ verticalAlign: "top", width: 150 }}>
                  <Select variant="filled" fullWidth displayEmpty>
                    <MenuItem value="" disabled>
                      Discounts
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </TableCell>

                <TableCell sx={{ verticalAlign: "top", width: 150 }}>
                  <Select variant="filled" fullWidth displayEmpty>
                    <MenuItem value="" disabled>
                      Select Tax rate
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </TableCell>

                <TableCell sx={{ verticalAlign: "top", width: 150 }}>
                  <Select variant="filled" fullWidth displayEmpty>
                    <MenuItem value="" disabled>
                      Amount
                    </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="right" sx={{ verticalAlign: "top", width: 80 }}>
                  <ActionButton variation="delete" onClick={() => console.log("delete")} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack direction="row" gap={spacingTokens.sm}>
          <Button size="small" startContent={<AddRegular />} color="success">
            Line Item
          </Button>

          <Button size="small" variant="outlined">
            Heading
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: 3 }}>
          <Button variant="outlined">Edit Content</Button>
          <Stack gap={1} sx={{ minWidth: 200 }}>
            <Stack direction="row" justifyContent="space-between">
              <span>Subtotal</span>
              <span>GHS: 400.00</span>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <span>Taxes</span>
              <span>GHS: 400.00</span>
            </Stack>

            <Stack direction="row" justifyContent="space-between" sx={{ fontWeight: 600 }}>
              <span>Total</span>
              <span>GHS: 400.00</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ModalLayout>
  );
}
