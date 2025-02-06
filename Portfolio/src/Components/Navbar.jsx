
import './Navbar.css'
import logo2 from '../assets/logo2.png'
const Navbar = () => {
  return (
    <div className='navbar'> 
    <img src={logo2}alt=""/>
    <ul className="nav-menu">
        <li>Home</li>
        <li>About </li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
    </ul>
    <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar