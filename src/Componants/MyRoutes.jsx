import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutingNavBar from "./RoutingNavBar"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

const MyRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <RoutingNavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRoutes