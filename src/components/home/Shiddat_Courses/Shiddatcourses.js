import React from 'react'
import './Shiddat_courses.css'
import c from './../../../images/c-.png'
import java from './../../../images/java.png'
import python from './../../../images/python.png'
import js from './../../../images/js-file.png'

import dsa from './../../../images/dsa.png'
import csharp from './../../../images/hashtag.png'
import dotnet from './../../../images/website.png'
import webdesign from './../../../images/ux-design.png'
import frontend from './../../../images/ux.png'
import backend from './../../../images/backend.png'
import fullstck from './../../../images/web-development.png'
import mobileapps from './../../../images/mobile-app-dev.png'
import blockchain from './../../../images/blockchain.png'
import softwaretesting from './../../../images/testing.png'
import cloudarchi from './../../../images/cloud-storage.png'
import dbms from './../../../images/database.png'
import netwope from './../../../images/networking.png'
import wordpress from './../../../images/wordpress.png'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Shiddatcourses = () => {
  return (
    <div className="shiddat_parent">
    <h1> DSA is Must in IT Career </h1>
    <p> You can Choose any one DSA Languages</p>


    <div className="shiddat_parent_child">
      <div className="child">
        <img src={c} alt="c-logo-shiddat-programming" width={50} />
        <span>C, C++ </span>
        <em><b>2 Months </b> with Complete Basic to Advance | Pinters | File Arrays </em>
      </div>
      <div className="child">
       <img src={java} alt="java-logo-shiddat-programming" width={50} />
       <span> JAVA  </span>
       <em> - Complete java | Basic to Advance    </em>

      </div>
      <div className="child">
            <img src={python} alt="python-logo--shiddat-programming" width={50} />
            <span> PYTHON </span>

      </div>
      <div className="child">
        <img src={js} alt="js-logo-shiddat-programming" width={50} />
       <span> JAVASCRIPT </span>
      </div>


      <div className="child">
        <img src={dsa} alt="js-logo-shiddat-programming" width={50} />
       <span> DSA </span>
      </div>

      <div className="child">
        <img src={csharp} alt="js-logo-shiddat-programming" width={50} />
       <span> C# </span>
      </div>

      <div className="child">
        <img src={dotnet} alt="js-logo-shiddat-programming" width={50} />
       <span> .NET </span>
      </div>

      <div className="child">
        <img src={webdesign} alt="js-logo-shiddat-programming" width={50} />
       <span> WEB DESIGNING / UI-UX </span>
      </div>

      <div className="child">
        <img src={frontend} alt="js-logo-shiddat-programming" width={50} />
       <span> FRONTEND DEVELOPER </span>
      </div>


      <div className="child">
        <img src={backend} alt="js-logo-shiddat-programming" width={50} />
       <span> BACKEND DEVELOPER </span>
      </div>


      <div className="child">
        <img src={fullstck} alt="js-logo-shiddat-programming" width={50} />
       <span> FULL STACK DEVELOPER </span>
      </div>

      <div className="child">
        <img src={mobileapps} alt="js-logo-shiddat-programming" width={50} />
       <span> MOBILE APPS DEVELOPER </span>
      </div>


      <div className="child">
        <img src={blockchain} alt="js-logo-shiddat-programming" width={50} />
       <span> BLOCKCHAIN DEVELOPER </span>
      </div>


      <div className="child">
        <img src={softwaretesting} alt="js-logo-shiddat-programming" width={50} />
       <span> SOFTWARE TESTING </span>
      </div>



      <div className="child">
        <img src={cloudarchi} alt="js-logo-shiddat-programming" width={50} />
       <span> CLOUD ARCHITECH </span>
      </div>

      


      <div className="child">
        <img src={dbms} alt="js-logo-shiddat-programming" width={50} />
       <span> DBMS  </span>
      </div>

      

      <div className="child">
        <img src={netwope} alt="js-logo-shiddat-programming" width={50} />
       <span> NETWORKING , OPERATING SYSTEM  </span>
      </div>


      <div className="child">
        <img src={wordpress} alt="js-logo-shiddat-programming" width={50} />
       <span> WORDPRESS DEVELOPER  </span>
      </div>

      </div>
      <h3 className='shiddat_h3'> we Providing DSA Preparation in Simple Way ..!</h3>

{/*😎✅😎✅ call to Action here 😎✅😎✅ */}
      <div className="call_to_action">
        <div className="fees">
          <p className='fees_year' >1234/nhgf</p> <span>or</span>
          <p className='fees_months'> 1234/frdes</p>
          <p className='only_for_u'>Only for Ypur <i> ❤️🤞😊</i></p>
        </div>
        
        <div className="free_placement">
        <p>Get frehgge Plahgfcement Coukkjrse 😎😀👍</p>
        </div>

        <div className="wp_numbers">
          <div className="wp_number">
            <p className='admision'>  Admission Open  </p>
            <p className='wps-numbers'>  <WhatsAppIcon className="wp-icon" /> 1234567890<WhatsAppIcon className="wp-icon" />1234567890</p>
            <p className='direct_msg'> <WhatsAppIcon className="wp-icon" /> Click Send Direct Msg</p>
          </div>
        </div>
      </div>



  </div>
  )
}

export default Shiddatcourses