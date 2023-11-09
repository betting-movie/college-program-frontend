import { primary } from "@/src/SDK/theme";
import { Box, Chip, Typography, styled } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomMentorDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  ".main": {
    padding: "20px",
    width: "100%",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  ".name": {
    fontSize: "36px",
    fontWeight: "600",
  },
  ".company": {
    fontSize: "26px",
    fontWeight: "600",
    color: primary?.main,
  },
  ".designation": {
    fontSize: "24px",
    fontWeight: "600",
    color: primary?.greyText,
  },

  [theme.breakpoints.down("sm")]: {
    ".name": {
      fontSize: "16px",
    },
    ".company": {
      fontSize: "14px",
    },
    ".designation": {
      fontSize: "14px",
    },
    ".main": {
      padding: "20px",
      width: "100%",
      paddingLeft: "4%",
      paddingRight: "4%",
    },
  },
}));

const MentorDetails = ({ mentorDetails }) => {
  return (
    <CustomMentorDetails>
      <Box className="main">
        <Box sx={{ display: "flex" }}>
          <LazyLoadImage
            src={mentorDetails?.profile_pic}
            style={{ width: "20%", objectFit: "contain" }}
          />
          <Box sx={{ padding: "20px" }}>
            <Typography className="name">{mentorDetails?.name}</Typography>
            <Typography className="designation">
              {mentorDetails?.designation}
            </Typography>
            <Typography className="company">
              {mentorDetails?.current_company}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography>
              Rating: {mentorDetails?.rating}⭐ Mentees:{" "}
              {mentorDetails?.mentees}+
            </Typography>
            <Typography>{mentorDetails?.description}</Typography>

            <Typography>Skills</Typography>
            {mentorDetails?.skills?.map((res, index) => {
              return (
                <Chip
                  key={index}
                  label={res}
                  variant="outlined"
                  sx={{ margin: "10px" }}
                />
              );
            })}

            <Typography>Experience</Typography>
            {mentorDetails?.experience?.map((res, index) => {
              return (
                <Chip
                  key={index}
                  label={res}
                  variant="outlined"
                  sx={{ margin: "10px" }}
                />
              );
            })}

            <Typography>Linked In Profile</Typography>
            <Typography>{mentorDetails?.linkedinUrl}</Typography>

            <Typography>Education</Typography>
            {mentorDetails?.education?.map((res, index) => {
              return (
                <Chip
                  key={index}
                  label={res}
                  variant="outlined"
                  sx={{ margin: "10px" }}
                />
              );
            })}

            <Typography>Achivements</Typography>
            {mentorDetails?.achivements?.map((res, index) => {
              return (
                <Chip
                  key={index}
                  label={res}
                  variant="outlined"
                  sx={{ margin: "10px" }}
                />
              );
            })}

            <Typography>
              Consultation Fees : ₹{mentorDetails?.consultation_cost}
            </Typography>

            <Typography>
              Availability : ₹{mentorDetails?.availability}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CustomMentorDetails>
  );
};

export const MemoizedMentorDetails = React.memo(MentorDetails);
