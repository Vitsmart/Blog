import React from 'react'
import './Navigation.css'


export default function Navigation() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className='topImg'
            src='https://www.istockphoto.com/photo/beautiful-young-woman-with-clean-fresh-skin-gm1144337675-307607487?phrase=beautiful%20face'
            alt='user'
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}
