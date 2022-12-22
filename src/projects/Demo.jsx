

// import { red } from '@mui/material/colors';
import React from 'react';
import './Demo.css'

const Demo = (() =>{
  let Currdate = new Date(2022,11,20,14);
  let ShowHours = Currdate.getHours();
  let Message = '';

  const setStyle = {
    // color : 'red',
    fontSize : "50px"
  
  }
  

  if(ShowHours >= 1 && ShowHours <= 12){
    Message = "Good Morning ..🌙🌄😵!"
    setStyle.color = "green";


  }else if( ShowHours >= 12 && ShowHours <= 18){
    Message = "good Afternoon ..🌙🌄😵!"
    setStyle.color = "yellow";
    

  }else{
    Message = "good Night..🌙🌄😵!"
    setStyle.color = 'black'


  }



// a b c 

  return(
    <> 
  
   <div className='parent'>   { Message}    </div>

      
    

    </>
  
  )

})

export default Demo;