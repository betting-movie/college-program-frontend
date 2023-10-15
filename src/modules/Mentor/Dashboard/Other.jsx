import { primary } from "@/src/SDK/theme";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";

const CustomeAchivements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".other-container": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid ${primary?.greyText}`,
  },
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
  },
  ".description-label": {
    fontSize: "0.8em",
    fontWeight: 600,
  },
  ".description-value": {
    fontSize: "0.8em",
    fontStyle: "italic",
  },
  ".other-detail-container": {
    marginTop: "4px",
    padding: "6px 10px",
    borderRadius: "12px",
    border: `2px solid ${primary?.inactiveState}`,
  },
  [theme.breakpoints.down("md")]: {
    ".title": {
      fontSize: "1.6em",
    },
    ".other-container": {
      padding: "10px",
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

const Other = ({ data }) => {
  return (
    <CustomeAchivements>
      <Box className="other-container">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">Other Details:</Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="other-detail-container">
              <Typography variant="h6">
                <span className="description-label"> Consultation Cost: </span>{" "}
                <span className="description-value">
                  {" "}
                  {data[0]?.consultation_cost}
                </span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="other-detail-container">
              <Typography variant="h6">
                <span className="description-label">Rating: </span>{" "}
                <span className="description-value"> {data[0]?.rating}</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box className="other-detail-container">
              <Typography variant="h6">
                <span className="description-label">Mentees: </span>{" "}
                <span className="description-value"> {data[0]?.mentees}</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="other-detail-container">
              <Typography variant="h6">
                <span className="description-label"> Availability:</span>{" "}
                <span className="description-value">
                  {" "}
                  {data[0]?.availability}
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CustomeAchivements>
  );
};

export const MemoizedMentorOhters = React.memo(Other);
