import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { primary } from "@/src/SDK/theme";
import { Link, ListItemIcon } from "@mui/material";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { MemoizedMentorInspiredList } from "../../Mentor/MentorInspiredList/MentorInspiredList";

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
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

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
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

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
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },

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
    skills: ["Financial Planning", "Investment Management", "Risk Assessment"],
    rating: "4.8", // Missing in backend
    mentees: 20, // Missing in backend
  },
  {
    id: "2c55c85b-5f68-4ab1-b310-78c2ecf0d80f",
    email: "sample2@example.com",
    password: "samplepassword2",
    profile_pic: "/Images/pic2.jpeg",
    phone_number: "9876543210",
    name: "Jane Smith",
    designation: "Marketing Consultant",
    description:
      "Specializing in digital marketing strategies and brand management.",
    linkedinUrl: "https://www.linkedin.com/in/janesmith",
    consultation_cost: 80,
    availability: "Available for project collaborations",
    education: ["Master of Marketing", "Bachelor of Business Administration"],
    current_company: "Google",
    achievements: [
      "Marketing Excellence Award 2018",
      "Top Social Media Campaign 2017",
    ],
    experience: [
      "Digital Marketing Manager at XYZ Corp",
      "Brand Consultant at ABC Inc",
    ],
    skills: ["Social Media Marketing", "Brand Development", "Market Research"],
    rating: "4.8",
    mentees: 20, // Missing in backend
  },
];

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/", icon: <HomeOutlinedIcon /> },
  { name: "Trial Bookings", path: "/", icon: <PersonAddOutlinedIcon /> },
  { name: "Messages", path: "/", icon: <EmailOutlinedIcon /> },
  { name: "My Sessions", path: "/", icon: <AdsClickOutlinedIcon /> },
  // { name: "Why leafyprofit", path: "/#whyLeafyprofit" },

  // { name: "Our plantation", path: "/#ourplantation" },
  // { name: "Join today", path: "/#jointoday" },
];

const MentorHeader = ({ children, ...props }) => {
  console.log("Props-->", props);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        onClick={() => {
          navigate.push("/");
        }}
        sx={{ background: primary?.lightYellowBg }}
      >
        <img src={"/Images/logo.webp"} style={{ width: "100px" }} />
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              //   sx={{ textAlign: "center" }}
              onClick={() => {
                navigate.push(item?.path);
              }}
            >
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      sx={{ display: "flex", margin: { md: "36px", xs: "30px", sm: "30px" } }}
    >
      <AppBar
        component="nav"
        sx={{
          background: primary?.lightYellowBg,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Box style={{ width: "120px" }}>
            <img
              src={"/Images/logo.webp"}
              alt="collegestojob logo"
              className={"image-section"}
              style={{ width: "100px" }}
              onClick={() => {
                navigate.push("/");
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          p: 3,
          width: { sm: `calc(50% - ${drawerWidth}px)` },
          display: { xs: "none", sm: "none", lg: "block" },
        }}
      >
        <MemoizedMentorInspiredList mentorData={sampleData} />
      </Box>
    </Box>
  );
};

export const MemoizedMentorHeader = React.memo(MentorHeader);
