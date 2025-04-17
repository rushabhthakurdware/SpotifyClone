import React from 'react'
import "./popularArtist.css"
import ArtistCard from '../artistCard/artistCard'
const PopularArtist = ({setcurrentPage}) => {
  return (
    <div className='popularArtist trendingSectionMainContainer'>
      <span>
      Popular Artist 
      </span>
        
        <ArtistCard setcurrentPage={setcurrentPage}/>
    </div>
  )
}

export default PopularArtist