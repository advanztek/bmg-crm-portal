import { Menu } from "@mui/material";
import DropdownItem from "./DropdownItem";

/**
 * @template T
 * @param {Object} props
 * @param {boolean} props.open
 * @param {HTMLElement|null} props.anchorEl
 * @param {() => void} props.onClose
 * @param {T[]} props.items
 * @param {(item: T) => { label: string, value: string, icon?: React.ComponentType }} props.renderItem
 * @param {(value: string, item: T) => void} [props.onSelect]
 */
export default function Dropdown({ open, anchorEl, onClose, items = [], renderItem, onSelect }) {
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {items.map((item, index) => {
        const { label, value, icon } = renderItem(item);
        return (
          <DropdownItem
            key={value ?? index}
            icon={icon}
            onClick={() => {
              onSelect?.(value, item);
              onClose?.();
            }}
          >
            {label}
          </DropdownItem>
        );
      })}
    </Menu>
  );
}
