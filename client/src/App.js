import './style.css';
import Logo from './clipart-reddit.png';
import Avatar from './Snoo.png';
import Banner from './RedditBanner.png';
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {BellIcon, PlusIcon} from "@heroicons/react/24/outline";
import {ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon} from "@heroicons/react/20/solid";
import Header from "./Header";

function App() {
  return (
    <div>
        <Header/>
        <section className="subheader">
            <img src={Banner} alt="" />
        </section>
    </div>
  );
}

export default App;
