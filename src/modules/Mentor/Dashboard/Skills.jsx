import { primary } from "@/src/SDK/theme";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";

const CustomSkills = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".expirence-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  ".skill-text-style": {
    backgroundColor: primary?.secondaryText,
    color: primary?.white,
    padding: "8px 10px",
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "1em",
    fontWeight: 500,
  },
  [theme.breakpoints.down("md")]: {
    ".expirence-container": {
      padding: "10px",
    },

    ".skill-text-style": {
      padding: "6px 8px",
      borderRadius: "10px",
      fontSize: "0.8em",
    },
  },
}));

const Skills = ({ data }) => {
  return (
    <CustomSkills>
      <Box className="expirence-container">
        <MemoizedDashboardCardHeader title={"Skills"} route={"/mentor/edit"} />
        <Grid container spacing={2}>
          {data?.skills?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item}>
              <Typography className="skill-text-style">{item}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{ marginTop: "2em", borderTop: `2px solid ${primary?.lightGrey}` }}
      />
    </CustomSkills>
  );
};

export const MemoizedMentorSkills = React.memo(Skills);
