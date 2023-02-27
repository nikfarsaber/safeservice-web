import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Welcome from "../pages/welcome";
import AboutUs from "../pages/aboutUs";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import Trainings from "../pages/Trainings";
import Repair from "../pages/Repair";
import News from "../pages/News";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Profile from "../pages/Profie";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/news" element={<News />} />
        {!isLoggedIn && (
          <Route path="/authentication" element={<Authentication />} />
        )}
        {!isLoggedIn && (
          <Route path="/authentication" element={<Authentication />} />
        )}
        {isLoggedIn && (
          <Route path="/authentication" element={<Navigate to="/profile" />} />
        )}
        {!isLoggedIn && (
          <Route path="/profile" element={<Navigate to="/authentication" />} />
        )}
        {!isLoggedIn && (
          <Route
            path="/profile/:situation"
            element={<Navigate to="/authentication" />}
          />
        )}
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
        {isLoggedIn && (
          <Route path="/profile/:situation" element={<Profile />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
