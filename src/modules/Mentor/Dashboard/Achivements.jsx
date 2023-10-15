import { primary } from "@/src/SDK/theme";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedCustomeBox } from "../../GenericComponents/customeBox";

const CustomeAchivements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".achivements-container": {
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
    ".achivements-container": {
      padding: "10px",
    },
  },
}));

const Achivements = ({ data }) => {
  return (
    <CustomeAchivements>
      <Box className="achivements-container">
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">Achivements</Typography>
          <Divider />
        </Box>
        {data[0]?.achievements?.map((item) => (
          <MemoizedCustomeBox value={item} />
        ))}
      </Box>
    </CustomeAchivements>
  );
};

export const MemoizedMentorAchivements = React.memo(Achivements);
