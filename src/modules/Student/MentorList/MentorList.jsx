import React, { useContext } from "react";
import { MemoizedMentorCard } from "../../GenericComponents/mentorCards";
import { Box, Grid, Typography } from "@mui/material";
import { MentorFilters } from "@/src/constants/mentorFilters";
import { MemoizedFilterCard } from "../../GenericComponents/College/filterCard";
import { Context } from "@/src/context/context";

const MentorList = ({ mentorData }) => {
  const { mentorFilter } = useContext(Context);
  const state = useContext(Context);
  const handleFilterClick = (res) => {
    console.log("Deepak", state?.filterSelected, res);

    mentorFilter(res?.name);
  };

  return (
    <Box
      sx={{
        margin: { md: "60px 40px 40px 40px ", xs: "60px 0px 10px 10px" },
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          overflowX: "auto",
          overflowY: "hidden",
          flexDirection: "row",
          whiteSpace: "nowrap",
          padding: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {MentorFilters?.map((res, index) => {
          return (
            <Box key={index} style={{ padding: "8px" }}>
              <MemoizedFilterCard
                info={res}
                filterClick={() => handleFilterClick(res)}
                selected={state?.filterSelected}
              />
            </Box>
          );
        })}
      </Box>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {mentorData?.map((res, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{ width: "100%" }}
            >
              <Box>
                {" "}
                <MemoizedMentorCard info={res} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const MemoizedMentorList = React.memo(MentorList);
