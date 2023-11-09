import { primary } from "@/src/SDK/theme";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedProfilePicture } from "../../GenericComponents/profilePicture";
import { MemoizedNameField, MemoizedPhoneField } from "@/src/SDK/input";
import { MemoizedEmailField } from "@/src/SDK/input/emailField";
import { MemoizedButton } from "@/src/SDK";
import useAboutEdit from "./hooks/useAboutEdit";
import { checkError } from "@/src/SDK/utils";

const CustomEditAbout = styled(Box)(({ theme }) => ({
  marginTop:"20px",
  ".about-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".about-container": {
      padding: "10px",
    },
  },
}));

const About = ({ data }) => {
  const { form, loading, previewURL, setPreviewURL } = useAboutEdit();
  console.log("URL", previewURL);

  return (
    <CustomEditAbout>
      <Box className="about-container">
        <MemoizedDashboardCardHeader title={"About"} />

        <form onSubmit={form.onSubmit}>
          <MemoizedProfilePicture
            previewURL={previewURL}
            setPreviewURL={setPreviewURL}
            form={form}
            onChange={(e) => {
              form.handleChange(e);
            }}
          />
          <Box>
            <Box
              sx={{
                marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
                marginBottom: {
                  xs: "10px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Typography>Name</Typography>
              <MemoizedNameField
                className="input-field"
                name="name"
                error={!!checkError("name", form)}
                helperText={form.errors.name}
                placeholder="College Name"
                value={form.values.name}
                onChange={(e) => {
                  form.handleChange(e);
                }}
                style={{ width: "100%" }}
              />
            </Box>
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
              error={!!checkError("phone_number", form)}
              helperText={form.errors.phone_number}
              name="phone_number"
              placeholder="Your Mobile"
              value={form.values.phone_number}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
            <Box
              sx={{
                marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
                marginBottom: {
                  xs: "10px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Typography>Designation</Typography>
              <MemoizedNameField
                className="input-field"
                name="designation"
                error={!!checkError("designation", form)}
                helperText={form.errors.designation}
                placeholder="Designation"
                value={form.values.designation}
                onChange={(e) => {
                  form.handleChange(e);
                }}
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
                marginBottom: {
                  xs: "10px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Typography>LinkedIn URL</Typography>
              <MemoizedNameField
                className="input-field"
                name="linkedinUrl"
                error={!!checkError("linkedinUrl", form)}
                helperText={form.errors.linkedinUrl}
                placeholder="LinkedIn URL"
                value={form.values.linkedinUrl}
                onChange={(e) => {
                  form.handleChange(e);
                }}
                style={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
                marginBottom: {
                  xs: "10px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },
              }}
            >
              <Typography>Description</Typography>
              <MemoizedNameField
                className="input-field"
                name="description"
                error={!!checkError("description", form)}
                helperText={form.errors.description}
                placeholder="Description..."
                value={form.values.description}
                onChange={(e) => {
                  form.handleChange(e);
                }}
                multiline
                rows={2}
                maxRows={4}
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <MemoizedButton
              id="lead-form"
              content={"Update"}
              loading={loading}
              handleClick={(e) => {
                form.handleSubmit(e);
              }}
              sx={{
                width: "100%",
                mt: "24px",
                maxWidth: { md: "250px" },
              }}
            />
          </Box>
        </form>
      </Box>
    </CustomEditAbout>
  );
};

export const MemoizedEditMentorAbout = React.memo(About);
