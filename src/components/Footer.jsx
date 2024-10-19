import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <Row className='p-5 pb-3 m-0 bg-dark'>
        <Col><h2 className='text-primary' style={{fontWeight:'900'}}>Employee Managment 2024&copy;</h2>
        <p  style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates saepe quaerat deserunt optio fugiat at sunt. Vel provident, facere magni dolorem itaque sunt. Eaque illo tempore ad iste porro!</p>
        </Col>
        <Col>
        <h2 className='text-primary'>Links</h2>
        <div className='d-flex flex-column'>
            <Link className='text-primary' to={'/'}>Landing</Link>
            <Link className='text-primary' to={'/auth'}>Login</Link>
            <Link className='text-primary' to={'/home'}>Home</Link>
        </div>
        </Col>
        <Col>
        <h2 className='text-primary'>Feedback</h2>
        <textarea name="" className='form-control mt-3' id=""></textarea>
        <button className='btn btn-outline-primary mt-3'>Submit</button>
        </Col>
    </Row>
    </>
  )
}

export default Footer