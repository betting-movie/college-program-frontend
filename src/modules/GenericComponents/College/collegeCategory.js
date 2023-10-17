import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomCollegeCategory = styled(Box)(({ theme }) => ({
  display: "block",

  maxHeight: "400px",
  maxWidth: "250px",
  borderRadius: "8px",
  //width: "100%",
  //maxWidth: "460px",
  // maxHeight: "700px",
  // paddingBottom: "1em",
  border: `1px solid ${primary?.lightGrey}`,

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

const CollegeCategory = ({ info}) => {
  
  return (
    <CustomCollegeCategory >
      <Box
     
        sx={{
          display: "flex",
          padding: "20px",
        }}
      >
        <LazyLoadImage
          src={info?.iconUrl}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: `1px solid ${primary?.lightGrey}`,
          }}
        />

        <Box sx={{ padding: "10px" }}>
          <Typography
            style={{
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "24px",
            }}
          >
            {info?.category}
          </Typography>

          <Typography
            style={{
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "26px",
              color: primary?.greyText,
            }}
          >
            {info?.noOfColleges} Colleges
          </Typography>
        </Box>

        <Box></Box>
      </Box>

      {info?.degrees?.map((res, index) => {
        return (
          <Box id={index}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                margin: "10px",
                marginLeft: "20px",
              }}
            >
              {res}
            </Typography>

            <Divider variant="middle" textAlign="center" />
          </Box>
        );
      })}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <MemoizedButton
          id="lead-form"
          content={"Eligibility Criteria"}
          sx={{
            background: primary?.lightMain,
            fontSize: "14px",
            border: "none",
          }}
          handleClick={(e) => {
           
            form.handleSubmit(e);
          }}
        />
      </Box>
    </CustomCollegeCategory>
  );
};

export const MemoizedCollegeCategory = React.memo(CollegeCategory);
