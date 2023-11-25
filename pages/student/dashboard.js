import Head from "next/head";
import { Inter } from "next/font/google";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedCollegeData } from "@/src/modules/CollegeData/ContactUs";
import { MemoizedSignup } from "@/src/modules/Student/Signup";
import { MemoizedInfoCard } from "@/src/SDK/cards/infoCard";
import { MemoizedMentorList } from "@/src/modules/Student/MentorList/MentorList";
import { MemoizedHeader, MemoizedStudentHeader } from "@/src/modules/Layout";

const inter = Inter({ subsets: ["latin"] });

const sampleData = [
  {
    id: "1f2edcad-9a31-4e53-b0d6-40cd1c898977",
    email: "sample1@example.com",
    password: "samplepassword1",
    profile_pic: "/Images/pic1.jpeg",
    phone_number: "1234567890",
    name: "John Doe",
    designation: "Senior Consultant",
    description: "Experienced consultant with a focus on financial planning.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    consultation_cost: 100,
    availability: "Available for consultation",
    education: ["MBA in Finance", "Bachelor of Commerce"],
    achievements: ["Best Consultant Award 2020", "Top Performer in 2019"],
    current_company: "Google", // Missing in backend
    experience: [
      "Financial Advisor at ABC Corp",
      "Investment Analyst at XYZ Inc",
    ],
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

  {
    id: "1f2edcad-9a31-4e53-b0d6-40cd1c898977",
    email: "sample1@example.com",
    password: "samplepassword1",
    profile_pic: "/Images/pic1.jpeg",
    phone_number: "1234567890",
    name: "John Doe",
    designation: "Senior Consultant",
    description: "Experienced consultant with a focus on financial planning.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    consultation_cost: 100,
    availability: "Available for consultation",
    education: ["MBA in Finance", "Bachelor of Commerce"],
    achievements: ["Best Consultant Award 2020", "Top Performer in 2019"],
    current_company: "Google", // Missing in backend
    experience: [
      "Financial Advisor at ABC Corp",
      "Investment Analyst at XYZ Inc",
    ],
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

  {
    id: "1f2edcad-9a31-4e53-b0d6-40cd1c898977",
    email: "sample1@example.com",
    password: "samplepassword1",
    profile_pic: "/Images/pic1.jpeg",
    phone_number: "1234567890",
    name: "John Doe",
    designation: "Senior Consultant",
    description: "Experienced consultant with a focus on financial planning.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    consultation_cost: 100,
    availability: "Available for consultation",
    education: ["MBA in Finance", "Bachelor of Commerce"],
    achievements: ["Best Consultant Award 2020", "Top Performer in 2019"],
    current_company: "Google", // Missing in backend
    experience: [
      "Financial Advisor at ABC Corp",
      "Investment Analyst at XYZ Inc",
    ],
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

  {
    id: "1f2edcad-9a31-4e53-b0d6-40cd1c898977",
    email: "sample1@example.com",
    password: "samplepassword1",
    profile_pic: "/Images/pic1.jpeg",
    phone_number: "1234567890",
    name: "John Doe",
    designation: "Senior Consultant",
    description: "Experienced consultant with a focus on financial planning.",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
    consultation_cost: 100,
    availability: "Available for consultation",
    education: ["MBA in Finance", "Bachelor of Commerce"],
    achievements: ["Best Consultant Award 2020", "Top Performer in 2019"],
    current_company: "Google", // Missing in backend
    experience: [
      "Financial Advisor at ABC Corp",
      "Investment Analyst at XYZ Inc",
    ],
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },
];

export default function StudentSignup() {
  /* College Name , city,state, collegeType(govt,semigov, private) ,category(Eng, Medical), Courses Available, Ranking, Fees, Placement(High low), collegeLogo, Avg Cutoff, medium of admission(exam), Establishment year,Campus size, No. of students,Number of departments,Rankings (NIRF 2023),Flagship course of study,Number of courses,Total faculty,Types of scholarships offered,Brochure */
  return (
    <>
      <Head>
        <title>Signup - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <Box>
        {/* <MemoizedHeader /> */}
        <MemoizedStudentHeader>
          <MemoizedMentorList mentorData={sampleData} />
        </MemoizedStudentHeader>
      </Box>
    </>
  );
}
