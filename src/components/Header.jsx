import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<>
<Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-primary' href="#home">
          <i className="fa-solid fa-users-gear"  />
            {' '}
            Employee Managment
          </Navbar.Brand>
        </Container>
      </Navbar>
</>  )
}

export default Header