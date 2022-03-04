import "./about.css"
import Me from '../../assets/aboutMe.jpg';
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know Me</h5>
    <h2>About Me</h2>
    <div className="container about_container">
    <div className="about_me">
    <div className="about_me_img">
    <img src={Me} alt='About Image'/>
    </div>
    </div>
    <div className="about_content">
    <div className="about_cards">
    <article className="about_card">
    <FaAward className="about_icon"/>
    <h5>Experience</h5>
    </article>
    <article className="about_card">
    <VscFolderLibrary className="about_icon"/>
    <h5>Projects</h5>
    <small>1 MERN Stack Project completed</small>
    </article>
    </div>
    <p>
    Hello World! I am Amal Ben Henia, a Full Stack Web Developer based in Tunisia. From sketching and refining new ideas, to writing lines of codes on a web page, I love combining the two worlds of logic and creativity to make an eye-catching, accessible and user-friendly websites.
    I enjoy taking complex problems and turning them into simple and beautiful interface design. I always strive to write elegant and efficient code whether it be HTML, CSS or JavaScript and I love seeing the results of my efforts helping the user's experience.
   </p>
   <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About