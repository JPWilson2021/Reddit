import './style.css';
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import Avatar from "./Snoo.png";



function App() {
  return (
    <div>
        <Header/>
        <BoardHeader />
        <div className="bg-reddit_dark px-6 py-4 text-gray-400">
            <div className="border border-reddit_border p-2 rounded-md flex">
                <div className="rounded-full bg-gray-400 overflow-hidden w-10 h-10">
                    <img src={Avatar} alt=""/>
                </div>
                <form action="" className="flex-grow" >
                    <input type="Text" className="bg-reddit_dark-brighter border border-reddit_border p-2 rounded-md ml-4" placeholder="New Post"/>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
