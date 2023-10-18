import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomBestCollegeCard = styled(Box)(({ theme }) => ({
  display: "block",

  maxWidth: "250px",
  borderRadius: "8px",

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

const BestCollegeCard = ({ info }) => {
  // topic:"Best MBA colleges in India",
  // numberOfColleges:"300+",
  // iconUrl:"/Images/iitmadras.webp",

  return (
    <CustomBestCollegeCard>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          background: info?.bgColor,
        }}
      >
        <Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <LazyLoadImage
              src={info?.iconUrl}
              style={{
                width: "80px",
                height: "80px",
                justifyContent: "center",
                margin: "auto",

                //border: `1px solid ${primary?.lightGrey}`,
              }}
            />
          </Box>

          <Typography
            style={{
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,

              textAlign: "center",
            }}
          >
            {info?.topic}
          </Typography>

          <Typography
            style={{
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 600,
              color: primary?.secondary,
              textAlign: "center",
            }}
          >
            {info?.numberOfColleges}+ more
          </Typography>
        </Box>
      </Box>
    </CustomBestCollegeCard>
  );
};

export const MemoizedBestCollegeCard = React.memo(BestCollegeCard);
