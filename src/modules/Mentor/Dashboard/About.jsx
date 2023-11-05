import { primary } from "@/src/SDK/theme";
import { Avatar, Box, Divider, Typography, styled } from "@mui/material";
import React from "react";

import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";

const CustomAbout = styled(Box)(({ theme }) => ({
  ".about-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
    margin: "auto",
  },
  ".description-label": {
    fontSize: "1em",
    fontWeight: 600,
  },
  ".description-value": {
    fontSize: "0.8em",
  },
  ".other-detail-container": {
    marginTop: "4px",
    padding: "6px",
    borderRadius: "12px",
    border: `2px solid ${primary?.inactiveState}`,
  },
  [theme.breakpoints.down("md")]: {
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
    },
  },
}));

const About = ({ data }) => {
  return (
    <CustomAbout>
      <Box className="about-container">
        <MemoizedDashboardCardHeader title={"About"} route={"/mentor/edit"} />
        <Box className="profile-container">
          <Avatar alt={data?.name} src={data?.profile_pic} className="avatar" />
          <Typography variant="h6" className="name">
            {data?.name}
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Designation:</span>{" "}
            <span className="description-value">{data?.designation}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Email: </span>{" "}
            <span className="description-value">{data?.email}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Mobile No.</span>{" "}
            <span className="description-value">{data?.phone_number}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Linkedin:</span>{" "}
            <span className="description-value">{data?.linkedinUrl}</span>
          </Typography>
        </Box>
        <Box className="other-detail-container">
          <Typography variant="h6">
            <span className="description-label">Description:</span>{" "}
            <span className="description-value">{data?.description} </span>
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{ marginTop: "2em", borderTop: `2px solid ${primary?.lightGrey}` }}
      />
    </CustomAbout>
  );
};

export const MemoizedMentorAbout = React.memo(About);
