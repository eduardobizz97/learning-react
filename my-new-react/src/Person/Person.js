
const Person = (props) =>{
    return (
        <div>
            <p onClick={props.click}>Hola {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;