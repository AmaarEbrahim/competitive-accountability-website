import { EventData } from "../../modules/EventData";
import EventGrid from "./EventGrid";

const event1: EventData = {
  titleText: "First event",
  description: "Blah blah blah",
  progressPercentage: 0,
};

const event2: EventData = {
  titleText: "Second event",
  description: "Blah blah blah",
  progressPercentage: 0,
};

export const Primary = () => {
  return <EventGrid events={[event1, event2]} />;
};

export default {
  title: "EventGrid",
  component: Primary(),
};
