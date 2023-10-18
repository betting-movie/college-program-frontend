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

const inter = Inter({ subsets: ["latin"] });

const sampleData = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const CategoryData = [
  {
    id: 1,
    category: "Engineering",
    noOfColleges: "100+",
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    iconUrl: "/Images/iitmadras.webp",
  },
  {
    id: 1,
    category: "Engineering",
    noOfColleges: "100+",
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    iconUrl: "/Images/iitmadras.webp",
  },
  {
    id: 1,
    category: "Engineering",
    noOfColleges: "100+",
    degrees: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    iconUrl: "/Images/iitmadras.webp",
  },
  {
    id: 1,
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
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
  {
    iconUrl: "/Images/iitmadras.webp",
    name: "Bangalore",
  },
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
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
  {
    name: "B.Tech/B.E",
    duration: "4 Years",
    avgFees: "62.81 K",
    colleges: "269",
    courseType: "Full Time",
  },
];

const examCard = [
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
  {
    type: "Offline Exam",
    name: "NEET",
    collegesParticipate: "600",
    examDate: "May 05, 2024",
    examLevel: "Exam Level",
    examUrl: "/Images/iitmadras.webp",
  },
];

const bestColleges = [
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    topic: "Best MBA colleges in India",
    numberOfColleges: "300",
    iconUrl: "/Images/iitmadras.webp",
    bgColor: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Colleges to jobs</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Box>
        <MemoizedHeader />
        <Box sx={{ marginBottom: "20px" }}>
          <Box
            sx={{
              height: "300px",
              background:
                "linear-gradient( 180.7deg,  rgba(0,213,255,1) 2.5%, rgba(79,255,255,1) 97.7% )",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ margin: "auto" }}>
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
              />
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: { lg: "10%", md: "10%", sm: "5%", xs: "5%" },
              marginRight: { lg: "10%", md: "10%", sm: "5%", xs: "5%" },
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
                Colleges
              </Typography>

              <MemoizedCollegeDataSwiper data={sampleData} />
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
