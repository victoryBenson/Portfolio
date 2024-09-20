/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { GoSun } from "react-icons/go";
import { CiDark, CiHeart} from "react-icons/ci";
import { FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSlack, FaXTwitter } from "react-icons/fa6";
import { TfiLink, TfiTime } from "react-icons/tfi";
import { BsFillEnvelopeAtFill, BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import { projects } from './component/works';
import { IoIosArrowUp, IoLogoJavascript } from "react-icons/io";
import { IoDocumentTextOutline, IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiInsomnia, SiMongodb, SiPostman, SiRedux, SiRender, SiSwagger, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVite } from "react-icons/si";
import { TbBrandNextjs, TbBrandVercel, TbCloudCode } from "react-icons/tb";
import AOS from 'aos';
import "aos/dist/aos.css"

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isActive, setIsActive] = useState(false)


    //animation on scroll
    useEffect(() => {
        AOS.init({
        duration: 500
        })    
    },[])

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
    <div className={`${darkMode && 'dark bg-black'} relative transition-all`}>
        <header id='header' className={`${isActive && 'fixed z-40 inset-0 top-0'} h-24 bg-white`}>
            <div className={`flex flex-col items-center justify-center h-full md:pl-0 py-2 relative shadow dark:bg-black dark:text-white capitalize`}>
                <h1 className='font-extrabold text-lg md:text-3xl '>victory <span className='text-purple-600'>.K</span> benson </h1>
                <p className='text-purple-600 dark:text-violet-400 capitalize text-center' ><span>Software developer</span> | <span>tech enthusiast</span> | <span>Freelancer</span></p>              
                <button onClick={handleToggle} className='bg-stone-200 dark:bg-white/40 dark:text-white rounded-full md:right-10 right-5 absolute items-center top-2  p-1 sm:p-2'>{darkMode? <CiDark className=''/> : <GoSun />}</button>
            </div>
        </header>
        <section id='hero' data-aos="zom-in" className='flex  justify-center dark:bg-black dark:text-white'>
            <div className='flex flex-col justify-between items-center w-full h-full md:px-4 px-1 pt-5'>
                <div className='w-60 h-60 p-2 rounded-2xl overflow-hidden shadow border bg-white'>
                    <img className='h-full w-full object-cover object-top rounded-2xl shadow' src="https://i.postimg.cc/qRLf4JMK/20240613-192347.jpg" alt="profile image" />
                </div>
                <div className='text-center w-[100%] md:w-[80] lg:w-[50%] py-2'>
                    <h1 className=' text-3xl font-semibold'>Hello! I'm Victory, a <span className='text-purple-600 dark:text-violet-400 font-extrabold'> Software Developer.</span> </h1>
                    <div className='py-5 text-lg '>
                        <p className=''>I enjoy building dynamic and responsive websites to meet specific need or solve a particular problem.</p>
                        <p> Feel free to contact me, let's build something amazing together!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='flex justify-center pb-5 dark:bg-black '>
            <div>
                {/* <a href="https://files.fm/f/hfqec6jvaf" target="_blank" className='flex items-center justify-center bg-purple-600 p-2 text-white rounded-lg hover:bg-opacity-90'><IoDocumentTextOutline/>Resume</a> */}
                <a 
                    href="https://docs.google.com/document/d/1NwCnkT_UIywNnC2nf1WoBeS-IJACIh21OpYf2UIewr0/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='flex items-center justify-center bg-purple-600 p-2 text-white rounded-lg hover:bg-opacity-90'
                    >
                        <IoDocumentTextOutline/>Resume
                </a>
            </div>
        </section>
        <section id='contact' data-aos="zoom-in" className='dark:bg-black dark:text-white flex items-center justify-center  md:py-5'>
            <div className=' px-1 '>
                <h1 className='text-2xl font-bold px-2 flex items-center'><TfiLink />Connect with me</h1>
                <div className='flex flex-wrap transition-all justify-center'>
                    <a href='mailto:victorybenson98@gmail.com' target='_blank' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7'/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsWhatsapp size={20}/>
                    </a>
                    <a href='https://x.com/Kennytech98?t=C_b3KzKNrVTc1E_2Bh47eQ&s=09' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2' target='_blank'>
                        <FaXTwitter size={20}/>
                    </a>
                    <a href="https://github.com/victoryBenson" target='_blank' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2'>
                        <BsGithub size={20}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kenny-victory-572773251' className='m-2 hover:scale-110 ease-in duration-100 rounded-full p-2' target='_blank'>
                        <BsLinkedin size={20}/>
                    </a>
                </div>      
            </div>
        </section>
        <section id='tech-skill' data-aos="fade-up" className='flex items-center justify-center sticky flex-col dark:bg-black py-10'>
            <div className='text-2xl font-bold  top-0 bg-white dark:bg-black dark:text-white capitalize'>my tech skills/Tools</div>
            <div>
                <div className='flex flex-col items-center py-2 px-2'>
                    <span className='dark:text-white font-bold'>Frontend tools:</span>
                    <div className='flex gap-2 flex-wrap items-center justify-center'>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaHtml5 fontSize={20}/> HTML</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaCss3 fontSize={20}/> CSS</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiTailwindcss fontSize={20}/> TailwindCss</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><IoLogoJavascript fontSize={20}/> Javascript</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaReact fontSize={20}/> React.js</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiTypescript fontSize={20}/> Typescript</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><TbBrandNextjs size={20}/>Next.js</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaFigma size={20} />Figma</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiRedux />Redux</span>
                    </div>
                </div>
                <div className='flex flex-col items-center py-2'>
                    <span className='dark:text-white font-bold'>Backend Technologies & Frameworks:</span>
                    <div className='flex gap-2 flex-wrap items-center justify-center px-2'>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaNodeJs fontSize={20}/> NodeJs</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiExpress fontSize={20}/> Express</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiInsomnia />Insomnia</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiPostman />Postman</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><IoLogoFirebase fontSize={20}/>Firebase</span>
                    </div>
                </div>
                <div className='flex flex-col items-center py-2'>
                    <span className='dark:text-white font-bold'>Database & Development Tools/Platforms:</span>
                    <div className='flex gap-2 flex-wrap items-center px-2 justify-center'>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiMongodb size={20}/> MongoDB</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><TbCloudCode size={20}/>Cloudinary</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaGitAlt fontSize={20}/>Git</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaGithub />Github</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiVisualstudiocode />Visual Studio Code</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaSlack fontSize={20}/>Slack</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiVite />Vite</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiRender />Render</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><TbBrandVercel size={20}/>Vercel</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiSwagger size={20}/>Swagger</span>
                    </div>
                </div>
                <div className='hidden flex-col items-center py-2'>
                    <span className='dark:text-white font-bold'>Development Tools & Platforms:</span>
                    <div className='flex gap-2 flex-wrap items-center justify-center'>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><TbCloudCode size={20}/>Cloudinary</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaGitAlt fontSize={20}/>Git</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaGithub />Github</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiVisualstudiocode />Visual Studio Code</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><FaSlack fontSize={20}/>Slack</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiVite />Vite</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiRender />Render</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><TbBrandVercel size={20}/>Vercel</span>
                        <span className='flex items-center bg-gray-200 p-2 rounded-lg'><SiSwagger size={20}/>Swagger</span>
                    </div>
                </div>
                
            </div>
        </section>
        <section id='projects' data-aos="fade-up" className='dark:bg-black dark:text-white flex justify-center md:py-10'>
            <div className='px-5 py-5 relative'>
                <h1 className='text-2xl font-bold flex items-center justify-center sticky top-0 bg-white dark:bg-black dark:text-white'><TfiTime size={20} className='mr-1' />Recent Projects</h1>
                <div className='py-4 flex flex-wrap items-center justify-center gap-4'>
                    {
                        projects.map((project)=>{
                            return(
                                <div key={project.id} className=' md:w-80 max- h-[24rem] overflow-hidden  border border-purple-100/50 rounded-2xl'>
                                    <p className='w-full h-1/2'><img className='rounded h-full w-full object-cover object-top' src={project.image} alt="image" /></p>
                                    <div className='p-3 h-1/2'>
                                        <p className='font-bold uppercase text-purple-600'>{project.name}</p>
                                        <p className='text-xs flex justify-end '>{project?.description}</p>
                                        <p className='flex text-center py-2 transition-all'>
                                            <a href={project.link} className='border border-purple-600/40 w-full h-full p-2 rounded-lg hover:bg-purple-600 hover:text-white hover:shadow'>Explore</a>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='text-center hover:font-bold transition-all font-mono '>
                    <a href="https://github.com/victoryBenson/" target='_blank' className='bg-purple-600 text-white p-2 rounded-xl'>see more</a>
                </p>
            </div>
        </section>
        <footer className='bg-purple-600 dark:bg-black text-white border-t border-stone-100/10'>
            <div className='py-5 self-center flex flex-col items-center justify-center space-y-5'>
                <h1 className='text-xl font-bold px-2 py-3 flex items-center text-white dark:text-stone-500'><TfiLink />Connect with me</h1>
                <div className='flex flex-wrap transition-all '>
                    <a href="https://github.com/victoryBenson" target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsGithub size={20} className=''/>
                    </a>
                    <a href='https://www.linkedin.com/in/kenny-victory-572773251' target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsLinkedin size={20} className='text-'/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+234-8136878980" target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsWhatsapp size={20} className='text-white'/>
                    </a>
                    <a href='mailto:victorybenson98@gmail.com' target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <BsFillEnvelopeAtFill size={20} className='text-red-7 flex flex-col items-center'/>
                    </a>
                    <a href='https://x.com/Kennytech98?t=C_b3KzKNrVTc1E_2Bh47eQ&s=09' target="_blank" className='sm:m-2 text-sm sm:text-normal hover:scale-110 ease-in duration-100 rounded-full p-2 flex flex-col items-center'>
                        <FaXTwitter size={20} className='text-white'/>
                    </a>
                </div> 
                <div className="flex items-center text-white dark:text-stone-400">Designed & Built with <CiHeart className='mx-1 text-white dark:text-purple-600' size={20} /> by Kennytech</div>
                <a onClick={scrollToTop} href='#header' className={`${isActive ? 'fixed flex flex-col z-[99] items-center right-5 bottom-14' : "hidden"} `}><IoIosArrowUp className='bg-white dark:bg-purple-600 dark:text-white text-purple-600 shadow rounded-full' size={40}/></a>     
            </div>
        </footer>
    </div>
  )
}

export default App
