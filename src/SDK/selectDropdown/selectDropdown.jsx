import { MenuItem, Select } from "@mui/material";
import React from "react";

import { getSelectOptions } from "../utils/inputHelper";
import { checkError } from "../utils/validationHelpers";
import { primary } from "../theme";

const SelectDropDown = ({
  form, //formik form
  id, //state or vehicle
  labelId, //label id(Select vehicle)
  name,
  onChange,
  required, //true or false
  value,
  title, // placeholder
  optionsData, // options for dropdown
  helperText,
  ...rest
}) => {
  return (
    <Select
      error={!!checkError(name, form)}
      labelId={labelId}
      id={id}
      name={name}
      value={value}
      defaultValue={"none"}
      onChange={onChange}
      required={required}
      fullWidth
      sx={{
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: primary.mainGreen,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: primary.mainGreen,
        },
      }}
      {...rest}
    >
      <MenuItem value={"none"} sx={{ fontWeight: 600 }}>
        {title}
      </MenuItem>
      {getSelectOptions(optionsData)}
    </Select>
  );
};

export const MemoizedSelectDropDown = React.memo(SelectDropDown);
