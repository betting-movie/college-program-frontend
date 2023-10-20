import { primary } from "@/src/SDK/theme";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";

const CustomExpirence = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".expirence-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  ".comapny-heading": {
    fontSize: "1.2em",
    fontWeight: 600,
    color: primary?.mainText,
    marginTop: "20px",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("md")]: {
    ".expirence-container": {
      padding: "10px",
    },
  },
}));

const Experience = ({ data }) => {
  return (
    <CustomExpirence>
      <Box className="expirence-container">
        <MemoizedDashboardCardHeader
          title={"Experience"}
          route={"/mentor/edit"}
        />
        <Typography className="comapny-heading">Current Company</Typography>
        <MemoizedCustomeBox value={data[0]?.current_company} />
        <Typography className="comapny-heading">Past Experinece</Typography>
        {data[0]?.experience?.map((item) => (
          <MemoizedCustomeBox value={item} />
        ))}
      </Box>
      <Divider
        sx={{ marginTop: "2em", borderTop: `2px solid ${primary?.lightGrey}` }}
      />
    </CustomExpirence>
  );
};

export const MemoizedMentorExperience = React.memo(Experience);
