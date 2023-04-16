import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function VolCard(props) {
    return (
        <div className={`h-[6rem] text-crystal w-[90%] ml-[5%] rounded-lg bg-white shadow-full`}>
            <div className='grid grid-cols-2'>
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="grid align-middle my-auto mt-6 ml-2">
                        <h2 className="font-semibold first-letter:uppercase text-xl w-[20rem] text-crystal">Volunteers for {props.desc}</h2>
                        <h3 className="font-normal text-sm ">@ {props.loc}</h3>
                    </div>

                </div>

                <div className='grid grid-cols-1 ml-36 mt-4'>
                    <a href="" className='text-xl'>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 fa-lg" />
                    </a>
                    <a href="" className='text-xl '>
                        <FontAwesomeIcon icon={faPhone} className="mr-2 fa-lg" />
                    </a>
                </div>
            </div>
        </div>
    )
}