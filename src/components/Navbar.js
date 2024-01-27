import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const value = useSelector(state => state.value)
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <div className='d-flex'>
                        <span className='text-success' style={{ fontWeight: "bold", fontSize: 25 }}>
                            Amount:0
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar