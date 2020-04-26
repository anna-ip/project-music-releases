import React from 'react'
import 'components/Album.css'


export const Album = (props) => {
    return (
        <div className="album">
            <div className="cover">
                <div className="icons">
                    <img className="heart" src="icons/heart.svg" alt="like" />
                    <a href={props.link} target="blank"> <img className="play-button" src="icons/play.svg" alt="play" /> </a>
                    <img className="dots" src="icons/dots.svg" alt="more" />
                </div>
                <img src={props.image} alt="Album cover" />
            </div>
            <div className="album-title">
                <a className="album-link" href={props.link} target="blank">{props.name}</a>
            </div>
            <div className="artists-name">
                <a className="artists-link" href={props.artists_link} target="blank">{props.artists}</a>
            </div>
        </div>
    )
}

