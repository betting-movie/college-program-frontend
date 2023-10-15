import React from "react";
import { MemoizedMentorCard } from "../../GenericComponents/mentorCards";
import { Box, Grid } from "@mui/material";

const MentorList = ({ mentorData }) => {
  {
    /* <MemoizedMentorCard info={res} id={index} /> */
  }

  return (
    <Box
      sx={{
        margin: { md: "60px 40px 40px 40px ", xs: "60px 0px 10px 10px" },
        marginTop: "60px",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {mentorData?.map((res, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} sx={{ width: "100%" }}>
              <Box>
                {" "}
                <MemoizedMentorCard info={res} id={index} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const MemoizedMentorList = React.memo(MentorList);
