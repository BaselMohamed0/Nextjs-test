export default function title (props){
    return (
        <div>
            <h1> Title Page</h1>
            <h1>{props.params.title}</h1>
        </div>
    )
}