import './style.css';
import Logo from './clipart-reddit.png';
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function App() {
  return (
    <div>
        <header className="flex w-full bg-reddit_dark p-2">
            <div className="mx-4">
                <img src={Logo} alt="" className="w-8 h-8"/>
            </div>
            <form action="" className="bg-gray-800 p-1 flex">
                <MagnifyingGlassIcon className="text-gray-300 h-7 w-7" />
                <input type="text" className="bg-gray-800 h-8"/>
            </form>
        </header>
    </div>
  );
}

export default App;
