import { Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
