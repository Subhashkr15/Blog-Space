import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 text-xl font-semibold cursor-pointer md:hover:text-white bg-gray-300 md:hover:bg-gradient-to-r from-[#8a6aff] to-[#dda6ff] active:text-white active:bg-gradient-to-r from-[#8a6aff] to-[#dda6ff] rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn