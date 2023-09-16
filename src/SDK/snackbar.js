import { Alert, Snackbar } from "@mui/material";
import React, { useContext } from "react";

import { Context } from "../context/context";

const SnackBar = () => {
  const state = useContext(Context);

  const { hideSnackbar } = useContext(Context);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideSnackbar();
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={state.openSnackbar}
        autoHideDuration={5000}
        message={state.message}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={state.severityType}
          style={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </>
  );
};

// export default SnackBar;
export const MemoizedSnackBar = React.memo(SnackBar);
