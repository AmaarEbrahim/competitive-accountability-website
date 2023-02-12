import Typography from "@mui/material/Typography";
import EventModule from "../../modules/EventModule";
import { EventData } from "../../modules/EventData";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import TaskModule from "../../modules/TaskModule";
import EventGrid from "./EventGrid";

type ParticipatingEventsProps = {
  initialEvents: EventModule.EventSchema[];
};

const ParticipatingEvents = (props: ParticipatingEventsProps) => {
  const userId = useContext(UserContext);

  const eventsManagedByUser = EventModule.GetEventsNotManagedByUser(
    props.initialEvents,
    userId
  );

  const eventSchemas = EventModule.MapEventSchemasToEventDatas(
    eventsManagedByUser,
    userId
  );

  return (
    <div>
      <Typography variant="h4">Participating Events</Typography>
      <EventGrid events={eventSchemas} />
    </div>
  );
};

export default ParticipatingEvents;
