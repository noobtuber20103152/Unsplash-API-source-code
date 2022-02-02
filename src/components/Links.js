import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Links(props) {
    return (
        <>
            <div className={`container-fluid mx-0 bg-${props.Mode}`}>
                <ul style={{ listStyle: 'none' }} className="flex-wrap d-flex align-items-center my-0 mx-0 ">
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/'>Home</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/nature'>Nature</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/water'>Water</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/animal'>Animal</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/lifestyle'>Lifestyle</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/crowd'>Crowd</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/ice'>Ice</Link></li>
                    <li className='mx-2'><Link style={{ textDecoration: 'none'}} className={`text-${props.Mode === 'dark' ? 'light' : 'dark'}`} to='/football'>Football</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Links
