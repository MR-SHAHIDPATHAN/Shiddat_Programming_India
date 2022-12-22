import React from 'react'
import CollegetoJob from '../../components/home/ClgtoJob/CollegetoJob';
// import Dsa from '../../components/home/DSA/Dsa';
import Header from '../../components/home/Header/Header';
import Intro from '../../components/home/Intro/Intro';
import Shiddatcourses from '../../components/home/Shiddat_Courses/Shiddatcourses';
import "./home.css";





const Home = () => {
  return (

    <>
    <Header/>
<CollegetoJob/>
    <Intro/>
    {/* <Dsa/> */}
    <Shiddatcourses/>

    </>
   
  )
}

export default Home;