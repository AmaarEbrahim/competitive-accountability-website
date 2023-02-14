import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Pages } from "../../routes/Pages";
import { ThemeProvider } from "@mui/material";
import { SidebarTheme, theme } from "../theme";

type SidebarElementProps = {
  label: string;
};

const SidebarElement = (props: SidebarElementProps) => {
  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={props.label} />
        </ListItemButton>
      </ListItem>
    </div>
  );
};

const Sidebar = (props: {}) => {
  return (
    <List>
      {Pages.map((value) => {
        return <SidebarElement label={value} />;
      })}
    </List>
  );
};

export default Sidebar;
