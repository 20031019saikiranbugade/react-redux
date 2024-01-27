import React from 'react'
import { useDispatch } from 'react-redux';
import { actionsCreators } from '../states/index';

function Home() {
  const dispatch=useDispatch()
  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-5'>
            <button className='btn btn-primary' onClick={()=>{dispatch(actionsCreators.addValue(50))}}>+</button>
            <span className='p-4'>Add To Cart</span>
            <button className='btn btn-secondary'  onClick={()=>{dispatch(actionsCreators.subValue(50))}}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home