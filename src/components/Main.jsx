import "./Main.css"
const Main = (props) =>{
    return(
        <div className="main">
            <button className="red" onClick={props.red}>RED</button>
            <button className="green" onClick={props.green}>GREEN</button>
        </div>
    )
}

export default Main