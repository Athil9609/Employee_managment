import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { deleteEmployee, getEmployee } from '../services/allApis';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Cards() {

  const[employee,setEmployee]=useState()
  
  const getdata=async()=>{
    const res=await getEmployee()
    if(res.status==200){
      setEmployee(res.data)
    }
    else{console.log(res)}
  }
  const deleteEmp=async(id)=>{
   const del= await deleteEmployee(id)
   if(del.status==200){
    getdata()
    toast.success("Employee deleted!")
   }
  }

  useEffect(()=>{
    getdata()
  },[employee])

  return (<>{
    employee?.length>0 ?
    

    employee.map(item=>(
    

        <Card style={{ width: '18rem' }}>
        <div className='text-center py-5 bg-dark rounded-top'>
                  <i className="fa-solid fa-user text-primary" style={{fontSize:"5rem"}} />
            
        </div>      <Card.Body>
                <Card.Title>{item.firstname}{item.lastname}</Card.Title>
                <Card.Text>
                 <div className='d-flex flex-column'>
                      <span>Qualification:{item.qualification}</span>
                      <span>Age:{item.age}</span>
                      <span>Email:{item.email}</span>
                 </div>
                </Card.Text>
        <div className='d-flex justify-content-between'>
                    <Edit data={item}/>
                    <Button variant="btn"onClick={()=>{deleteEmp(item._id)}}><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
            
        </div>      </Card.Body>
            </Card>
              


    ))
  
   
        :
        <h1>No Employees Available</h1>

    
  }
   
    </>
  );
}

export default Cards;