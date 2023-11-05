import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedNameField } from "@/src/SDK/input";
import { primary } from "@/src/SDK/theme";
import useExperienceEdit from "./hooks/useExperienceEdit";
import { MemoizedButton } from "@/src/SDK";

const CustomEditExperience = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".experience-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".experience-container": {
      padding: "10px",
    },
  },
}));

const Experience = () => {
  const { form, loading } = useExperienceEdit();

  const addExperienceField = () => {
    const newExperience = [...form.values.experience, ""];
    form.setFieldValue("experience", newExperience);
  };  

  const removeExperienceField = (index) => {
    const updatedExperience = [...form.values.experience];
    updatedExperience.splice(index, 1);
    form.setFieldValue("experience", updatedExperience);
  };

  return (
    <CustomEditExperience>
      <Box className="experience-container">
        <MemoizedDashboardCardHeader title={"Experience"} />
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
            <Typography>Current Company</Typography>
            <MemoizedNameField
              className="input-field"
              name="current_company"
              helperText={form.errors.current_company}
              placeholder="Current Company"
              value={form.values.current_company}
              onChange={form.handleChange}
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
            <Typography>Experience</Typography>
            {form.values.experience.map((exp, index) => (
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
                  labelText={"Experience"}
                  name={`experience[${index}]`}
                  placeholder="Experience"
                  value={exp}
                  onChange={form.handleChange}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              onClick={addExperienceField}
              sx={{
                background: primary?.dark,
                color: primary?.white,
                fontWeight: 400,
                borderRadius: "14px",
                padding: "8px 16px 8px  16px",
              }}
            >
              Add Experience
            </Button>
            {form.values.experience.length > 1 ? (
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
                  removeExperienceField(form.values.experience.length - 1)
                }
              >
                Remove
              </Button>
            ) : null}
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
    </CustomEditExperience>
  );
};

export const MemoizedEditMentorExperience = React.memo(Experience);
