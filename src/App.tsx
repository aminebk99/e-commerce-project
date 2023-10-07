import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/product"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/product/:id" element={<Product />}/>

      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
