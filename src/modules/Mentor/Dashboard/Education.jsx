import { primary } from "@/src/SDK/theme";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";

const CustomeAchivements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".education-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".education-container": {
      padding: "10px",
    },
  },
}));
const Education = ({ data }) => {
  return (
    <CustomeAchivements>
      <Box className="education-container">
        <MemoizedDashboardCardHeader
          title={"Education"}
          route={"/mentor/edit"}
        />
        {data?.education?.map((item) => (
          <MemoizedCustomeBox value={item} />
        ))}
      </Box>
      <Divider
        sx={{ marginTop: "2em", borderTop: `2px solid ${primary?.lightGrey}` }}
      />
    </CustomeAchivements>
  );
};

export const MemoizedMentorEducation = React.memo(Education);
