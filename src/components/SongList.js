import React from "react";

const SongList=(props)=>{
  const options=props.songs.map(song=>{
    return <option value={song.id.attributes['im:id']} key={song.id.attributes["im:id"]}>{song.title.label}</option>
  })

  function handleChange(event){
    props.onSongSelected(event.target.value)
  }

  return(
    <select id="songlist" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">"Choose a song.."</option>
    {options}
    </select>
  )





}

export default SongList
