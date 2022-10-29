import React from 'react'
import "./menu.css"
import { Link,useNavigate,useSearchParams } from 'react-router-dom'

const Menu = () => {
  const mann = useNavigate()
  var [munuu]=useSearchParams()
  console.log(munuu,'searchingid',munuu.get("id"));
  function navi(){
    mann(
      {
        pathname:"/newsfeed",
        search:"?id=050&name=news"
      }
    )
    
  }

  return (
    <div className='menuu'>menu
    <h3>RAMM SANKER</h3>
    <hr></hr>
    <button onClick={()=>navi()}>NEWSFEED</button>
    <h3>MARKETPALCE</h3>
    <h3>GROUPS</h3>
    <h3>MEMORY</h3>
    <h3>saved</h3>
    <h3>FRIENDS</h3>
    <hr></hr>
    <h3>MARKETPALCE</h3>
    <h3>GROUPS</h3>
    <h3>MEMORY</h3>
    <h3>saved</h3>
    <hr></hr>
    <h3>FRIENDS</h3>
    <h3>MARKETPALCE</h3>
    <h3>GROUPS</h3>
    <h3>MEMORY</h3>
    <hr></hr>

    <h3>saved</h3><h3>FRIENDS</h3>
    <h3>MARKETPALCE</h3>
    <h3>GROUPS</h3>
    <h3>MEMORY</h3>
    <h3>saved</h3>
    </div>

  )
}

export default Menu