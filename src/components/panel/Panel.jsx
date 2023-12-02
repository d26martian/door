import React from 'react'

import logo from '../../assets/logo.png'
import './Panel.css'

export function Panel({children}) {
  return (
   <div className="panel">
    <div className="col">
      <div className="log">
        <img src={logo} alt="" />
      </div>
    </div>
    <div className="col box">2</div>
   </div> 
  )
}
