import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { API_URL } from '../../services/api';


const Lyrics = props => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});

  
    useEffect(() => {
      axios.get(
          API_URL + `track.lyrics.get?track_id=${
            props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then(res => {
            console.log(res.data)
            let lyrics = res.data.message.body.lyrics;
            setLyrics({ lyrics });
  
          return axios.get(
          API_URL + `track.get?track_id=${
              props.match.params.id
            }&apikey=${process.env.REACT_APP_MM_KEY}`
          );
        })
        .then(res => {
          console.log(res.data)
          let track = res.data.message.body.track;
          setTrack({ track });
        })
        .catch(err => console.log(err));
   }, [props.match.params.id]);
  
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    )  {
        return <Spinner />;     
        } else {
            return (
                <>
                    <Link to="/" className="lyricbtn">Go Back</Link>
                    <div className="lyriccard">
                        <div className="cardheader">
                            {track.track.track_name} by{' '} 
                            <span className="textsec">{track.track.artist_name} </span>
                            <div className="card-body">
                                <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
                            </div>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre</strong>:{" "}
                            {track.track.primary_genres.music_genre_list.length === 0
                            ? "NO GENRE AVAILABLE"
                            : track.track.primary_genres.music_genre_list[0].music_genre
                                .music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words</strong>:{" "}
                            {track.track.explicit === 0 ? "No" : "Yes"}
                        </li>
                     </ul>
                </>
            )
        }
    }


export default Lyrics;