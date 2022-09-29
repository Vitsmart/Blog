import React from 'react'
import './SideBar.css'
import profileImg from '../assets/profile.jpg'


export default function SideBar() {
  return (
    <>
    <div className="sideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
        
        <img
        src={profileImg}
        alt='profile'
        />
        <p>
            Lorem ipsum dolor sit praesentium! Vero illo fugiat, commodi eaque esse dolore iste officia rem dolorem sit dolores modi ex non impedit nisi!
        </p>
    </div>
    <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sideBarListItem">Life</li>
            <li className="sideBarListItem">Music</li>
            <li className="sideBarListItem">Style</li>
            <li className="sideBarListItem">Sport</li>
            <li className="sideBarListItem">Tech</li>
            <li className="sideBarListItem">Cinema</li>
            <li className="sideBarListItem">Others</li>
        </ul>
    </div>
    <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
        <i className="sideBarIcon fa-brands fa-facebook"></i>
            <i className="sideBarIcon fab fa-instagram"></i>
            <i className="sideBarIcon fab fa-twitter-square"></i>
        </div>
    </div>
    </div>
    </>
  )
}
