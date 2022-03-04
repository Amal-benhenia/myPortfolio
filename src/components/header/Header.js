import "./header.css"
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
    <div classname='container header_container'>
    <h5>Hello I'm</h5>
    <h1>Amal Ben Henia</h1>
    <h5 className="text-light" >FullStack Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me" >
    <img src={me} alt="" className="me"/>
    </div>
    <a href="#contact" className="scroll_down" >Scroll Down</a>
    </div>
    </header>
    
  )
}

export default Header