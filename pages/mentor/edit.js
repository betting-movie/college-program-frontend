import Head from "next/head";
import { Inter } from "next/font/google";
import { MemoizedMentorDashboard } from "@/src/modules/Mentor/Dashboard";
import { Typography } from "@mui/material";
import { MemoizedEditMentor } from "@/src/modules/Mentor/Edit";

const inter = Inter({ subsets: ["latin"] });

export default function MentorEdit() {
  /* College Name , city,state, collegeType(govt,semigov, private) ,category(Eng, Medical), Courses Available, Ranking, Fees, Placement(High low), collegeLogo, Avg Cutoff, medium of admission(exam), Establishment year,Campus size, No. of students,Number of departments,Rankings (NIRF 2023),Flagship course of study,Number of courses,Total faculty,Types of scholarships offered,Brochure */
  return (
    <>
      <Head>
        <title>Login - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <MemoizedEditMentor />
    </>
  );
}
