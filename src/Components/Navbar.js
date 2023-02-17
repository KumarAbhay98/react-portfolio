import React from 'react'
import { useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    // the below code is for changing navbar color
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    // change of navbar code ends here
    //code for hamburger click we gonna use useState and will handle event
    const[click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }


    return (
        <>
            {/* Instead of having class header and active we gonna change it with a ternary operator this is for color change of navbar */}
            {/* <nav className="header active"> */}
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <Link to="/">
                    <h1 className="brand">Portfolio</h1>
                </Link>
                {/* //This is to handle click of hamburger */}
                <ul className={click ? "nav-menu activee":"nav-menu"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <a href="#section1">About</a>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>

                {/* Hamburger and cross icon for menu in small devices */}
                <div className="hamburger" onClick={handleClick}>
                     {/* hamburger icon from react-icons we want to show hamburger in the beginning then by clicking it 
                     we want our menu and a cancle button */}
                    {/* {/* using terniray operator below  */}
                    {click ? (<FaTimes size={23} style={{ color: "white" }} />) : (<FaBars size={23}/>)}
                </div>
            </div>
        </>
    )
}

export default Navbar