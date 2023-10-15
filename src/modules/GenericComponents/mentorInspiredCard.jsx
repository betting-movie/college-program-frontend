import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import MemoizedStoryBadges from "@/src/SDK/imageBadge/imageBadge";
import { Box, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedMentorImage } from "./mentorImage";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

const CustomMentorInspiredCard = styled(Box)(({ theme }) => ({
  display: "block",
  padding: "8px",
  maxHeight: "400px",
  width: "100% !important",

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

const MentorInspiredCard = ({ info, id }) => {
  console.log(info, id);
  return (
    <MemoizedInfoCard>
      <CustomMentorInspiredCard id={id}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <MemoizedMentorImage
              image={info?.profile_pic}
              subImage={"/Images/google.webp"}
            />
          </Box>
          <Box sx={{ padding: "10px", width: "150px" }}>
            <Typography
              style={{
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px",
              }}
            >
              {info?.name}
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              {info?.designation}
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                borderRadius: "50%",
                border: `2px solid ${primary?.inactiveState}`,
                marginTop: "20px",
              }}
            >
              <CallMadeOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </CustomMentorInspiredCard>
    </MemoizedInfoCard>
  );
};

export const MemoizedMentorInspiredCard = React.memo(MentorInspiredCard);
