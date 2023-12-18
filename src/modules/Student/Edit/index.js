import React from "react";
import { MemoizedStudentHeader } from "../../Layout";
import { Box, Typography, styled } from "@mui/material";
import { MemoizedProfilePicture } from "../../GenericComponents/profilePicture";
import { primary } from "@/src/SDK/theme";
import { MemoizedNameField, MemoizedPhoneField } from "@/src/SDK/input";
import { MemoizedEmailField } from "@/src/SDK/input/emailField";
import { MemoizedAutoMultiSelectDropDown } from "@/src/SDK/selectDropdown/multiSelectDropdown";
import { MemoizedUploadInput } from "@/src/SDK/input/uploadInput";
import { MemoizedButton } from "@/src/SDK";
import useEdit from "./hooks/useEdit";
import { checkError } from "@/src/SDK/utils";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const CustomeEditStudent = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  width: "100% !important",
  ".about-container": {
    width: "100%",
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

const EditStudent = () => {
  const {
    form,
    loading,
    previewURL,
    setPreviewURL,
    selectedOptions,
    setSelectedOptions,
  } = useEdit();
  console.log("URL", previewURL);
  return (
    <MemoizedStudentHeader>
      <CustomeEditStudent>
        <Box className="about-container">
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
                <Typography>Full Name</Typography>
                <MemoizedNameField
                  className="input-field"
                  name="name"
                  error={!!checkError("name", form)}
                  helperText={form.errors.name}
                  placeholder="Enter Name"
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
              <MemoizedAutoMultiSelectDropDown
                id="domains-options"
                name="domains"
                required={true}
                value={form?.values?.domains}
                label="Select domains"
                options={options}
                labelText={"domains"}
                helperText={form?.errors?.domains}
                error={!!checkError("domains", form)}
                onChange={(event, newValue) => {
                  setSelectedOptions(newValue);
                }}
                onInputChange={(event, inputValue) => {
                  setSelectedOptions(inputValue);
                }}
                className="input-dropdown"
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
                <Typography>About</Typography>
                <MemoizedNameField
                  className="input-field"
                  name="bio"
                  error={!!checkError("bio", form)}
                  helperText={form.errors.bio}
                  placeholder="Bio..."
                  value={form.values.bio}
                  onChange={(e) => {
                    form.handleChange(e);
                  }}
                  multiline
                  rows={2}
                  maxRows={4}
                  style={{ width: "100%" }}
                />
              </Box>
              {/* <MemoizedUploadInput
                labelText={"Upload Resume"}
                form={form}
                id="resume"
                className="input-field"
                name="resume"
                error={!!checkError("resume", form)}
                helperText={form.errors.resume}
                placeholder="resume"
                value={form.values.resume}
                picUrlInfo="resumeUrl"
                onChange={(e) => {
                  form.handleChange(e);
                }}
              /> */}
            </Box>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <MemoizedButton
                id="lead-form"
                content={"Save Changes"}
                loading={loading}
                handleClick={(e) => {
                  // createCookieInHour("lead_trigger", "contact_us_form", 10);
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
      </CustomeEditStudent>
    </MemoizedStudentHeader>
  );
};

export const MemoizedEditStudent = React.memo(EditStudent);
