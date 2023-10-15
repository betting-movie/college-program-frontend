import { Email, Phone } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import { Box, Card, Grid, styled, Typography } from "@mui/material";
import React from "react";

import useCollegeData from "./hooks/useCollegeData";
import { primary } from "@/src/SDK/theme";
import { MemoizedNameField, MemoizedPhoneField } from "@/src/SDK/input";
import { MemoizedButton } from "@/src/SDK";
import { checkError } from "@/src/SDK/utils";
import { MemoizedSelectDropDown } from "@/src/SDK/selectDropdown/selectDropdown";
import { StatesOptions } from "@/src/constants/states";
import { CityOptions } from "@/src/constants/city";
import { CollegeCategory, CollegeType } from "@/src/constants/collegeInfo";
import { MemoizedUploadInput } from "@/src/SDK/input/uploadInput";

const CustomCollegeData = styled(Box)(({ theme }) => ({
  padding: "10px",

  paddingBottom: "150px",

  ".contact-us-info": {
    background: primary.lightYellowBg,
    padding: "5%",
    paddingTop: "8%",
    textAlign: "left",
  },

  ".form-info": {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: "2em",
    paddingTop: "4em",
    width: "100% !important",
  },

  ".svg_icons_phone": {
    transform: "scale(1.5)",

    width: "12px",
    height: "12px",
    marginRight: "0.5em",
  },

  ".input-field": {
    minWidth: "100% !important",
  },

  [theme.breakpoints.down("sm")]: {
    background: primary.white,
    display: "block",
    ".h1-text": { display: "none" },

    ".block-info": {
      marginTop: "0%",
      width: "100%",
      position: "relative",
    },

    ".contact-us-info": {
      padding: "1em",
      paddingTop: "2em",
    },

    ".form-info": {
      padding: "1em",
      paddingTop: "2em",
    },

    ".input-field": {
      minWidth: "100% !important",
    },
  },
}));

const CollegeData = () => {
  const { form, loading } = useCollegeData();

  return (
    <CustomCollegeData>
      <div>
        <h1>Add College Data</h1>
      </div>
      <form onSubmit={form.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="collegeName"
              error={!!checkError("collegeName", form)}
              helperText={form.errors.collegeName}
              placeholder="College Name"
              value={form.values.collegeName}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            {" "}
            <MemoizedSelectDropDown
              style={{ height: "60px" }}
              form={form}
              id={"state"}
              name="state"
              required={true}
              title={"Select State"}
              value={form.values.state}
              optionsData={StatesOptions}
              onChange={form.handleChange}
              error={!!checkError("state", form)}
              helperText={form.errors.state}
            />{" "}
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedSelectDropDown
              style={{ height: "60px" }}
              form={form}
              id={"city"}
              name="city"
              required={true}
              title={"Select city"}
              value={form.values.city}
              optionsData={CityOptions[form.values.state]}
              onChange={form.handleChange}
              error={!!checkError("city", form)}
              helperText={form.errors.city}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedSelectDropDown
              style={{ height: "60px" }}
              form={form}
              id={"collegeType"}
              name="collegeType"
              required={true}
              title={"Select college Type"}
              value={form.values.collegeType}
              optionsData={CollegeType}
              onChange={form.handleChange}
              error={!!checkError("collegeType", form)}
              helperText={form.errors.collegeType}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedSelectDropDown
              style={{ height: "60px" }}
              form={form}
              id={"category"}
              name="category"
              required={true}
              title={"Select category"}
              value={form.values.category}
              optionsData={CollegeCategory}
              onChange={form.handleChange}
              error={!!checkError("category", form)}
              helperText={form.errors.category}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            {" "}
            <MemoizedSelectDropDown
              style={{ height: "60px" }}
              form={form}
              id={"state"}
              name="state"
              required={true}
              title={"Select State"}
              value={form.values.state}
              optionsData={StatesOptions}
              onChange={form.handleChange}
              error={!!checkError("state", form)}
              helperText={form.errors.state}
            />{" "}
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="coursesAvailable"
              error={!!checkError("coursesAvailable", form)}
              helperText={form.errors.coursesAvailable}
              placeholder="courses Available"
              value={form.values.coursesAvailable}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="ranking"
              error={!!checkError("ranking", form)}
              helperText={form.errors.ranking}
              placeholder="Ranking"
              value={form.values.ranking}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="lowPlacement"
              error={!!checkError("lowPlacement", form)}
              helperText={form.errors.lowPlacement}
              placeholder="Lowest Placement "
              value={form.values.lowPlacement}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="highPlacement"
              error={!!checkError("highPlacement", form)}
              helperText={form.errors.highPlacement}
              placeholder="Highest Placement "
              value={form.values.highPlacement}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="avgCutoff"
              error={!!checkError("avgCutoff", form)}
              helperText={form.errors.avgCutoff}
              placeholder="Average Cutoff"
              value={form.values.avgCutoff}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="admissionMedium"
              error={!!checkError("admissionMedium", form)}
              helperText={form.errors.admissionMedium}
              placeholder="Admission Medium"
              value={form.values.admissionMedium}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Fees */}

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="fees"
              error={!!checkError("fees", form)}
              helperText={form.errors.fees}
              placeholder="Fees"
              value={form.values.fees}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Establishment Year */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="establishmentYear"
              error={!!checkError("establishmentYear", form)}
              helperText={form.errors.establishmentYear}
              placeholder="Establishment Year"
              value={form.values.establishmentYear}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Campus Size */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="campusSize"
              error={!!checkError("campusSize", form)}
              helperText={form.errors.campusSize}
              placeholder="Campus Size"
              value={form.values.campusSize}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Number of Students */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="numberOfStudents"
              error={!!checkError("numberOfStudents", form)}
              helperText={form.errors.numberOfStudents}
              placeholder="Number of Students"
              value={form.values.numberOfStudents}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Number of Departments */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="numberOfDepartments"
              error={!!checkError("numberOfDepartments", form)}
              helperText={form.errors.numberOfDepartments}
              placeholder="Number of Departments"
              value={form.values.numberOfDepartments}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Rankings NIRF 2023 */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="rankingsNIRF2023"
              error={!!checkError("rankingsNIRF2023", form)}
              helperText={form.errors.rankingsNIRF2023}
              placeholder="Rankings NIRF 2023"
              value={form.values.rankingsNIRF2023}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Flagship Course */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="flagshipCourse"
              error={!!checkError("flagshipCourse", form)}
              helperText={form.errors.flagshipCourse}
              placeholder="Flagship Course"
              value={form.values.flagshipCourse}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Number of Courses */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="numberOfCourses"
              error={!!checkError("numberOfCourses", form)}
              helperText={form.errors.numberOfCourses}
              placeholder="Number of Courses"
              value={form.values.numberOfCourses}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Total Faculty */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="totalFaculty"
              error={!!checkError("totalFaculty", form)}
              helperText={form.errors.totalFaculty}
              placeholder="Total Faculty"
              value={form.values.totalFaculty}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          {/* Scholarships Offered */}
          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedNameField
              className="input-field"
              name="scholarshipsOffered"
              error={!!checkError("scholarshipsOffered", form)}
              helperText={form.errors.scholarshipsOffered}
              placeholder="Scholarships Offered"
              value={form.values.scholarshipsOffered}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12} style={{ width: "100%" }}>
            <MemoizedUploadInput
              form={form}
              id="collegeLogo"
              className="input-field"
              name="collegeLogo"
              error={!!checkError("collegeLogo", form)}
              helperText={form.errors.collegeLogo}
              placeholder="Scholarships Offered"
              value={form.values.collegeLogo}
              onChange={(e) => {
                form.handleChange(e);
              }}
            />
          </Grid>
        </Grid>

        <MemoizedButton
          id="lead-form"
          content={"Submit"}
          loading={loading}
          handleClick={(e) => {
            // createCookieInHour("lead_trigger", "contact_us_form", 10);
            form.handleSubmit(e);
          }}
          sx={{
            width: "100%",
            mt: "24px",
            maxWidth: "500px",
          }}
        />
      </form>
    </CustomCollegeData>
  );
};

export const MemoizedCollegeData = React.memo(CollegeData);

/**
 * Student 
 * Mentor
 * 
 * Student wanted to select a Mentor:
 * 
 * In Detail Dasboard we will have a button Subsribe : 
 * 
 * Student Data we be linked with mentor Mentor Data (Mutual Linking)
 * 
 * Mentor Profile will have student Data
 * Student Profile will have MentorData
 * 
 * /subscribe - Where student Subscribe a mentor 
 * 
 * Mapping : {subscribeID, mentorId, studentId, mentorName, studentName, subscriptionStatus .......futher fields can be added later}
 * 
 * /getMentors - Query and pull all the subscribeIds with studentId mapped
 * /getStudent - Query and pull all the subscribeIds with mentorId mapped
 * 
 * /unsubscribe - Where subscriptionStatus will be inactive
 * 
 * 
 * Driver10(14)(ii): 185000,
 * Internet10(14)(ii): 48000,
 * Professional Persuit10(14)(ii): 240000
 * Fuel10(14)(ii): 216000,
 * Health Club10(14)(i): 60000
 * 
 * LTA10(5): 158000,
 * HRA 10(13)(a)	
: 639000
 * 
 * 17(2)(Viii): Food Coupons
 */
