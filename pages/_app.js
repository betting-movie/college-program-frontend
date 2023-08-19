import { theme } from "@/src/SDK/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_PROD_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  );
}
