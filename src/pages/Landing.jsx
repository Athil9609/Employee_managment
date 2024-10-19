import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
     <div
                className="container-fluid   justify-content-center align-items-center d-flex"
                style={{ height: "100vh" ,backgroundColor:"#CFE7F9"}}
            >
                <Row>
                    <Col md={6} sm={12} className="p-4">
                        <h2 className="mt-5 text-primary">Employee Managment</h2>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos sapiente, voluptates vel accusamus eum commodi ipsam
                            sunt officia non rerum voluptatibus quidem fuga, iste veritatis,
                            cum aperiam eius blanditiis numquam.
                        </p>
                        <div className="d-grid">
                            <Link to={"/home"} className="btn btn-primary">
                                Start to Explore..
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <img
                            src="https://www.aihr.com/wp-content/uploads/hrm-basics-cover.png"
                            alt=""
                            className="img-fluid"
                        />
                    </Col>
                </Row>
                </div>
    </>
  )
}

export default Landing