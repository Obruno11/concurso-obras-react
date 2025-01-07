import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Show } from "./layouts/public/PublicWeb/Show";
import { Galeria } from "./layouts/public/PublicWeb/Galeria";
import { Inicio } from "./layouts/public/PublicWeb/Inicio";
import { Login } from "./layouts/public/Login/Login";
import { Register } from "./layouts/public/Login/Register";
import { AuthProvider } from "./providers/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="bg-zinc-50">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/show" element={<Show />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
          </Routes>

          {/* Footer */}
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
