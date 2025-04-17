import React from 'react'
import "./sidebar.css"
import Cards from './cards'
const Sidebar = () => {
  const text=["legal","terms", "privacy", "Accessibility", "ads", "info"]
  return (
    <div className="sidebarMainSection">
      <div className="sidebarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>
      <div className="sidebarMiddleSection">
      <Cards heading="Create your first playlist" subheading="It's easy, we'll help you" buttontext="Create playlist"/>
      <Cards heading="Let's find some podcasts to follow" subheading="We'll keep you updated on new episodes" buttontext="Browse podcasts"/> 

      </div>
  
      <div className="sidebarBottomSection">
<div className="sidebarBottomSectopContainer">
  {
    text.map((text)=>{
      return (
      <p>{text}</p>
      )
    })
  
  }
</div>
<div className="sidebarBottomSecBottomContainer">
  <p>Cookies</p>
</div>
<div className="sidebarBottomSecBottomContainer">
  <button>English</button>
</div>



      </div>
        
    </div>
    
  )
}

export default Sidebar