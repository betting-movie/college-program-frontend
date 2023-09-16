import { InputAdornment, TextField, styled } from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomPhoneField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const PhoneField = ({ onChange, helperText, ...rest }) => {
  return (
    <CustomPhoneField
      helperText={helperText}
      type={"tel"}
      InputProps={{
        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
      }}
      sx={{
        "& .Mui-error": {
          color: "red",
        },
        "& .MuiFormHelperText-root": {
          color: "red",
        },
      }}
      {...rest}
      onChange={(e) => {
        if (
          !isNaN(Number(e.target.value)) &&
          e.target.value?.length <= 10 &&
          onChange
        ) {
          onChange(e);
        }
      }}
    />
  );
};

export const MemoizedPhoneField = React.memo(PhoneField);
