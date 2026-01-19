import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import AddGame from "./pages/AddGame";
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
