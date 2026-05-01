import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./page/Home/home"
import Services from "./page/Services/srvices"
import Partners from "./page/Partners/Partners"
import OurNews from "./page/OurNews/ourNews"
import ViewAll from "./page/OurNews/viewAll"
import Pricing from "./page/Pricing/pricing"
import AboutUs from "./page/AboutUs/aboutUs"
import ContactUs from "./page/ContactUs/ContactUs"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/News-and-reviews" element={<OurNews />} />
        <Route path="/News-and-reviews/viewAll" element={<ViewAll />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
