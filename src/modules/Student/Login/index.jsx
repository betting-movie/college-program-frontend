import { primary } from "@/src/SDK/theme";
import { Box, Grid, Typography, styled } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

import React from "react";
import { MemoizedEmailField } from "@/src/SDK/input/emailField";
import { MemoizedPasswordInput } from "@/src/SDK/input/passwordInput";
import { MemoizedButton } from "@/src/SDK";
import useLoginDetails from "./hooks/useLoginDetails";
import { checkError } from "@/src/SDK/utils";
import { useRouter } from "next/router";

const CustomLogin = styled(Box)(({ theme }) => ({
  display: "flex",

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

const Login = () => {
  const { form, loading, formSubmit } = useLoginDetails();

  const navigate = useRouter();

  return (
    <CustomLogin>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          {" "}
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box sx={{ display: "block", margin: "20px" }}>
              <Typography className="heading" style={{ textAlign: "center" }}>
                Share your{" "}
                <span style={{ color: primary?.main }}>knowledge</span>, and{" "}
                <span style={{ color: primary?.main }}>contribute</span> to the
                success stories of tomorrow.
              </Typography>

              <LazyLoadImage
                src={"/Images/login.webp"}
                style={{ width: "100%" }}
              />
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
              <Typography className="heading"> User Login</Typography>
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
                      // let payload = {
                      //   phoneNumber: form.values.mobile,
                      //   connectType: "floating_call_icon",
                      // };

                      form.handleSubmit(e);
                    }}
                  />
                </Box>
              </form>

              <Typography style={{ marginTop: "10px" }}>
                New student register over here{" "}
                <span
                  style={{
                    color: primary?.main,
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate.push("/student/signup");
                  }}
                >
                  Register
                </span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CustomLogin>
  );
};

export const MemoizedLogin = React.memo(Login);
