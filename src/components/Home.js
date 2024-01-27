import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addValue, subValue ,getValueStoreAPI} from '../states/Actions/AmountActions';

function Home() {
  const data = useSelector(state => state.valueStore);

  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-5'>
            <button className='btn btn-primary' onClick={() => { dispatch(addValue()) }}>+</button>
            <span className='p-4'>Add To Cart</span>
            <button className='btn btn-secondary' onClick={() => { dispatch(subValue()) }} >-</button>

            {/* <button className='btn btn-info ' onClick={() => { dispatch(getValueStoreAPI()) }} >get data</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home