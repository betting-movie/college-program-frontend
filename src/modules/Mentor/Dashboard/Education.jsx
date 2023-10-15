import { primary } from "@/src/SDK/theme";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";

const CustomeAchivements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".education-container": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid ${primary?.greyText}`,
  },
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
  },

  [theme.breakpoints.down("md")]: {
    ".title": {
      fontSize: "1.6em",
    },
    ".education-container": {
      padding: "10px",
    },
  },
}));
const Education = ({ data }) => {
  return (
    <CustomeAchivements>
      <Box className="education-container">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">Education</Typography>
          <Divider />
        </Box>
        {data[0]?.education?.map((item) => (
          <MemoizedCustomeBox value={item} />
        ))}
      </Box>
    </CustomeAchivements>
  );
};

export const MemoizedMentorEducation = React.memo(Education);
