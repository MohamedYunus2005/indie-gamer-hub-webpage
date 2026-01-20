import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import AddGame from "./pages/AddGame";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {!hideNavbar && <Navbar />}

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          {/* ENTRY POINT */}
          <Route path="/" element={<Navigate to="/register" />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* APP */}
          <Route path="/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
