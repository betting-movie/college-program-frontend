import { Box, styled } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { primary } from "../theme";

const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
    },
  },
}));

const MultiSelectAutocomplete = ({
  labelText,
  onChange,
  options,
  helperText,

  ...rest
}) => {
  return (
    <Box
      sx={{
        marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
        marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
      }}
    >
      <CustomAutocomplete
        multiple // This prop enables multi-select
        id="multi-select"
        helperText={helperText}
        options={options}
        {...rest}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Skills"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </Box>
  );
};

export const MemoizedAutoMultiSelectDropDown = React.memo(
  MultiSelectAutocomplete
);
