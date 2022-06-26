import React from 'react'
import { Link } from 'react-router-dom'

function DashboardAdmin() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-2 gap-x-20 gap-y-20">
                <Link to="/companies">
                    <div className='bg-blue-500 rounded p-20 text-white text-2xl font-semibold text-center hover:scale-105 transition-transform transform duration-400 ease-in-out shadow-md'>Company List</div></Link>
                <Link to="/job_posts">
                    <div className='bg-blue-500 rounded p-20 text-white text-2xl font-semibold text-center hover:scale-105 transition-transform transform duration-400 ease-in-out shadow-md'>Job Posts</div>
                </Link>
                <Link to="/applications">
                    <div className='bg-blue-500 rounded p-20 text-white text-2xl font-semibold text-center hover:scale-105 transition-transform transform duration-400 ease-in-out shadow-md'>CV</div>
                </Link>
                <Link to="/applications">
                    <div className='bg-blue-500 rounded p-20 text-white text-2xl font-semibold text-center hover:scale-105 transition-transform transform duration-400 ease-in-out shadow-md'>Applications</div>
                </Link>

            </div>
        </div>
    )
}

export default DashboardAdmin