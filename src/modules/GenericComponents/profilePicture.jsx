import styled from "@emotion/styled";

import { Avatar, Box, Button } from "@mui/material";
import React, { useRef } from "react";

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

const ProfilePicture = ({ handleFileChange, previewURL }) => {
  const fileInputRef = useRef(null);
  const handleUploadClick = () => {
    fileInputRef.current.click();
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
          onChange={handleFileChange}
        />

        <Avatar className="avatar" src={previewURL || "/default-avatar.jpg"} />

        <Button onClick={handleUploadClick} className="name">
          Upload Pictrue
        </Button>
      </Box>
    </CustomProfilePicture>
  );
};

export const MemoizedProfilePicture = React.memo(ProfilePicture);
