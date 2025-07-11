import React, { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import LoginPopUp from "./LoginPopUp/LoginPopUp";

import Cart from "./Pages/Cart/Cart";
import BuyNow from "./BuyNow/BuyNow";
import ProductDetail from "./ProductDetails/ProductDetails";
import LoadingSpinner from "./Components/LoadingSpinner ";
import Catogories from "./Pages/Catogories";
import PrimeDayBanner from "./Pages/PrimeDayBanner";
import Fastion from "./Pages/Fastion";
import Megdonels from "./Pages/Megdonels";
import TodayDeals from "./Pages/TodayDeals";
import CustomerServices from "./Pages/CustomerServices";
import AmazonElectronics from "./Pages/AmazonElectronics";
import BigBillionDays from "./Pages/BigBillionDays";
import UpcomingExcitingProducts from "./Pages/UpcomingExcitingProducts";

const Home = lazy(() => import("./Components/Home/Home"));
const NotFound = lazy(() => import("./Components/NotFound"));

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <LoginPopUp setShowLogin={setShowLogin} />
        </div>
      )}

      <div className="sticky top-0 z-50">
        <Navbar setShowLogin={setShowLogin} />
        <Navbar2 />
      </div>

      <ScrollToTop />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<BuyNow />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/catogary" element={<Catogories />} />
          <Route path="/PrimeDayBanner" element={<PrimeDayBanner />} />
          <Route path="/fastion" element={<Fastion />} />
          <Route path="/Megdonels" element={<Megdonels />} />
          <Route path="/todays-deals" element={<TodayDeals />} />
          <Route path="/mobiles" element={<TodayDeals />} />
          <Route path="/customer-service" element={<CustomerServices />} />
          <Route path="/electronics" element={<AmazonElectronics />} />
          <Route path="/BigBillionDays" element={<BigBillionDays />} />
          <Route
            path="/UpcomingExcitingProducts"
            element={<UpcomingExcitingProducts />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
