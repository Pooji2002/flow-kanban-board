import type { Task, Status } from "../types/task";

type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "MOVE_TASK"; payload: { id: string; status: Status } };

export const boardReducer = (
  state: Task[],
  action: Action
): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "MOVE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );

    default:
      return state;
  }
};