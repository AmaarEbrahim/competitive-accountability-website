import Grid from "@mui/material/Grid";
import { EventData } from "../../modules/EventData";
import Button from "@mui/material/Button";
import EventBox, { EventBoxProps } from "./EventBox";

export type EventGridProps = {
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

  const eventBoxComponents = eventBoxProps.map((eventBoxProps1, index) => {
    return (
      <Grid item sm={4} key={index} padding={"5px"}>
        <EventBox {...eventBoxProps1} key={index} />
      </Grid>
    );
  });

  //   return <Grid columns={2}>{eventBoxComponents}</Grid>;
  return <Grid container>{eventBoxComponents}</Grid>;
};

export default EventGrid;
