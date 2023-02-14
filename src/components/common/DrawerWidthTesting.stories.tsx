import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Pages } from "../../routes/Pages";
import Grid from "@mui/material/Grid";

const DrawerWidthTesting = () => {
  return (
    <Grid container sx={{ border: 1 }}>
      <Grid item sm={2} sx={{ border: 1 }}>
        {/* <Drawer
          variant="permanent"
          // sx={{
          //   //display: { xs: "none", sm: "block" },
          //   "& .MuiDrawer-paper": { boxSizing: "border-box" },
          // }}
          open
        > */}
        <List sx={{ border: 1 }}>
          <ListItem>
            <ListItemButton>
              <ListItemText primary={"hi"} />
            </ListItemButton>
          </ListItem>
        </List>
        {/* </Drawer> */}
      </Grid>
      <Grid item sm={10}>
        <p>bye</p>
      </Grid>
    </Grid>
  );
};

export const Primary = () => <DrawerWidthTesting />;

export default {
  title: "DrawerWidthTesting",
  component: Primary(),
};
