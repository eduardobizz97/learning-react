import React from 'react'
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    
    width: 70%;
    margin: 5px auto;
    border: 2px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    cursor: pointer;

    @media (min-width: 500px) {
        width: 450px;
    }

`;

const Person = (props) =>{
    const style = {
        '@media (min-width: 500px': {
            width: '450px'
        }
    }
    return (
        <StyledDiv>
            <p onClick={props.click}>Hola {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
}

export default Person;