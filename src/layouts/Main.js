import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className="flex flex-col">
            Main
            <div className='grid grid-cols-1 justify-items-center'>
                <Link to='/login' className='w-2/12 text-xl rounded-md px-4 py-2 font-semibold bg-blue-500 text-white '>Login</Link>
            </div>
        </div>
    )
}

export default Main