
import "../css/navbar.css"
import { FaHome } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-router-dom"

const RoutingNavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li><Link to={"/about"}>
                        About
                    </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>
                            <IoIosContact /> Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default RoutingNavBar