import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyPageFromFiltered from "./pages/BuyPageFromFiltered";
import CategoryProducts from "./components/CategoryProducts";
import PaymentSuccess from "./pages/PaymentSuccess";
import UserProfile from "./components/UserProfile";
import { mensProducts } from "./data/MyData";
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

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [database, setDatabase] = useState(mensProducts);
  const [cart, setCart] = useState([]);
  const [cartText, setCartText] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [wishlistText, setWishlistText] = useState({});
  const [bannedUsers, setBannedUsers] = useState([]);
  const addProduct = (newProduct) => {
    setDatabase([...database, newProduct]);
  };
  console.log("the cart products", cart);
  console.log("the wishlist products", wishlist);
  const dataExpanded = {
    addProduct,
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
    bannedUsers,
    setBannedUsers,
  };

  const filtered = new Set(database.map((data) => data.category));
  const filteredArray = [...filtered];

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={dataExpanded}>
          <Routes>
            {/* pages */}

            <Route path="/buy/:productId" element={<BuyPageFromFiltered />} />
            <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<Admin />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Home />} />
            {/* components */}

            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Cart" element={<Cart />} />

            {/* products filtered page */}
            {filteredArray.map((product) => (
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
