import EventModule from "../../modules/EventModule";
import TaskModule from "../../modules/TaskModule";

export namespace STORIES_HELPERS {
  export const CreateEventsWithOneCompletion = (
    userID: number,
    organizerID: number
  ) => {
    const completion = new Map<number, { completed: boolean }>();
    completion.set(0, { completed: true });
    completion.set(1, { completed: false });

    const members = new Map<number, TaskModule.TaskCompletionData>();
    members.set(userID, completion);

    const events: EventModule.EventSchema[] = [
      {
        ID: 0,
        organizer: organizerID,
        members: members,
        title: "hi",
        description: "what's up",
        tasks: [],
      },
      {
        ID: 1,
        organizer: organizerID,
        members: members,
        title: "bye",
        description: "nothing much",
        tasks: [],
      },
    ];

    return events;
  };
}
