import React from 'react'
import "./Info.css" 
import Button from '../../components/Buttons/Button'

export default function Info() {
  return (
    <div className='Info'>
        <p>
        
        this site was develope by elia and i am proud that i make it this far
        </p>
        <Button title="like it" backgroundColor="green" width="60px" height="25px" borderRadius="5px" type="submit"/>
        <Button title="dislike"  backgroundColor="red" width="60px" height="25px" borderRadius="5px" type="submit"/>

        </div>
  )
}
