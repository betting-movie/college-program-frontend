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
import { Link } from "@mui/material";
import { useRouter } from "next/router";

const drawerWidth = 240;
const navItems = [
  { name: "Become a Mentor", path: "/mentor/login" },
  // { name: "Why leafyprofit", path: "/#whyLeafyprofit" },

  // { name: "Our plantation", path: "/#ourplantation" },
  // { name: "Join today", path: "/#jointoday" },
];

function Header(props) {
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
        sx={{ my: 2 }}
        onClick={() => {
          navigate.push("/");
        }}
      >
        <img src={"/Images/logo.webp"} style={{ width: "100px" }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate.push(item?.path);
              }}
            >
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
        // #1EAE47, #33333300
        sx={{
          background: "#1F74D8", //primary?.main,
          //background: "linear-gradient(180deg, #1EAE47 0%, #33333300 100%)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            //edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, pr:0, display: { sm: 'none' },  }}
          >
            <MenuIcon />
          </IconButton> */}

          <Box
            sx={{
              display: { sm: "flex", xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box style={{ width: "120px" }}>
              <img
                src={"/Images/logo.webp"}
                alt="collegestojob logo"
                className={"image-section"}
                style={{ width: "80px" }}
                onClick={() => {
                  navigate.push("/");
                }}
              />
            </Box>
            <Box className="icons-mobile">
              {/* <WhatsAppIcon
                  sx={{
                    marginRight: "0.5em",
                    color: "white",
                    padding: "2px",
                    borderRadius: "50%",
                    background: "#35BF68",
                  }}
                  onClick={() => {
                    
                  }}
                  fontSize="large"
                /> */}
              <Link
                href="tel:08047482233"
                hrefLang={"en"}
                target="_blank"
                rel="noreferrer"
                underline="none"
                onClick={() => {}}
              >
                {/* <MemoizedButton
                    className="phone-icon"
                    sx={{
                      background: "#35BF68",
                      boxShadow: "none",
                      border: "none",
                      borderRadius: "50px",
                      padding: "8px",
                      marginRight: "20px",
                      fontSize: "12px",
                      "&:hover": {
                        background: "#35BF68",
                        border: "none",
                        color: "white",
                        boxShadow: "none",
                      },
                    }}
                    content={"Call Turno"}
                    endIcon={
                      <PhoneInTalkIcon
                        sx={{
                          color: "white",
                          marginRight: "2px",
                        }}
                      />
                    }
                  /> */}
              </Link>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon
                  sx={{
                    color: primary?.white,
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
            }}
            onClick={() => {
              navigate.push("/");
            }}
          >
            <img src={"/Images/logo.webp"} style={{ width: "100px" }} />
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "none", md: "block" }, mr: "5%" }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: primary?.fantaGrey,
                  margin: "0em 1.5em 0em 1.5em",
                  boxShadow: "none",
                  border: "none",
                  background: primary?.white,
                }}
                onClick={() => {
                  navigate.push(item?.path);
                }}
              >
                {item?.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0px 16px 0px 0px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export const MemoizedHeader = React.memo(Header);
