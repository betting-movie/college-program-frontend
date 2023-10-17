import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

import Image from "next/image";

import React from "react";
import { primary } from "../theme";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledBadge = withStyles(() => ({
  badge: {
    backgroundImage: `url("/Images/google.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "30px 30px",
    border: `1px solid ${primary?.greyText}`,
    background: "white",
    borderRadius: "50%",
    color: "#44b700",
    width: "30px",
    height: "30px",
    flexShrink: 0,
    maxWidth: "32px",
    alignSelf: "stretch",

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
}))(Badge);

const StoryBadges = ({ ...props }) => {
  return (
    <StyledBadge
      props={props}
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      style={{
        padding: "1px",

        borderRadius: "50%",
      }}
      variant="dot"
    >
      <LazyLoadImage
        style={{ width: "80px", height: "80px", borderRadius: "8px" }}
        src={props?.thumbnail}
        alt={`${props?.name} Customer Review`}
      />
    </StyledBadge>
  );
};

const MemoizedStoryBadges = React.memo(StoryBadges);

export default MemoizedStoryBadges;
