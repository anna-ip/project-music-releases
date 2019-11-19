import React from 'react'
import data from './data.json'
import { Album } from './Album'

console.log(data)
console.log(Album)
/***** First try as it looked in the very beginning Technigo version *****/
/*
export const App = () => {
  return (
    <div>
      <Album />
      Find me in src/app.js!
    </div>
  )
}*/

export const App = () => {
  return (
    <div className="App">
      <div>
        <Album />
        <artists />
        Find me in src/app.js!
      </div>
      {data.albums.items.map(item => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

/****Second test as did in Stack Overflow***/
/*
export const App = () => {
  return (
    <div className="App">
      {data.albums.items.forEach(item => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}; */

/* **First test**
export const App = () => {
  return (
    <div>
      {data.map(() => {
        return (
          <Album key={Album.items.name} name={Album.items.name} />
        );
      })}
      Find me in src/app.js!
    </div>
  )
}*/

