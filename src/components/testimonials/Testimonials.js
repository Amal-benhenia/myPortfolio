import "./testimonials.css"
import AVATAR from '../../assets/avatar.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from my supervisor</h5>
    <h2>Testimonial</h2>
    <div className="container testimonials_container">
    <article className="testimonial">
    <div className="supervisor_avatar">
    <img src={AVATAR} alt="avatarWoman"/>
    </div>
    <h5 className="supervisor_name">Rihab Dridi</h5>
    <small className="supervisor_job">Instructor at GO MY CODE</small>
    <br></br>
    <a className="supervisor_email">rihab.dridi.js@gmail.com</a>
    <small className="supervisor_review">I had the pleasure of supervising Amal Ben Henia for five months of her Journey to learn Full stack JS web development at GoMyCode. I was impressed by her self-learning skills and her problem-solving mindset. 
    Amal is not only interested in different fields like astrophysics and web development but she was also capable of managing her time learning the MERN stack and training with the royal observatory of Belgium at the same time with magnificent results in both. 
    Finally I'd like to mention what a respectful and polite person to work with she is and I'm proud to have had her as a student.
   </small>
    </article>
    </div>
    </section>
  )
}

export default Testimonials