import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Home from "./page/Home/home"
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
