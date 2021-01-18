import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";



export default function NavBar () {
    return (
        <header className="bg-green-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-green-800 text-2xl font-bold tracking-widest">
                        mhillestad.com
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-900 bold italic underline"
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/litterature"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-900 bold italic underline"                    
                    >
                        Litterature
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-green-800"
                        activeClassName="text-green-100 bg-green-900 bold italic underline"
                    >
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://twitter.com/MHillestad"
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{hight: 35, width: 35}}/>
                    <SocialIcon 
                        url="https://www.linkedin.com/in/magnushillestad/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{hight: 35, width: 35}}/>
                    
                </div>
            </div>
        </header>
    )
}