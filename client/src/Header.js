import Logo from "./clipart-reddit.png";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon} from "@heroicons/react/20/solid";
import {BellIcon, PlusIcon} from "@heroicons/react/24/outline";
import Avatar from "./Snoo.png";
import Button from "./Button";

function Header(){
    return (
        <header className="w-full bg-reddit_dark p-2">
            <div className="flex mx-4">
                <img src={Logo} alt="" className="w-8 h-8 mr-4"/>
                <form action="" className="bg-reddit_dark-brighter px-3 flex rounded-md border border-gray-700 mx-4 flex-grow">
                    <MagnifyingGlassIcon className="text-gray-300 h-6 w-6 mt-1" />
                    <input type="text" className="bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search"/>
                </form>

                {/*<button className="px-2 py-1">*/}
                {/*    <ChatBubbleOvalLeftEllipsisIcon className="text-white w-6 h-6 m-1 mx-2"/>*/}
                {/*</button>*/}
                {/*<button className="px-2 py-1">*/}
                {/*    <BellIcon className="text-white w-6 h-6 m-1 mx-2"/>*/}
                {/*</button>*/}
                {/*<button className="px-2 py-1">*/}
                {/*    <PlusIcon className="text-white w-6 h-6 m-1 mx-2"/>*/}
                {/*</button>*/}
               <Button>Log In</Button>
               <Button>Sign Up</Button>




                <button className="rounded-md h-8 flex ml-4">
                    <img src={Avatar} alt="" className="block w-8 h-8"/>
                    <ChevronDownIcon className="text-white w-5 h-5 mt-1"/>
                </button>
            </div>
        </header>

    );
}
export default Header;