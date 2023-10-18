import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { MemoizedMentorImage } from "../mentorImage";

const CustomCollegeCard = styled(Box)(({ theme }) => ({
  display: "block",

  maxHeight: "400px",
  width: "100% !important",

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

const CollegeCard = ({ info }) => {
  return (
    <MemoizedInfoCard>
      <CustomCollegeCard>
        <Box
          sx={{
            display: "flex",
            padding: "20px",
            background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
          }}
        >
          <MemoizedMentorImage
            image={info?.collegeImage}
            subImage={info?.collegeLogo}
          />

          <Box sx={{ padding: "10px" }}>
            <Typography
              style={{
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                color: primary?.white,
              }}
            >
              {info?.college_name}
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              {info?.city},{info?.state}
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              {info?.collegeType} | Estd. {info?.establishmentYear}
            </Typography>
          </Box>

          <Box></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            paddingTop: "10px",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box style={{ float: "left", width: "33%" }}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Category
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {info?.category}
            </Typography>
          </Box>
          <Box style={{ float: "right", width: "33%" }}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Ranking
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {info?.ranking}
            </Typography>
          </Box>

          <Box style={{ float: "right" }}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Avg. Package
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {info?.averagePackageRange}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",

            width: "100%",
          }}
        >
          <Box style={{ padding: "0px 20px 10px 20px", width: "100%" }}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Fees
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {info?.fees}
            </Typography>
          </Box>

          <Box style={{ padding: "0px 20px 10px 20px", width: "100%" }}>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              Admission mode
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
              }}
            >
              {info?.admissionMode}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px 20px 20px",
          }}
        >
          <MemoizedButton
            id="lead-form"
            content={"Know More"}
            handleClick={(e) => {
              // createCookieInHour("lead_trigger", "contact_us_form", 10);
              form.handleSubmit(e);
            }}
            sx={{
              border: "none",
              background: primary?.white,
              color: primary?.mainText,
              border: `1px solid ${primary?.greyText}`,
              fontSize: "14px",
            }}
          />

          <MemoizedButton
            id="lead-form"
            content={"Eligibility Criteria"}
            sx={{ background: primary?.secondary, fontSize: "14px" }}
            handleClick={(e) => {
              // createCookieInHour("lead_trigger", "contact_us_form", 10);
              form.handleSubmit(e);
            }}
          />
        </Box>
      </CustomCollegeCard>
    </MemoizedInfoCard>
  );
};

export const MemoizedCollegeCard = React.memo(CollegeCard);
