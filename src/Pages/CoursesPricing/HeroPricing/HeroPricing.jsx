import { Link } from "react-router-dom";
import './HeroPricing.css'
export default function HeroPricing(){
    return(       <>
       
       <div className='ne-hero-cours'>
            <div className='ne-home-cours'>
                <div className='ne-herodiv1'>
                <Link to ='/'> Hero</Link>
                    </div>
                <div className='ne-herodiv2' >
                <Link to ='/CoursesPricing'>  pricing </Link>  
                    </div>
            </div>
            <div className='ne-parent-img-p'>
                <p className='ne-eduvi-courses'>Our Pre-ready Pricing Packages</p>
                <div className='ne-div-img'>
                    
                    <img src='public/images/CoursesPricing/Hero/page coursess pricing-hero img.png' alt='errore' className='ne-imglap'></img>
                </div>
            </div>
        </div>
       
        </>
    )
   
}