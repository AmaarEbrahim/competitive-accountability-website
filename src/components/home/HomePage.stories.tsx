import { UserContext } from "../../UserContext";
import { HomePage } from "./HomePage";
import { STORIES_HELPERS } from "./STORIES_HELPERS";

const yourId = 10;

const eventsManaged = STORIES_HELPERS.CreateEventsWithOneCompletion(
  yourId,
  yourId
);
const eventsParticipation = STORIES_HELPERS.CreateEventsWithOneCompletion(
  yourId,
  9
);

console.log(eventsParticipation);
const events = eventsManaged.concat(eventsParticipation);

export const Primary = () => {
  return (
    <UserContext.Provider value={yourId}>
      <HomePage initialEvents={events} />;
    </UserContext.Provider>
  );
};

export default {
  title: "HomePage",
  component: Primary(),
};
