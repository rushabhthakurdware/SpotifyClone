import React from 'react'
import "./trendingCard.css"
import { TrendingCardData } from '../../config/config'
const TrendingCard = ({setcurrentPage,setcurrentElement}) => {
  

  return (
    <>
      <div className="trendingCardSectionMainContainer">
    {
      TrendingCardData.map((ele,id)=>{
        return(
          <> 
          <div key={id} onClick={()=>{
            setcurrentPage("MusicPlayer")
            setcurrentElement(ele)
          }} className="cardcontainer">
            <img src={ele.imgSrc} alt="" className="cardimage" />
            <div className="cardtextContainer">
            <h3>{ele.heading}</h3>
            <h4>{ele.subheading}</h4>
          trendingcard

          </div>
          </div>
        
         
        
          </>
        )
      })
    }
    </div>
    </>
  )
}

export default TrendingCard