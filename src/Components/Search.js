import React, {useState} from 'react'

const Search = ({search}) => {
    const[text,setText]= useState('')
    const onSearch = (q)=>{
        setText(q)
        search(q)
    }
    return (
        <div className="Input">
        <input value={text} className="inputbar" type="text" placeholder="Search for super heroes:" autoFocus onChange={(e)=>onSearch(e.target.value)}/>
      </div>
    )
}

export default Search
