import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Item(props) {
    return (
        <div className="w-full px-4 py-2 h-[6rem] border-b rounded-lg shadow-full">
            <div className='grid grid-cols-2 gap-x-[15rem]'>
                <div className="w-[20rem]">
                    <h2 className='text-3xl font-bold text-nyanza-700'>
                        {props.item} . . .
                    </h2>
                    <h3 className='text-md font-semibold mt-2 w-full'>
                        {props.description}
                    </h3>
                </div>

                <div className='relative w-[2rem] justify-end'>
                    <h2 className='text-4xl mt-1 font-extrabold text-nyanza-700'>
                        ${props.price}
                    </h2>
                    <div className='grid grid-cols-2 gap-x-8 '>
                        <a href="" className='text-xl'>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 fa-lg" />
                        </a>
                        <a href="" className='text-xl '>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 fa-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}