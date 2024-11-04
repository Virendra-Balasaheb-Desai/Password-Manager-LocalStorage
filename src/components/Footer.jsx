import React from 'react'
import GitHubIcon from './GitHubIcon'

const Footer = () => {
  return (
    <footer className='bg-purple-500 w-full text-white flex justify-between absolute bottom-0 h-[6vh] p-2 items-center'>
        <div>
        Your own Password Manager 
        </div>
        <div className="git flex justify-between gap-2 items-center">
          <a href="http://github.com/Virendra-Balasaheb-Desai/Password-Manager-LocalStorage" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className='size-8'/>
          </a>
        </div>
    </footer>
  )
}

export default Footer
