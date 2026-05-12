
import { useState } from "react";
import type { Task, Status } from "../types/task";
import toast from "react-hot-toast";

interface Props {
  title: string;
  tasks: Task[];
  moveTask: (id: string, status: Status) => void;
  deleteTask: (id: string) => void;
}

const Column = ({
  title,
  tasks,
  moveTask,
  deleteTask,
}: Props) => {

  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  return (
    <>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 min-h-[350px] shadow-2xl">

        <h2 className="text-xl font-bold text-white mb-4">
          {title} ({tasks.length})
        </h2>

        {tasks.length === 0 ? (
          <div className="bg-white/5 border border-dashed border-white/10 rounded-2xl p-6 text-center text-gray-400 italic">
            No tasks in this column
          </div>
        ) : (
          <div className="space-y-4">

            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-[#111827]/80 border border-white/10 rounded-2xl p-3 hover:scale-[1.01] hover:border-cyan-400/40 transition duration-300 shadow-lg"
              >

                <h3 className="font-semibold text-base text-white mb-2">
                  {task.title}
                </h3>

                <p className="text-gray-300 text-sm mb-3">
                  {task.description}
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  Created: {task.createdAt}
                </p>

                <div className="flex gap-2 flex-wrap">

                  {task.status !== "todo" && (
                    <button
                      onClick={() =>
                        moveTask(
                          task.id,
                          task.status === "done"
                            ? "inprogress"
                            : "todo"
                        )
                      }
                      className="bg-gray-700 hover:bg-gray-600 transition text-white px-3 py-2 rounded-xl"
                    >
                      ← Back
                    </button>
                  )}

                  {task.status !== "done" && (
                    <button
                      onClick={() =>
                        moveTask(
                          task.id,
                          task.status === "todo"
                            ? "inprogress"
                            : "done"
                        )
                      }
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition text-white px-3 py-2 rounded-xl"
                    >
                      Move →
                    </button>
                  )}

                  <button
                    onClick={() => setTaskToDelete(task.id)}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition text-white px-3 py-2 rounded-xl"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      {taskToDelete && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 w-[340px] shadow-2xl">

            <h3 className="text-xl font-bold text-white mb-3">
              Delete Task
            </h3>

            <p className="text-gray-400 mb-6">
              Do you want to delete this task?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setTaskToDelete(null)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteTask(taskToDelete);
                  toast.success("Task deleted successfully");
                  setTaskToDelete(null);
                }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-xl"
              >
                Confirm
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Column;