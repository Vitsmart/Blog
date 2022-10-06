import React, { useContext } from 'react'
import './Navigation.css'
import faceImg from '../../assets/face.jpg'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

export default function Navigation() {

    const {user, dispatch} = useContext(Context);
const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
    const pf = "http://localhost:5000/images/"
}
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
            <li className="topListItem" onClick={handleLogout}>
                {user && "Logout"}</li>
            </ul>
        </div>
        <div className="topRight">
            { 
            user ? (
                <Link to="/settings">
                <img 
            className='topImg'
            src={pf + user.profilePic}
            alt='user'
            />
                </Link>
            
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
