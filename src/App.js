import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./pages/PaymentSuccess";
import UserProfile from "./components/UserProfile";
import { mensProducts } from "./data/MyData";
import CategoryProducts from "./components/CategoryProducts";
import Wishlist from "./components/Wishlist";
import UserContext from "./context/Context";
import AdminLogin from "./pages/AdminLogin";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Cart from "./components/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Terms from "./pages/Terms";
import { useState } from "react";
import Home from "./pages/Home";
import Help from "./pages/Help";
import "./App.css";
import BuyPageFromFiltered from "./pages/BuyPageFromFiltered";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [database, setDatabase] = useState(mensProducts);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartText, setCartText] = useState({});
  const [wishlistText, setWishlistText] = useState({});

  console.log("the cart products", cart);
  console.log("the wishlist products", wishlist);
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
    cart,
    setCart,
    wishlist,
    setWishlist,
    cartText,
    setCartText,
    wishlistText,
    setWishlistText,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={dataExpanded}>
          <Routes>
            <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Admin />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help" element={<Help />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/buy/:productId" element={<BuyPageFromFiltered />} />

            {/* products filtered page */}
            {["pants", "shoes", "hoodie", "sunglasses"].map((product) => (
              <Route
                key={product}
                path={`/${product}`}
                element={<CategoryProducts />}
              />
            ))}
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
