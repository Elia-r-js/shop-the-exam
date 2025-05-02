import React from 'react'
import "./Button.css"


export default function Button(props) {
    const {width,height,title,backgroundColor,fullwidth,borderRadius,display,...other} = props
    
  return (
    <button className='Buttons' style={{width:fullwidth?"100%":width,height,backgroundColor,borderRadius,display} } {...other}>
        {
            title
        }
    </button>
  )
}
