import { primary } from "@/src/SDK/theme";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";

const CustomExpirence = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".expirence-container": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid ${primary?.greyText}`,
  },
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
  },
  ".comapny-heading": {
    fontSize: "1.2em",
    fontWeight: 600,
    color: primary?.mainText,
    marginTop: "20px",
    marginBottom: "10px",
  },
  [theme.breakpoints.down("md")]: {
    ".title": {
      fontSize: "1.6em",
    },
    ".expirence-container": {
      padding: "10px",
    },
  },
}));

const Experience = ({ data }) => {
  return (
    <CustomExpirence>
      <Box className="expirence-container">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">Expirence</Typography>
          <Divider />
        </Box>
        <Typography className="comapny-heading">Current Company</Typography>
        <MemoizedCustomeBox value={data[0]?.current_company} />
        <Typography className="comapny-heading">Past Experinece</Typography>
        {data[0]?.experience?.map((item) => (
          <MemoizedCustomeBox value={item} />
        ))}
      </Box>
    </CustomExpirence>
  );
};

export const MemoizedMentorExperience = React.memo(Experience);
