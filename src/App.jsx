import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./page/Home/home"
import Services from "./page/Home/Services/srvices"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
