import React from 'react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Addpost.css'

const Addpost = props => {

  return (
    <div className='post'>
        <div className='post-box'>
            <span className='close-icon' onCLick = {props.handleClose}>x</span>
            {props.content}
        </div>
    </div>
  )
}

export default Addpost 
