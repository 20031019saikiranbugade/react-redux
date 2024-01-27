import React from 'react'

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-5'>
            <button className='btn btn-primary'>+</button>
            <span className='p-4'>Add To Cart</span>
            <button className='btn btn-secondary' >-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home