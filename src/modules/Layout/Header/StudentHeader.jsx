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
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { MemoizedMentorInspiredList } from "../../Mentor/MentorInspiredList/MentorInspiredList";
import { mentorLogout } from "@/src/apiService/mentorService";

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/student/dashboard", icon: <HomeOutlinedIcon /> },
  //   {
  //     name: "Trial Bookings",
  //     path: "/student/dashboard",
  //     icon: <PersonAddOutlinedIcon />,
  //   },
  //   { name: "Messages", path: "/student/dashboard", icon: <EmailOutlinedIcon /> },
  //   { name: "Configure", path: "/student/edit", icon: <BuildOutlinedIcon /> },

  // { name: "Why leafyprofit", path: "/#whyLeafyprofit" },

  // { name: "Our plantation", path: "/#ourplantation" },
  // { name: "Join today", path: "/#jointoday" },
];

const StudentHeader = ({ children, ...props }) => {
  console.log("Props-->", props);
  const [selectedItem, setSelectedItem] = React.useState(navItems[0]);
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
        sx={{ background: "#1F74D8" }}
      >
        <img src={"/Images/logo.webp"} style={{ width: "100px" }} />
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate.push(item?.path);
                setSelectedItem((prevItem) =>
                  prevItem === item ? null : item
                );
              }}
              sx={{
                backgroundColor:
                  selectedItem === item ? primary?.lightGrey : primary?.white,
                borderRadius: "20px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            >
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem key={"Logout"} disablePadding>
          <ListItemButton
            onClick={() => {
              mentorLogout();
              navigate.push("/");
            }}
          >
            <ListItemIcon>{<ExitToAppOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
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
          background: "#1F74D8", //primary?.lightYellowBg,
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
    </Box>
  );
};

export const MemoizedStudentHeader = React.memo(StudentHeader);
