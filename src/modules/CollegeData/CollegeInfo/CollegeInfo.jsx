import { primary } from "@/src/SDK/theme";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MemoizedCollegeTable } from "./CollegeTableData";

const CustomCollegeInfo = styled(Box)(({ theme }) => ({
  // padding: "10px",

  // paddingBottom: "150px",

  ".main-header": {
    fontSize: "24px",
    fontWeight: "600",
    //margin:"10px 0px 10px 0px",
    color: primary?.white,
  },

  ".header-info": {
    fontSize: "20px",
    fontWeight: "600",
    margin: "10px 0px 10px 0px",
    // color:primary?.white
  },

  ".sub-header-info": {
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "capitalize",

    //margin:"10px 0px 10px 0px",
    color: primary?.lightGrey,
  },

  ".info": {
    color: primary?.mainText,
  },

  [theme.breakpoints.down("sm")]: {
    ".main-header": {
      fontSize: "24px",
      fontWeight: "600",

      color: primary?.white,
    },
  },
}));

const CollegeInfo = ({ college }) => {
  const {
    admissionMode,
    averagePackageRange,
    avgCutoff,
    brochure,
    campusSize,
    category,
    city,
    collegeImage,
    collegeLogo,
    collegeType,
    college_name,
    counsellingMode,
    coursesAvailable,
    establishmentYear,
    fees,
    flagshipCourse,
    numberOfCourses,
    numberOfDepartments,
    numberOfStudents,
    placement,
    ranking,
    rankingsNIRF,
    scholarshipsOffered,
    state,
    totalFaculty,
  } = college;

  return (
    <CustomCollegeInfo>
      <Box>
        <Box
          sx={{ display: { xs: "block", sm: "flex", md: "flex", lg: "flex" } }}
        >
          <Box
            sx={{
              width: { xs: "70px", sm: "100px", md: "180px", lg: "180px" },
              margin: "10px",
            }}
          >
            <LazyLoadImage src={collegeLogo} style={{ width: "100%" }} />
          </Box>

          <Box sx={{ margin: { xs: "10px", sm: "10px", md: "20px" } }}>
            <Typography className="main-header">{college_name}</Typography>
            <Typography className="sub-header-info">
              {city},{state}
            </Typography>
            <Typography className="sub-header-info">
              NIRF Ranking: {rankingsNIRF}
            </Typography>
          </Box>
        </Box>

        <Typography
          style={{ margin: "10px 0px 10px 0px" }}
        >{`Welcome to ${college_name}, a premier institution of higher education located in the bustling city of ${city}, ${state}. Since its establishment in ${establishmentYear}, ${college_name} has been committed to providing a transformative and holistic learning experience to its students. With a strong emphasis on academic excellence, practical skill development, and a nurturing environment, we have consistently ranked among the top institutions in the country.`}</Typography>

        <LazyLoadImage
          src={collegeImage}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            margin: "10px 0px 10px 0px",
          }}
        />

        <MemoizedCollegeTable data={college} />
        <Typography className="header-info">Campus and Facilities:</Typography>
        <Typography className="info">{`Spread across an expansive area of ${campusSize}, our campus provides a conducive environment for learning and personal growth. Equipped with modern facilities, including well-equipped laboratories, libraries stocked with an extensive collection of resources, advanced research centers, and sports facilities, our campus serves as a hub for academic and extracurricular activities. Students can immerse themselves in a dynamic learning environment that encourages exploration and intellectual curiosity.`}</Typography>

        <Typography className="header-info">
          Courses and Departments:
        </Typography>
        <Typography className="info">{`With a diverse array of ${numberOfCourses} courses and ${numberOfDepartments} departments, ${college_name} offers a comprehensive academic experience that encompasses both traditional and emerging fields of study. Our faculty comprises experienced educators and industry experts dedicated to nurturing the next generation of professionals. The curriculum is designed to be contemporary, relevant, and in line with industry standards, ensuring that our graduates are well-prepared for the challenges of the modern professional landscape.`}</Typography>

        <Typography className="header-info">
          Admission and Counselling:
        </Typography>
        <Typography className="info">{`The admission process at ${college_name} is conducted through a transparent and merit-based system, ensuring equal opportunities for all aspiring students. We offer both undergraduate and postgraduate programs, and our admission criteria are based on various factors, including the academic performance of the students and their performance in the entrance examination. We also provide comprehensive counseling services to guide students in choosing the right course that aligns with their interests and career goals.`}</Typography>

        <Typography className="header-info">
          Faculty and Academic Excellence:
        </Typography>
        <Typography className="info">{`At ${college_name}, we take pride in our esteemed faculty members who are not only experts in their respective fields but also passionate educators committed to nurturing the intellectual growth of their students. With a student-centric approach to teaching, our faculty members actively engage in research, innovation, and academic collaborations, contributing to the overall academic and intellectual environment of the college.`}</Typography>

        <Typography className="header-info">
          Placements and Career Opportunities:
        </Typography>
        <Typography className="info">{`The placement cell at ${college_name} works tirelessly to facilitate rewarding career opportunities for our students. Through collaborations with leading industry partners and organizations, we ensure that our students have access to a wide range of placement opportunities in diverse sectors. Our strong industry connections, combined with comprehensive training and skill development programs, enable our students to excel in their chosen professions and embark on successful career journeys.`}</Typography>

        <Typography className="header-info">
          Rankings and Recognition:
        </Typography>
        <Typography className="info">{`${college_name} has consistently secured top rankings in various national and international rankings, including the National Institutional Ranking Framework (NIRF) listed rank ${rankingsNIRF}. Our commitment to academic excellence, research contributions, and overall student development has earned us recognition as a leading institution in the country. We take pride in our achievements and continue to strive for excellence in all aspects of education and research.`}</Typography>

        <Typography className="header-info">
          Rankings and Recognition:
        </Typography>
        <Typography className="info">{`Our strong and extensive alumni network is a testament to the quality of education and the impact that ${college_name} has had on the lives of its graduates. Our alumni are spread across the globe, making significant contributions in their respective fields and upholding the values and ethos of our institution. Through various alumni engagement programs and networking events, we foster a sense of community and collaboration among our graduates, providing them with a platform to stay connected and contribute to the growth and development of the college.`}</Typography>

        <Typography className="info">{`${college_name} stands as a beacon of academic excellence, fostering a culture of innovation, inclusivity, and holistic development. With a rich legacy of producing industry leaders, researchers, and change-makers, we continue to uphold our commitment to providing a transformative educational experience that empowers students to realize their full potential and become global citizens of tomorrow. Join us at [college_name] and embark on a journey of intellectual growth, personal development, and professional success.`}</Typography>
      </Box>
    </CustomCollegeInfo>
  );
};

export const MemoizedCollegeInfo = React.memo(CollegeInfo);
