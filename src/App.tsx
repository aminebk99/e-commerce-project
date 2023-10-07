import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/product"
import ErrorPage from "./pages/ErrorPage"
import Register from "./pages/Register"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="*" element={<ErrorPage />}/>

      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
