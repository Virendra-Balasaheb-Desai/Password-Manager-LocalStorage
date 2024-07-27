import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import SaveIcon from './SaveIcon';
import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';
import EyeIcon from './EyeIcon';
import ClosedEyeIcon from './ClosedEyeIcon';
import CopyIcon from './CopyIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {

    const [form, setForm] = useState({ url: '', username: '', password: '' })
    const [passwords, setPasswords] = useState([])
    const refPass = useRef()
    const [toggleEye, setToggleEye] = useState(false)

    useEffect(() => {

        let pass = localStorage.getItem("passwords")
        if (pass) {
            setPasswords(JSON.parse(pass))
        }

    }, [])

    



    let handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    let handleSave = (e) => {
        if (form.url.length <= 3 || form.username.length <= 3 || form.password.length <= 3) {
            toast('Error : Something went wrong !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
                
                
        }
        else {
            setPasswords([...passwords, { id: uuidv4(), ...form }])
            localStorage.setItem("passwords", JSON.stringify([...passwords, { id: uuidv4(), ...form }]))
            setForm({ url: '', username: '', password: '' })
            
        }
    }

    let handleEdit = (e, item) => {
        setForm(item)
        setPasswords(passwords.filter((i) => { return i.id !== item.id }))
    }

    let handleDelete = (e, id) => {
        let con = confirm("Really want to delete!")
        if(con){

            setPasswords(passwords.filter((i) => { return i.id !== id }))
            localStorage.setItem("passwords", JSON.stringify(passwords.filter((i) => { return i.id !== id })))
        }
        
    }

    let handleShowPass = () => {
        if (refPass.current.type === "text") {
            refPass.current.type = "password"
            setToggleEye(false)
        }
        else {
            refPass.current.type = "text"
            setToggleEye(true)
        }
    }

    let handleCopy = (item) => {
        toast('Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
        navigator.clipboard.writeText(item)

    }


    return (
    <main className='min-h-[84vh]  md:container md:w-[70vw] px-4 mx-auto my-4'>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            <ToastContainer />
            <div className='my-4 text-center font-bold text-xl'>
                Your own password manager at local storage.
            </div>
            <div className="url my-4">
                <input type="text" className="w-full p-2 rounded-full border px-4" name='url' value={form.url} onChange={(e) => { handleChange(e) }} placeholder='Enter website URL' />
            </div>
            <div className="md:flex md:gap-4 my-4">
                <div className="username w-full my-4 md:m-0">
                    <input type="text" className="w-full p-2 rounded-full border px-4" name='username' value={form.username} onChange={(e) => { handleChange(e) }} placeholder='Enter Username' />
                </div>
                <div className="password w-full relative">
                    <input type="password" ref={refPass} className="w-full p-2 rounded-full border px-4" name='password' value={form.password} onChange={(e) => { handleChange(e) }} placeholder='Enter Password' />
                    <span  onClick={()=>{handleShowPass()}} className="absolute right-2 top-2 rotate-180">{toggleEye?<EyeIcon/>:<ClosedEyeIcon />} </span>
                </div>
            </div>
            <div className="save flex justify-center my-4">
                <button className={'bg-slate-400 py-2 px-4 rounded-full text-white flex items-center gap-2'} onClick={(e) => { handleSave(e) }}><SaveIcon className="size-6 cursor-pointer text-white"/><span>Save</span> </button>
            </div>
            <section>
                <div className='my-4 font-bold text-xl'>Passwords : </div>
                {passwords.length === 0 ? <div className='text-lg'>No Password Saved</div> :
                <div className="passwords">
                    <table class="table-auto  text-center w-full">
                        <thead>
                            <tr className='bg-purple-400 text-white'>
                                <th className='md: w-1/4 py-2 md:p-2'>Website</th>
                                <th className='md: w-1/4 py-2 md:p-2'>Username</th>
                                <th className='md: w-1/4 py-2 md:p-2'>Password</th>
                                <th className='md: w-1/12 py-2 md:p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-purple-200'>
                        {
                            passwords.map((item)=>{
                                return  <tr key={item.id}>
                                            <td className=' py-2 md:p-2'>
                                                <div className="flex items-center gap-1 justify-center">
                                                    <a href={item.url} target='_blank'>{item.url}</a> 
                                                    <CopyIcon onClick={()=>{handleCopy(item.url)}} className="size-5"/>
                                                </div>
                                            </td>
                                            <td className=' py-2 md:p-2'>
                                                <div className="flex items-center gap-1 justify-center">    
                                                    <div>{item.username}</div>
                                                    <CopyIcon onClick={()=>{handleCopy(item.username)}} className="size-5"/>
                                                </div>
                                            </td>
                                            <td className=' py-2 md:p-2'>
                                                <div className="flex items-center gap-1 justify-center">    
                                                    <div>{"*".repeat(item.password.length)}</div>
                                                    <CopyIcon onClick={()=>{handleCopy(item.password)}} className="size-5"/>
                                                </div>
                                            </td>
                                            <td className=' py-2 md:p-2'>
                                                <div className='flex justify-center items-center gap-2'>      
                                                    <button className='text-white' onClick={(e)=>{handleEdit(e,item)}}><EditIcon className="size-5 cursor-pointer"/></button>
                                                    <button className='text-white' onClick={(e)=>{handleDelete(e,item.id)}}><DeleteIcon  className="size-5 cursor-pointer"/></button>
                                                </div>
                                            </td>
                                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>

                }
            </section>
        </main>
    )
}

export default Manager
