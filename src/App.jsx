import { Routes, Route, Navigate } from "react-router-dom"; import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./page/Home/home"
import Services from "./page/Services/srvices"
import Partners from "./page/Partners/Partners"
import OurNews from "./page/OurNews/ourNews"
import ViewAll from "./page/OurNews/viewAll"
import Pricing from "./page/Pricing/pricing"
import AboutUs from "./page/AboutUs/aboutUs"
import ContactUs from "./page/ContactUs/ContactUs"
import NewsContact from "./page/OurNews/newsContact"
import Payment from "./page/Payment/payment"
import SuccessfulPayment from "./page/PaymentState/successfulPayment"
import FailedPayment from "./page/PaymentState/FailedPayment"
import NotFound from "./page/NotFound/notFound"
import LangWrapper from "./components/langWrapper"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/:lang" element={<LangWrapper />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="partners" element={<Partners />} />
          <Route path="News-and-reviews" element={<OurNews />} />
          <Route path="News-and-reviews/viewAll" element={<ViewAll />} />
          <Route path="News-and-reviews/:id" element={<NewsContact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="pricing/payment" element={<Payment />} />
          <Route path="pricing/payment/successful-payment" element={<SuccessfulPayment />} />
          <Route path="pricing/payment/failed-payment" element={<FailedPayment />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
