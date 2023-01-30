import React from 'react'
import { Flex } from './styles/Flex.styles';
import { Container } from './styles/Container.styles';
import { StylesFooter } from './styles/Footer.styles';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <StylesFooter>
    
    <Container>
    <img src='../images/logo.svg' alt='' />
    
    <Flex>
    <ul>
    <li>lorem random words</li>
    <li>+1234567890</li>
    <li>example@gmail.com</li>
    </ul>
    <ul>
    <li>About us</li>
    <li>What we do</li>
    <li>FAQ</li>
    </ul>
    <ul>
    <li>Career</li>
    <li>Blog</li>
    <li>Contact</li>
    </ul>

    <SocialIcons />
    </Flex>

    <p>&copy; 2022 Huddle. All right reserved.</p>
    </Container>
    
    </StylesFooter>
  )
}

export default Footer