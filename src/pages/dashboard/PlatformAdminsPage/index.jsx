import { Button } from "@/components/ui";
import { AddRegular } from "@fluentui/react-icons";
import { Stack } from "@mui/material";
import { useState } from "react";
import AddAdminModal from "./AddAdminModal";
import { useGetCountries } from "@/queries/country";

export default function PlatformAdminsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const { data: countries, loading: countriesLoading } = useGetCountries();

  function handleAdd() {
    setOpenAdd(true);
  }

  return (
    <>
      <Stack direction="row">
        <Button startContent={<AddRegular />} onClick={handleAdd}>
          Add
        </Button>
      </Stack>

      {openAdd && (
        <AddAdminModal
          open
          onClose={() => setOpenAdd(false)}
          countries={countries}
          countriesLoading={countriesLoading}
        />
      )}
    </>
  );
}
