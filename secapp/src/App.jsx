



import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home.jsx"
import Shop from "./shop.jsx"
import Blog from "./blog.jsx"
import About from "./about.jsx"
import Contact from "./contact.jsx"
import GetPro from "./getpro.jsx"
import Navbar from "./navbar.jsx"
import Login from "./login.jsx"
import Register from "./register.jsx"
import BESTSELLERS from "./bestsellers.jsx"
import NEWARRIVALS from "./newarrivals"
import BESTREVIEWED from "./bestreviewed" 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/getpro" element={<GetPro></GetPro>}></Route>
          <Route path="/navbar" element={<Navbar></Navbar>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/bestsellers" element={<BESTSELLERS></BESTSELLERS>}></Route>
          <Route path="/newarrivals" element={<NEWARRIVALS></NEWARRIVALS>}></Route>
          <Route path="/bestreviwed" element={<BESTREVIEWED></BESTREVIEWED>}></Route>

        </Routes>
      </BrowserRouter>
      {/* <img src="https://ae01.alicdn.com/kf/HTB170FVafjsK1Rjy1Xaq6zispXaQ/MAGICYZ-Short-handle-Waxing-Leathe-Handbags-Flap-Women-s-tote-Leather-Clutch-Bag-Retro-Women-Messenger.jpg_640x640.jpg" alt="" /> */}
    </>
  )
}
export default App
