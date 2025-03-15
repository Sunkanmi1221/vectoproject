import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import Featured from "./components/Featured";
import Picked from "./components/Picked";
import Daily from "./components/Daily";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";
import Detail from "./components/pages/Detail";
import Cart from "./components/pages/Cart";
import Alert from "./components/Alert";
import Order from "./components/pages/Order"
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import ThankYou from "./components/pages/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EcomProvider } from "./context/EcomContext";

function App() {
  return (
    <EcomProvider>
      <Router>
        <Header />
        <Alert />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Featured />
                <Picked />
                <Daily />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </EcomProvider>


  );
}

export default App
