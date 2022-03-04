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
    <small className="supervisor_review">As Amal's supervisor during the coding bootcamp she has attended, I can say that I got to know Amal personally.
    She is driven and passionate about what she does. She has a love of learning and a natural curiosity. Besides She has excellent communication skills which makes her a great teammate to work with.
    By the end of the bootcamp she was able to demonstrate a large set of skills that are indispensable for any web developer.
    </small>
    </article>
    </div>
    </section>
  )
}

export default Testimonials