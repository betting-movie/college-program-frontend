import Head from "next/head";
import { Inter } from "next/font/google";
import { primary } from "@/src/SDK/theme";
import { Box, Typography } from "@mui/material";
import { MemoizedFooter, MemoizedHeader } from "@/src/modules/Layout";
import CollegeCards, {
  MemoizedCollegeCard,
} from "@/src/modules/GenericComponents/College/collegeCard";
import { MemoizedCollegeCategory } from "@/src/modules/GenericComponents/College/collegeCategory";
import { MemoizedcityCard } from "@/src/modules/GenericComponents/College/cityCards";
import { MemoizedcourseCard } from "@/src/modules/GenericComponents/College/courseCards";
import { MemoizedExamCard } from "@/src/modules/GenericComponents/College/examCard";
import { MemoizedBestCollegeCard } from "@/src/modules/GenericComponents/College/bestColleges";
import { MemoizedNameField } from "@/src/SDK/input";
import { MemoizedCollegeDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/collegeSwiper";
import { MemoizedCategoryDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/categorySwiper";
import { MemoizedCityDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/citySwiper";
import { MemoizedCourseDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/courseSwiper";
import { MemoizedExamDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/examSwiper";
import { MemoizedTopCollegesDataSwiper } from "@/src/modules/GenericComponents/CollegeSwiper/topCollegesSwiper";
import { useEffect, useState } from "react";
import { getColleges } from "@/src/apiService/collegeData";

import VaccinesTwoToneIcon from "@mui/icons-material/VaccinesTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import TypeWriter from "@/src/SDK/typeWriter";

const inter = Inter({ subsets: ["latin"] });

// const sampleData = [
//   {
//     id: "1",
//     college_name: "IIT Madras",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     collegeType: "GOVERNMENT",
//     category: "Engineering",
//     coursesAvailable: [
//       "Aerospace Engineering",
//       "Agricultural and Irrigation Engineering",
//       "Architecture and Planning",
//       "Biotechnology",
//       "Chemical Engineering",
//       "Civil Engineering",
//       "Computer Science and Engineering",
//       "Electrical Engineering",
//       "Electronics and Communication Engineering",
//       "Engineering Physics",
//       "Engineering Design",
//       "Humanities and Sciences",
//       "Management Studies",
//       "Mechanical Engineering",
//       "Ocean Engineering",
//       "Textile Technology",
//     ],
//     ranking: "1 (NIRF 2023)",
//     fees: "INR 10,000 - INR 2,00,000 per year",
//     placement: [
//       "Google",
//       "Microsoft",
//       "Amazon",
//       "Flipkart",
//       "Paytm",
//       "Walmart Labs",
//       "Intel",
//       "IBM",
//       "TCS",
//       "Infosys",
//       "Wipro",
//     ],
//     collegeLogo: "Images/iitmadras.webp",
//     avgCutoff: "JEE Main Rank: 9000 - 10000",
//     counsellingMode: "ONLINE",
//     admissionMode: "JEE Main + JEE Advanced",
//     establishmentYear: "1959",
//     campusSize: "625 acres",
//     numberOfStudents: "10,000+",
//     numberOfDepartments: "16",
//     rankingsNIRF: "1 (Overall)",
//     flagshipCourse: "Computer Science and Engineering",
//     numberOfCourses: "68",
//     totalFaculty: "500+",
//     scholarshipsOffered:
//       "Government scholarships, merit-based scholarships, need-based scholarships",
//     brochure:
//       "https://www.iitm.ac.in/sites/default/files/iit-madras-brochure-2023.pdf",
//     collegeImage: "Images/collegepic.jpeg",
//     averagePackageRange: "20L to 1.5Cr", //Not in api
//   },
//   {
//     id: "1",
//     college_name: "IIT Madras",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     collegeType: "GOVERNMENT",
//     category: "Engineering",
//     coursesAvailable: [
//       "Aerospace Engineering",
//       "Agricultural and Irrigation Engineering",
//       "Architecture and Planning",
//       "Biotechnology",
//       "Chemical Engineering",
//       "Civil Engineering",
//       "Computer Science and Engineering",
//       "Electrical Engineering",
//       "Electronics and Communication Engineering",
//       "Engineering Physics",
//       "Engineering Design",
//       "Humanities and Sciences",
//       "Management Studies",
//       "Mechanical Engineering",
//       "Ocean Engineering",
//       "Textile Technology",
//     ],
//     ranking: "1 (NIRF 2023)",
//     fees: "INR 10,000 - INR 2,00,000 per year",
//     placement: [
//       "Google",
//       "Microsoft",
//       "Amazon",
//       "Flipkart",
//       "Paytm",
//       "Walmart Labs",
//       "Intel",
//       "IBM",
//       "TCS",
//       "Infosys",
//       "Wipro",
//     ],
//     collegeLogo: "Images/iitmadras.webp",
//     avgCutoff: "JEE Main Rank: 9000 - 10000",
//     counsellingMode: "ONLINE",
//     admissionMode: "JEE Main + JEE Advanced",
//     establishmentYear: "1959",
//     campusSize: "625 acres",
//     numberOfStudents: "10,000+",
//     numberOfDepartments: "16",
//     rankingsNIRF: "1 (Overall)",
//     flagshipCourse: "Computer Science and Engineering",
//     numberOfCourses: "68",
//     totalFaculty: "500+",
//     scholarshipsOffered:
//       "Government scholarships, merit-based scholarships, need-based scholarships",
//     brochure:
//       "https://www.iitm.ac.in/sites/default/files/iit-madras-brochure-2023.pdf",
//     collegeImage: "Images/collegepic.jpeg",
//     averagePackageRange: "20L to 1.5Cr", //Not in api
//   },
//   {
//     id: "1",
//     college_name: "IIT Madras",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     collegeType: "GOVERNMENT",
//     category: "Engineering",
//     coursesAvailable: [
//       "Aerospace Engineering",
//       "Agricultural and Irrigation Engineering",
//       "Architecture and Planning",
//       "Biotechnology",
//       "Chemical Engineering",
//       "Civil Engineering",
//       "Computer Science and Engineering",
//       "Electrical Engineering",
//       "Electronics and Communication Engineering",
//       "Engineering Physics",
//       "Engineering Design",
//       "Humanities and Sciences",
//       "Management Studies",
//       "Mechanical Engineering",
//       "Ocean Engineering",
//       "Textile Technology",
//     ],
//     ranking: "1 (NIRF 2023)",
//     fees: "INR 10,000 - INR 2,00,000 per year",
//     placement: [
//       "Google",
//       "Microsoft",
//       "Amazon",
//       "Flipkart",
//       "Paytm",
//       "Walmart Labs",
//       "Intel",
//       "IBM",
//       "TCS",
//       "Infosys",
//       "Wipro",
//     ],
//     collegeLogo: "Images/iitmadras.webp",
//     avgCutoff: "JEE Main Rank: 9000 - 10000",
//     counsellingMode: "ONLINE",
//     admissionMode: "JEE Main + JEE Advanced",
//     establishmentYear: "1959",
//     campusSize: "625 acres",
//     numberOfStudents: "10,000+",
//     numberOfDepartments: "16",
//     rankingsNIRF: "1 (Overall)",
//     flagshipCourse: "Computer Science and Engineering",
//     numberOfCourses: "68",
//     totalFaculty: "500+",
//     scholarshipsOffered:
//       "Government scholarships, merit-based scholarships, need-based scholarships",
//     brochure:
//       "https://www.iitm.ac.in/sites/default/files/iit-madras-brochure-2023.pdf",
//     collegeImage: "Images/collegepic.jpeg",
//     averagePackageRange: "20L to 1.5Cr", //Not in api
//   },
//   {
//     id: "1",
//     college_name: "IIT Madras",
//     city: "Chennai",
//     state: "Tamil Nadu",
//     collegeType: "GOVERNMENT",
//     category: "Engineering",
//     coursesAvailable: [
//       "Aerospace Engineering",
//       "Agricultural and Irrigation Engineering",
//       "Architecture and Planning",
//       "Biotechnology",
//       "Chemical Engineering",
//       "Civil Engineering",
//       "Computer Science and Engineering",
//       "Electrical Engineering",
//       "Electronics and Communication Engineering",
//       "Engineering Physics",
//       "Engineering Design",
//       "Humanities and Sciences",
//       "Management Studies",
//       "Mechanical Engineering",
//       "Ocean Engineering",
//       "Textile Technology",
//     ],
//     ranking: "1 (NIRF 2023)",
//     fees: "INR 10,000 - INR 2,00,000 per year",
//     placement: [
//       "Google",
//       "Microsoft",
//       "Amazon",
//       "Flipkart",
//       "Paytm",
//       "Walmart Labs",
//       "Intel",
//       "IBM",
//       "TCS",
//       "Infosys",
//       "Wipro",
//     ],
//     collegeLogo: "Images/iitmadras.webp",
//     avgCutoff: "JEE Main Rank: 9000 - 10000",
//     counsellingMode: "ONLINE",
//     admissionMode: "JEE Main + JEE Advanced",
//     establishmentYear: "1959",
//     campusSize: "625 acres",
//     numberOfStudents: "10,000+",
//     numberOfDepartments: "16",
//     rankingsNIRF: "1 (Overall)",
//     flagshipCourse: "Computer Science and Engineering",
//     numberOfCourses: "68",
//     totalFaculty: "500+",
//     scholarshipsOffered:
//       "Government scholarships, merit-based scholarships, need-based scholarships",
//     brochure:
//       "https://www.iitm.ac.in/sites/default/files/iit-madras-brochure-2023.pdf",
//     collegeImage: "Images/collegepic.jpeg",
//     averagePackageRange: "20L to 1.5Cr", //Not in api
//   },
// ];

const CategoryData = [
  {
    id: 1,
    category: "Engineering",
    noOfColleges: "100+",
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    iconUrl: "/Images/engineeringIcon.webp",
  },
  {
    id: 2,
    category: "Medical",
    noOfColleges: "50+",
    degrees: ["MBBS", "MS/MD", "Nursing"],
    iconUrl: "/Images/medicalIcon.webp",
  },
];

const cityData = [
  {
    iconUrl: "/Images/cityIcon/bangalore.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/cityIcon/delhi.webp",
    name: "Delhi",
  },
  {
    iconUrl: "/Images/cityIcon/chennai.webp",
    name: "Chennai",
  },
  {
    iconUrl: "/Images/cityIcon/hyderabad.webp",
    name: "Hyderabad",
  },
  {
    iconUrl: "/Images/cityIcon/kolkata.webp",
    name: "Kolkata",
  },
  {
    iconUrl: "/Images/cityIcon/mumbai.webp",
    name: "Mumbai",
  },
  {
    iconUrl: "/Images/cityIcon/pune.webp",
    name: "Pune",
  },
];

const courseData = [
  {
    name: "B.E/B.Tech",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
  {
    name: "M.E/M.Tech",
    duration: "2 Years",
    avgFees: "83.99 K",
    colleges: "215",
    courseType: "Full Time",
  },
  {
    name: "MBBS",
    duration: "5.5 Years",
    avgFees: "10.24 L",
    colleges: "501",
    courseType: "Full Time",
  },
  {
    name: "B.Sc",
    duration: "3 Years",
    avgFees: "26.86 K",
    colleges: "796",
    courseType: "Full Time",
  },
];

const examCard = [
  {
    type: "Offline Exam",
    name: "JEE Main",
    collegesParticipate: "650",
    examDate: "April 28, 2024",
    examLevel: "National Level",
    examIcon: "/Images/examIcon/jee-main.webp",
    examUrl: "https://www.jeemain.nta.nic.in/",
  },
  {
    type: "Offline Exam",
    name: "JEE Advanced",
    collegesParticipate: "23",
    examDate: "June 15, 2024",
    examLevel: "National Level",
    examIcon: "/Images/examIcon/jeeAdvance.webp",
    examUrl: "https://jeeadv.ac.in/",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "National Level",
    examIcon: "/Images/examIcon/neet.webp",
    examUrl: "https://neet.nta.nic.in/",
  },
  {
    type: "Offline Exam",
    name: "CUET-UG",
    collegesParticipate: "90",
    examDate: "July 15, 2024",
    examLevel: "National Level",
    examIcon: "/Images/examIcon/cuet.webp",
    examUrl: "https://cuet.nta.nic.in/",
  },
  {
    type: "Offline Exam",
    name: "GATE",
    collegesParticipate: "2,700",
    examDate: "February 04, 2024",
    examLevel: "National Level",
    examIcon: "/Images/examIcon/gate.webp",
    examUrl: "https://gate.iitk.ac.in/",
  },
];

const bestColleges = [
  {
    topic: "Best Engineering colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/engineeringIcon.webp",
    bgColor: "linear-gradient(62deg, #DEDEF5 -10%, #F4F8FB 100%)",
  },
  {
    topic: "Best Medical colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/medicalIcon.webp",
    bgColor: "linear-gradient(62deg, #F4F8FB 0%, #DEDEF5 100%)",
  },
  // {
  //   topic: "Best MBA colleges in India",
  //   numberOfColleges: "300",
  //   iconUrl: "/Images/iitmadras.webp",
  //   bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  // },
  // {
  //   topic: "Best MBA colleges in India",
  //   numberOfColleges: "300",
  //   iconUrl: "/Images/iitmadras.webp",
  //   bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  // },
  // {
  //   topic: "Best MBA colleges in India",
  //   numberOfColleges: "300",
  //   iconUrl: "/Images/iitmadras.webp",
  //   bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  // },
  // {
  //   topic: "Best MBA colleges in India",
  //   numberOfColleges: "300",
  //   iconUrl: "/Images/iitmadras.webp",
  //   bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  // },
  // {
  //   topic: "Best MBA colleges in India",
  //   numberOfColleges: "300",
  //   iconUrl: "/Images/iitmadras.webp",
  //   bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  // },
];

export default function Home() {
  const [collegeData, setCollegeData] = useState([]);
  useEffect(() => {
    getColleges().then((res) => {
      setCollegeData(res?.data?.college);
      console.log("res", res);
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          CollegesToJob - Your Ultimate Guide for College Information
        </title>
        <meta
          name="description"
          content="Find comprehensive information about top colleges in India, courses offered, admission procedures, and career opportunities at CollegesToJob."
        />
        <meta
          name="keywords"
          content="Colleges, CollegesToJob, India, Education, Courses, Admissions, Careers"
        />
        <meta name="author" content="CollegesToJob" />
        <meta name="url" content="https://www.collegestojob.com/" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://www.collegestojob.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CollegesToJob - Your Ultimate Guide for College Information"
        />
        <meta
          property="og:description"
          content="Discover comprehensive information about top colleges in India, courses offered, admission procedures, and career opportunities at CollegesToJob."
        />
        <meta property="og:image" content="/Images/logo.webp" />
        <meta property="fb:app_id" content="your-facebook-app-id" />

        <meta
          name="twitter:description"
          content="Find comprehensive information about top colleges in India, courses offered, admission procedures, and career opportunities at CollegesToJob."
        />
        <meta
          name="twitter:title"
          content="CollegesToJob - Your Ultimate Guide for College Information"
        />
        <meta name="twitter:site" content="@CollegesToJob" />
        <meta name="twitter:creator" content="@CollegesToJob" />
        <meta name="twitter:url" content="https://www.collegestojob.com/" />
        <meta
          name="twitter:app:id:googleplay"
          content="your-google-play-app-id"
        />
        <meta name="twitter:app:country" content="IN" />
        <link rel="canonical" href="https://www.collegestojob.com/" />
        <link rel="icon" href="/Images/logo.webp" />
      </Head>
      <Box>
        <MemoizedHeader />
        <Box sx={{ marginBottom: "20px" }}>
          {/* #1F74D8, #1F74D800 */}
          <Box
            sx={{
              height: { xs: "200px", sm: "200px", md: "300px", lg: "300px" },
              // background:"#D2C1DA",
              background:
                "linear-gradient( 180deg,  #1F74D8 20%, #1F74D800 97.7% )",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box style={{ display: "block", marginTop: "10%" }}>
              <Box style={{ marginBottom: "20px" }}>
                <TypeWriter infoText={"Find Your College, Land Dream Job !!"} />
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <MemoizedNameField
                  className="input-field"
                  sx={{
                    background: primary?.white,
                    borderRadius: "8px",
                    width: "50vw",
                  }}
                  name="collegeName"
                  // error={!!checkError("collegeName", form)}
                  // helperText={form.errors.collegeName}
                  placeholder="Search College Name"
                  // value={form.values.collegeName}
                  // onChange={(e) => {
                  //   form.handleChange(e);
                  // }}
                />{" "}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              paddingLeft: { lg: "10%", md: "10%", sm: "5%", xs: "5%" },
              paddingRight: { lg: "10%", md: "10%", sm: "5%", xs: "5%" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Category
              </Typography>
              <MemoizedCategoryDataSwiper data={CategoryData} />
              {/* <MemoizedCollegeCategory info={CategoryData} /> */}
            </Box>

            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Colleges
              </Typography>

              <MemoizedCollegeDataSwiper data={collegeData} />
            </Box>

            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Location
              </Typography>

              <MemoizedCityDataSwiper data={cityData} />
            </Box>

            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Course
              </Typography>

              <MemoizedCourseDataSwiper data={courseData} />
            </Box>

            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Exam
              </Typography>

              <MemoizedExamDataSwiper data={examCard} />
            </Box>

            <Box>
              <Typography
                sx={{
                  padding: {
                    lg: "1em 0em 1em 0em",
                    md: "1em 0em 1em 0em",
                    sm: "0.8em 0em 0.8em 0em",
                    xs: "0.8em 0em 0.8em 0em",
                  },
                  fontSize: { lg: "2em", md: "2em", sm: "1.5em", xs: "1.5em" },
                  fontWeight: 600,
                }}
              >
                Top 10 Colleges in India
              </Typography>

              <MemoizedTopCollegesDataSwiper data={bestColleges} />
            </Box>
          </Box>
        </Box>

        <MemoizedFooter />
      </Box>
    </>
  );
}
