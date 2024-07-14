import  { useState } from 'react'
import { Link } from "react-router-dom";
import './Cardpage3.css';
import '../HeroAllMentors/HeroAllMentors'
import HeroAllMentors from '../HeroAllMentors/HeroAllMentors';
export default function Cardpage3(){
   const [showDropdown, setShowDropdown] = useState(false);
   const [rotateImage, setRotateImage] = useState(false);
   const [showDropdown2, setShowDropdown2] = useState(false);
   const [rotateImage2, setRotateImage2] = useState(false);
   const [showDropdown3, setShowDropdown3] = useState(false);
   const [rotateImage3, setRotateImage3] = useState(false);

  

   
   const toggleDropdown = () => {

      
      setShowDropdown(!showDropdown);
      setRotateImage(!rotateImage);
     
     
   
   }
   const toggleDropdown2 = () => {
      setShowDropdown2(!showDropdown2);
      setRotateImage2(!rotateImage2);
     
     
   
   }
   const toggleDropdown3 = () => {
      setShowDropdown3(!showDropdown3);
      setRotateImage3(!rotateImage3);
     
     
   
   }
    return<>
    <HeroAllMentors/>
    <div className="MB-Taps-allmentors">
   <button>All Mentors</button>
   <button>For Kindergarten</button>
   <button className='MB-active'>For high school</button>
   <button>For college</button>
   <button>For Technology</button>
</div>
         <div className="MB-container-Cards">

            <div className="MB-card1">
               <Link to ='/SingleMentorDetalis'><img className='MB-profile' src="./images/AllMentorimg/Profiles/Image.png" alt="photo" /> </Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Kristin Watson</p>
                     <img onClick={() => toggleDropdown()}
        style={{ transform: rotateImage ? "rotate(180deg)" : "rotate(0deg)" }} className='MB-Accordion-icon' src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                     {showDropdown && (
                        
        <div className='MB-Hidden'>
           <p className='MB-name-red'>Kristin Watson</p>
           <p className='MB-Jobtitle' >Founder & Mentor</p>
                  <span><img src='./images/AllMentorimg/star-icon.svg' /> <span className='MB-Number'> 4.9</span> ( <span className='MBred-number'>135</span> )</span>
        </div>
        
      )}
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
               
            </div>


            <div className="MB-card1">
              <Link to ='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(1).png" alt="photo" /> </Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Brooklyn Simmons</p>
                     <img className='MB-Accordion2-icon' onClick={() => toggleDropdown2()}  style={{ transform: rotateImage2 ? "rotate(180deg)" : "rotate(0deg)" }} src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                     {showDropdown2 && (
                     <div className='MB-Hidden2'>
           <p className='MB-name-red'> Brooklyn Simmons</p>
           <p className='MB-Jobtitle' >Founder & Mentor</p>
                  <span><img src='./images/AllMentorimg/star-icon.svg' /> <span className='MB-Number'> 3.5</span> ( <span className='MBred-number'>135</span> )</span>
        </div>
         )}
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'>  <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(2).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Robert Fox</p>
                     <img className='MB-Accordion3-icon' onClick={() => toggleDropdown3()}  style={{ transform: rotateImage3 ? "rotate(180deg)" : "rotate(0deg)" }} src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                     {showDropdown3 && (
                     <div className='MB-Hidden3'>
           <p className='MB-name-red'>Robert Fox </p>
           <p className='MB-Jobtitle' >Founder & Mentor</p>
                  <span><img src='./images/AllMentorimg/star-icon.svg' /> <span className='MB-Number'> 3.5</span> ( <span className='MBred-number'>135</span> )</span>
        </div>
         )}
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1 card-hidden">
            <Link to ='/SingleMentorDetalis'>  <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(3).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Wade Warren</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>

            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'><img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(4).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Bessie Cooper</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(5).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Ronald Richards</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(6).png" alt="photo" /></Link>

             
                  <div className="MB-title">
                     <p className='MB-name'>Guy Hawkins</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
                  <p className='MB-Jobtitle' >Founder & Mentor</p>
                  
               </div>
           
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'>  <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(7).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Floyd Miles</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>


            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(8).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Theresa Webb </p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(9).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Cody Fisher</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'><img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(10).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Courtney Henry</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>
            </div>
            <div className="MB-card1">
            <Link to='/SingleMentorDetalis'> <img className='MB-profile' src="./images/AllMentorimg/Profiles/Image(11).png" alt="photo" /></Link>
               <div className="MB-dropdown">
                  <div className="MB-title">
                     <p className='MB-name'>Jerome Bell</p>
                     <img src='./images/AllMentorimg/Icon/Outline.svg' alt='photo' />
                  </div>
               </div>
               <p className='MB-Jobtitle' >Founder & Mentor</p>

               
            </div>

         </div>
<div className="MB-Slider">

<a href='./Cardpage2'> <img src='./images/AllMentorimg/Icon/previous.svg' /> </a><span className='MB-numpage'> Page  <span className='MB-numwithe'> 3 </span>   Of   3 </span><img src='./images/AllMentorimg/Icon/Next.svg' />

</div>

    </>
}