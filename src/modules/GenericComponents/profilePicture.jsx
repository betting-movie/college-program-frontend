import { uploadFile } from "@/src/apiService/uploadService";
import styled from "@emotion/styled";

import { Avatar, Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";

const CustomProfilePicture = styled(Box)(({ theme }) => ({
  ".profile-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "10px",
  },
  ".avatar": {
    width: 200,
    height: 200,
  },
  ".name": {
    margin: "auto",
  },
  [theme.breakpoints.down("md")]: {
    ".profile-container": {
      flexDirection: "column",
    },
    ".avatar": {
      width: 160,
      height: 160,
    },
    ".name": {
      marginTop: "20px",
    },
    ".description-label": {
      fontSize: "1em",
    },
    ".description-value": {
      fontSize: "0.8em",
    },
  },
}));

const ProfilePicture = ({ previewURL, form, setPreviewURL, onChange }) => {
  const [file, setFile] = useState(previewURL);
  const [isFile, setIsFile] = useState(false);
  const fileInputRef = useRef(null);
  const handleUploadClick = (e) => {
    fileInputRef.current.click();
    async (e) => {
      const test = await uploadFile(file);

      onChange(e);
      form.setFieldValue("picUrl", test);
    };
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setIsFile(true);
    if (selectedFile) {
      setPreviewURL(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <CustomProfilePicture>
      <Box className="profile-container">
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
              handleFileChange(e);
              console.log(onChange(e), e);
            }
          }}
        />

        <Avatar
          className="avatar"
          src={file || "/default-avatar.jpg"}
          onClick={(e) => handleUploadClick(e)}
          sx={{ cursor: "pointer" }}
        />

        <Button
          className="name"
          disabled={!isFile}
          onClick={async (e) => {
            const test = await uploadFile(previewURL);
            onChange(e);
            form.setFieldValue("picUrl", test);
          }}
        >
          Upload Pictrue
        </Button>
      </Box>
    </CustomProfilePicture>
  );
};

export const MemoizedProfilePicture = React.memo(ProfilePicture);
