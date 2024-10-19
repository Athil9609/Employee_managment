import React from 'react'
import Add from '../components/Add'
import Cards from '../components/Cards'
function Home() {
  return (
    <>
      <div className="container-fluid p-3 ">

      
          
          <div className='Shadow  p-3 my-3 '>


            <Add />

<div className='border-2 border-info bg-white border rounded-2 px-2 py-5 d-flex flex-wrap gap-3'>
  <Cards/>
</div>


          </div>
          
      </div>
    </>
  )
}

export default Home