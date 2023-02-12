import { Box, Drawer, Grid, List, ListItem, Typography } from "@mui/material";
import EventModule from "../../modules/EventModule";
import Sidebar from "../common/Sidebar";
import ManagedEventsGrid from "./ManagedEventsGrid";
import ParticipatingEvents from "./ParticipatingEvents";

type HomePageProps = {
  /**
   * @todo Make this a context!
   */
  initialEvents: EventModule.EventSchema[];
};

export const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10}>
          <Typography variant="h3">Events</Typography>
          <ManagedEventsGrid initialEvents={props.initialEvents} />
          <ParticipatingEvents initialEvents={props.initialEvents} />
        </Grid>
      </Grid>
    </div>
  );
};

/**
          {/* <Box>
            <List>
              <ListItem>}
              <ManagedEventsGrid initialEvents={props.initialEvents} />
              {/* </ListItem>
              {/* <ListItem>
              <ParticipatingEvents initialEvents={props.initialEvents} />
            </ListItem>}
            </List>
          </Box>}
 */
