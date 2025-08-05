import Todo from "../components/todo";
import Link from "next/link";

export default async function postsPage (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
         {
                // cache: "force-cache"  //SSG   server side generation
                // cache: "no-store"     // SSR  sever side rendering 
                // ISG  incremental static regeneration    haigebo awel mara w ba3d fatra haygebo tani 
                next: {
                    revalidate: 120,  //haio3d 60 sania bis7ab mn el cache 
                },
            }
    );

    
    const posts = await response.json();

    const postsJSX = posts.map ( (post) => {
        return(
            <Link href={`/posts/${post.id}`} style={{width: "70%",}}>

            <div style={{
                width: "100%",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                color: "black",
                marginTop: "20px",
            }}>

                <h1>{post.title}</h1>
                <p>{post.body}</p>

            </div>
            
            </Link>
        )
    });
     

    return (

        
        <div>
            <h1> Posts Page </h1>

            <div style={{ display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
                {postsJSX}
            </div>


            {/* <h2>{todo.title}</h2>

            <div>
                <Todo />
            </div> */}
        </div>
        
    )
}