import React from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

const CharacterItem = ({item}) => {

    const setBookmark = (item) =>{
        var previousData = JSON.parse(localStorage.getItem('bookmarked'))
        previousData.push(item)
        localStorage.setItem('bookmarked',JSON.stringify(previousData))
        window.location.reload(false);
        document.getElementById(item).style.display = 'none';
    }
    const unsetBookmark = (item) =>{
        var previousData = JSON.parse(localStorage.getItem('bookmarked'))
        var firstElement = previousData[0]
        var lastElement = previousData.pop()
        if(firstElement===lastElement){
            localStorage.setItem('bookmarked','[]')
        }else if(JSON.stringify(item)===JSON.stringify(lastElement)){
            localStorage.setItem('bookmarked',localStorage.getItem('bookmarked').replace(','+JSON.stringify(item),''))
        }
        else{
            localStorage.setItem('bookmarked',localStorage.getItem('bookmarked').replace(JSON.stringify(item)+',',''))
        }
        window.location.reload(false);
    }
    return (
    <div className='content'>
        <h1 className="charName">{item.name}</h1>
        <img className="contentImg" src={item.thumbnail.path + ".jpg"} alt=''/>
        {
            (localStorage.getItem('bookmarked')).includes(JSON.stringify(item)) ?
            <button className="button2" type='button' onClick={()=>unsetBookmark(item)}>
                <FaHeart className="icon2"></FaHeart>
            </button>
            :
            <button className="button2" type='button' onClick={()=>setBookmark(item)}>
                <FaRegHeart className="icon"></FaRegHeart>
            </button>
        }
    </div>
    )
}
export default CharacterItem