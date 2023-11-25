import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import MemoizedStoryBadges from "@/src/SDK/imageBadge/imageBadge";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedMentorImage } from "./mentorImage";
import { MemoizedButton } from "@/src/SDK";
import { primary } from "@/src/SDK/theme";
import { useRouter } from "next/router";

const CustomMentorCard = styled(Box)(({ theme }) => ({
  display: "block",
  padding: "20px",
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

const MentorCard = ({ info, id }) => {
  console.log(info, id);

  const navigate = useRouter();

  return (
    <MemoizedInfoCard>
      <CustomMentorCard id={id}>
        <Box sx={{ display: "flex" }}>
          <MemoizedMentorImage
            image={info?.profile_pic}
            subImage={"/Images/google.webp"}
          />

          <Box sx={{ padding: "10px" }}>
            <Typography
              style={{
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24px",
              }}
            >
              {info?.name}
            </Typography>
            <Typography
              style={{
                color: primary?.greyText,

                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              {info?.designation}
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              {info?.current_company}
            </Typography>
          </Box>

          <Box></Box>
        </Box>

        <Box sx={{ display: "block", paddingTop: "10px" }}>
          <Typography
            style={{
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            {info?.experience && info?.experience[0]}
          </Typography>
          <Typography
            style={{
              color: primary?.greyText,
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            "{info?.description}"{" "}
            <MemoizedButton
              id="lead-form"
              content={"read more"}
              handleClick={(e) => {
                // createCookieInHour("lead_trigger", "contact_us_form", 10);
                form.handleSubmit(e);
              }}
              sx={{
                border: "none",
                background: "none",
                color: primary?.main,
                margin: "0px",
                padding: "0px",
                fontSize: "12px",
              }}
            />
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          {info?.skills?.slice(1, 3)?.map((res, index) => {
            return (
              <Typography
                id={index}
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,

                  borderBottom: `1px dotted ${primary?.greyText}`,
                  margin: "4px",
                }}
              >
                {res}
              </Typography>
            );
          })}
          <MemoizedButton
            id="lead-form"
            content={"more"}
            handleClick={(e) => {
              // createCookieInHour("lead_trigger", "contact_us_form", 10);
              form.handleSubmit(e);
            }}
            sx={{
              border: "none",
              background: "none",
              color: primary?.secondary,
              margin: "0px",
              padding: "0px",
              fontSize: "12px",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", paddingTop: "10px" }}>
          <Typography
            style={{
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "24px",
              margin: "4px",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: "600" }}>
              ₹{info?.consultation_cost}
            </span>
            /consultation
          </Typography>
          <Typography
            style={{
              color: "#111827",

              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              margin: "4px",
              fontWeight: "600",
            }}
          >
            {info?.rating}⭐
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              margin: "4px",
            }}
          >
            <span style={{ fontWeight: "600" }}>{info?.mentees}</span>+ mentees
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <MemoizedButton
            id="lead-form"
            content={"View Profile"}
            handleClick={(e) => {
              // createCookieInHour("lead_trigger", "contact_us_form", 10);
              if (localStorage.getItem("token")) {
                const path = info?.name?.toLowerCase().split(" ")?.join("-");
                navigate.push(`your-mentor/${path}`);
              } else {
                navigate.push("student/login");
              }
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
            content={"Book a FREE Trial"}
            sx={{ background: primary?.secondary, fontSize: "14px" }}
            handleClick={(e) => {
              // createCookieInHour("lead_trigger", "contact_us_form", 10);
              // form.handleSubmit(e);
              if (localStorage.getItem("token")) {
                const path = info?.name?.toLowerCase().split(" ")?.join("-");
                navigate.push(`your-mentor/${path}`);
              } else {
                navigate.push("student/login");
              }
            }}
          />
        </Box>

        {/* Mentor Personal Detail */}

        {/* Mentor Desc and skills */}

        {/* Selection */}
      </CustomMentorCard>
    </MemoizedInfoCard>
  );
};

export const MemoizedMentorCard = React.memo(MentorCard);
