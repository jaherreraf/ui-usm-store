import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home  from "./pages/Home"
import Login  from "./pages/Login"
import Checkin  from "./pages/Checkin"
import NewAdministrator  from "./pages/NewAdministrator"
import Administrator  from "./pages/Administrator"
import NewProduct  from "./pages/NewProduct"
import Product  from "./pages/Product"

import Header  from "./components/Header"
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkin" element={<Checkin/>}/>
          <Route path="/new-administrator" element={<NewAdministrator/>}/>
          <Route path="/administrator" element={<Administrator/>}/>
          <Route path="/new-product" element={<NewProduct/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
