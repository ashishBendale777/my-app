import "../css/navbar.css"

import { FaHome } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-scroll"


const MyNavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}> <FaHome /> Home</Link></li>
                    <li> <Link to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}> About </Link></li>
                    <li> <Link to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}> <IoIosContact /> Contact</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default MyNavBar