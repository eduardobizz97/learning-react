const ValidationComponent = (props) => {
    
    let validation = '';
    if (props.tamanho<5 ) {
        validation = <p>text too short</p> 
    }else {
        validation= <p>text long enough</p>
    }


    return (
        <div>
            {validation}
        </div>
    )
}

export default ValidationComponent;
