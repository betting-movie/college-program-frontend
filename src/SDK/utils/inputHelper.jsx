import { MenuItem } from "@mui/material";

export const getSelectOptions = (option) => {
  return option?.map((item) => (
    <MenuItem key={item.label} value={item.value}>
      {item.label}
    </MenuItem>
  ));
};
