import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row,Col } from 'react-bootstrap';
import { updateEmployee } from '../services/allApis';
import { toast } from 'react-toastify';


function Edit({data}) {
    const [show, setShow] = useState(false);

    const[Edit,setEdit]=useState(data)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate=async()=>{
      const res=await updateEmployee(Edit._id,Edit)
      console.log(res)
      if(res.status==200){
        toast.success("Employee updated!")
        handleClose()
      }
    }
    return(
    <>
     <button className='btn px-0' onClick={handleShow}><i className="fa-regular fa-pen-to-square fa-lg" style={{color: "#FFD43B",}} /></button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-white rounded' closeButton>
          <Modal.Title>Add project</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-white'>
        
            <input type="text" value={Edit?.firstname} onChange={(e)=>{setEdit({...Edit,firstname:e.target.value})}} placeholder='Firstname' className='mb-3 form-control' />
            <input type="text" value={Edit?.lastname} onChange={(e)=>{setEdit({...Edit,lastname:e.target.value})}} placeholder='Lastname' className='mb-3 form-control' />
            <input type="text" value={Edit?.qualification} onChange={(e)=>{setEdit({...Edit,qualification:e.target.value})}} placeholder='Qualification' className='mb-3 form-control' />
            <input type="text" value={Edit?.age} onChange={(e)=>{setEdit({...Edit,age:e.target.value})}} placeholder='Age' className='mb-3 form-control' />
            <input type="text" value={Edit?.email} onChange={(e)=>{setEdit({...Edit,email:e.target.value})}} placeholder='Email' className='mb-3 form-control' />
          
        </Modal.Body>
        <Modal.Footer className='bg-white rounded'>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={handleUpdate}>Upload</Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Edit