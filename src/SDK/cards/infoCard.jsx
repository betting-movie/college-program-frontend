import { Box, styled } from "@mui/material";
import React from "react";
import { primary } from "../theme";

const CustomInfoCard = styled(Box)(({ theme }) => ({
  ".info-card": {
    // background: "#FEF8E6",
    borderRadius: "8px",
    //width: "100%",
    //maxWidth: "460px",
    // maxHeight: "700px",
    // paddingBottom: "1em",
    border: `1px solid ${primary?.lightGrey}`,
    img: {
      width: "100%",
      // maxWidth: "450px",
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
