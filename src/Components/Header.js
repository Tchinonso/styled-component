import React from 'react'
import { StyleHeader, Nav, Logo, Image } from './styles/Header.styles'
import { Container } from './styles/Container.styles'
import { Button } from './styles/Button.styles'
import { Flex } from './styles/Flex.styles'

const Header = () => {
  return (
    <StyleHeader>
    <Container>
    <Nav>
    <Logo src='../images/logo.svg' alt='' />
    <Button>Try it free</Button>
    </Nav>

    <Flex>
      <div>
        <h1>Build  a community your fans will love</h1>
        <p>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
        Create connections with your users as you engage in genuine discussions.
        </p>
        <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
      </div>
      <Image src='../images/illustration-mockups.svg' alt='' />
    </Flex>
    </Container>
    </StyleHeader>
  )
}

export default Header