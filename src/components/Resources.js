import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import JobCard from './JobCard';
import VolCard from './VolCard'
import DonoCard from './DonoCard';

export default function Resources() {
    return (
        <div className='animate-fadeIn animate-duration-[4000ms]'>
            <div className="grid grid-cols-3 gap-x-3 ml-6 mt-4">
                <div className="bg-white w-[27rem] h-[44rem] shadow rounded-3xl">
                    <div className="search -mt-12">
                        <form className="search-box shadow-full text-nyanza-600">
                            <input className="search-input" type="text" autocomplete="off" required minlength="0"
                                placeholder={`Search for jobs...`} />
                            <button className="search-bt text-nyanza-600" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-nyanza-600 fa-xl" />
                            </button>
                        </form>
                    </div>

                    <div className='grid grid-cols-1 gap-y-4'>
                        <JobCard pos="software developers" comp="Google" />
                        <JobCard pos="window cleaners" comp="blank" />
                        <JobCard pos="sous chef" comp="Olive Garden" />
                    </div>
                </div>

                <div className="bg-white w-[27rem] h-[44rem] shadow rounded-3xl ">
                    <div className="search -mt-12">
                        <form className="search-box shadow-full text-crystal">
                            <input className="search-input" type="text" autocomplete="off" required minlength="0"
                                placeholder={`Search for volunteering...`} />
                            <button className="search-btn text-crystal" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-crystal fa-xl" />
                            </button>
                        </form>
                    </div>

                    <div className='grid grid-cols-1 gap-y-4'>
                        <VolCard desc="soup kitchen" loc="blank" />
                        <VolCard desc="river clean up" loc="Stevens Creek" />
                        <VolCard desc="AAH" loc="blank" />
                    </div>
                </div>

                <div className="bg-white w-[27rem] h-[44rem] shadow rounded-3xl">
                    <div className="search -mt-12">
                        <form className="search-box shadow-full text-tan-600">
                            <input className="search-input" type="text" autocomplete="off" required minlength="0"
                                placeholder={`Looking to donate...`} />
                            <button className="search-btn text-tan-600" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-tan-600 fa-xl" />
                            </button>
                        </form>
                    </div>

                    <div className='grid grid-cols-1 gap-y-4'>
                        <DonoCard pers="John Doe" reason="private" />
                        <DonoCard pers="Jane Doe" reason="surgery" />
                        <DonoCard pers="No one" reason="private" />
                    </div>
                </div>


            </div>
        </div>
    )
}