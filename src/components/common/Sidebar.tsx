import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Pages } from "../../routes/Pages";

const SidebarWidth = 200;

type SidebarElementProps = {
  label: string;
};

const SidebarElement = (props: SidebarElementProps) => {
  return (
    <div>
      <ListItem>
        <ListItemButton>
          <ListItemText primary={props.label} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </div>
  );
};

const Sidebar = (props: {}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        //display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: SidebarWidth },
      }}
      open
    >
      <List>
        {Pages.map((value) => {
          return <SidebarElement label={value} />;
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
