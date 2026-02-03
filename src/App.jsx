import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Games from "./pages/Games";
import AddGame from "./pages/AddGame";
import GameDetails from "./pages/GameDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  // 🔐 Auth state (persisted)
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("registered") === "true"
  );

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem("loggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("registered", isRegistered);
  }, [isRegistered]);

  // Hide navbar on auth pages
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {!hideNavbar && <Navbar />}

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          {/* ROOT */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* REGISTER */}
          <Route
            path="/register"
            element={
              isRegistered ? (
                <Navigate to="/login" replace />
              ) : (
                <Register setIsRegistered={setIsRegistered} />
              )
            }
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/games"
            element={isLoggedIn ? <Games /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/add-game"
            element={isLoggedIn ? <AddGame /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/games/:id"
            element={
              isLoggedIn ? <GameDetails /> : <Navigate to="/login" replace />
            }
          />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
