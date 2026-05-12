
import Board from "./components/Board";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-[#070B1A] relative overflow-hidden text-white">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <Toaster position="top-center" />

      <div className="relative z-10 p-6">

        <div className="text-center mb-10 pt-4">

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Flow Kanban Board
          </h1>

          <p className="text-gray-400 text-lg">
            Organize your workflow efficiently
          </p>

        </div>

        <Board />

      </div>
    </div>
  );
}

export default App;