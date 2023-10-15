import { primary } from "@/src/SDK/theme";
import { Avatar, Box, Divider, Typography, styled } from "@mui/material";
import React from "react";

const CustomAbout = styled(Box)(({ theme }) => ({
  ".about-container": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid ${primary?.greyText}`,
  },
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
  },
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
    fontSize: "1.8em",
    fontWeight: 600,
    fontStyle: "italic",
    margin: "auto",
  },
  ".description-label": {
    fontSize: "1em",
    fontWeight: 600,
  },
  ".description-value": {
    fontSize: "0.8em",
    fontStyle: "italic",
  },
  ".other-detail-container": {
    marginTop: "4px",
    padding: "6px",
    borderRadius: "12px",
    border: `2px solid ${primary?.inactiveState}`,
  },
  [theme.breakpoints.down("md")]: {
    ".title": {
      fontSize: "1.6em",
    },
    ".about-container": {
      padding: "10px",
    },
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
      fontStyle: "italic",
    },
  },
}));

const About = ({ data }) => {
  return (
    <CustomAbout>
      <Box className="about-container">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">About</Typography>
          <Divider />
        </Box>

        <Box className="profile-container">
          <Avatar
            alt={data[0]?.name}
            src={data[0]?.profile_pic}
            className="avatar"
          />
          <Typography variant="h6" className="name">
            {data[0]?.name}
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Designation:</span>{" "}
            <span className="description-value">{data[0]?.designation}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Email: </span>{" "}
            <span className="description-value">{data[0]?.email}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Mobile No.</span>{" "}
            <span className="description-value">{data[0]?.phone_number}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Linkedin:</span>{" "}
            <span className="description-value">{data[0]?.linkedinUrl}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Description:</span>{" "}
            <span className="description-value">{data[0]?.description} </span>
          </Typography>
        </Box>
      </Box>
    </CustomAbout>
  );
};

export const MemoizedMentorAbout = React.memo(About);
