import { Box, styled } from "@mui/material";
import React from "react";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { primary } from "@/src/SDK/theme";

import { MemoizedNumberInput } from "@/src/SDK/input/numberInput";
import useOtherEdit from "./hooks/useOtherEdit";
import { MemoizedButton } from "@/src/SDK";
import { MemoizedSelectDropDown } from "@/src/SDK/selectDropdown/selectDropdown";

const availability_options = [
  {
    label: "Available for consultation",
    value: "Available for consultation",
  },
  {
    label: "Not Available for consultation",
    value: "Not Available for consultation",
  },
];

const CustomOther = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  ".other-container": {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.extraLightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },

  [theme.breakpoints.down("md")]: {
    ".other-container": {
      padding: "10px",
    },
  },
}));

const Other = () => {
  const { form, loading } = useOtherEdit();
  return (
    <CustomOther>
      <Box className="other-container">
        <MemoizedDashboardCardHeader title={"Other Details"} />
        <form>
          <MemoizedNumberInput
            style={{ width: "100%" }}
            labelText={"Consultation Cost"}
            name="consultation_cost"
            placeholder="Please add consultation cost"
            value={form?.values?.consultation_cost}
            onChange={(e) => {
              form.handleChange(e);
            }}
          />
          <MemoizedNumberInput
            style={{ width: "100%" }}
            labelText={"Mentees"}
            name="mentees"
            placeholder="Mentees"
            value={form?.values?.mentees}
            onChange={(e) => {
              form.handleChange(e);
            }}
          />
          <MemoizedSelectDropDown
            style={{ height: "60px" }}
            form={form}
            id={"availability"}
            name="availability"
            required={true}
            title={"Select Availability"}
            value={form?.values?.availability}
            optionsData={availability_options}
            onChange={form.handleChange}
            // error={!!checkError("state", form)}
            helperText={form.errors.availability}
            defaultValue={"none"}
          />
          <MemoizedNumberInput
            style={{ width: "100%" }}
            labelText={"Rating"}
            name="rating"
            placeholder="Rating"
            value={form?.values?.rating}
            onChange={(e) => {
              form.handleChange(e);
            }}
            disabled
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
    </CustomOther>
  );
};

export const MemoizedEditMentorOhters = React.memo(Other);
