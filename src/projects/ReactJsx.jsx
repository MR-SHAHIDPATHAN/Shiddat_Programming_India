import React from 'react'
import './ReactJsx.css'

const ReactJsx = () => {

  let CurrDate = new Date(2022,11,20,15);
  let ShowDate = CurrDate.getHours();
  let Message = ""

// 24hrs clock 
// night 1 - 12pm == good morning 
// 12 pm se night 7 == good afternoon 
// 7pm se night ke 12PM == good night 

const cssStyle = {
  color : "green",
  fontSize : "50px"
}

if(ShowDate >= 1 && ShowDate <= 12){
  Message = "Good Morning 🥶🖼️😀";
  cssStyle.color = "green"


}else if( ShowDate >= 12  && ShowDate <= 19){
  Message = "Good Afternoon 😥🎆";
  cssStyle.color = "red"


}else{
  Message = "Good Night 😵🌄🌙"
  cssStyle.color = "black"

}




  return (
   <h1>Hello dear..👻  <span style={cssStyle}>  {Message } </span>  </h1>
    
  )
}

export default ReactJsx;