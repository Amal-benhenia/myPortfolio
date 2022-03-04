import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials' >
    <a href="https://github.com/Amal-benhenia" target="_blank"><BsGithub/></a>
    <a href="https://www.facebook.com/amal.benhenia.39/" target="_blank"><BsFacebook/></a>
    <a href="https://twitter.com/henia_amal" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials