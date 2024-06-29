import "./Header.css"

const Header = (props) =>{

console.log(props);
    return(
        <div className="div" style={{backgroundColor: props.red}}>

        </div>
    )
}

export default Header