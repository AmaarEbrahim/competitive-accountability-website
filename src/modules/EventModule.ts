import { EventData } from "./EventData";
import TaskModule from "./TaskModule";

namespace EventModule {
  export type EventSchema = {
    ID: number;
    organizer: number; // UserId
    members: Map<number, TaskModule.TaskCompletionData>; // User ID to task completion info for all tasks
    title: string;
    description: string;
    tasks: number[]; // Task IDs
  };

  export const GetEventsManagedByUser = (
    events: EventSchema[],
    organizer: number
  ) => {
    return events.filter((schema, index) => {
      return schema.organizer === organizer;
    });
  };

  /**
   * @param events
   * @param userId We need userId because the `EventData` requires a progress
   * percentage, which should be based on individual users
   */
  export const MapEventSchemasToEventDatas = (
    events: EventSchema[],
    userId: number
  ) => {
    return events.map<EventData>((eventSchema, index) => {
      const taskDataForUser = eventSchema.members.get(userId);

      if (taskDataForUser) {
        const percentage = TaskModule.GetPercentageComplete(taskDataForUser);
        return {
          titleText: eventSchema.title,
          description: eventSchema.description,
          progressPercentage: percentage,
        };
      } else {
        return {
          titleText: eventSchema.title,
          description: eventSchema.description,
          progressPercentage: 0,
        };
      }
    });
  };

  export const GetEventsNotManagedByUser = (
    events: EventSchema[],
    organizer: number
  ) => {
    return events.filter((schema, index) => {
      return schema.organizer !== organizer;
    });
  };
}

export default EventModule;
