import './Hero.css'
export default function Hero(){
    return(
    <section className='ne-hero-ssection'>
        <div className='ne-hero-left'>
            <div className='never-stop-learning'>
                <p>Never Stop Learning</p>
            </div>
            <p className='ne-grow-up'>Grow up your skills by online courses with Eduvi

            </p>
            <p className='ne-lorem'>
                Eduvi is a Global training provider based accross the UK that specialises in accredited and bespoke training courses .We crush the barriers to getting adegree  
            </p>
            <div className='ne-left-search'>
                <div className='ne-parent'>
                <input list='courses' placeholder='kinder garden'/><img src="public/images/Homepage/Hero/down.svg" alt="" />
                <datalist id='courses' >
                    <option value='Kindergarden'></option>
                    <option value='school'></option>
                    
                </datalist>
                
                <div className='ne-class-course'>Class/Course</div>
                </div>
               <button className='ne-but-search'> <img src="public/images/Homepage/Hero/search-hero.svg" alt="" />  Search</button>
            </div>
        </div>
        <img src='./images/Homepage/Hero/Image.svg'className='ne-hero-right-img'></img>

    </section>
    )
}