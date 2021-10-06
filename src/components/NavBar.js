import React from 'react'
import { useState } from 'react'

export default function NavBar() {

const  [showMenu, setShowMenu] = useState(true);

let menu

if (showMenu) {

    menu = 
        <div className="navbarClose"
        
        style={{
            position: "fixed"
          }}

        >
            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22"
            onClick={() => setShowMenu(!showMenu)}
            >
            <line id="Line_2" data-name="Line 2" x2="27" transform="translate(1 1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
            <line id="Line_3" data-name="Line 3" x2="27" transform="translate(1 21)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
            <line id="Line_4" data-name="Line 4" x2="34" transform="translate(1 11)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
            </svg>
            <div className="circle"/>
            <div className="dottedLine"/>
            <div className="circle"/>
            <div className="dottedLine"/>
            <div className="circle"/>
            <div className="dottedLine"/>
            <div className="circle"/>
        </div>
}
else {
    menu = 
        <div className="navbarOpen">
            <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        onClick={() => setShowMenu(!showMenu)}

            >
                <line x1="18" y1="6" x2="6" y2="18">
                </line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <p className="navLink">HOME</p>
            <div className="dottedLine"/>
            <p className="navLink">ABOUT ME</p>
            <div className="dottedLine"/>
            <p className="navLink">PROJECT GALLERY</p>
            <div className="dottedLine"/>
            <p className="navLink">CONTACT</p>
        </div>
}

    return (
        <>
    { menu }
    </>
    )
}
