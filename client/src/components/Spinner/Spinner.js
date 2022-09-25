import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner({ data }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ["@media (max-width:780px)"]: {
          transform: " translate(0%, 0%)",
          backgroundColor: "rgb(0 0 0 / 0%)",
        },
      }}
      open={data}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
