import Sidebar from "./Sidebar";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material";
import { SidebarTheme } from "../theme";

export const Primary = () => {
  return (
    <ThemeProvider theme={SidebarTheme}>
      <Sidebar />
    </ThemeProvider>
  );
};

export default {
  title: "SidebarBruh",
  component: Primary(),
};
