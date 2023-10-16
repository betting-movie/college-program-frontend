import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const primary = {
  main: "#008080",
  secondary: "#5D5BC0",
  lightMain: "#FFCCD8F",
  dark: "#333333",

  mainText: "#333333",
  secondaryText: "#5D5BC0",
  inactiveState: "#EDECE8",
  greyText: "#9C9A9D",
  lightGrey: "#D6D5D5",

  mainGreen: "#35BF68",
  secondaryGreen: "#EBF9F0",
  lightGreen: "#DFFFEB",

  lightYellowBg: "#FEF8E6",
  lightWhiteBg: "#F7F8FA",

  warning: "#FFB636",
  white: "#FFFFFF",

  darkGreen: " #2D804C",
  lightPink: "#FFEDF1",

  darkPurple: "#1D2939",

  flagSaffron: "#ff9a2f",
  flagGreen: "#0a8901",
  electricGreen: "#00EE98",

  matPink: "#C091AC",
  black: "#000000",

  fantaGrey: "#817382",
  fantaOrange: "#FE9C8F",

  darkYellow: "#FDCE10",

  darkGrey: "#52525b",

  lightBlue: "#F5FAFF",
};

const fontFamilyInfo = `'Inter', sans-serif`;

let themeDef = createTheme({
  typography: {
    fontFamily: fontFamilyInfo,
    color: primary.mainText,
    allVariants: {},
  },

  palette: {
    primary: primary,
  },

  components: {
    MuiPaper: {
      defaultProps: {
        style: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        fontFamily: fontFamilyInfo,
        fontSize: { md: "24px", sm: "12px" },
        borderRadius: "16px",
        "&.Mui-focused": {
          backgroundColor: "transparent",
          boxShadow: `
          `,
          borderColor: primary.secondary,
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        display: "flex",
        alignItems: "stretch",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
          borderRadius: "4px",
          textTransform: "none",
          color: primary?.white,
          background: primary?.fantaOrange,
          fontWeight: "550",
          //border: "1px solid #FFFFFF",
          //boxShadow: "0px 4px 4px rgba(232, 52, 94, 0.7)",
          "&:hover": {
            color: primary.main,
          },
        },
        sizeMedium: {
          fontSize: "16px",
          padding: "10px 20px 10px  20px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
          minHeight: 48,

          "&.Mui-focused": {
            backgroundColor: "transparent",
            boxShadow: `${(primary.light, 0.25)} 0 0 0 2px`,
            borderColor: primary?.main,
          },
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        variant: "filled",
        MenuProps: {
          style: {
            maxHeight: 400,
            fontFamily: fontFamilyInfo,
          },
        },
        IconComponent: KeyboardArrowDownRounded,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: fontFamilyInfo,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: primary,
          fontFamily: fontFamilyInfo,
          borderRadius: "16px 16px 0px 0px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: fontFamilyInfo,
          background: "black",
          color: "white",
          margin: 16,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilyInfo,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeDef);
