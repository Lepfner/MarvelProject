import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterTable from './Components/CharacterTable';
import Search from './Components/Search';

const hash = "c75512748efc17daf04168e65a27236d"

function App() {
  const [items, setItems] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [query,setQuery]= useState('')
  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
          if(localStorage.getItem('bookmarked')==='[]' || !localStorage.getItem('bookmarked')){
            localStorage.setItem('bookmarked','[]')
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=bd6343ee6323658b8a5b47124bc7a184&hash=${hash}`)
          setItems(result.data.data.results)
          setLoading(false)
        }else {
          let bookmark = JSON.parse(localStorage.getItem('bookmarked'))
          setItems(bookmark)
          setLoading(false)
        }
        }else {
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=bd6343ee6323658b8a5b47124bc7a184&hash=${hash}`)
          setItems(result.data.data.results)
          setLoading(false)
        }
    }
    fetch()
  },[query])
    return (
      <div>
      <Search search={(q)=>setQuery(q)}/>
      <div className="background"></div>
      <CharacterTable items={items} isLoading={isLoading}/>
      </div>
    )
  }
export default App