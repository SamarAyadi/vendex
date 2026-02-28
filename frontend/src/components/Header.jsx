// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion} from 'framer-motion'
import { Bell, LogOut, Rocket, User } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Notifications from './../pages/Notifications';

const Header = () => {
  const location= useLocation()
  const {user, logout}=  useContext(AuthContext)

  const [isMobileMenuOpen, setIsMobileMenuOpen]=useState(false)
  const navLinks= [
    {name:'Home',path: '/'},
    {name:'Products',path: '/products'},
    {name:'Invoices',path: '/invoices'},
    {name:'Customers',path: '/customers'},
    {name:'Reports',path: '/reports'},
    {name:'Notifications',path: '/Notifications'},
  ]
  return (
    <motion.div initial={{opacity:0, y:-50}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#f8f6f1] border-b border-neutral-300 shadow-md">
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4 '>
        <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className= 'flex items-center gap-2 font-bold text-xl text-neutral-900 ' >
          <Rocket className='w-6 h-6 text-yellow-500 '/>
          <span>Vendex</span>


          
        </motion.div>
    {/* Desktop Menu */}
    <div className='hidden md:flex items-center gap-6  '>
      {navLinks.map((link)=>(
        <motion.div key={link.path} whileHover={{scale:1.1}}>
          <Link to={link.path} className={`relative text-sm font-md transition-all duration-300 ${location.pathname===link.path
            ?"text-yellow-500"
            :"text-neutral-700 hover:text-yellow-500"
          }`}>
            {link.name}

            {location.pathname===link.path && (
              <motion.span layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
              
            )}

          </Link>

        </motion.div>
      ))}
      {user?(
        <div className='flex items-center gap-4 '>
          {/* Notifications Icon */}
          <Link to="/notifications">
          <motion.div whileHover={{scale:1.2 , rotate:10}} className="relative cursor-pointer ">
            <Bell size={22} className='text-yellow-500'/>
            <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse'/>


            
            
          </motion.div>
          </Link>
          {/* Profile Icon */}
          <Link to="/profile">
          <motion.div whileHover={{scale:1.2 }} className="relative cursor-pointer ">
            <User size={22} className='text-yellow-500'/>
          </motion.div>
          </Link>
          {/* Logout Button */}
          <button onClick={logout} className='ml-2 bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-yellow-300/40 transition-all'>
          Logout

          </button>
        </div>
      ):(
        <div className="flex items-center gap-4">
          <Link to="/login" className='text-neutral-700 hover:text-yellow-500 transition-all font-medium'>
          Login
          </Link>
        <Link to="/register" className='ml-2 bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full font-medium text-white 
        hover:shadow-lg hover:shadow-yellow-300/40 transition-all'>Create Account</Link>

        </div>
      )
      }
    </div>
    {/* Mobile Menu */}
    <div className="md:hidden flex items-center gap-3">
      <button className='text-neutral-900 text-2xl focus:outline-none ' onClick={()=>setIsMobileMenuOpen((prev) => 
        !prev
      
        
      )}> {isMobileMenuOpen ? <HiX/> : <HiMenu/>}</button>
    </div>

    
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className='md:hidden bg-[#f8f6f1] border-t border-neutral-300 overflow-hidden'  initial={{height:0 ,opacity:0}} animate={{height: 'auto', opacity:1}} exit={{height:0, opacity:0}} transition={{duration:0.3}}>
            <div className="flex flex-col px-6 py-4 gap-4 text-neutral-900">
          {navLinks.map((link)=>(
            <Link className={` text-sm font-medium transition-all duration-300 hover:text-yellow-500 ${location.pathname===link.path ? "text-yellow-500" : "text-neutral-700"}`} key={link.path} to={link.path} onClick={()=> setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          {user ? (
            <div className='flex items-center gap-4 mt-2 '>
              <Bell size={22} className='text-yellow-500'/>
              <User size={22} className='text-yellow-500'/>
              <button className='bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full font-medium text-white hover:shadow-lg hover:shadow-yellow-300/40 transition-all' onClick={()=> {
                logout()
                setIsMobileMenuOpen(false)
              }}>Logout</button>
            </div>
          ): (
            <div className='flex flex-col gap-2 mt-2  '>
              <Link onClick={()=> setIsMobileMenuOpen(false)} to="/login" className='text-neutral-700 hover:text-yellow-500 transition-all font-medium'>
          Login
          </Link>
        <Link onClick={()=> setIsMobileMenuOpen(false)}  to="/register" className='ml-2 bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full font-medium text-white 
        hover:shadow-lg hover:shadow-yellow-300/40 transition-all'>Create Account</Link>
            </div>
          )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  )
}

export default Header