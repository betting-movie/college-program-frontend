import Head from "next/head";
import { Inter } from "next/font/google";

import { MemoizedCollegeInfo } from "@/src/modules/CollegeData/CollegeInfo/CollegeInfo";
import { getColleges } from "@/src/apiService/collegeData";
import { MemoizedFooter, MemoizedHeader } from "@/src/modules/Layout";
import { Box, Typography } from "@mui/material";
import { MemoizedCollegeDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/collegeSwiper";
import { getMentorDetails } from "@/src/apiService/mentorService";
import { useContext, useEffect } from "react";
import { Context } from "@/src/context/context";
import { MemoizedMentorDetails } from "@/src/modules/Student/MentorList/MentorDetails";

const inter = Inter({ subsets: ["latin"] });

export default function MentorData({ mentor_id }) {
  /* College Name , city,state, collegeType(govt,semigov, private) ,category(Eng, Medical), Courses Available, Ranking, Fees, Placement(High low), collegeLogo, Avg Cutoff, medium of admission(exam), Establishment year,Campus size, No. of students,Number of departments,Rankings (NIRF 2023),Flagship course of study,Number of courses,Total faculty,Types of scholarships offered,Brochure */

  const state = useContext(Context);

  console.log("mentor_id", state?.mentorList);

  const mentorData = state?.mentorList?.find(
    (res) => {
      return mentor_id === res?.name?.toLowerCase()?.split(" ")?.join("-");
    },

    // console.log("Dk",res?.name?.toLowerCase()?.split(" ")?.join("-"))
  );

  console.log("mentorData", mentorData);
  return (
    <>
      <Head>
        <title>College Data</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MemoizedHeader />

      <MemoizedMentorDetails mentorDetails={mentorData} />
      {/* <Box
        sx={{
          padding: { xs: "4%", sm: "4%", md: "10%", lg: "10%" },
          background:
            "linear-gradient( 180deg,  #1F74D8 20%, #1F74D800 97.7% )",
        }}
      >
        <MemoizedCollegeInfo college={selectedCollege[0]} />

        <Typography
          style={{
            fontSize: "20px",
            margin: "20px 0px 20px 0px",
            fontWeight: "600",
          }}
        >
          Explore More Colleges
        </Typography>
        <MemoizedCollegeDataSwiper data={college} />
      </Box> */}
      <MemoizedFooter />
    </>
  );
}

export async function getServerSideProps(context) {
  // Get the college data from the API.

  const mentor_id = context.query.mentor_id;

  //   const res = await getMentorDetails(mentor_id);

  console.log(mentor_id);

  // Check if the API request was successful.
  //   if (res.status === 200) {
  //     // Get the college data from the response.
  //     const mentorData = res.data.college;

  //     const selectedCollege = college.filter((res) => {
  //       console.log(
  //         res?.college_name?.toLowerCase()?.split(" ")?.join("-"),
  //         college_id,
  //       );
  //       return (
  //         res?.college_name?.toLowerCase()?.split(" ")?.join("-") === college_id
  //       );
  //     });

  //     // Return the college data as props.
  return {
    props: { mentor_id },
  };
  //   }

  // If the API request was not successful, throw an error.
  throw new Error("Failed to fetch college data.");
}
