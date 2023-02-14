import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    text: {
      primary: purple[500],
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export const SidebarTheme = createTheme({
  palette: {
    background: {
      default: "#706587",
      paper: "#706587",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
  },
});
