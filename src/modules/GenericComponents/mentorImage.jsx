import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import MemoizedStoryBadges from "@/src/SDK/imageBadge/imageBadge";
import { primary } from "@/src/SDK/theme";
import { Box, styled } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomMentorImage = styled(Box)(({ theme }) => ({
  ".main-image": {
    display: "inline-block",
    position: "relative",

    ".image": {
      display: "block",
    },
    ".icon": {
      position: "absolute",
      right: 0,
      bottom: 0,
      lineHeight: 0,
      width: "25px",
      height: "25px",
    },
  },

  [theme.breakpoints.down("sm")]: {},
}));

const MentorImage = ({ image, subImage, alt, styleImage, styleSubImage }) => {
  return (
    <CustomMentorImage>
      <Box className="main-image">
        <span className="image">
          <LazyLoadImage
            src={image}
            style={{
              borderRadius: "8px",
              height: "80px",
              width: "80px",
              objectFit: "cover",
              border: `1px solid ${primary?.lightGrey}`,
              ...styleImage,
            }}
          />
        </span>
        <span className="icon">
          <LazyLoadImage
            src={subImage}
            style={{
              borderRadius: "50%",
              border: `1px solid ${primary?.lightGrey}`,
              ...styleSubImage,
            }}
          />
        </span>
      </Box>
    </CustomMentorImage>
  );
};

export const MemoizedMentorImage = React.memo(MentorImage);
