import React from "react";
import { MemoizedMentorHeader } from "../../Layout/Header/MentorHeader";
import { MemoizedMentorAbout } from "./About";
import { MemoizedMentorSkills } from "./Skills";
import { MemoizedMentorExperience } from "./Experience";
import { MemoizedMentorAchivements } from "./Achivements";
import { MemoizedMentorEducation } from "./Education";
import { MemoizedMentorOhters } from "./Other";

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
    skills: [
      "Financial Planning",
      "Investment Management",
      "Risk Assessment",
      "Leadership",
    ],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
];

const MentorDashboard = () => {
  return (
    <MemoizedMentorHeader>
      <MemoizedMentorAbout data={sampleData} />
      <MemoizedMentorExperience data={sampleData} />
      <MemoizedMentorSkills data={sampleData} />
      <MemoizedMentorAchivements data={sampleData} />
      <MemoizedMentorEducation data={sampleData} />
      <MemoizedMentorOhters data={sampleData} />
    </MemoizedMentorHeader>
  );
};

export const MemoizedMentorDashboard = React.memo(MentorDashboard);
