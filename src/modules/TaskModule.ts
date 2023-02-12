namespace TaskModule {
  export type Task = {
    ID: number;
    name: string;
    description: string;
  };

  export type TaskCompletionData = Map<
    number,
    {
      completed: boolean;
    }
  >; // Task ID to completion data

  export const GetPercentageComplete = (data: TaskCompletionData) => {
    const mapValuesArray = Array.from(data.values());
    const mapValuesArraySize = mapValuesArray.length;

    const numberOfCompleted = mapValuesArray.reduceRight((curValue, curEl) => {
      return curValue + (curEl.completed ? 1 : 0);
    }, 0);

    return numberOfCompleted / mapValuesArraySize;
  };
}

export default TaskModule;
