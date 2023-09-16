import { TextField, styled } from "@mui/material";
import React from "react";

import { primary } from "../../constants/theme";

const CustomOTPField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary.mainGreen,
    },
  },
}));

const OTPField = ({ onChange, helperText, form, ...rest }) => {
  return (
    <CustomOTPField
      //   style={{ width: "150px" }}
      helperText={helperText}
      type={"tel"}
      {...rest}
      onChange={onChange}
      // onChange={(e) => {
      //   if (
      //     !isNaN(Number(e.target.value)) &&
      //     e.target.value.length <= 6 &&
      //     form.handleChange
      //   ) {
      //     form.handleChange(e);
      //   }
      // }}
    />
  );
};

export const MemoizedOTPField = React.memo(OTPField);
