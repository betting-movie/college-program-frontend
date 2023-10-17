import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomcourseCard = styled(Box)(({ theme }) => ({
  display: "block",

  maxHeight: "400px",
  maxWidth: "250px",
  borderRadius: "8px",
  padding: "10px",
  //width: "100%",
  //maxWidth: "460px",
  // maxHeight: "700px",
  // paddingBottom: "1em",
  border: `1px solid ${primary?.lightGrey}`,

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


const courseCard = ({ info }) => {
  
  return (
    <CustomcourseCard>
      <Typography
        style={{
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "24px",
        }}
      >
        {info?.courseType}
      </Typography>

      <Typography
        style={{
          fontSize: 12,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {info?.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            fontStyle: "normal",

            lineHeight: "24px",
            float: "left",
            color: primary.greyText,
            width: "50%",
            textAlign: "left",
          }}
        >
          Duration
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "50%",
          }}
        >
          {info?.duration}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            fontStyle: "normal",

            lineHeight: "24px",
            float: "left",
            color: primary.greyText,
            width: "50%",
            textAlign: "left",
          }}
        >
          Total Avg. Fees
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "50%",
          }}
        >
          ₹ {info?.avgFees}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          borderBottom: `1px solid ${primary?.lightGrey}`,
          paddingBottom: "10px",
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            fontStyle: "normal",

            lineHeight: "24px",
            float: "left",
            color: primary.greyText,
            width: "50%",
            textAlign: "left",
          }}
        >
          Colleges
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "50%",
          }}
        >
          {info?.colleges}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
          color: primary?.main,
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            fontStyle: "normal",

            lineHeight: "24px",
            float: "left",
            fontWeight: "600",
            width: "50%",
            textAlign: "left",
          }}
        >
          Course Overview
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "50%",
          }}
        >
          <ArrowForwardIosIcon style={{ height: "20px" }} />
        </Typography>
      </Box>
    </CustomcourseCard>
  );
};

export const MemoizedcourseCard = React.memo(courseCard);
