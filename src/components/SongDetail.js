import React from "react"

const SongDetail=(props)=>{
  if(!props.song) return null;
  return(
    <div className="indi">
    <h1>Song:{props.song["im:collection"]["im:name"].label}</h1>
    <h2>Singer:{props.song["im:artist"].label}</h2>
    <img src={props.song["im:image"][2].label}/>
    <audio src={props.song.link[1].attributes.href} controls type="audio/ogg"></audio>
    </div>
  )
}


export default SongDetail;
