import { primary } from "@/src/SDK/theme";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CustomeBoxStyle = styled(Box)(({ theme }) => ({
  ".container": {
    marginTop: "4px",
    padding: "6px",
    borderRadius: "12px",
    border: `2px solid ${primary?.inactiveState}`,
  },

  ".value-style": {
    fontSize: "1em",
    fontStyle: "italic",
    color: primary?.secondaryText,
  },
  [theme.breakpoints.down("md")]: {
    ".container": {
      padding: "10px",
    },
  },
}));

const CustomeBox = ({ value }) => {
  return (
    <CustomeBoxStyle>
      <Box className="container">
        <Typography variant="h6">
          <span className="value-style">{value}</span>
        </Typography>
      </Box>
    </CustomeBoxStyle>
  );
};

export const MemoizedCustomeBox = React.memo(CustomeBox);
