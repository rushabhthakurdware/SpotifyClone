import React from 'react'

const SpecificMusicFile = ({currentElement}) => {
  return (

    <>
        <img src={currentElement.imgSrc} alt="music" />
        <h1>{currentElement.heading}</h1>
        <h1>{currentElement.subheading}</h1>
        <audio src={currentElement.musicFile}   controls></audio>
        

    </>
  )
}

export default SpecificMusicFile