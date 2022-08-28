import Logo from "./RLogo.png";

function BoardHeader(){
    return (
        <>
            <div className="h-20 bg-cover" style={{backgroundImage:'url("https://preview.redd.it/ylzbphhjubh31.jpg?width=2400&format=pjpg&auto=webp&s=cfb70bd92d6ad2f0a954ae619ebf648b8d6461ac")'}}>
            </div>
            <div className="bg-reddit_dark-brighter">
                <div className="mx-6 relative flex">
                    <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-3 border-white bg-white">
                        <img src={Logo}></img>
                    </div>
                    <div className="pt-2 pl-4">
                        <h1 className="text-gray-300 text-3xl">webdev: reddit for web developers</h1>
                        <h5 className="text-gray-500">r/webdev</h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BoardHeader;