import React from 'react'
import Button from '../../components/Buttons/Button'
import"./contact.css"
import Inputs from '../../components/Inputs/Inputs'
export default function Contact() {
  return (
    <div className='contact'>
      <form style={{display:"flex",flexDirection:'column', gap:"4px"}}>
    <Inputs placeholder='your name' width="95px" height="12px" display="flex" padding="3px" />
    <Inputs placeholder="enter your email with @" type='email' width="160px" display="flex" padding="3px" />
    <textarea placeholder='your opinion' />
    <Button title="submit" type="submit"  width="55px" height="29px" backgroundColor="red" />
    </form>
    </div>
  )
}
