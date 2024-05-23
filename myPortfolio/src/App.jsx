/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { GoSun } from "react-icons/go";
import { CiDark} from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TfiLink, TfiTime } from "react-icons/tfi";
import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { services } from './component/services';
import { projects } from './component/works';
import { IoIosArrowUp } from "react-icons/io";


function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setDarkMode(!darkMode)
    };

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    useEffect(() => {
    window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
    }, [])



  return (
    <div className={`${darkMode && 'dark'} relative transition-all`}>
        <header id='header' className={`${isActive && 'fixed z-40 inset-0 top-0 backdrop-blur'} h-24 bg-white`}>
            <div className={`flex flex-col md:items-center items-start md:justify-center justify-start h-full pl-4 md:pl-0 py-2 relative shadow dark:bg-black dark:text-white capitalize`}>
                <h1 className='font-extrabold text-3xl '>victory benson <span className='text-purple-600'>.K</span></h1>
                <p className='text-purple-600 dark:text-violet-400 capitalize ' ><span>web developer</span> | <span>tech enthusiast</span> | <span>Freelancer</span></p>              
                <button onClick={handleToggle} className='bg-stone-200 dark:bg-white/40 dark:text-white rounded-full md:right-10 right-5 absolute items-center top-1/ sm: top-1/4  p-1 sm:p-2'>{darkMode? <CiDark className=''/> : <GoSun />}</button>
            </div>
        </header>
        <section id='hero' className='flex lg:h-[60vh]  justify-center dark:bg-black dark:text-white'>
            <div className='lg:flex justify-between items-center w-full h-full md:px-4 py-5 px-1 '>
                <div className='p-3 lg:w-[50%]'>
                    <h1 className='font-bold text-3xl'>Hi, I'm <span className='text-purple-600 dark:text-violet-400 font-extrabold'>Victory!</span></h1>
                    {/* <p className='dark:text-gray-300 capitalize' ><span>web developer</span> | <span>tech enthusiast</span></p> */}
                    <p className='py- dark:text-violet-400 text-purple-600 font-mono '>A curious software engineer who constantly seek out innovative solutions to everyday problem.</p>
                    <p className='py-2 pt-5 font-mono'><strong>Does your business has an effective online presence? </strong> Can your clients/customers easily find you on the internet? Does your website look good when viewed on mobile devices?..If your answer to any of these question is "No" or "Maybe" then contact me let's work together to give you exactly what you deserve.  </p>
                </div>
                <div className=' lg:w-[50%] lg:h-full h-60 p-2'>
                    <img className='h-full w-full object-contain object-center rounded' src="https://i.postimg.cc/Prtp4JXh/kenny-Profile.png" alt="profile image" />
                </div>
            </div>
        </section>
        <section id='contact' className='dark:bg-black dark:text-white'>
            <div className='py-5 px-1 '>
                <h1 className='text-2xl font-bold px-2 flex items-center'><TfiLink />Connect with me</h1>
                <div className='flex flex-wrap transition-all '>
                    <a href="https://github.com/victoryBenson" className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsGithub size={20} className=''/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsLinkedin size={20} className='text-[#3741a4]'/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsWhatsapp size={20} className='text-[#50eb81]'/>
                    </a>
                    <a href='mailto:victorybenson98@gmail.com' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7'/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaXTwitter size={20} className='text-[#4691b0]'/>
                    </a>
                </div>      
            </div>
        </section>
        <section id='services' className='dark:bg-black dark:text-white '>
            <div className='px-2 relative'>
                <div className='sticky top-0 z-50 bg-white text-black dark:bg-black dark:text-white '>
                    <h1 className='text-2xl font-bold flex items-center py-3 px-2'><GiProcessor className='mr-1' />How it works</h1>
                    <p className='p-2'>-Here is my recipe for a project</p>
                </div>
                <ol id='checkout' className='p-2 pl-5 sm:pl-10'>
                    {
                        services.map((data)=> {
                            return (
                                <li key={data.id} className=' list-decimal py-2'>
                                    <span className='font-bold text-xl capitalize block'>{data?.topic}</span>
                                    <span className=' first-letter:capitalize font-mono block'><strong >{data?.extra} </strong>{data?.details}</span>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </section>
        <section id='projects' className='dark:bg-black dark:text-white'>
            <div className='px-5 py-5 relative'>
                <h1 className='text-2xl font-bold flex items-center sticky top-0 bg-white dark:bg-black dark:text-white'><TfiTime className='mr-1' />Recent Project</h1>
                <div className='py-4'>
                    {
                        projects.map((project)=>{
                            return(
                                <div key={project.id} className=' md:w-80 shadow border border-purple-100/10 rounded'>
                                    <p className='w-full h-40'><img className='rounded h-full w-full object-cover object-top' src={project.image} alt="image" /></p>
                                    <div className='p-3'>
                                        <p className='font-bold uppercase text-purple-600'>{project.name}</p>
                                        <p className='font-mono'>{project.description}</p>
                                        <p className='flex text-center py-2 transition-all'>
                                            <a href={project.link} className='border border-purple-600 w-full h-full p-2 rounded hover:bg-purple-600 hover:text-white hover:shadow'>Explore</a>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className=' hover:font-bold transition-all underline decoration-purple-600 decoration-2 underline-offset-2 font-mono'>
                    <a href="https://github.com/victoryBenson/" target='_blank' className=''>see more</a>
                </p>
            </div>
        </section>
        <footer className='dark:bg-black dark:text-white border-t border-stone-100/10'>
            <div className='py-5 self-center flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold px-2 py-3 flex items-center'><TfiLink />Connect with Victory</h1>
                <div className='flex flex-wrap transition-all '>
                    <a href="https://github.com/victoryBenson" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsGithub size={20} className=''/>
                        <span className = "text-stone-500">Github</span>
                    </a>
                    <a className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsLinkedin size={20} className='text-[#3741a4]'/>
                        <span className = "text-stone-500">LinkedIn</span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsWhatsapp size={20} className='text-[#50eb81]'/>
                        <span className = "text-stone-500">Whatsapp</span>
                    </a>
                    <a href='mailto:victorybenson98@gmail.com' className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7 flex flex-col items-center'/>
                        <span className = "text-stone-500">Gmail</span>
                    </a>
                    <a className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <FaXTwitter size={20} className='text-[#4691b0]'/>
                        <span className = "text-stone-500">X</span>
                    </a>
                </div> 
                <p className='py-2 text-stone-500'>&copy; Kennytech. All right reserved.</p>
                <a onClick={scrollToTop} href='#header' className={`${isActive ? 'fixed flex flex-col z-[99] items-center right-5 bottom-4' : "hidden"} `}><IoIosArrowUp className='bg-purple-600 shadow text-white rounded-full' size={40}/></a>     
            </div>
        </footer>
    </div>
  )
}

export default App
