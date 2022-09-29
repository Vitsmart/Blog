import SideBar from '../SideBar/SideBar'
import './Settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img
                    src='https://guardian.ng/wp-content/uploads/life/2015/08/jideofstola_2015-07-12_18-23-39.jpg'
                    alt='settingsimg'
                    />
                    <label htmlFor='fileInput'>
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Vitman'/>
                <label>Email</label>
                <input type="email" placeholder='Vitman@gmail.com'/>
                <label>Password</label>
                <input type="password" />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <SideBar />
    </div>
  )
}
