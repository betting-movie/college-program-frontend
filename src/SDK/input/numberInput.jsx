import { Box, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomNumberField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const NumberFieldInput = ({
  onChange,
  labelText,
  helperText,
  form,
  ...rest
}) => {
  return (
    <Box
      sx={{
        marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
        marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
      }}
    >
      {labelText && <Typography>{labelText}</Typography>}
      <CustomNumberField
        helperText={helperText}
        variant="outlined"
        type="number"
        sx={{
          "& .Mui-error": {
            color: "red",
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
        inputProps={{
          min: 0,
          step: 1,
        }}
        {...rest}
        onChange={onChange}
      />
    </Box>
  );
};

export const MemoizedNumberInput = React.memo(NumberFieldInput);
