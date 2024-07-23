import React from 'react'
import GitHubIcon from './GitHubIcon'

const Footer = () => {
  return (
    <footer className='bg-slate-500 w-full text-white flex justify-between absolute bottom-0 p-2 items-center'>
        <div>
        Your own Password Manager 
        </div>
        <div className="git flex justify-between gap-2 items-center">
            <GitHubIcon className='size-8'/>
            <span>Virendra-Balasaheb-Desai</span>
        </div>
    </footer>
  )
}

export default Footer
