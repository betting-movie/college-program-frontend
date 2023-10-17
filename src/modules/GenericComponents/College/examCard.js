import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomExamCard = styled(Box)(({ theme }) => ({
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


const ExamCard = ({ info}) => {
 
  return (
    <CustomExamCard id={info?.id}>

<Box
        sx={{
          display: "flex",
          padding: "10px",
        }}
      >
        <LazyLoadImage
          src={info?.examUrl}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: `1px solid ${primary?.lightGrey}`,
          }}
        />

        <Box sx={{ padding: "10px" }}>
          <Typography
            style={{
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "24px",
              background:primary?.lightBlue,
              padding:"4px",
              borderRadius:"4px"
            }}
          >
            {info?.type}
          </Typography>

          <Typography
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "26px",
              color: primary?.greyText,
            }}
          >
            {info?.name}
          </Typography>
        </Box>

       
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
            width: "70%",
            textAlign: "left",
          }}
        >
          Participating Colleges
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "30%",
          }}
        >
          {info?.collegesParticipate}
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
          Exam Date
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
        {info?.examDate}
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
          Exam Level
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
          {info?.examLevel}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
          color: primary?.secondary,
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
            fontWeight: "600",
            width: "70%",
            textAlign: "left",
          }}
        >
          Application Process
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "30%",
          }}
        >
          <ArrowForwardIosIcon style={{ height: "20px" }} />
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginTop: "10px",
          color: primary?.secondary,
          
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            fontStyle: "normal",

            lineHeight: "24px",
            float: "left",
            fontWeight: "600",
            width: "70%",
            textAlign: "left",
          }}
        >
          Exam Info
        </Typography>

        <Typography
          style={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "26px",

            textAlign: "right",
            width: "30%",
          }}
        >
          <ArrowForwardIosIcon style={{ height: "20px" }} />
        </Typography>
      </Box>
    </CustomExamCard>
  );
};

export const MemoizedExamCard = React.memo(ExamCard);
