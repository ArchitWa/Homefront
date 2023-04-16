import UserCard from "./UserCard"
import ChatBubble from "./ChatBubble";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Forum() {
    return (
        <div className="animate-fadeIn animate-duration-[4000ms]">
            <div className="grid grid-cols-2">
                <div className="w-[25rem] h-[45rem] bg-[#f5dcbb]">
                    <div className="f-search flex justify-center items-center mx-auto">
                        <input className="relative mt-5 h-[3rem] w-[16rem] pl-2 rounded-xl shadow-full text-xl outline-none hover:animate-pulse  bg-[#FFE7C7]" placeholder="Search for neighbors...." />
                        <button className="relative mt-5 ml-2 pl-2 search-btn bg-[#FFE7C7] shadow-full hover:animate-pulse h-[3rem] rounded-xl w-[3rem]" type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 mr-2 fa-xl" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-y-5 ">
                        <UserCard pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="John Doe" lastMsg="Hi!" time="5:02 AM" first="true" />
                        <UserCard pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Jane Doe" lastMsg="Hello world" time="9:40 PM" />
                        <UserCard pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Lorem ipsum" lastMsg="Just saw your message, sorry" time="12:38 AM" />
                        <UserCard pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Lorem ipsum" lastMsg="Cool, I'll lyk" time="2:39 AM" />
                        <UserCard pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" name="Lorem ipsum" lastMsg="nice" time="1:00 PM" />
                    </div>
                </div>

                <div className="w-[65rem] -ml-[20rem] h-[45rem] ">
                    <div className="mt-[20rem]"></div>
                    <ChatBubble pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" start="true" msg="This is some sample text to show how the finished backend would look." />
                    <ChatBubble pfp="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" start="false" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                    <div className="f-search absolute bottom-5 left-[32%] flex justify-center items-center mx-auto">
                        <input className="relative mt-5 h-[3rem] w-[55rem] pl-2 rounded-xl shadow-full text-xl outline-none   bg-[#f5dcbb]" placeholder="Type a message...." />
                        <button className="relative mt-5 ml-2 pl-2 search-btn bg-[#f5dcbb] shadow-full  h-[3rem] rounded-xl w-[3rem]" type="submit">
                            <FontAwesomeIcon icon={faReply} className="text-gray-600 mr-2 fa-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}