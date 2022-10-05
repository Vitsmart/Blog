import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Posts from '../Posts/Posts'
import SideBar from '../SideBar/SideBar'
import './Home.css'

export default function Home() {
const [posts, setPosts] = useState([]);

useEffect(() => {
  const fetchPosts = async () =>{
    const res = axios.get("/posts")
    console.log(res)
  }
  fetchPosts();
},[])

  return (
    <>
        <Header />
    <div className='home'>
        <Posts />
        <SideBar />
        </div>
        </>
  )
}
