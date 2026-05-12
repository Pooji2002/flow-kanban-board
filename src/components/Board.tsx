// import { useEffect, useReducer } from "react";
// import TaskForm from "./TaskForm";
// import Column from "./Column";
// import { boardReducer } from "../reducer/boardReducer";
// import type { Task, Status } from "../types/task";

// const initialTasks: Task[] = JSON.parse(
//   localStorage.getItem("tasks") || "[]"
// );

// const Board = () => {
//   const [tasks, dispatch] = useReducer(
//     boardReducer,
//     initialTasks
//   );

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (
//     title: string,
//     description: string
//   ) => {
//     const newTask: Task = {
//       id: crypto.randomUUID(),
//       title,
//       description,
//       status: "todo",
//       createdAt: new Date().toLocaleString(),
//     };

//     dispatch({
//       type: "ADD_TASK",
//       payload: newTask,
//     });
//   };

//   const deleteTask = (id: string) => {
//     dispatch({
//       type: "DELETE_TASK",
//       payload: id,
//     });
//   };

//   const moveTask = (
//     id: string,
//     status: Status
//   ) => {
//     dispatch({
//       type: "MOVE_TASK",
//       payload: { id, status },
//     });
//   };

//   return (
//     <div>
//       <TaskForm addTask={addTask} />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Column
//           title="To Do"
//           tasks={tasks.filter(
//             (task) => task.status === "todo"
//           )}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//         />

//         <Column
//           title="In Progress"
//           tasks={tasks.filter(
//             (task) => task.status === "inprogress"
//           )}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//         />

//         <Column
//           title="Done"
//           tasks={tasks.filter(
//             (task) => task.status === "done"
//           )}
//           moveTask={moveTask}
//           deleteTask={deleteTask}
//         />
//       </div>
//     </div>
//   );
// };

// export default Board;







import { useEffect, useReducer } from "react";
import TaskForm from "./TaskForm";
import Column from "./Column";
import { boardReducer } from "../reducer/boardReducer";
import type { Task, Status } from "../types/task";

const initialTasks: Task[] = JSON.parse(
  localStorage.getItem("tasks") || "[]"
);

const Board = () => {
  const [tasks, dispatch] = useReducer(
    boardReducer,
    initialTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (
    title: string,
    description: string
  ) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "todo",
      createdAt: new Date().toLocaleString(),
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
  };

  const deleteTask = (id: string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const moveTask = (
    id: string,
    status: Status
  ) => {
    dispatch({
      type: "MOVE_TASK",
      payload: { id, status },
    });
  };

  return (
    <div>
      <TaskForm addTask={addTask} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Column
          title="To Do"
          tasks={tasks.filter(
            (task) => task.status === "todo"
          )}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="In Progress"
          tasks={tasks.filter(
            (task) => task.status === "inprogress"
          )}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="Done"
          tasks={tasks.filter(
            (task) => task.status === "done"
          )}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

      </div>
    </div>
  );
};

export default Board;