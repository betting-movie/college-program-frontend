import Head from "next/head";
import { Inter } from "next/font/google";
import { primary } from "@/src/SDK/theme";
import { Box } from "@mui/material";
import { MemoizedFooter, MemoizedHeader } from "@/src/modules/Layout";

const inter = Inter({ subsets: ["latin"] });

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
        <MemoizedHeader />
        <Box>Hello</Box>
        {/* <MemoizedFooter/> */}
      </Box>
    </>
  );
}
