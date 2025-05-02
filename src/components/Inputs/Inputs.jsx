import React from 'react'
import "./Input.css"

export default function Inputs(props) {

    const  {width,height,borderRadius,display,padding,margin,...other} = props

  return (
    <input className='Inputs' style={{width,height,borderRadius,display,padding,margin}} {...other}/>

  )
}
