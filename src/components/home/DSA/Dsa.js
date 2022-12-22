import React from 'react'
import './Dsa.css'
import c from './../../../images/c-.png'
import java from './../../../images/java.png'
import python from './../../../images/python.png'
import js from './../../../images/js-file.png'

const Dsa = () => {
  return (
    <div className="dsa_parent">
      
      <div className="step_1_child">
        <p className='step_1_p'>STEP-2</p>
        <p className='step_1_p2'>Starting DSA Practice from F.Y </p>
       </div>

      <h1> DSA is Must in IT Career </h1>
      <p> You can Choose any one DSA Languages</p>
 

      <div className="child_parent">
        <div className="child">
          <img src={c} alt="c-logo-shiddat-programming" width={50} />
              <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm"> <span> C++ </span> </a> 
        </div> 
        <div className="child">
         <img src={java} alt="java-logo-shiddat-programming" width={50} />
         <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm"> <span> JAVA </span> </a> 

        </div>
        <div className="child">
              <img src={python} alt="python-logo--shiddat-programming" width={50} />
              <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm"> <span> PYTHON </span> </a> 

        </div>
        <div className="child">
          <img src={js} alt="js-logo-shiddat-programming" width={50} />
          <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm"> <span> JAVASCRIPT </span> </a> 
        </div>
        </div>
        <h3 className='dsa_h3'> we Providing DSA Preparation in Simple Way ..!</h3>
    </div>
  )
}

export default Dsa;