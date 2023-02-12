import EventModule from "../../modules/EventModule";
import TaskModule from "../../modules/TaskModule";
import { UserContext } from "../../UserContext";
import ParticipatingEvents from "./ParticipatingEvents";
import { STORIES_HELPERS } from "./STORIES_HELPERS";

const yourUserId = 9;
const events = STORIES_HELPERS.CreateEventsWithOneCompletion(yourUserId, 10);

export const Primary = () => {
  return (
    <UserContext.Provider value={yourUserId}>
      <ParticipatingEvents initialEvents={events} />
    </UserContext.Provider>
  );
};

export default {
  title: "ParticipatingEvents",
  component: Primary(),
};
