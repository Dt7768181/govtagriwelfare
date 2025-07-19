export default function Home({ username }){
    return(
        <div className="Home-Page">
            <div className="Home-Container">
                <h1>Hello {username}</h1>
            </div>
        </div>
    );
}