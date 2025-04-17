import React from 'react'
import "./trending.css"
import TrendingCard from '../trendingCard/trendingCard'

const Trending = ({setcurrentPage,setcurrentElement}) => {
  return (
    <div className="trendingSectionMainContainer" >
      <span>Trending Song</span>
      <TrendingCard setcurrentElement={setcurrentElement} setcurrentPage={setcurrentPage}/>
    </div>  
)
}

export default Trending