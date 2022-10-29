import React from 'react'
import { Link,useNavigate,useSearchParams } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <div>

      <div className='headd'>
        <div className='navigate' ><h1>FACEBOOK</h1><br></br>
          <input className='inp' placeholder='Search here!'></input>
         <Link to="menu?id=0504&name=menu" >MENU</Link>
          <a>CONTACT</a>
          <a>CONTACT</a>
          <a>CONTACT</a>
          <a>CONTACT</a>
        </div>

      </div>

    </div>

  )
}

export default Nav