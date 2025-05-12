import React, { useEffect, useState } from 'react'
import "./Info.css" 
import Button from '../../components/Buttons/Button'

export default function Info() {

   const[userInput, setUserInput] = useState('')
      
      function alertMaker(){
        alert ("thanks for liking it ")
    
      }
      function promtHandler(){
      const input=  prompt ("what is the problem")
        setUserInput(input)
    
      }
         useEffect(()=>{
          if (userInput){
            console.log("user said:" ,userInput)
          }
         },[userInput]
        
        ) 




        return (
           <div className='Info'>
        <p>
        
        this site was develope by elia and i am proud that i make it this far
        </p>
        <Button onclick={alertMaker} title="like it" backgroundColor="green" width="60px" height="25px" borderRadius="5px" type="submit"/>
        <Button onclick={promtHandler} title="dislike"  backgroundColor="red" width="60px" height="25px" borderRadius="5px" type="submit"/>

            {userInput &&(
              <p style={{marginTop:"10px",color: "red"}}>
                you said: {userInput}
              </p>
            )}


        </div>
  )
}
