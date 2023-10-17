import Head from "next/head";
import { Inter } from "next/font/google";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedFooter, MemoizedHeader } from "@/src/modules/Layout";
import CollegeCards, {
  MemoizedCollegeCard,
} from "@/src/modules/GenericComponents/College/collegeCard";
import { MemoizedCollegeCategory } from "@/src/modules/GenericComponents/College/collegeCategory";
import { MemoizedcityCard } from "@/src/modules/GenericComponents/College/cityCards";
import { MemoizedcourseCard } from "@/src/modules/GenericComponents/College/courseCards";
import { MemoizedExamCard } from "@/src/modules/GenericComponents/College/examCard";

const inter = Inter({ subsets: ["latin"] });

const sampleData = {
  id: "1",
  college_name: "IIT Madras",
  city: "Chennai",
  state: "Tamil Nadu",
  collegeType: "GOVERNMENT",
  category: "Engineering",
  coursesAvailable: [
    "Aerospace Engineering",
    "Agricultural and Irrigation Engineering",
    "Architecture and Planning",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Engineering Physics",
    "Engineering Design",
    "Humanities and Sciences",
    "Management Studies",
    "Mechanical Engineering",
    "Ocean Engineering",
    "Textile Technology",
  ],
  ranking: "1 (NIRF 2023)",
  fees: "INR 10,000 - INR 2,00,000 per year",
  placement: [
    "Google",
    "Microsoft",
    "Amazon",
    "Flipkart",
    "Paytm",
    "Walmart Labs",
    "Intel",
    "IBM",
    "TCS",
    "Infosys",
    "Wipro",
  ],
  collegeLogo: "Images/iitmadras.webp",
  avgCutoff: "JEE Main Rank: 9000 - 10000",
  counsellingMode: "ONLINE",
  admissionMode: "JEE Main + JEE Advanced",
  establishmentYear: "1959",
  campusSize: "625 acres",
  numberOfStudents: "10,000+",
  numberOfDepartments: "16",
  rankingsNIRF: "1 (Overall)",
  flagshipCourse: "Computer Science and Engineering",
  numberOfCourses: "68",
  totalFaculty: "500+",
  scholarshipsOffered:
    "Government scholarships, merit-based scholarships, need-based scholarships",
  brochure:
    "https://www.iitm.ac.in/sites/default/files/iit-madras-brochure-2023.pdf",
  collegeImage: "Images/collegepic.jpeg",
  averagePackageRange: "20L to 1.5Cr", //Not in api
};

const CategoryData = [
  {
    id:1,
    category: "Engineering",
    noOfColleges: "100+",
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    iconUrl: "/Images/iitmadras.webp",
  },
];

const cityData = [
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
];

const courseData = [
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
];

const examCard =[
  {
    type:"Offline Exam",
    name:"NEET",
    collegesParticipate:"600",
    examDate:"May 05, 2024",
    examLevel:"Exam Level",
    examUrl:"/Images/iitmadras.webp",

  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Leafyprofit</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Box>
        {/* <MemoizedHeader /> */}
        <Box>
          <MemoizedCollegeCard info={sampleData} />
          <MemoizedCollegeCategory info={CategoryData[0]} />
          <MemoizedcityCard info={cityData[0]} />
          <MemoizedcourseCard info={courseData[0]} />
          <MemoizedExamCard info={examCard[0]}/>
        </Box>
        {/* <MemoizedFooter/> */}
      </Box>
    </>
  );
}
