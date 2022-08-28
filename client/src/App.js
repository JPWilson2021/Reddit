import './style.css';
import Header from "./Header";
import BoardHeader from "./BoardHeader";
import Avatar from "./Snoo.png";
import PostForm from "./PostForm";



function App() {
  return (
    <div>
        <Header/>
        <BoardHeader />
        <PostForm />
        <div className="px-6 bg-reddit_dark text-reddit_text">
            <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
                <h5 className="text-reddit_text-darker text-sm mb-1">Posted by u/test123 16 hours ago</h5>
                <h2 className="text-xl mb-3">Firebase mix and match with MERN on Heroku</h2>
                <div className="text-sm leading-6">
                    <p>Hi guys, I am starting off a new project in Firebase - or thinking of using it.

                    Wondering if you have any feedback on limitations of Firebase, compared to MERN on Heroku.

                    I know they can be mixed and matched but where do you draw the line? Only pulling out Auth and Cloudstore? How have you seen it be set up ideally?

                    Is routing and creating custom endpoints straightforward in firebase?

                    My goal: This project may or may not work out. So I dont want to spend too much setup time. That means using Firebase entirely I suppose. Dont care much for relational vs document DBs so thats a wash. Not expecting a lot of traffic early on so costs won't be very different either I suppose.

                    Other constraints:

                    At the same time I read on here that things like Search etc that should be easy aren't easy in Firebase(as opposed to using Mongo Atlas). Search isn't a big feature for us but it is a part of the story.

                    Simplicity is good at this stage and not having to connect to S3 for storage like I'd have to on Heroku is a plus.

                        Long term I might want a hosted CMS like Strapi and I assume that'll need Heroku and having a split storage and database system won't be ideal(might straight up not work?) - so thats a concern but willing to migrate off firebase if needed at that point.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
