import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";
import AboutUs from "../pages/aboutUs";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import Trainings from "../pages/Trainings";
import Repair from "../pages/Repair";
import News from "../pages/News";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
