import './Write.css'

export default function Write() {
  return (
    <div className='write'>
        <img
        className='writeImg'
        src='https://static8.depositphotos.com/1329809/808/i/450/depositphotos_8089938-stock-photo-sunny-forest-early-in-the.jpg'
        alt='writeimag'
        />
<form className="writeForm">
    <div className="writeFormGroup">
        <label htmlFor='fileInput'>
        <i className="writeFormIcon fa-solid fa-plus"></i>
        </label>
        <input type="file" id='fileInput' style={{display:"none"}}/>
        <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
    </div>
    <div className="writeFormGroup">
        <textarea placeholder='Add your story...' type="text" className='writeInput writeText'></textarea>
    </div>
    <button className='writeSubmit'>Publish</button>
</form>
    </div>
  )
}
