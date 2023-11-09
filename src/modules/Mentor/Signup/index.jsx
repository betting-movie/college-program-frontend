import { primary } from "@/src/SDK/theme";
import { Box, Grid, Typography, styled } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import React from "react";
import { MemoizedEmailField } from "@/src/SDK/input/emailField";
import { MemoizedPasswordInput } from "@/src/SDK/input/passwordInput";
import { MemoizedButton } from "@/src/SDK";
import useMentorSignupDetails from "./hooks/useMentorSignupDetails";
import { checkError } from "@/src/SDK/utils";
import { MemoizedPhoneField } from "@/src/SDK/input";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

import InsightsIcon from "@mui/icons-material/Insights";

const CustomMentorSignup = styled(Box)(({ theme }) => ({
  display: "flex",

  ".trophyColor": {
    fontSize: "10em",
    color: primary?.darkYellow,
  },

  ".heading": {
    fontSize: "3em",
    fontWeight: "500",
  },
  ".headingForm": {
    fontSize: "2em",
    fontWeight: "600",
  },

  ".subHeading": {
    fontSize: "1em",
    fontWeight: "400",
  },

  [theme.breakpoints.down("sm")]: {
    ".heading": {
      fontSize: "1.5em",
    },
    ".subHeading": {
      fontSize: "0.8em",
      fontWeight: "400",
    },
    ".headingForm": {
      fontSize: "1.6em",
      fontWeight: "600",
    },

    ".trophyColor": {
      fontSize: "3em",
      color: primary?.darkYellow,
    },
  },
}));

const MentorSignup = () => {
  const { form, loading } = useMentorSignupDetails();

  return (
    <CustomMentorSignup>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          {" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              background: "linear-gradient(45deg, #144FC3 0%, #475467 100%)",
            }}
          >
            <Box
              sx={{
                display: "block",
                margin: "20px",
                justifyContent: "flex-end",
              }}
            >
              <EmojiEventsIcon className="trophyColor" />

              <Typography className="heading" style={{ color: primary?.white }}>
                Share your{" "}
                <span style={{ color: primary?.darkYellow }}>knowledge</span>,
                and{" "}
                <span style={{ color: primary?.darkYellow }}>contribute</span>{" "}
                to the success stories of tomorrow.
                <TroubleshootIcon style={{ color: primary?.darkYellow }} />
              </Typography>

              <BubbleChartIcon className="trophyColor" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ width: "100%" }}>
          {" "}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box
              sx={{
                display: "block",
                borderRadius: "8px",
                border: `1px solid ${primary?.lightGrey}`,
                width: "100%",
                margin: { xs: "10px", sm: "20px", md: "40px", lg: "80px" },
                padding: { xs: "10px", sm: "10px", md: "20px", lg: "40px" },
              }}
            >
              <Typography className="headingForm"> Mentor Signup</Typography>
              <Typography>
                Please log in to get your personal Mentor.
              </Typography>

              <form onSubmit={form.handleSubmit}>
                <Box>
                  <MemoizedEmailField
                    labelText={"Email"}
                    style={{ width: "100%" }}
                    name="email"
                    error={!!checkError("email", form)}
                    helperText={form.errors.email}
                    placeholder="Enter your email id"
                    value={form.values.email}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                  />

                  <MemoizedPhoneField
                    labelText={"Phone Number"}
                    style={{ width: "100%" }}
                    error={!!checkError("mobile", form)}
                    helperText={form.errors.mobile}
                    name="mobile"
                    placeholder="Your Mobile"
                    value={form.values.mobile}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                  />

                  <MemoizedPasswordInput
                    labelText={"Password"}
                    style={{ width: "100%" }}
                    name="password"
                    error={!!checkError("password", form)}
                    helperText={form.errors.password}
                    placeholder="Enter your password"
                    value={form.values.password}
                    onChange={(e) => {
                      form.handleChange(e);
                    }}
                  />
                  <MemoizedButton
                    sx={{ width: "100% !important", marginTop: "20px" }}
                    content={"Submit"}
                    type="submit"
                    loading={loading}
                    handleClick={(e) => {
                      console.log("click", form);
                      // let payload = {
                      //   phoneNumber: form.values.mobile,
                      //   connectType: "floating_call_icon",
                      // };

                      form.handleSubmit(e);
                    }}
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>

        <Typography style={{ margin: "10px" }}>
          Already a mentor{" "}
          <span
            style={{
              color: primary?.main,
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate.push("/mentor/login");
            }}
          >
            Log In
          </span>
        </Typography>
      </Grid>
    </CustomMentorSignup>
  );
};

export const MemoizedMentorSignup = React.memo(MentorSignup);
