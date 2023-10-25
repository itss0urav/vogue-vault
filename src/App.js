import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/Context";
import Home from "./pages/Home";
import { useState } from "react";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const dataExpanded = {
    username,
    setUsername,
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={dataExpanded}>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
