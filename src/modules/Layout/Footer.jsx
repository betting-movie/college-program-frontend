import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import { primary } from "@/src/SDK/theme";

const CustomFooter = styled(Box)(({ theme }) => ({
  ".heading": {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.1em",
    color: primary?.black,
    marginBottom: "12px",
  },
  ".sub-data": {
    fontWeight: "400",
    fontSize: "16px",
    color: primary?.black,
  },
  ".footer-bottom-curve": {
    width: "100%",
    marginTop: "-250px",
  },
  ".footer-plant-style": {
    width: "100%",
    marginBottom: "-80px",
  },
  ".footer-sub-heading": {
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.1em",
    color: primary?.black,
  },
  [theme.breakpoints.down("md")]: {
    ".heading": {
      fontSize: "10px",
    },
    ".footer-sub-heading": {
      fontSize: "10px",
    },
    ".sub-data": {
      fontSize: "8px",
    },
    ".footer-bottom-curve": {
      marginTop: "-64px",
    },
    ".footer-plant-style": {
      marginBottom: "-24px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ".heading": {
      fontSize: "8px",
    },
    ".footer-sub-heading": {
      fontSize: "8px",
    },
    ".sub-data": {
      fontSize: "6px",
    },
    ".footer-bottom-curve": {
      marginTop: "-64px",
    },
    ".footer-plant-style": {
      marginBottom: "-24px",
    },
  },
}));
const Footer = () => {
  const navigate = useRouter();
  return (
    <CustomFooter>
      <Box sx={{ backgroundColor: primary?.white }}>
        <Divider
          sx={{
            color: "#D9D9D9",
            width: "90%",
            margin: "auto",
            marginBottom: { md: "-100px" },
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{ p: { xs: "20px 20px 0px 20px", md: "126px 70px 64px 70px" } }}
        >
          <Grid sx={{ display: "block" }} item xs={2} lg={2}>
            <Typography className="heading">{"Pages"}</Typography>
            <List>
              <ListItem sx={{ padding: "8px 0px" }}>
                {/* <Link href="#"> */}
                <ListItemText
                  primary={
                    <Typography
                      className="sub-data"
                      onClick={() => {
                        navigate.push("/");
                      }}
                    >
                      {"Home"}
                    </Typography>
                  }
                />
                {/* </Link> */}
              </ListItem>
              <ListItem sx={{ padding: "8px 0px" }}>
                {/* <Link href="#"> */}
                <ListItemText
                  primary={
                    <Typography
                      className="sub-data"
                      onClick={() => {
                        navigate.push("/#whyLeafyprofit");
                      }}
                    >
                      {"Why leafyprofit"}
                    </Typography>
                  }
                />
                {/* </Link> */}
              </ListItem>

              <ListItem sx={{ padding: "8px 0px" }}>
                <ListItemText
                  primary={
                    <Typography
                      className="sub-data"
                      onClick={() => {
                        navigate.push("/#ourplantation");
                      }}
                    >
                      {"Our plantation"}
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem sx={{ padding: "8px 0px" }}>
                <ListItemText
                  primary={
                    <Typography
                      className="sub-data"
                      onClick={() => {
                        navigate.push("/#jointoday");
                      }}
                    >
                      {"Join today"}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          <Grid sx={{ display: "block" }} item xs={2} lg={4}>
            <Grid container>
              <Grid sx={{ display: "block" }} item xs={12} lg={6}>
                <Typography className="heading">{"Important"}</Typography>
                <ListItem sx={{ padding: "8px 0px" }}>
                  {/* <Link href="#"> */}
                  <ListItemText
                    primary={
                      <Typography className="sub-data">
                        {"Privacy Policy"}
                      </Typography>
                    }
                  />
                  {/* </Link> */}
                </ListItem>
                <ListItem sx={{ padding: "8px 0px" }}>
                  {/* <Link href="#"> */}
                  <ListItemText
                    primary={
                      <Typography className="sub-data">
                        {"Grievance Redressal"}
                      </Typography>
                    }
                  />
                  {/* </Link> */}
                </ListItem>
              </Grid>
              <Grid sx={{ display: "block" }} item xs={12} lg={6}>
                <Typography className="heading">{"Press"}</Typography>
              </Grid>
            </Grid>
            {/* <Typography className="heading">{"Blog"}</Typography> */}
          </Grid>
          <Grid sx={{ display: "block" }} item xs={2} lg={2}>
            <Typography className="heading">{"Blog"}</Typography>
          </Grid>
          <Grid sx={{ display: "block" }} item xs={6} lg={3}>
            <Typography className="heading">
              {"Get in touch with us"}
            </Typography>
            <Typography className="footer-sub-heading">{"Address"}</Typography>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography
                    className="sub-data"
                    sx={{ marginTop: { xs: "-10px" } }}
                  >
                    {
                      "Blubble Pvt Ltd, Attic Space- Chanakya, 4th Floor, No. 32, 2nd cross, Nanjappa Reddy Layout, Koramangala 8th Block, Bengaluru, Karnataka 560095"
                    }
                  </Typography>
                }
              />
            </ListItem>
            <Typography className="footer-sub-heading">{"Email"}</Typography>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography
                    className="sub-data"
                    sx={{ marginTop: { xs: "-10px" } }}
                  >
                    {"turn@sales.in"}
                  </Typography>
                }
              />
            </ListItem>
            <Typography className="footer-sub-heading">
              {"Phone Number"}
            </Typography>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography
                    className="sub-data"
                    sx={{ marginTop: { xs: "-10px" } }}
                  >
                    {"+91 XXXXXXXXXX"}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ padding: "8px 0px" }}>
              <ListItemText
                primary={
                  <Typography
                    className="sub-data"
                    sx={{ marginTop: { xs: "-10px" } }}
                  >{`© Copyright 2024. All rights reserved.`}</Typography>
                }
              />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </CustomFooter>
  );
};

export const MemoizedFooter = React.memo(Footer);
