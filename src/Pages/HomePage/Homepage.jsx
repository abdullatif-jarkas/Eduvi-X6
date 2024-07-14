import Section1 from './Section1/Section1'
import Section4 from './Section4/Section4'
import Hero from './Hero/Hero'
import Section3 from'./Section3/Section3'
import CardsComponent from '../../components/CardsComponent/CardsComponent'

export default function HomePage(){
    return(
        <>
        <Hero/>
        <Section1/>
        <CardsComponent/>
        <Section3/>
        <Section4/>
        </>
    )
}