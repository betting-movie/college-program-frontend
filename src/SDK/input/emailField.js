import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomEmailField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const EmailField = ({ labelText, onChange, helperText, ...rest }) => {
  return (
    <Box
      sx={{
        marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
        marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
      }}
    >
      {labelText && <Typography>{labelText}</Typography>}
      <CustomEmailField
        helperText={helperText}
        variant="outlined"
        sx={{
          "& .Mui-error": {
            color: "red",
          },
          "& .MuiFormHelperText-root": {
            color: "red",
          },
        }}
        {...rest}
        onChange={onChange}
      />
    </Box>
  );
};

export const MemoizedEmailField = React.memo(EmailField);
