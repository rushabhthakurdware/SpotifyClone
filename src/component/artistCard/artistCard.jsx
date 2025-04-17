import React from 'react'
import "./artistCard.css"
import { ArtistList } from '../../config/config'
const ArtistCard = ({setcurrentPage}) => {
  return (
    <div className='ArtistCardMainContainer'>
      {
        ArtistList.map((ele)=>{
          return(
            <div onClick={()=>{
              setcurrentPage("artpage")
             }} className='ArtistCardContainer'>
              <img src={ele.imgSrc} alt="" />
              <div className="textContainer">
                  <h3>{ele.name}</h3>
                  <p>Artist</p>
              
              </div>
              <span> 
              <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 24 24">
                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                </span>
               
              
              
            </div>
          ) 
        })
      }
      
      </div>
  )
}

export default ArtistCard