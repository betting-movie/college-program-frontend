import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomFilterCard = styled(Box)(({ theme }) => ({
  display: "block",

  maxWidth: "100px",
  borderRadius: "8px",
  //width: "100%",
  //maxWidth: "460px",
  // maxHeight: "700px",
  // paddingBottom: "1em",
  //border: `1px solid ${primary?.lightGrey}`,

  ".heading": {
    fontSize: "2em",
    fontWeight: "600",
  },

  ".subHeading": {
    fontSize: "1em",
    fontWeight: "400",
  },

  [theme.breakpoints.down("sm")]: {
    ".heading": {
      fontSize: "1.2em",
    },
    ".subHeading": {
      fontSize: "0.8em",
      fontWeight: "400",
    },
  },
}));

const FilterCard = ({ info, filterClick, selected }) => {
  return (
    <CustomFilterCard>
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          justifyContent: "center",
        }}
        onClick={filterClick}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              color: info?.name === selected ? primary?.main : "",
            }}
          >
            {" "}
            {info?.icon}
          </Box>

          <Typography
            style={{
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              color: info?.name === selected ? primary?.main : "",
              textAlign: "center",
            }}
          >
            {info?.name}
          </Typography>
        </Box>
      </Box>
    </CustomFilterCard>
  );
};

export const MemoizedFilterCard = React.memo(FilterCard);
