import React from 'react'
import SecurityPasswordIcon from './SecurityPasswordIcon'
import GitHubIcon from './GitHubIcon'

const Navbar = () => {
    return (
        <nav className='bg-purple-500 text-white flex justify-between h-[10vh] px-4 items-center'>
            <div className='logo flex items-center gap-2 cursor-pointer'>
                <SecurityPasswordIcon className="inline-block invert font-bold size-10 " />
                <span className='text-xl font-bold cursor-pointer'> Password Manager  </span>
                {/* <Github/> */}
            </div>
            <div className='git'>
                <a href="http://github.com/Virendra-Balasaheb-Desai/Password-Manager-LocalStorage" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className='size-12' />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
