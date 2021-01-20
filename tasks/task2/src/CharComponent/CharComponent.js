const CharComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: '#3485E4'

    };

    const paraph = {
        fontWeight: '3rem',
        textTransform: 'uppercase',
        color: 'white'
    }

    return (
        <div style={style} onClick={props.click}>
            <p style={paraph}>{props.letter}</p>
        </div>
    )
}

export default CharComponent;

