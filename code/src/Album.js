import React from 'react';
import data from './data.json';
import 'components/Album.css';



/*console.log(data);*/
/*console.log(data.albums.items[0])*/


/*
const divStyle = {
    backgroundcolor: 'grey',
    backgroundImage: 'url(' + data.albums.items[1].images[0].url + ')',
    backgroundsize: 'cover',
    width: '200px',
    height: '200px',
}*/



export const Album = (props) => {
    return (
        <div className="album">
            <div className="cover">
                <img src={props.image} />
                <div className="icons">
                    <img className="heart" src="icons/heart.svg" alt="like" />
                    <img className="play-button" src="icons/play.svg" alt="play" />
                    <img className="dots" src="icons/dots.svg" alt="more" />
                </div>
            </div>
            <div className="album-title">
                <a className="album-link" href={props.link}>{props.name}</a>
            </div>
            <div className="artists-name">
                <a className="artists-link" href={props.artists_link}>{props.artists}</a>
            </div>


        </div>

    )
}

