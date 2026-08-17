import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Offer from "./Offerpages/Offer";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

import Login from "./contexts/Loginsection";
import Profilesection from "./contexts/Profilesection";
import Signinsection from "./contexts/Signinsection";
import Checkoutsection from "./contexts/Checkoutsection";


import Payment from "./contexts/Paymentmethod";
import Ordersuccess from "./contexts/Ordersuccess";
import Orderdetail from "./contexts/Orderdetail";

import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
        
          <Route path="/" element={<Home />} />

        
          <Route path="/restaurants" element={<Restaurant />} />

          
          <Route path="/offers" element={<Offer />} />

          
          <Route path="/search" element={<Search />} />

          
          <Route path="/cart" element={<Cart />} />

          
          <Route path="/login" element={<Login />} />

          
          <Route path="/profile" element={<Profilesection />} />

          
          <Route path="/signup" element={<Signinsection />} />

        
          <Route path="/checkout" element={<Checkoutsection />} />

        
          <Route path="/payment" element={<Payment />} />
          
          <Route path="/order-success" element={<Ordersuccess />} />

          <Route path="/Order2" element={<Orderdetail />} />

          {/* Order Success */}
          <Route
            path="/order-success"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-green-600">
                    🎉 Payment Successful!
                  </h1>

                  <p className="mt-3 text-gray-600">
                    Your BiteRush order has been placed successfully.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;