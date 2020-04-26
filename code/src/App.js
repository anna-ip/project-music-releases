import React from 'react'
import data from './data.json'
import { Album } from 'Album'
// import { artists } from './artists'
import { Header } from './Header'


export const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="album-container">
        {data.albums.items.map(item => {
          return <Album
            key={item.id}
            image={item.images[1].url}
            name={item.name} artists={item.artists[0].name}
            link={item.external_urls.spotify}
            artists_link={item.artists[0].external_urls.spotify} />
        })};
      </section>
    </div>
  );
};
