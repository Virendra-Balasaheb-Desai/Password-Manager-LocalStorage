import React from 'react'
import SecurityPasswordIcon from './SecurityPasswordIcon'
import GitHubIcon from './GitHubIcon'

const Navbar = () => {
    return (
        <nav className='bg-slate-500 text-white flex justify-between p-4 items-center'>
            <div className='logo flex items-center gap-2 cursor-pointer'>
                <SecurityPasswordIcon className="inline-block invert font-bold size-10 "/>
                <span className='text-xl font-bold cursor-pointer'> Password Manager  </span>
                {/* <Github/> */}
            </div> 
            <div className='git'>
                <GitHubIcon className='size-12'/>
            </div>
        </nav>
    )
}

export default Navbar
