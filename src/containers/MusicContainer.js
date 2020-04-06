import React from "react";
import SongList from "../components/SongList"
import SongDetail from "../components/SongDetail"



class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      songs:[],
      selectedSongId:""

    }
    this.handleSongSelected=this.handleSongSelected.bind(this);
  };
  //------------------------------------------------------------
  componentDidMount(){


    const url="https://itunes.apple.com/gb/rss/topsongs/limit=100/json"

    fetch(url)
    .then(res=>res.json())
    .then(songsApi=>this.setState({songs:songsApi.feed.entry}))
    .catch(err=>console.error)
  }


  //all my methods go here

  handleSongSelected(id){
    this.setState({selectedSongId:id})

  }


  //---------------------------------------------

  render(){
    const selectedSong=this.state.songs.find(song=>
      song.id.attributes['im:id']===this.state.selectedSongId)


    return(
      <div className="container">
      <SongList songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
      <SongDetail song={selectedSong}/>
      </div>
    )
  }







}

export default MusicContainer
