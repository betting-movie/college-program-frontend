import { Box, Divider, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { useRouter } from "next/router";
import { primary } from "@/src/SDK/theme";

const CustomeDashboardCardHeader = styled(Box)(({ theme }) => ({
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
  },
  ".edit-box": {
    borderRadius: "4px",
    border: `1px solid ${primary?.lightGrey}`,
    color: primary?.darkGrey,
    fontSize: "1em",
  },
  ".edit-button-container": {
    padding: "10px",
  },
  [theme.breakpoints.down("md")]: {
    ".title": {
      fontSize: "1.4em",
    },
    ".edit-box": {
      fontSize: "0.6em",
    },
    ".edit-button-container": {
      padding: "8px",
    },
  },
}));

const DashboardCardHeader = ({ title, route }) => {
  const router = useRouter();
  return (
    <CustomeDashboardCardHeader>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography className="title">{title}</Typography>
        <Box className="edit-button-container">
          <IconButton onClick={() => router.push(route)} className="edit-box">
            <DriveFileRenameOutlineOutlinedIcon
              sx={{ fontSize: "1em", marginRight: "4px" }}
            />
            Edit
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ marginBottom: "20px" }} />
    </CustomeDashboardCardHeader>
  );
};

export const MemoizedDashboardCardHeader = React.memo(DashboardCardHeader);
