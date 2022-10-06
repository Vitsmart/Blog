import axios from 'axios';
import { useContext, useState } from 'react'
import { Context } from '../components/context/Context'
import SideBar from '../SideBar/SideBar'
import './Settings.css'

export default function Settings() {

const { user } = useContext(Context);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [file, setFile] = useState(null);
const [success, setSuccess] = useState(false)


const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
    userId: user._id,
     username, 
     email, 
     password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
  
      try{
        await axios.post("/upload", data);
  
      }catch(err){
  
      }
  
  
    }
    try {
    await axios.put("/users/" + user._id, updatedUser);
    setSuccess(true)
    }catch (err){}
  }
  
  



  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img
                    src={user.profilePic}
                    alt='settingsimg'
                    />
                    <label htmlFor='fileInput'>
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' className='settingsSubmit'>Update</button>
                {success && <span style={{color:"green", textAlign: "center", marginTop: "20px"}}>profile has been updated...</span>}
            </form>
        </div>
        <SideBar />
    </div>
  )
}
