import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Events() {
    return (
        <div>
            <h2 className=" relative flex mt-10 text-center mx-auto before:absolute before:left-[38rem] before:right-[38rem] before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-crystal-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                <span className="relative text-gray-500 uppercase flex text-center mx-auto  font-extrabold text-3xl hover:text-gray-900 cursor-default">Recent Events</span>
            </h2>

            <div className="items-center mt-10 justify-center ml-16 grid grid-cols-3 gap-x-1 gap-y-10 pb-10 " >
                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://images.pexels.com/photos/210349/pexels-photo-210349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                    <svg className="relative -mt-[7.4rem] h-[8rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="white" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                    <h2 className="text-lg font-semibold text-center -mt-8 relative">
                        River Clean Up
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 mt-2'>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>

                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://i.pinimg.com/736x/01/fb/d5/01fbd50538be1486df5bfa2fca1fbf40--sky-view-pink-aesthetic.jpg"></img>
                    <svg className="relative -mt-[7.4rem] h-[8rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="white" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,250.7C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                    <h2 className="text-lg font-semibold text-center -mt-5 relative">
                        Lorem ipsum dolor
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 '>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>

                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://picsum.photos/536/354"></img>
                    <svg className="relative -mt-[5.4rem] h-[8rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,112C672,107,768,85,864,101.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <h2 className="text-lg font-semibold text-center -mt-[4.25rem] relative">
                        Lorem ipsum dolor
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 mt-3'>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>

                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://w0.peakpx.com/wallpaper/703/649/HD-wallpaper-ground-level-view-frosty-frigid-snow-nature-beautiful-winter-cold.jpg"></img>
                    <svg className="relative -mt-[5.4rem] h-[8rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,101.3C384,85,480,43,576,53.3C672,64,768,128,864,160C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <h2 className="text-lg font-semibold text-center -mt-16 relative">
                        Lorem ipsum dolor
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 mt-2'>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>

                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://thumbs.dreamstime.com/b/nature-river-side-photography-nd-some-random-clicks-78857225.jpg"></img>
                    <svg className="relative -mt-[7.4rem] h-[8rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="white" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,224C384,235,480,245,576,250.7C672,256,768,256,864,245.3C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                    <h2 className="text-lg font-semibold text-center -mt-6 relative">
                        Lorem ipsum dolor
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 mt-1'>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>

                <div className="shadow card animate-fadeIn animate-duration-[3000ms]">
                    <img className="rounded-t-3xl h-[60%]" src="https://storage.googleapis.com/pod_public/1300/88149.jpg"></img>
                    <svg className="relative -mt-[9rem] h-[10rem] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,213.3C384,171,480,117,576,117.3C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <h2 className="text-lg font-semibold text-center -mt-9 relative">
                        Lorem ipsum dolor
                    </h2>
                    <h3 className="text-crystal-600 ml-2 mt-2 text-base text-center relative">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h3>
                    <div className='flex justify-end mr-4 mt-2'>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-crystal fa-lg" />
                        </a>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-crystal fa-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}