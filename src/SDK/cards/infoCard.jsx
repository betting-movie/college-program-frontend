import { Box, styled } from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomInfoCard = styled(Box)(({ theme }) => ({
  ".info-card": {
    // background: "#FEF8E6",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "460px",
    // maxHeight: "700px",
    paddingBottom: "1em",
    border: `1px solid ${primary?.lightGrey}`,
    img: {
      width: "110%",
      // maxWidth: "450px",
    },
    ".details": {
      padding: "10px 32px",
      ".title": {
        fontSize: "20px",
        lineHeight: "30px",
        fontWeight: "700",
        color: "#000",
      },
      ".date": {
        fontSize: "16px",
        lineHeight: "67px",
        fontWeight: "600",
        color: "#8A8787",
      },
      ".description": {
        fontSize: "20px",
        lineHeight: "30px",
        fontWeight: "500",
        color: "#000",
        textOverflow: "ellipsis",
        //height: "80px",
      },
      ".read-more": {
        fontSize: "16px",
        lineHeight: "66px",
        fontWeight: "600",
        color: "#8A8787",
        textAlign: "center",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    ".info-card": {
      // width: "340px",
      //  height: "380px",
      img: {
        width: "100%",
      },
      ".details": {
        padding: "10px 16px",
        ".title": {
          fontSize: "14px",
          lineHeight: "18px",
        },
        ".date": {
          fontSize: "8px",
          lineHeight: "30px",
        },
        ".description": {
          fontSize: "12px",
          lineHeight: "14px",
          height: "100%",
        },
        ".read-more": {
          fontSize: "8px",
          lineHeight: "66px",
        },
      },
    },
  },
}));

const InfoCard = ({ children, ...props }) => {
  const { imageUrl, imageTitle } = props;

  return (
    <CustomInfoCard>
      <Box className="info-card">{children}</Box>
    </CustomInfoCard>
  );
};
export const MemoizedInfoCard = React.memo(InfoCard);
