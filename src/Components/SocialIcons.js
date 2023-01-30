import React from 'react'
import {faTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { SocialStyles } from './styles/SocialIcons.styles'

const SocialIcons = () => {
  return (
    <SocialStyles>
    <li>
    <a href='https://twitter.com'>
    <faTwitter />
    </a>
    </li>
    <li>
    <a href='https://facebook.com'>
    <FaFacebook />
    </a>
    </li>
    <li>
    <a href='https://linkedin.com'>
    <FaLinkedin />
    </a>
    </li>
    </SocialStyles>
  )
}

export default SocialIcons