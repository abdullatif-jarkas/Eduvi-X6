import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CardsComponent.css';

const lessons = [
  { id: 1, img: "public/images/CoursesImg/1.svg", title: "Standard One", description: "Standard 1 is a foundation Standard that reflects 7 important concepts...", buttonText: "Class Details", alt: "photo1" },
  { id: 2, img: "public/images/CoursesImg/2.svg", title: "Standard Two", description: "Standard 2 builds on the foundations of Standard 1 and includes requirements...", buttonText: "Class Details", alt: "photo2" },
  { id: 3, img: "public/images/CoursesImg/3.svg", title: "Standard Three", description: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...", buttonText: "Class Details", alt: "photo3" },
  { id: 4, img: "public/images/CoursesImg/4.svg", title: "Standard Four", description: "Standard 4 of the Aged Care Quality Standards focuses on services and supports...", buttonText: "Class Details", alt: "photo4" },
  { id: 5, img: "public/images/CoursesImg/5.svg", title: "Standard Five", description: "Standard 5 Learning Resources. Learning Resources ensure that the school has the...", buttonText: "Class Details", alt: "photo5" },
  { id: 6, img: "public/images/CoursesImg/6.svg", title: "Standard Six", description: "Standard 6 requires an organisation to have a system to resolve complaints...", buttonText: "Class Details", alt: "photo6" },
  { id: 7, img: "public/images/CoursesImg/7.svg", title: "Standard Seven", description: "Standard 7 Blood Management mandates that leaders of health service organisations...", buttonText: "Class Details", alt: "photo7" },
  { id: 8, img: "public/images/CoursesImg/8.svg", title: "Standard Eight", description: "Standard 8 Course from NCERT Solutions help students to understand...", buttonText: "Class Details", alt: "photo8" },
];

const CardsComponent = () => {
  return (
    <Container className="my-5 MB-container-cardhomepage">
      <h1 className="text-center mb-4 header-title MB-Cardhomepage-title">Qualified lessons for students</h1>
      <p className="text-center mb-5 header-subtitle">
        A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.
      </p>
     <div className="MB-Tabs">
      <button> Kindergarten</button>
      <button className='MB-active-tab'> High School</button>
      <button>College</button>
      </div>
      
      
      
      <Row>
        {lessons.map(lesson => (
          <Col key={lesson.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 text-center custom-card">
              <Card.Body>
                <Card.Img variant="top" src={lesson.img} alt={lesson.alt} className="mx-auto" />
                <Card.Title className="mt-3 MB-Titlecard">{lesson.title}</Card.Title>
                <Card.Text className="mb-4">{lesson.description}</Card.Text>
                <Button variant="outline-primary" className="custom-class-details-button"> {lesson.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button  variant="primary" className="custom-visit-button"> <Link to ='./Courses'>Visit More Classes</Link></Button>
      </div>
    </Container>
  );
};

export default CardsComponent;
