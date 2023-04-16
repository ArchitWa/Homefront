import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item"

export default function Bazaar() {
    return (
        <div className='animate-fadeIn animate-duration-[4000ms]'>
            <h2 className=" relative flex mt-10 text-center mx-auto before:absolute before:left-[40.5rem] before:right-[40.5rem] before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-tan-600 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                <span className="relative text-gray-500 uppercase flex text-center mx-auto  font-extrabold text-3xl hover:text-gray-900 cursor-default">Bazaar</span>
            </h2>
            <div className="items-center mt-6 justify-center ml-16 grid grid-cols-2 gap-x-1 gap-y-10 pb-10" >

                <div className="w-[40rem] h-[50rem] bg-white rounded-3xl shadow">
                    <div className="search -mt-12">
                        <form className="search-box shadow-full text-nyanza-600">
                            <input className="search-input" type="text" autocomplete="off" required minlength="0"
                                placeholder="Search..." />
                            <button className="search-btn text-nyanza-600" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-nyanza-600 mr-2 fa-xl" />
                            </button>
                        </form>
                    </div>

                    <div className="items-center mt-6 justify-center grid grid-cols-1 gap-x-10 gap-y-8 pb-10 w-[35rem] ml-[2.5rem] text-sm font-medium text-nyanza-600  rounded-lg bg-white baorder-gray-600">
                        <Item item="Bicycle" description="John Doe is looking to sell a bicycle" price="212.00" />
                        <Item item="Apples" description="Jane Doe is selling a pound of apples" price="13.00" />
                        <Item item="Car" description="Jackson is selling a used Camaro." price="32013" />
                        <Item item="Lorem" description="Lorem ipsum dolor sit amet, consectetur." price="0.00" />
                        <Item item="Lorem" description="Lorem ipsum dolor sit amet, consectetur." price="0.00" />
                    </div>
                </div>


                <div className="w-[40rem] h-[33rem] bg-white rounded-3xl shadow">
                    <form>
                        <h2 className='mx-auto text-center text-2xl text-gray-600 font-bold mt-10'>Put An Item Up For Sale</h2>
                        <div className='ml-7 -mt-8'>
                            <div className='grid grid-cols-2 gap-x-[4rem] ml-10'>
                                <input className='w-[15rem] pl-2 text-xl mt-[5rem] border-2 h-[3rem] shadow-full outline-none rounded-xl text-crystal-600' placeholder='Item...' />
                                <input className='w-[10rem] pl-2 text-xl mt-[5rem] border-2 h-[3rem] shadow-full outline-none rounded-xl text-crystal-600' placeholder='Price...' />
                            </div>
                            <textarea className='w-[30rem] ml-10 pl-2 pt-2 text-lg mt-[2rem] border-2 h-[6rem] shadow-full outline-none rounded-xl text-crystal-600' placeholder='Description...' />

                            <div className='grid grid-cols-2 gap-x-[8rem] ml-10 mt-[2rem]'>
                                <input className='w-[20rem]  pl-2 text-xl border-2 h-[3rem] shadow-full outline-none rounded-xl text-crystal-600' placeholder='Email...' />
                                <a href="" className='w-[8rem]  text-center text-xl pt-2 border-2 h-[3rem] font-bold shadow-full outline-none rounded-xl text-nyanza-600'>Sell Item</a>
                            </div>
                            <div className='grid grid-cols-2 gap-x-[8rem] ml-10 mt-[2rem]'>
                                <input className='w-[20rem]  pl-2 text-xl border-2 h-[3rem] shadow-full outline-none rounded-xl text-crystal-600' placeholder='Phone number...' />
                                <a href="" className='w-[8rem]  text-center text-xl pt-2 border-2 h-[3rem] font-bold shadow-full outline-none rounded-xl text-red-600'>Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}