import './Section1.css'
import { Link } from "react-router-dom";
export default function Section1(){
    return<>
    <section className='MB-Section1'>
        <div className="MB-Container-Section1">
            <div className="MB-Text-Section1">
           <h1 className='MB-Heading-Section1'>Course Detalis</h1>
           <p className='MB-Paragraph1-section1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
            maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
             labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
             maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
             <h1 className='MB-Heading-Section1'>Certification</h1>
             <p className='MB-Paragraph2-section1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                 viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                 <h1 className='MB-Heading-Section1'>Who this course is for</h1>
                 <p className='MB-Paragraph2-section1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                     Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                     <h1 className='MB-Heading-Section1'>What you'll learn in this course:</h1>
                     <div className="MB-Learn">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                     </div>
                     <div className="MB-Learn">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="MB-Learn">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                     </div>
                     <div className="MB-Learn">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>
                     <div className="MB-Learn">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                     </div>


                     <div className="MB-Learn2">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur</p>

                     </div>
                     <div className="MB-Learn2">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                     <div className="MB-Learn2">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur</p>

                     </div>
                     <div className="MB-Learn2">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                     <div className="MB-Learn2">
                     <img src='./images/CoursesDetalis/Icon/red circle-icon.svg'/>
                     <p className='p'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>


             </div>
             
            
            <div className="MB-Container-card-section1">
             <div className="MB-Card-course">
                
                    <div className="MB-detalis">
                        <div className="MB-Information">
                           <p className='MB-Head-Card'>Price </p>
                           <p className='MB-Info-price'>$49.00</p >
                          </div>
                          <div className="MB-Information">
                             <p className='MB-Head-Card'>Instructor</p>
                             <p className='MB-Info-Instructor '>Wade Warren</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Ratings</p>
                          <img className='MB-icon-stars' src='./images/CoursesDetalis/Icon/stars.svg'/>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Durations</p>
                          <p className='MB-duration-info'>10 Days</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Lessons</p>
                          <p className='MB-Lessons-info' >30</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Quizzes</p>
                          <p  className='MB-Quizze-info' >5</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Certificate</p>
                          <p className='MB-Certifica-info' >Yes</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card'>Language</p>
                          <p className='MB-language-info' >English</p>
                          </div>
                          <div className="MB-Information"> <p className='MB-Head-Card' >Access</p>
                          <p className='MB-Access-info'>Lifetime</p>
                          </div>
                   
                    </div>
                    
                    
                </div>
                <button className='MB-btn-purchase'><Link to="/CoursesPricing">Purchase Course </Link></button>
                

                </div>
               
                
                
                </div>
                
            



               
             
        

    </section>
    </>
}