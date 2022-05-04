import Image from "next/image";
import {
    AiOutlineSearch,
    AiOutlineHome,
    AiOutlineFlag,
    AiFillPlayCircle,
    AiOutlineShoppingCart,
    AiOutlineUsergroupAdd,
    AiFillWechat,
    AiFillBell
} from "react-icons/ai"
import HeaderIcon from "./HeaderIcon";
import{
    HiViewGridAdd,
    HiOutlineChevronDown
} from "react-icons/hi"

function Header (){
    return (
        <div className="sticky top-0 z-50 bg-white flex
        items-center p-2 lg:px-5 shadow-md">
            
            {/* left */}
            <div className="flex items-center">

                <Image src="https://links.papareact.com/5me" width={40}
                height={40} layout="fixed"/>

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <AiOutlineSearch className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent
                    outline-none placeholder-gray-500 flex-shrink" 
                    type="text" placeholder="Search Facebook"/>
                </div>

            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">  
                    <HeaderIcon active Icon={AiOutlineHome}/>
                    <HeaderIcon Icon={AiOutlineFlag}/>
                    <HeaderIcon Icon={AiFillPlayCircle}/>
                    <HeaderIcon Icon={AiOutlineShoppingCart}/>
                    <HeaderIcon Icon={AiOutlineUsergroupAdd}/>
                </div>
            </div>

            {/* right */}

            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile pic */}
                <p className="font-semibold pr-3">Sonny Sangha</p>
                <AiFillWechat className="icon" />
                <HiViewGridAdd className="icon" />
                <AiFillBell className="icon" />
                <HiOutlineChevronDown className="icon" />

            </div>



        </div>
    );
}
export default Header;