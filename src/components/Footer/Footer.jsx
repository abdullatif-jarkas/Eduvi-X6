import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footerContainer">
            <footer>
                <div className="aboutLogo">
                    <img className="fLogo" src="/public/images/Navbar/Logo.svg" alt="eduviLogo" />
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/public/images/Footer/facebooh.svg" alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/public/images/Footer/instagram.svg" alt="Instagram" /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="/public/images/Footer/twetter.svg" alt="Twitter" /></a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/public/images/Footer/LinkedIn Icon.svg" alt="LinkedIn" /></a></li>
                    </ul>
                    <p className="fTitleLogo">©<span className="linksP">2021 Eduvi.co</span></p>
                    <p className="linksP">Eduvi is a registered trademark of Eduvi.co</p>
                </div>

                <div className="fCourses">
                    <ul>
                        <li className="fTitle">Courses</li>
                        <li><Link to="/classroom-courses" className="linksP">Classroom courses</Link></li>
                        <li><Link to="/virtual-classroom-courses" className="linksP">Virtual classroom courses</Link></li>
                        <li><Link to="/e-learning-courses" className="linksP">E-learning courses</Link></li>
                        <li><Link to="/video-courses" className="linksP">Video Courses</Link></li>
                        <li><Link to="/offline-courses" className="linksP">Offline Courses</Link></li>
                    </ul>
                </div>

                <div className="fCommunity">
                    <ul>
                        <li className="fTitle">Community</li>
                        <li><Link to="/learners" className="linksP">Learners</Link></li>
                        <li><Link to="/partners" className="linksP">Partners</Link></li>
                        <li><Link to="/developers" className="linksP">Developers</Link></li>
                        <li><Link to="/transactions" className="linksP">Transactions</Link></li>
                        <li><Link to="/blog" className="linksP">Blog</Link></li>
                        <li><Link to="/teaching-center" className="linksP">Teaching Center</Link></li>
                    </ul>
                </div>

                <div className="fQuickLinks">
                    <ul>
                        <li className="fTitle">Quick links</li>
                        <li><Link to="/" className="linksP">Home</Link></li>
                        <li><Link to="/professional-education" className="linksP">Professional Education</Link></li>
                        <li><Link to="/courses" className="linksP">Courses</Link></li>
                        <li><Link to="/admissions" className="linksP">Admissions</Link></li>
                        <li><Link to="/testimonial" className="linksP">Testimonial</Link></li>
                        <li><Link to="/programs" className="linksP">Programs</Link></li>
                    </ul>
                </div>

                <div className="fMore">
                    <ul>
                        <li className="fTitle">More</li>
                        <li><Link to="/press" className="linksP">Press</Link></li>
                        <li><Link to="/investors" className="linksP">Investors</Link></li>
                        <li><Link to="/terms" className="linksP">Terms</Link></li>
                        <li><Link to="/privacy" className="linksP">Privacy</Link></li>
                        <li><Link to="/help" className="linksP">Help</Link></li>
                        <li><Link to="/contact" className="linksP">Contact</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};