import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import DashBoard from "./pages/DashBoard"
import Products from "./pages/Products"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element={<div>login</div>}></Route>
      </Routes>
    </Router>
  )
}

export default App
