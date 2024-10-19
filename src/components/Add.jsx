import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addEmployee } from '../services/allApis';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Employee,SetEmployee]=useState({
      firstname:"",lastname:"",qualification:"",age:"",email:""
    })

    const handleAdd=async()=>{
      const{firstname,lastname,qualification,age,email}=Employee
      if(! firstname || ! lastname || ! qualification || !age || !email){
        toast.warn("Enter valid inputs")
      }
      else{
        const res= await addEmployee(Employee)
        console.log(Employee)
        if(res.status==200){
          toast.success("Employee Added succesfully")
          SetEmployee({
            firstname:"",lastname:"",qualification:"",age:"",email:""
          })
          handleClose()
        }
        else{
          toast.error("adding failed")
        }
       
      }
      useEffect(()=>{},[handleAdd])

    }
  return (
    <>
    <button className='btn btn-outline-info mb-3' onClick={handleShow}>Add Employee +</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-white rounded' closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-white'>
         
            <input type="text" onChange={(e)=>{SetEmployee({...Employee,firstname:e.target.value})}} placeholder='Firstname' className='mb-3 form-control' />
            <input type="text" onChange={(e)=>{SetEmployee({...Employee,lastname:e.target.value})}} placeholder='Lastname' className='mb-3 form-control' />
            <input type="text" onChange={(e)=>{SetEmployee({...Employee,qualification:e.target.value})}} placeholder='Qualification' className='mb-3 form-control' />
            <input type="text" onChange={(e)=>{SetEmployee({...Employee,age:e.target.value})}} placeholder='Age' className='mb-3 form-control' />
            <input type="text" onChange={(e)=>{SetEmployee({...Employee,email:e.target.value})}} placeholder='Email' className='mb-3 form-control' />
           
        </Modal.Body>
        <Modal.Footer className='bg-white rounded'>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add