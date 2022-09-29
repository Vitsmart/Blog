import React from 'react'
import './Navigation.css'
import faceImg from '../../assets/face.jpg'

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
            src={faceImg}
            alt='user'ay-background-pi
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}
