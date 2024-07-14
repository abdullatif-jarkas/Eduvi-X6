import './Section1.css'
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Section1(){
    return(
        <>
         <section className="MB-Section1-Container">
            <h1 className='MB-h1-Section1'>High quality video, audio &live classes</h1>
            <p className='MB-Paragraph1-Section1'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than
        480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
        <button className='MB-btn-Section1'><Link to ='./Courses'> Visit Courses</Link></button>
        <div className="MB-img-Section1">
            <Image className='MB-mg-section1-homepage' src='./images/Homepage/ClassesSection/Video call.svg' fluid/>
        </div>
        <div className="MB-Cards-Section1">
            <div className="MB-Card1">
                <img className='MB-icon' src='./images/Homepage/ClassesSection/speaker.svg'/>
                <p className='MB-title-Card'>Audio Classes</p>
            </div>
            <div className="MB-Card1">
                <img className='MB-icon' src='./images/Homepage/ClassesSection/live.svg'/>
                <p className='MB-title-Card'>Live Classes</p>
            </div>
            <div className="MB-Card1">
                <img className='MB-icon' src='./images/Homepage/ClassesSection/recorded.svg'/>
                <p className='MB-title-Card'>Recorded Classes</p>
            </div>
        </div>
         </section>
        </>
    )
}