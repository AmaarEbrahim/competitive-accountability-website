import Grid from "@mui/material/Grid";
import { EventData } from "../../modules/EventData";
import Button from "@mui/material/Button";
import EventBox, { EventBoxProps } from "./EventBox";

type EventGridProps = {
  events: EventData[];
};

const EventGrid = (props: EventGridProps) => {
  const f = () => {};
  const eventBoxProps = props.events.map<EventBoxProps>((eventData) => {
    return {
      data: eventData,
      onClickCallback: f,
    };
  });

  const eventBoxComponents = eventBoxProps.map((eventBoxProps) => {
    return <EventBox {...eventBoxProps} />;
  });

  //   return <Grid columns={2}>{eventBoxComponents}</Grid>;
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={8}> */}
      {/* <Button>xs=8</Button>
        <Button>xs=9</Button>
        <Button>xs=10</Button> */}
      {eventBoxComponents}
      {/* </Grid>
      <Grid item xs={8}>
        <Button>xs=8</Button>
      </Grid> */}
    </Grid>
  );
};

export default EventGrid;
