import Head from "next/head";
import { Inter } from "next/font/google";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedCollegeData } from "@/src/modules/CollegeData/ContactUs";
import { MemoizedHeader } from "@/src/modules/Layout";
import { MemoizedMentorList } from "@/src/modules/Student/MentorList/MentorList";
import { sampleMentorData } from "@/src/constants/mentorData";

const inter = Inter({ subsets: ["latin"] });

export default function YourMentor() {
  /* College Name , city,state, collegeType(govt,semigov, private) ,category(Eng, Medical), Courses Available, Ranking, Fees, Placement(High low), collegeLogo, Avg Cutoff, medium of admission(exam), Establishment year,Campus size, No. of students,Number of departments,Rankings (NIRF 2023),Flagship course of study,Number of courses,Total faculty,Types of scholarships offered,Brochure */
  return (
    <>
      <Head>
        <title>College Data</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <MemoizedHeader />

      <MemoizedMentorList mentorData={sampleMentorData} />
    </>
  );
}
