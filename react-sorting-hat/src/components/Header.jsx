import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, NavItem } from "reactstrap"
import hpLogo from "./photos/hpLogo.png"

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={hpLogo} alt="logo"/>
            </div>
            <Navbar>
                <NavItem><Link to="/">Home</Link></NavItem>  
                <NavItem><Link to="/Survey">Survey</Link></NavItem>  
                <NavItem><Link to="/Results">Results</Link></NavItem>  
            </Navbar>
        </div>
    )
}
