import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { primary } from "../theme";
import { uploadFile } from "@/src/apiService/uploadService";

const CustomUploadInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: primary?.mainGreen,
      color: primary?.white,
    },
  },
}));

const UploadInput = ({
  id,
  name,
  form,
  labelText,
  onChange,
  helperText,
  picUrlInfo,
  ...rest
}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <Box
    // sx={{
    //   marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
    //   marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
    // }}
    >
      {labelText && <Typography>{labelText}</Typography>}
      <CustomUploadInput
        id={id}
        helperText={helperText}
        name={name}
        variant="outlined"
        type="file"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                onClick={async (e) => {
                  const test = await uploadFile(file);

                  onChange(e);
                  form.setFieldValue(picUrlInfo, test);
                }}
              >
                Upload
              </Button>
            </InputAdornment>
          ),
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
          if (onChange) {
            onChange(e);
            handleFileChange(e);

            console.log(onChange(e), e);
          }
        }}
      />
    </Box>
  );
};

export const MemoizedUploadInput = React.memo(UploadInput);
