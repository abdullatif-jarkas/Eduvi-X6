import { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseList.css";
import { lessons } from "./lessonsData";

export const CourseList = () => {
  const [hoveredLessonIndex, setHoveredLessonIndex] = useState(null);
  const [selectedLessonTitle, setSelectedLessonTitle] = useState("");

  const handleLessonClick = (index, title) => {
    setHoveredLessonIndex(hoveredLessonIndex == index ? null : index);
    setSelectedLessonTitle(title);
  };

  return (
    <div className="recordedCourse">
      <div className="videoImg">
        <div className="links">
          <ul className="linksToHome">
            <li>
              <Link to="/">Home</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <span>|</span>
            <li>Course Details</li>
          </ul>
        </div>
        <div className="heroImage">
          <img src="/images/CoursesDetalis/hero.png" alt="mathLesson" />
        </div>
        <h3>
          {selectedLessonTitle}
        </h3>
      </div>
      <div className="playList">
        <p className="CoursePlaylists">Course Playlists</p>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`lesson ${lesson.locked ? "locked" : ""}`}
            onClick={() => handleLessonClick(index, lesson.title)}
            onMouseEnter={() => setHoveredLessonIndex(index)}
            onMouseLeave={() => setHoveredLessonIndex(null)}
          >
            <div
              className={`lesson-content ${index >= 2 && lesson.locked ? "relative" : ""
                }`}
            >
              <img
                src={lesson.image}
                alt={lesson.title}
                className={index == 2 ? "third-lesson-img" : ""}
              />
              {lesson.locked && index >= 2 && (
                <div className="lockIcon">
                  <img
                    src="/public/images/CoursesDetalis/lock.png"
                    alt="lock"
                  />
                </div>
              )}
            </div>
            <div className="lessonInf">
              <p className="lessonTitle">
                {hoveredLessonIndex == index
                  ? lesson.title
                  : "Maths - for Standard 3 St.."}
              </p>
              <p>{lesson.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
