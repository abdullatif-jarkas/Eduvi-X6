import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Homepage';
import Courses from './Pages/Courses/Courses';
import CoursesDetalis from './Pages/CoursesDetalis/CoursesDetalis';
import CoursesPricing from './Pages/CoursesPricing/CoursesPricing';
import AllMentors from './Pages/AllMentors/AllMentors';
import SingleMentorDetalis from './Pages/SingleMentorDetalis/SingleMentorDetalis';
import { NavbarComponent } from './components/NavbarComponent/NavbarComponent';
import { Footer } from './components/Footer/Footer';
import Cardpage2 from './Pages/AllMentors/Cardpage2/Cardpage2';
import Cardpage3 from './Pages/AllMentors/Cardpage3/Cardpage3';
import Section1cards from './Pages/AllMentors/Section1cards/Section1cards';


function App() {

  
  return (
    <>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/CoursesDetalis' element={<CoursesDetalis />} />
          <Route path='/CoursesPricing' element={<CoursesPricing />} />
          <Route path='/AllMentors' element={<AllMentors />} />
          <Route path='/SingleMentorDetalis' element={<SingleMentorDetalis />} />
          <Route path='/Cardpage2' element={<Cardpage2 />} />
          <Route path='/Cardpage3' element={<Cardpage3/>} />
          <Route path='/Section1cards' element={<Section1cards/>} />
        </Routes>
        <Footer />

    </>
   
  )
}

export default App
