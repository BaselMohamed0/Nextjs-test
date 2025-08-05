import Link from "next/link";
import title from "./[title]/page";



export const metadata = {
    title : "Articles Page"
}




export default function articalesPage (){
    return (
        <div>
            <h1>articles Page </h1>
            <Link href="/posts">
            <button>Take me to post Page</button>
            </Link>
        </div>
    )
}