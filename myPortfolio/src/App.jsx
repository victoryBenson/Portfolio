/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { GoSun } from "react-icons/go";
import { CiDark, CiHeart} from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TfiLink, TfiTime } from "react-icons/tfi";
import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
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
        <header id='header' className={`${isActive && 'fixed z-40 inset-0 top-0'} h-24 bg-white`}>
            <div className={`flex flex-col items-center justify-center h-full md:pl-0 py-2 relative shadow dark:bg-black dark:text-white capitalize`}>
                {
                    isActive ? (
                        <h1 className='font-extrabold text-lg md:text-3xl '>victory benson <span className='text-purple-600'>.K</span></h1>
                    ):
                    (
                        <h1 className='font-extrabold text-lg md:text-3xl '>victory benson <span className='text-purple-600'>.K</span></h1>
                    )
                }
                <p className='text-purple-600 dark:text-violet-400 capitalize text-center' ><span>Software developer</span> | <span>tech enthusiast</span> | <span>Freelancer</span></p>              
                <button onClick={handleToggle} className='bg-stone-200 dark:bg-white/40 dark:text-white rounded-full md:right-10 right-5 absolute items-center top-2  p-1 sm:p-2'>{darkMode? <CiDark className=''/> : <GoSun />}</button>
            </div>
        </header>
        <section id='hero' className='flex  justify-center dark:bg-black dark:text-white'>
            <div className='flex flex-col justify-between items-center w-full h-full md:px-4 py-5 px-1 '>
                <div className='w-60 h-60 p-2 rounded-full overflow-hidden'>
                    <img className='h-full w-full object-cover object-top rounded-full' src="https://i.postimg.cc/j5HgFkj3/o-Pp8-Jwf-R-400x400-1.jpg" alt="profile image" />
                </div>
                <div className='p-3 text-center w-[100%] md:w-[80] lg:w-[50%]'>
                    <h1 className='font-bold text-3xl'>Hello! I'm Victory, a <span className='text-purple-600 dark:text-violet-400 font-extrabold'> Software Developer.</span> </h1>
                    <div className='py-5 text-lg '>
                        <p className=''>I enjoy building dynamic and responsive websites to meet specific need or solve a particular problem.</p>
                        <p> Feel free to contact me, let's build something amazing together!</p>
                    </div>
                </div>
            </div>
        </section>
        <section id='contact' className='dark:bg-black dark:text-white flex items-center justify-center'>
            <div className=' px-1 '>
                <h1 className='text-2xl font-bold px-2 flex items-center'><TfiLink />connect with me</h1>
                <div className='flex flex-wrap transition-all '>
                    
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsWhatsapp size={20} className='text-[#50eb81]'/>
                    </a>
                    <a href='mailto:victorybenson98@gmail.com' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7'/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <FaXTwitter size={20} className='text-[#4691b0]'/>
                    </a>
                    <a href="https://github.com/victoryBenson" className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsGithub size={20} className=''/>
                    </a>
                    <a className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsLinkedin size={20} className='text-[#3741a4]'/>
                    </a>
                </div>      
            </div>
        </section>
        <section id='projects' className='dark:bg-black dark:text-white flex justify-center py-10'>
            <div className='px-5 py-5 relative'>
                <h1 className='text-2xl font-bold flex items-center justify-center sticky top-0 bg-white dark:bg-black dark:text-white'><TfiTime className='mr-1' />Recent Projects</h1>
                <div className='py-4 flex flex-wrap items-center justify-center gap-4'>
                    {
                        projects.map((project)=>{
                            return(
                                <div key={project.id} className=' md:w-80 max- h-[24rem] overflow-hidden  border border-purple-100/50 rounded-2xl'>
                                    <p className='w-full h-1/2'><img className='rounded h-full w-full object-cover object-top' src={project.image} alt="image" /></p>
                                    <div className='p-3 h-1/2'>
                                        <p className='font-bold uppercase text-purple-600'>{project.name}</p>
                                        <p className='text-sm'>{project.description}</p>
                                        <p className='flex text-center py-2 transition-all'>
                                            <a href={project.link} className='border border-purple-600/40 w-full h-full p-2 rounded-lg hover:bg-purple-600 hover:text-white hover:shadow'>Explore</a>
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
        <footer className='bg-black text-white border-t border-stone-100/10'>
            <div className='py-5 self-center flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold px-2 py-3 flex items-center'><TfiLink />Connect with Victory</h1>
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
                <div className="flex items-center text-stone-400">Built with <CiHeart className='mx-1 text-purple-600' /> by Kennytech</div>
                <a onClick={scrollToTop} href='#header' className={`${isActive ? 'fixed flex flex-col z-[99] items-center right-5 bottom-4' : "hidden"} `}><IoIosArrowUp className='bg-purple-600 shadow text-white rounded-full' size={40}/></a>     
            </div>
        </footer>
    </div>
  )
}

export default App
