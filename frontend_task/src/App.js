import './App.css';
import React from 'react';
import JSONDATA from './MOCK_DATA.json';
import HERODATA from './HERO_DATA.json';
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
    return (
      <div>
      <div className="Input">
        <input className="inputbar" type="text" placeholder="Search for super heroes:" onChange={(event) => {setSearchTerm(event.target.value);
        }}
        />
      </div>
      <div className="background"></div>
      <div className="container">
      {JSONDATA.filter((val)=> {
        if(searchTerm === "") {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val,key) => {
        return (
          <div className="containerItem" key={key}>
            <p>{val.name}</p>
            <img className="image" src={val.image} alt="tribala bit slika"></img>
            <button className="button">{val.boolean}</button>
            <p>{HERODATA.data.results[2].name}</p>
            </div>
        );
      })}</div>
      {/* https://www.youtube.com/watch?v=mZvKPtH9Fzo search
          https://www.youtube.com/watch?v=l41MBWdlzls marvel api
      */}
      </div>
    )
  }
export default App