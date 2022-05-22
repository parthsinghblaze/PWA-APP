import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <div className="container">
                <nav className='d-flex gap-5'>
                    <span><Link to="/">Home</Link></span>
                    <span> <Link to="/user">Users</Link> </span>
                    <span>  <Link to="/contact">Contact</Link> </span>
                </nav>
            </div>
        </header>
    )
}

export default Nav