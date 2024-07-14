import { Link } from "react-router-dom";
import './HeroAllMentors.css'
export default function HeroAllMentors(){
    return(    
           <>
       
       <div className='ne-hero-cours'>
            <div className='ne-home-cours'>
                <div className='ne-herodiv1'>
                <Link to ='/'> Hero</Link> 
                    </div>
                <div className='ne-herodiv2' >
                <Link to ='/AllMentors'>OurMentors  </Link>           
                    </div>
            </div>
            <div className='ne-parent-img-p'>
                <p className='ne-eduvi-courses'>Eduvi has the qualified mentor</p>
                <div className='ne-div-img'>
                    
                    <img src='public/images/AllMentorimg/allmentorhero.svg' alt='error1' className='ne-imglap'></img>
                </div>
            </div>
        </div>

        </>
    )
   
}