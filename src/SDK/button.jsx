import LoadingButton from "@mui/lab/LoadingButton";
import { IconButton } from "@mui/material";
import React from "react";

const Button = ({
  type,
  content,
  style,
  handleClick,
  disabled,
  loading,
  className,
  sx,
  id,
  animated,
  ...props
}) => {
  return type === "icon" ? (
    <IconButton {...props}>
      <div className={animated && "animate-charcter"}>{content}</div>
    </IconButton>
  ) : (
    <LoadingButton
      id={id}
      type={type}
      loading={loading}
      loadingPosition="center"
      variant={"outlined"}
      // eslint-disable-next-line
      children={content}
      sx={sx}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      {...props}
      animated={animated}
    >
      <div id={id} className={animated && "animate-charcter"}>
        {content}
      </div>
    </LoadingButton>
  );
};

export const MemoizedButton = React.memo(Button);
