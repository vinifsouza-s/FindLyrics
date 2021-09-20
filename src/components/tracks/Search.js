import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context';
import { API_URL } from '../../services/api';


const Search = () => {
    const [setState] = useContext(Context);
    const [userInput, setUserInput] = useState("");
    const [trackTitle, setTrackTitle] = useState("");


    useEffect(() => {
        axios
          .get(
            API_URL + `track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
              process.env.REACT_APP_MM_KEY
            }`
          )
          .then(res => {
            let track_list = res.data.message.body.track_list;
            setState({ track_list: track_list, heading: "Search Results" });
          })
          .catch(err => console.log(err));
      }, [trackTitle]);
    
      const findTrack = e => {
        e.preventDefault();
        setTrackTitle(userInput);
      };
    
      const onChange = e => {
        setUserInput(e.target.value);
      };
    
      return (
        <div className="cardBody">
          <h1 className="displayText">
            <i className="musicIcon" /> Search For A Song
          </h1>
          <p className="leadCenter">Get the lyrics for any song</p>
          <form onSubmit={findTrack}>
            <div className="formGroup">
              <input
                type="text"
                className="formControl"
                placeholder="Song title..."
                name="userInput"
                value={userInput}
                onChange={onChange}
              />
            </div>
            <button className="btnPrimary" type="submit">
              Get Track Lyrics
            </button>
          </form>
        </div>
      );
                
             
                
           
        
    
}



export default Search;