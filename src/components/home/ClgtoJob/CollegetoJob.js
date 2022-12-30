import React from 'react'
import "./CollegetoJob.css";
// import "./clgto.css";


import salary from './../../../images/salary.webp'
import Dsa from '../DSA/Dsa';
import Projects from '../projects/Projects';


const CollegetoJob = () => {
  return (
    <div className="clg_parent">
      <h1> College to Dream Job  </h1>
      <p> Provide complete Roadmap F.Y TO T.Y in 4 STEP </p>
 

      <div className="clg_child_parent">

          <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
          </div>


      </div>


        <h3 className='clg_h3'> "Develop a passion for learning. If you do, you will never cease to grow "</h3>



{/* ✅✅✅step-1  */}
       <div className="step_1">
       <div className="step_1_child">
        <p className='step_1_p'>STEP-1</p>
        <p className='step_1_p2'>Seletct Prgramming Languages</p>
       </div>

       <p className='how_to_select'> 😥 How to select Programming Languages? Check these things.👍 </p>
         <div className="select_langs">

          <div className="select_left">
            <div className="select-langs select_1">
              <img src={salary} alt=""
              width={200} height={100} />
            <a href="https://www.glassdoor.co.in/Salaries/index.htm">  

                <span> Salary</span>
                </a>
            </div>

            <div className="select-langs select_2">
            <img src="https://iiht-kharghar.com/wp-content/uploads/job-opportunities.jpg" alt=""
              width={200}  height={100} />
             <a href="https://www.linkedin.com/jobs/">  

              <span> Jobs </span>
              </a>
            </div>

            <div className="select-langs select_3">
            <img src="https://plopdo.com/wp-content/uploads/2019/03/job-location-1029x642.jpg" alt=""
              width={200}  height={100} />
               <a href="https://www.indeed.com/career-advice/finding-a-job/best-states-for-it-jobs">  

                <span>Location </span>
                </a>
            </div>
            
          </div>

            <div className="select_center">

            <div className="select-langs select_3">
            <img src="https://i.pinimg.com/736x/c0/dd/24/c0dd24e2856344d38dbe9ce861fdbb90.jpg" alt=""
              width={200}  height={100} />
              <a href="https://webdesignerwall.com/">  

                  <span> Your Learning Level 
                  </span>
                  </a>
            </div>

            <div className="select-langs select_3">
            <img src="https://constructionexec.com/assets/site_18/images/article/042318014730.jpg?width=1280" alt=""
              width={200}  height={100}  />
              <a href="https://survey.stackoverflow.co/2022/#developer-type">  

                <span> Future</span>
                </a>
            </div>

            <div className="select-langs select_6">
            <img src="https://diplomatist.com/wp-content/uploads/2020/08/22.png" alt=""
              width={200}  height={100}  />
              <a href="https://survey.stackoverflow.co/2022/#developer-type">  

                <span> Growth</span>
                </a>
            </div>


            </div>

          <div className="select_right">


          <div className="select-langs select_4">
          <img src="https://qph.cf2.quoracdn.net/main-qimg-b1089b1ae3449874816657be2bb074ec-pjlq" alt=""
              width={200}  height={100} />
               <a href="https://survey.stackoverflow.co/2022/#developer-type">  

                <span> Interest</span>
                </a>
            </div>

            <div className="select-langs select_5">
            <img src="https://patientengagementhit.com/images/site/article_headers/_normal/community_public_health.jpg" alt=""
              width={200}  height={100} />
              <a href="https://survey.stackoverflow.co/2022/#developer-type">  

            <span> Community Support</span>
              </a>
            </div>

            <div className="select-langs select_6">
            <img src="https://www.goireland.in/images/companies-in-ireland.jpg" alt=""
              width={200} height={100} />
              <a href="https://survey.stackoverflow.co/2022/#developer-type">  

              <span> Dream </span>
              </a>
            </div>

         

           

          
          </div>

         </div>


          <div className="learn_in_fy">
            <h2>Possible areas of emphasis for freshman (1st) year</h2>

           <ul>

           

            <li>Minimum of one CS course and one core math course</li>
            <li>Proficiency in an object-oriented programming language (e.g. Python/Java/C++)</li>
            <li>Ability to write tests and debug</li>
            <li> CS project outside of the classroom</li>
            <li>Ability to read and understand existing code</li>
            <li> Basic problem-solving; basic understanding of formal logic </li>
            <li>Other important topics: Documentation, version control</li>
            <li>Familiarity with using Github</li>
            <li>Understanding of algorithms, data structures and discrete structures</li>
            <li>Proficiency in one or more programming languages (Python/Java/C++)</li>
            <li> Demonstrated ability to investigate and solve problems</li>
            <li>  Ability to provide and receive code feedback </li>
            <li> Other important topics: Time and space complexity, MIPS, simulation-based projects </li>
            <li> CS projects (Examples: Independent projects, team projects in and out of class, 
hackathons, small role in a larger open source project at site like OpenHatch.org or 
GitHub)</li>
<li> Active participation in CS clubs or organizations</li>


            </ul>


                <div className="semisters">
                  <div className="sem1">
                    <h2>Semester-1</h2>
                    <p>Goal: Introduction to programming concepts</p>
                    <ul>
                      <li> Intro to Programming (C++ or Python or Java)</li>
                      <li>General education courses</li>
                      <li>Technical/Non-technical electives</li>
              
                    </ul>
                    <p>Important topics/milestones:</p>
                    <ul>
                      <li>Debugging and testing</li>
                      <li>Commenting and documentation</li>
                    </ul>

                    <p> Goal: Understanding of data structures</p>
                    <ul>
                      <li> Data Structures (C++/ Python / Java) </li>
                      <li> Discrete Structures </li>
                      <li> General education / technical electives </li>
                    </ul>

                    <p> Important topics/milestones: </p>
                    <ul>
                      <li> Collaboration on open source site </li>
                      <li> Team projects (e.g. hackathons)</li>
                    </ul>

                  </div>
                  <div className="sem2">
                  <h2>Semester-2</h2>
                  <p>Goal: Comfortable with at least one language</p>
                  <ul>
                    <li>Object-Oriented Programming (C++, Python ,Java)</li>
                    <li> General education courses </li>
                    <li> Technical/Non-technical electives </li>
                  </ul>
                   <p> Important topics/milestones: </p>
                   <ul>
                    <li> API documentation (Javadocs)</li>
                    <li> Version control (GitHub) </li>
                   </ul>
                   <p> Goal: Exposure to algorithmic complexity </p>
                   <ul>
                    <li> Algorithms (Java) </li>
                    <li> Computer Organization (Assembly) </li>
                    <li> General education / technical electives </li>
                   </ul>
                   <p> Important topics/milestones:</p>
                   <ul> 
                   <li>Time and space complexity </li>
                   <li>MIPS Simulator-based projects </li>
                   </ul>


                  </div>
                </div>

          </div>

       </div>



      {/* ste- 2  */}


     <Dsa/>


        {/* step - 3  */}

        <div className="step_1">

{/*   2nd year  roadmaps ✅✅✅✅ */}

   <div className="learn_in_fy">
   <h2>Possible areas of emphasis for freshman (2nd) year</h2>

   <ul>

           

<li>Demonstrated mastery in a programming language</li>
<li>Proficiency with algorithms and advanced data structures: lists, hash tables, trees, graphs, sorting algorithms, etc.</li>
<li>Demonstrated knowledge of algorithmic efficiency and design tradeoffs, threads and 
processes, concurrency and synchronization</li>

<li> Solid foundation in discrete mathematics</li>
<li>Internship experience in software engineering </li>
<li> Other valuable courses/topics: Linear Algebra, Computer Networking, Operating Systems, Database Systems</li>


</ul>


    <div className="semisters">
      <div className="sem1">
        <h2>Semester-3</h2>
        <p>Goal: Advanced programming concepts </p>
        <ul>
          <li>  Linear Algebra/Num Analysis (Python)</li>
          <li>Computer Networking (Java or Python)</li>
          <li>General education / technical electives</li>
  
        </ul>
        <p>Important topics/milestones:</p>
        <ul>
          <li>Advanced data structures (graphs/trees)</li>
          <li>Filesystem and networking</li>
        </ul>

        
      </div>
      <div className="sem2">
      <h2>Semester-4</h2>
      <p>Goal: Knowledge of core systems</p>
      <ul>
        <li>Operating Systems (C or Java)</li>
        <li> Database Systems (Python or JS) </li>
        <li> General education / technical electives </li>
      </ul>
       <p> Important topics/milestones: </p>
       <ul>
        <li> Threads and processes</li>
        <li> Concurrency and synchronization </li>
       </ul>
       


      </div>
    </div>


   </div>




   
{/*   3rd year  roadmaps ✅✅✅✅ */}

<div className="learn_in_fy">
   <h2>Possible areas of emphasis for freshman (3rd) year</h2>

   <ul>
<li> Demonstrated mastery in a programming language </li>
<li>Demonstrated mastery in data structures and algorithms</li>
<li>Databases: locks, concurrency, RAID, APIs</li>

<li>Other topics: Computer security, big data, machine learning</li>
<li>Software engineering industry experience/internship, that includes application of SWE and CS concepts and work on real world project(s) </li>
<li> Update resume (May want to seek a formal review, e.g. from career center)</li>
<li>  Interview prep, including advice/referrals from former interns, alums, etc </li>

</ul>


    <div className="semisters">
      <div className="sem1">
        <h2>Semester-5</h2>
         <p>Goal: Industry preparedness</p>
        <ul>
          <li>  Computer Security</li>
          <li>Software Engineering </li>
          <li>General education / technical electives</li>
  
        </ul>
        <p>Important topics/milestones:</p>
        <ul>
          <li>Technical interview prep</li>
        
        </ul>

        
      </div>
      <div className="sem2">
      <h2>Semester-6</h2>
      <p>Goal: System design experience</p>
      <ul>
        <li>Big Data or ML course </li>
        <li> Senior Capstone </li>
        <li> General education / technical electives </li>
      </ul>
       <p> Important topics/milestones: </p>
       <ul>
        <li>Important topics/milestones:</li>
       </ul>
       


      </div>
    </div>


   </div>

        
        <div className="step_1_child">
        <p className='step_1_p'>STEP-3</p>
        <p className='step_1_p2'>Get the Internship in S.Y </p>
    
          </div>

          <div className="internships">
          <h2> Check this Websites for Internship</h2>
           <div className="internships_list">
             <ul>
              <li>   <a href="https://www.glassdoor.co.in/Explore/browse-companies.htm?overall_rating_low=3&page=1&occ=Intern&filterType=RATING_OVERALL">www.glassdoor.co.in</a>
              </li>

              <li> <a href="https://in.indeed.com/Top-Companies-in-India-Internship-jobs?vjk=4d6a15e05d094bc1"> in.indeed.com</a> </li>


              <li> <a href="https://www.naukri.com/internship-jobs-in-pune"> www.naukri.com </a> </li>


              <li>   <a href="https://www.linkedin.com/jobs/information-technology-internship-jobs/?currentJobId=3394300535&originalSubdomain=in"> www.linkedin.com </a>
             </li>


              <li>  <a href="https://internshala.com/internships/internship-in-hyderabad/"> internshala.com </a> </li>

              
              <li>  Update Soon...✌️  </li>


             </ul>

            <h2> For All sites JOIN OUR FREE PLACEMENT COURSE: ✅👍😍 </h2>
           </div>




          {/* ✌️😍👍✅ STEP - 4 : PLACEMENT PROJECTS LIST   */}

          <Projects />


          </div>


          

        
       </div>



    </div>
  )
}

export default CollegetoJob;