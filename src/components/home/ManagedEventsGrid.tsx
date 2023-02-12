import Typography from "@mui/material/Typography";
import EventModule from "../../modules/EventModule";
import { EventData } from "../../modules/EventData";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import TaskModule from "../../modules/TaskModule";
import EventGrid from "./EventGrid";
import Box from "@mui/material/Box";

type ManangedEventsGridProps = {
  initialEvents: EventModule.EventSchema[];
};

const ManagedEventsGrid = (props: ManangedEventsGridProps) => {
  const userId = useContext(UserContext);

  const eventsManagedByUser = EventModule.GetEventsManagedByUser(
    props.initialEvents,
    userId
  );

  const eventSchemas = EventModule.MapEventSchemasToEventDatas(
    eventsManagedByUser,
    userId
  );

  return (
    <div>
      <Box flex={1}>
        <Typography variant="h4">Managed Events</Typography>
        <EventGrid events={eventSchemas} />
      </Box>
    </div>
  );
};

export default ManagedEventsGrid;
