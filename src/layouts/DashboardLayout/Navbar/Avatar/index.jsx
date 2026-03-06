import { Dropdown } from "@/components/shared";
import { actionSizes } from "@/lib/theme";
import { BuildingRegular, SettingsRegular } from "@fluentui/react-icons";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Settings",
    icon: SettingsRegular,
    path: "/settings/account",
  },
  {
    label: "Company",
    icon: BuildingRegular,
    path: "/settings/account",
  },
];

export default function Avatar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(
    /** @type {(EventTarget & HTMLDivElement) | null} */ (null),
  );

  const isOpen = Boolean(anchorEl);

  function handleNavigate(/** @type {string} */ path) {
    navigate(path);
  }

  return (
    <Box>
      <Box
        component="img"
        src="/avatar.png"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          borderRadius: "999px",
          height: actionSizes.small,
          width: actionSizes.small,
          cursor: "pointer",
        }}
      ></Box>
      <Dropdown
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        items={items}
        renderItem={(item) => ({
          label: item.label,
          value: item.path,
          icon: item.icon,
        })}
        onSelect={(val, _item) => {
          handleNavigate(val);
          setAnchorEl(null);
        }}
      />
    </Box>
  );
}
