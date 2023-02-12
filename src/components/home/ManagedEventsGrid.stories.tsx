import EventModule from "../../modules/EventModule";
import TaskModule from "../../modules/TaskModule";
import { UserContext } from "../../UserContext";
import ManagedEventsGrid from "./ManagedEventsGrid";
import { STORIES_HELPERS } from "./STORIES_HELPERS";

const events = STORIES_HELPERS.CreateEventsWithOneCompletion(10, 10);

export const Primary = () => {
  return (
    <UserContext.Provider value={10}>
      <ManagedEventsGrid initialEvents={events} />
    </UserContext.Provider>
  );
};

export default {
  title: "ManagedEventsGrid",
  component: Primary(),
};
