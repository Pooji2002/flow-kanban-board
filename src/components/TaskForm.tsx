// import { useState } from "react";

// interface Props {
//   addTask: (title: string, description: string) => void;
// }

// const TaskForm = ({ addTask }: Props) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title.trim()) return;

//     addTask(title, description);

//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded-lg shadow mb-6"
//     >
//       <h2 className="text-xl font-semibold mb-4">Create Task</h2>

//       <input
//         type="text"
//         placeholder="Task title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full border p-2 rounded mb-3"
//       />

//       <textarea
//         placeholder="Task description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="w-full border p-2 rounded mb-3"
//         maxLength={200}
//       />

//       <button
//         type="submit"
//         className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;





import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  addTask: (title: string, description: string) => void;
}

const TaskForm = ({ addTask }: Props) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!title.trim()) return;

    if (!title.trim()) {
    toast.error("Task title is required");
    return;
    }

    addTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl mb-6"
    >

      <h2 className="text-xl font-bold text-white mb-4">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 p-2.5 rounded-xl mb-3 outline-none focus:border-cyan-400 transition"
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
       className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 p-2.5 rounded-xl mb-3 outline-none focus:border-purple-400 transition resize-none"
        rows={3}
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition transform text-white px-5 py-2.5 rounded-xl font-medium shadow-lg"
      >
        + Add Task
      </button>

    </form>
  );
};

export default TaskForm;