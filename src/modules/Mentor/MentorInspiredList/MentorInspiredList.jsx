import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { MemoizedMentorInspiredCard } from "../../GenericComponents/mentorInspiredCard";
import { primary } from "@/src/SDK/theme";

const CustomMentorInspiredList = styled(Box)(({ theme }) => ({
  marginTop: "60px",
  ".heading": {
    fontSize: "1.8em",
    fontWeight: "700",
  },
  ".sub-title": {
    color: primary.darkPurple,
    fontSize: "0.8em",
    fontWeight: "400",
  },
}));

const MentorInspiredList = ({ mentorData }) => {
  return (
    <CustomMentorInspiredList>
      <Box>
        <Typography className="heading">Get Inspired</Typography>
        <Typography className="sub-title">
          Get inspired by similar profiles, maximizing Preplaced for creating
          significant impact.
        </Typography>
      </Box>
      <Box>
        {mentorData?.map((res, index) => {
          return (
            <Box sx={{ width: "100%" }}>
              <Box sx={{ marginTop: "10px" }}>
                <MemoizedMentorInspiredCard info={res} id={index} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </CustomMentorInspiredList>
  );
};

export const MemoizedMentorInspiredList = React.memo(MentorInspiredList);
