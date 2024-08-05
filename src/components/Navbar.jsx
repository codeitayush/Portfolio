import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
       <img className = "mx-2 w-10"src={logo} alt="logo" />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="http://linkedin.com/in/ayush-pathania-573804231" target="_blank"><FaLinkedin/></a> 
        <a href="https://github.com/codeitayush" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/ayushxpathania/" target="_blank"><FaInstagram/></a>
        <a href="https://x.com/ayushxpathania" target="_blank"><FaTwitterSquare/></a>
       </div>
    </nav>
  )
}

export default Navbar
