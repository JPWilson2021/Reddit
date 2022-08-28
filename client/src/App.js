import './style.css';
import Header from "./Header";
import Logo from "./RLogo.png";



function App() {
  return (
    <div>
        <Header/>
        <div className="h-20 bg-cover" style={{backgroundImage:'url("https://preview.redd.it/xw6wqhhjubh31.jpg?width=2400&format=pjpg&auto=webp&s=32690f33b69e599ed11ea3e7c0e6286c0770245e")'}}>
        </div>
        <div>
            <div className="h-16 w-16">
                <img src={Logo}></img>
            </div>
        </div>
    </div>
  );
}

export default App;
