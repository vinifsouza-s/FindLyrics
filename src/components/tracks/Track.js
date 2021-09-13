import React from 'react';
import { Link } from 'react-router-dom';
import './Track.css';

const Track= (props) => {
    const {track} = props;

    return (
        <div className="track">
            <div className="trackid">
                <div className="trackbody"> 
                    <h5 className="trackname"> {track.artist_name} </h5>
                    <p className="card-text">
                        <strong>Track</strong> : {track.track_name}
                        <br/>
                        <strong>Album</strong> : {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="trackbtn">
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track;