import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mensProducts } from "./data/MyData";
import UserContext from "./context/Context";
import AdminLogin from "./pages/AdminLogin";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Terms from "./pages/Terms";
import { useState } from "react";
import Home from "./pages/Home";
import Help from "./pages/Help";
import "./App.css";
import Category from "./components/Category";


function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [database, setDatabase] = useState(mensProducts);
  const [confirmPassword, setConfirmPassword] = useState("");

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
    allUsers,
    setAllUsers,
    database,
    setDatabase,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={dataExpanded}>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/" element={<Home />} />
            <Route path="/pants" element={<Category />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
