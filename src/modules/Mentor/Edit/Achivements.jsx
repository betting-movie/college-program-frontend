import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedNameField } from "@/src/SDK/input";
import { primary } from "@/src/SDK/theme";
import { MemoizedButton } from "@/src/SDK";
import useAchievementsEdit from "./hooks/useAchivements";

const CustomEditAchievements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".achievements-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".achievements-container": {
      padding: "10px",
    },
  },
}));

const Achivements = () => {
  const { form, loading, achievements, setAchievements } =
    useAchievementsEdit();

  const addAchievementsField = () => {
    const updatedAchievements = [...achievements, ""];
    setAchievements(updatedAchievements);
  };

  const removeAchievementsField = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.pop();
    setAchievements(updatedAchievements);
  };
  return (
    <CustomEditAchievements>
      <Box className="achievements-container">
        <MemoizedDashboardCardHeader title={"Achivements"} />
        <form onSubmit={form.onSubmit}>
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
            <Typography>Achivements</Typography>
            {achievements.map((ach, index) => (
              <Box
                key={ach}
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
                  labelText={"Achievements"}
                  name={`achievements[${index}]`}
                  placeholder="Achievements"
                  value={ach}
                  onChange={(e) => {
                    const updatedAchievements = [...achievements];
                    updatedAchievements[index] = e.target.value;
                    setAchievements(updatedAchievements);
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              onClick={addAchievementsField}
              sx={{
                background: primary?.dark,
                color: primary?.white,
                fontWeight: 400,
                borderRadius: "14px",
                padding: "8px 16px 8px  16px",
              }}
            >
              Add Achievements
            </Button>
            {achievements.length > 1 ? (
              <Button
                variant="outlined"
                sx={{
                  background: primary?.white,
                  color: primary?.black,
                  fontWeight: 400,
                  borderRadius: "14px",
                  padding: "8px 16px 8px  16px",
                }}
                onClick={removeAchievementsField}
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
    </CustomEditAchievements>
  );
};

export const MemoizedEditMentorAchivements = React.memo(Achivements);
