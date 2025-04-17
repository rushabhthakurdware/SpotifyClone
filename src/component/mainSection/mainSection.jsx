import React from 'react'
import "./mainSection.css"
import Trending from '../trending/trending'
import PopularArtist from '../popularArtist/popularArtist'
import { useState } from 'react' 
import SpecificMusicFile from '../../pages/SpecificMusicPage/SpecificMusicFile'
// import { BrowserRouter as Router, Route } from "react-router-dom"; 

const MainSection = () => {
  const[currentPage,setcurrentPage]= useState("home")
  const[currentElement,setcurrentElement]= useState(null)
  return (
   
    <main className='mainSection'>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
       {
        currentPage ==="home" ? 
          <>
            <Trending setcurrentElement={setcurrentElement} setcurrentPage={setcurrentPage}/>
            <PopularArtist setcurrentPage={setcurrentPage}/>
          </>
          :currentPage==="MusicPlayer" ?
          <><SpecificMusicFile currentElement={currentElement} /></>
          :currentPage ==="artpage"?
          <>artist</>
          :currentPage==="playlist"?
          <>playlist</>
          :null


        }
       
   
    </main>
  )
}

export default MainSection