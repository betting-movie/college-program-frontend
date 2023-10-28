import { Typography } from "@mui/material";
import { keyframes } from "@mui/styled-engine";
import { primary } from "./theme";

// Global keyframes for the typing effect
const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Global keyframes for the blinking cursor effect
const blinkAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

// Component with typewriter effect
const TypewriterTypography = (props) => {
  return (
    <Typography
      sx={{
        overflow: "hidden",
        //borderRight: '.15em solid orange',
        whiteSpace: "nowrap",
        margin: "0 auto",
        letterSpacing: ".05em",
        animation: `${typingAnimation} 6s steps(40, end), ${blinkAnimation} 1s step-end infinite`,
        fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "20px" },
        fontWeight: "600",
        color: primary?.white,
      }}
      variant="h1"
      {...props}
    />
  );
};

// Usage of the component
export default function TypeWriter({ infoText, styleInfo, ...props }) {
  return (
    <TypewriterTypography styleInfo {...props}>
      {infoText}
    </TypewriterTypography>
  );
}
