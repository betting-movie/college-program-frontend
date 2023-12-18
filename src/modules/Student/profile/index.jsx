import React, { useEffect, useState } from "react";
import { MemoizedStudentHeader } from "../../Layout";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import { MemoizedDashboardCardHeader } from "../../GenericComponents/dashboardCardHeader";
import { primary } from "@/src/SDK/theme";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkSharpIcon from "@mui/icons-material/LinkSharp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useRouter } from "next/router";
import { getStudentsDetails } from "@/src/apiService/studentService";

// const studData = {
//   name: "Akash Kushwaha",
//   profile_pic:
//     "https://colleges-to-jobs.s3.ap-south-1.amazonaws.com/akash-avatar.webp",
//   bio: `Hello, I'm Akash Kushwaha, a passionate software engineer experienced in developing Minimum Viable Products (MVPs).
//     As I continue to grow in my career, I am eager to take on new challenges and expand my skill set. I'm open to exciting opportunities to contribute my expertise and learn from experienced professionals.`,
//   email: "kushwahaakash971@gmail.com",
//   phone_number: "+91 9794620535",
//   domains: [
//     "Fullstack Developer",
//     "Backend Developer",
//     "DevOps / SRE / Cloud Engineer",
//     "Data Engineer / Big Data",
//   ],
//   linkedinUrl: "https://www.linkedin.com/in/akash-kushwaha-250949224/",
//   college: "U.I.E.T, CSJM University, Kanpur",
//   year_of_graduation: "2023",
//   resume:
//     "https://colleges-to-jobs.s3.ap-south-1.amazonaws.com/students-resume/Akash's+Resume.pdf",
// };

const CustomStudentProfile = styled(Box)(({ theme }) => ({
  ".student-info-container": {
    marginTop: "10px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: primary?.lightBlue,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  ".profile-container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10px",
    marginTop: "10px",
  },
  ".avatar": {
    width: 150,
    height: 150,
  },
  ".name": {
    fontSize: "1.8em",
    fontWeight: 600,
    color: primary?.mainText,
  },
  ".named-container": {
    marginLeft: "4em",
  },
  ".description-label": {
    fontSize: "1em",
    fontWeight: 600,
  },
  ".phone-email-container": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ".student-phone-email": {
    color: primary?.greyText,
    fontSize: "14px",
    fontWeight: 500,
  },
  ".icon": {
    color: primary?.greyText,
  },
  ".other-detail-container": {
    marginTop: "4px",
    padding: "8px",
    borderRadius: "12px",
    border: `1px solid ${primary?.inactiveState}`,
  },

  ".description-value": {
    fontSize: "1em",
    fontWeight: 500,
    color: primary?.greyText,
  },
  ".resume-linkedin-container": {
    padding: "8px",
    borderRadius: "12px",
    marginTop: 10,
    width: "50%",
    border: `2px solid ${primary?.inactiveState}`,
    backgroundColor: primary?.lightBlue,
  },
  ".upload-button": { backgroundColor: primary?.black, marginRight: "8px" },
  ".link": { color: "black", marginLeft: "8px" },
  [theme.breakpoints.down("md")]: {
    ".student-info-container": {
      padding: "10px",
    },
    ".profile-container": {
      flexDirection: "column",
    },
    ".named-container": {
      marginLeft: "1em",
    },
    ".avatar": {
      width: 150,
      height: 150,
    },
    ".name": {
      marginTop: "20px",
      textAlign: "left",
      fontSize: "1.4em",
    },
    ".phone-email-container": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    ".student-phone-email": {
      marginTop: "10px",
    },
    ".icon": {
      fontSize: "20px",
      marginTop: "10px",
    },
    ".description-label": {
      fontSize: "0.8em",
    },
    ".resume-linkedin-container": {
      margin: "auto",
      marginTop: "10px",
      width: "100%",
    },
  },
}));

const StudentProfile = () => {
  const [studentData, setStudentData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const studentId = localStorage.getItem("studentId");

    if (studentId) {
      getStudentsDetails(studentId)
        .then((res) => {
          setStudentData(res?.data?.student);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const navigate = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <MemoizedStudentHeader>
      <CustomStudentProfile>
        <Box className="student-info-container">
          <Box className="profile-container">
            <Avatar
              alt={studentData?.name}
              src={studentData?.profile_pic}
              className="avatar"
            />

            <Box className="named-container">
              <Typography variant="h6" className="name">
                {studentData?.name}
              </Typography>
              <Box className="phone-email-container">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CallRoundedIcon sx={{ marginRight: 1 }} className="icon" />
                  <Typography
                    variant="subtitle2"
                    className="student-phone-email"
                  >
                    {studentData?.phone_number}
                  </Typography>
                </Box>
                <Divider
                  orientation={"vertical"}
                  flexItem
                  sx={{
                    marginLeft: 1,
                    marginRight: 1,
                  }}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailRoundedIcon sx={{ marginRight: 1 }} className="icon" />
                  <Typography
                    variant="subtitle2"
                    className="student-phone-email"
                  >
                    {studentData?.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <AdsClickIcon
              sx={{ marginLeft: 1, marginRight: 1, color: "#039855" }}
            />
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              {studentData?.domains.map((domain) => {
                return (
                  <Typography
                    key={domain}
                    variant="subtitle2"
                    className="student-phone-email"
                    sx={{ paddingRight: 1 }}
                  >
                    {domain},
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
        {studentData?.bio && (
          <Box className="student-info-container">
            <MemoizedDashboardCardHeader title={"About"} />
            <Box className="other-detail-container">
              <Typography variant="h6" className="description-value">
                {studentData?.bio}
              </Typography>
            </Box>
          </Box>
        )}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", md: "row", xs: "column" },
            }}
          >
            <Box className="resume-linkedin-container" sx={{ marginRight: 2 }}>
              <MemoizedDashboardCardHeader title={"Resume"} />
              {studentData?.resume ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <AttachFileIcon sx={{ color: "#9333EA" }} />{" "}
                  <a
                    href={studentData?.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    View Resume
                  </a>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ marginLeft: "10px" }}> - -</Typography>
                  <Button
                    className="upload-button"
                    onClick={() => navigate.push("/student/edit")}
                  >
                    Upload
                  </Button>
                </Box>
              )}
            </Box>
            <Box className="resume-linkedin-container">
              <MemoizedDashboardCardHeader title={"LinkedIn"} />
              {studentData?.linkedinUrl ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LinkSharpIcon sx={{ color: "#9333EA" }} />{" "}
                  <a
                    href={studentData?.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {studentData?.linkedinUrl}
                  </a>
                </Box>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ marginLeft: "10px" }}> - -</Typography>
                  <Button
                    className="upload-button"
                    onClick={() => navigate.push("/student/edit")}
                  >
                    Upload
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          sx={{ marginLeft: { lg: 2, xs: 0 } }}
          marginTop={4}
        >
          <Button
            className="upload-button"
            onClick={() => navigate.push("/student/edit")}
          >
            <BorderColorIcon sx={{ marginRight: 2 }} /> Edit Profile
          </Button>
        </Box>
      </CustomStudentProfile>
    </MemoizedStudentHeader>
  );
};

export const MemoizedStudentProfile = React.memo(StudentProfile);
