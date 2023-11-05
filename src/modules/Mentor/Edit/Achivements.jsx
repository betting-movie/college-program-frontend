import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { MemoizedNameField } from "@/src/SDK/input";
import { primary } from "@/src/SDK/theme";
import { MemoizedButton } from "@/src/SDK";
import useAchivementsEdit from "./hooks/useAchivements";

const CustomEditAchivements = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".achivements-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".achivements-container": {
      padding: "10px",
    },
  },
}));

const Achivements = () => {
  const { form, loading } = useAchivementsEdit();

  const addAchivementsField = () => {
    const updatedAchivements = [...form.values.achivements, ""];
    form.setFieldValue("achivements", updatedAchivements);
  };

  const removeAchivementsField = (index) => {
    const updatedAchivements = [...form.values.achivements];
    updatedAchivements.splice(index, 1);
    form.setFieldValue("achivements", updatedAchivements);
  };

  return (
    <CustomEditAchivements>
      <Box className="achivements-container">
        <MemoizedDashboardCardHeader title={"Achievement "} />
        <form onSubmit={form.handleSubmit}>
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
              marginBottom: { xs: "10px", sm: "20px", md: "20px", lg: "20px" },
            }}
          >
            <Typography>achivements</Typography>
            {form.values.achivements.map((ach, index) => (
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
                  labelText={"achivements"}
                  name={`achivements[${index}]`}
                  placeholder="achivements"
                  value={ach}
                  onChange={form.handleChange}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              onClick={addAchivementsField}
              sx={{
                background: primary?.dark,
                color: primary?.white,
                fontWeight: 400,
                borderRadius: "14px",
                padding: "8px 16px 8px 16px",
              }}
            >
              Add Achivements
            </Button>
            {form.values.achivements.length > 1 ? (
              <Button
                variant="outlined"
                sx={{
                  background: primary?.white,
                  color: primary?.black,
                  fontWeight: 400,
                  borderRadius: "14px",
                  padding: "8px 16px 8px 16px",
                }}
                onClick={() => removeAchivementsField(form.values.achivements.length - 1)}
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
              onClick={form.handleSubmit}
              sx={{
                width: "100%",
                mt: "24px",
                maxWidth: { md: "250px" },
              }}
            />
          </Box>
        </form>
      </Box>
    </CustomEditAchivements>
  );
};

export const MemoizedEditMentorAchivements = React.memo(Achivements);
