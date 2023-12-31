import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedNameField } from "@/src/SDK/input";
import { primary } from "@/src/SDK/theme";
import { MemoizedButton } from "@/src/SDK";
import useEducationEdit from "./hooks/useEducationEdit";

const CustomEditEducation = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".education-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("md")]: {
    ".education-container": {
      padding: "10px",
    },
  },
}));

const Education = () => {
  const { form, loading } = useEducationEdit();

  const addEducationField = () => {
    const newEducation = [...form.values.education, ""];
    form.setFieldValue("education", newEducation);
  };

  const removeEducationField = (index) => {
    const updatedEducation = [...form.values.education];
    updatedEducation.splice(index, 1);
    form.setFieldValue("education", updatedEducation);
  };

  return (
    <CustomEditEducation>
      <Box className="education-container">
        <MemoizedDashboardCardHeader title={"Education"} />
        <form onSubmit={form.handleSubmit}>
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
            <Typography>Education</Typography>
            {form.values.education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  marginBottom: {
                    xs: "10px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <MemoizedNameField
                  style={{ width: "100%" }}
                  labelText={"Education"}
                  name={`education[${index}]`}
                  placeholder="Education"
                  value={edu}
                  onChange={form.handleChange}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              onClick={addEducationField}
              sx={{
                background: primary?.dark,
                color: primary?.white,
                fontWeight: 400,
                borderRadius: "14px",
                padding: "8px 16px 8px  16px",
              }}
            >
              Add Education
            </Button>
            {form.values.education.length > 1 && (
              <Button
                variant="outlined"
                sx={{
                  background: primary?.white,
                  color: primary?.black,
                  fontWeight: 400,
                  borderRadius: "14px",
                  padding: "8px 16px 8px  16px",
                }}
                onClick={() =>
                  removeEducationField(form.values.education.length - 1)
                }
              >
                Remove
              </Button>
            )}
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <MemoizedButton
              id="lead-form"
              content={"Update"}
              loading={loading}
              handleClick={form.handleSubmit}
              sx={{
                width: "100%",
                mt: "24px",
                maxWidth: { md: "250px" },
              }}
            />
          </Box>
        </form>
      </Box>
    </CustomEditEducation>
  );
};

export const MemoizedEditMentorEducation = React.memo(Education);
