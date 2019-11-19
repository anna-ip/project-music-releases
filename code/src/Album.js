import React from 'react';
import data from './data.json'
import { genericTypeAnnotation } from '@babel/types';
import { CoverageMap } from 'istanbul-lib-coverage';

/*console.log(data);*/
/*console.log(data.albums.items[0])*/

const divStyle = {
    backgroundcolor: 'grey',
    backgroundImage: 'url(' + data.albums.items[1].images[0].url + ')',
    backgroundsize: 'cover',
    width: '200px',
    height: '200px',
}

export const Album = () => {
    return (
        <div>
            <data />
            Export Album!
      </div>
    )
}

export const Albums = () => {
    return (
        <div className="App">
            <div>
                <Album />
                Find me in src/app.js!
        </div>
            {data.albums.items.map(item => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
};
/*
const albums = [
    { name: 'data.albums.items.name' },
    { artist: 'data.albums.items.artists.name' }
]


export const Album = () => {
    return (
        <div>
            {albums.map(data => {
                return (
                    <data key={data.name} name={data.name} artist={data.artists} />
                );
            })}
        </div>
    );
};*/


/*  ****** Nasims version *******
export const Album = (props) => {
    return (
        <section id="albums">
            <div>
                <div style={divStyle}>

                </div>
                {data.albums.items[1].name}

            </div>
            <div>
                {data.albums.items[1].artists[0].name}
            </div>
        </section>
    );
};
*/
/*
export const Album = () => {
    return (
        <section>
            <div>
                {data.map(() => {
                    return (
                        <Album key={Album.items.name} name={Album.items.name} />
                    );
                })}
                Find me in src/app.js!
      </div>
        </section>
    )
}*/

/* ***Stack overflow version-1**
export const Album = () => {
    return (
        <div>
            <div style={divStyle}>

            </div>
            {data.albums.map((album, index) => {
                return (
                    <div key={index}>
                        {album.items.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
} */

