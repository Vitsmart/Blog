import React from 'react'
import './Navigation.css'
import faceImg from '../../assets/face.jpg'
import { Link } from 'react-router-dom';

export default function Navigation() {

const user = true;

  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem"><Link className='link' to='/'>Home</Link></li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">About</li>
            <li className="topListItem"><Link className='link' to='/write'>Write</Link></li>
            <li className="topListItem">
                {user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            { 
            user ? (
            <img 
            className='topImg'
            src={faceImg}
            alt='user'
            />
            ) : (
                <ul className='topList'>
                    <li className='topListItem'>
                    <Link className='link' to='/login'>Login</Link>
                    </li>
                <li className='topListItem'>
                <Link className='link' to='/register'>Register</Link>

                </li>
                </ul>
            )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}
