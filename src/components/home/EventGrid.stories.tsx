import { EventData } from "../../modules/EventData";
import EventGrid from "./EventGrid";

const createNEventDatas = (n: number): EventData[] => {
  const v = new Array<EventData>();
  for (let i = 0; i < n; i++) {
    v.push({
      titleText: "Event " + i,
      description: "Blah blah blah",
      progressPercentage: 0,
    });
  }
  return v;
};

export const Primary = () => {
  return <EventGrid events={createNEventDatas(5)} />;
};

export default {
  title: "EventGrid",
  component: Primary(),
};
