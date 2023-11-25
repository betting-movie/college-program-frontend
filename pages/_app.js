import { MemoizedSnackBar } from "@/src/SDK/snackbar";
import { theme } from "@/src/SDK/theme";
import { CustomContextProvider } from "@/src/context/context";
import { getRole, isUserAuthenticated } from "@/src/utils/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_PROD_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await isUserAuthenticated();

      if (!isAuthenticated) {
        const isMentorPage = router.pathname.startsWith("/mentor/");
        const isStudentPage = router.pathname.startsWith("/student/");
        const isDreamJob = router.pathname.startsWith("/your-mentor"); // For testing purpose only

        if (isMentorPage) {
          if (router.pathname === "/mentor/signup") {
            router.push("/mentor/signup");
          } else {
            router.push("/mentor/login");
          }
        } else if (isStudentPage) {
          if (router.pathname === "/student/signup") {
            router.push("/student/signup");
          } else {
            router.push("/student/login");
          }
        }
        // For testing purpose only
        else if (isDreamJob) {
          router.push("/your-mentor");
        } else {
          router.push("/");
        }
      } else {
        const role = getRole();
        console.log("Role", role);
        if (role) {
          const isMentor = role === "MENTOR";
          const isStudent = role === "STUDENT";
          console.log("Student-->", isStudent, "Mentor-->", isMentor);
          if (isMentor && router.pathname.startsWith("/mentor/")) {
            router.push(router.pathname.startsWith("/mentor/"));
          } else if (isStudent && router.pathname.startsWith("/student/")) {
            router.push(router.pathname.startsWith("/student/"));
          } else {
            router.push(isMentor ? "/mentor/dashboard" : "/student/dashboard");
          }
        }
      }
    };

    checkAuth();
  }, [router.pathname]);

  return (
    <CustomContextProvider>
      <ThemeProvider theme={theme}>
        {" "}
        <CssBaseline>
          <MemoizedSnackBar />
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </CustomContextProvider>
  );
}
