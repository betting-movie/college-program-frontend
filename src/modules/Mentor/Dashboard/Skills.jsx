import { primary } from "@/src/SDK/theme";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import React from "react";

const CustomSkills = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".expirence-container": {
    padding: "20px",
    borderRadius: "10px",
    border: `2px solid ${primary?.greyText}`,
  },
  ".title": {
    fontSize: "2em",
    fontWeight: 600,
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
    ".title": {
      fontSize: "1.6em",
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
        <Box sx={{ marginBottom: "20px" }}>
          <Typography className="title">Skills</Typography>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {data[0]?.skills?.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item}>
              <Typography className="skill-text-style">{item}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CustomSkills>
  );
};

export const MemoizedMentorSkills = React.memo(Skills);
