/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { GoSun } from "react-icons/go";
import { CiDark} from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TfiLink } from "react-icons/tfi";
import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";


function App() {
 const [darkMode, setDarkMode] = useState(false);

 const handleToggle = () => {
    setDarkMode(!darkMode)
 }

  return (
    <div className={`${darkMode && 'dark'}`}>
        <header className=''>
            <div className='flex flex-col md:items-center items-start md:justify-center justify-start border h-24 pl-2 sm:pl-0 py-2 relative shadow-sm dark:bg-black dark:text-white capitalize'>
                <h1 className='font-extrabold text-3xl '>victory benson <span className='text-purple-600'>.K</span></h1>
                <p className='text-purple-600 dark:text-violet-400 capitalize ' ><span>web developer</span> | <span>tech enthusiast</span></p>
                <p className='text-sm lowercase'>
                    <a href="#services" className=''>
                        need a website?
                    </a>
                    <a href="#contact" className=''>
                        contact me!
                    </a>
                </p>
                <button onClick={handleToggle} className='bg-stone-200 dark:bg-white/40 rounded-full md:right-10 right-5 absolute items-center top-1/4 p-2'>{darkMode? <CiDark className='dark:text-black'/> : <GoSun />}</button>
            </div>
        </header>
        <section id='hero' className='flex lg:h-[60vh]  justify-center dark:bg-black dark:text-white'>
            <div className='lg:flex justify-between items-center w-full h-full md:px-4 py-5 px-1 '>
                <div className='p-3 lg:w-[50%]'>
                    <h1 className='font-bold text-3xl'>Hi, I'm <span className='text-purple-600 dark:text-violet-400 font-extrabold'>Victory!</span></h1>
                    {/* <p className='dark:text-gray-300 capitalize' ><span>web developer</span> | <span>tech enthusiast</span></p> */}
                    <p className='py- dark:text-violet-400 text-purple-600 font-mono'>I love bringing ideas to life with coding and design</p>
                    <p className='py-2 pt-5 font-mono'><strong>Does your business has an effective online presence? </strong> Can your clients/customers easily find you on the internet? Does your website look good when viewed on mobile devices?..If your answer to any of these question is "No" or "Maybe" then contact me let's work together to give you exactly what you deserve.  </p>
                </div>
                <div className=' lg:w-[50%] lg:h-full h-60 p-2'>
                    <img className='h-full w-full object-contain object-center rounded' src="https://i.postimg.cc/YScxzHGw/profile-Image.png" alt="profile image" />
                </div>
            </div>
        </section>
        <section id='contact' className='dark:bg-black dark:text-white'>
            <div className='py-5 px-1 '>
                <h1 className='text-2xl font-bold px-2 flex items-center'><TfiLink />Connect with me</h1>
                <div className='flex flex-wrap transition-all '>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsGithub size={20} className=''/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsLinkedin size={20} className='text-[#3741a4]'/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsWhatsapp size={20} className='text-[#50eb81]'/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7'/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaXTwitter size={20} className='text-[#4691b0]'/>
                    </a>
                </div>      
            </div>
        </section>
        <section id='services' className='dark:bg-black dark:text-white'>
            <div>
                <h1 className='text-2xl font-bold px-2 flex items-center'><GiProcessor className='mr-1' />How it works</h1>
            </div>
        </section>
    </div>
  )
}

export default App
