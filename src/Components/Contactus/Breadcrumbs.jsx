import React from 'react'
import { useNavigate } from 'react-router-dom'
function Breadcrumbs() {
    const navigate = useNavigate()
    return (

        <div className='max-w-screen mx-auto p-4 bg-blue-50'>
            <div className="breadcrumbs text-sm">
                <ul className=''>
                    <li onClick={()=>{navigate('/')}}><a>Home</a></li>
                    <li><a>Contact Us</a></li>
                    {/* <li>Add Document</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumbs
