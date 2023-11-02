import { primary } from "@/src/SDK/theme";
import { Box, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedAutoMultiSelectDropDown } from "@/src/SDK/selectDropdown/multiSelectDropdown";
import useSkillEdit from "./hooks/useSkillsEdit";
import { MemoizedButton } from "@/src/SDK";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const CustomEditSkills = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".skills-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".skills-container": {
      padding: "10px",
    },
  },
}));
const Skill = () => {
  const { form, loading, selectedOptions, setSelectedOptions } = useSkillEdit();
  return (
    <CustomEditSkills>
      <Box className="skills-container">
        <MemoizedDashboardCardHeader title={"Skills"} />

        <form onSubmit={form.onSubmit}>
          <MemoizedAutoMultiSelectDropDown
            id="skills-options"
            name="skills"
            required={true}
            value={selectedOptions}
            label="Select Skills"
            options={options}
            labelText={"Skills"}
            helperText={form?.errors?.skills}
            // error={!!checkError("skills", form)}
            onChange={(event, newValue) => {
              setSelectedOptions(newValue);
            }}
            // onInputChange={(event, inputValue) => {
            //   setSelectedOptions(inputValue);
            // }}
            className="input-dropdown"
          />
          <Box display={"flex"} justifyContent={"flex-end"}>
            <MemoizedButton
              id="lead-form"
              content={"Update"}
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
    </CustomEditSkills>
  );
};

export const MemoizedEditMentorSkills = React.memo(Skill);
