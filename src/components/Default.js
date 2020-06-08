import React, { Component } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h1 className="display-1 mt-5  text-title text-uppercase"><strong>404 !</strong></h1>
                        <h5 className="text-capitalize">The requested URL <span className="text-danger"> {this.props.location.pathname}</span> was not found on this server</h5>
                        <h5 className="text-muted text-capitalize">that's all we know</h5>
                    </div>
                </div>
                <div className="mx-auto">
                <Link to="/" className="mx-auto">
                    <ButtonContainer>
                        Go Back to Home
                    </ButtonContainer>
                </Link>
                </div> 
            </div>
        )
    }
}

const ButtonContainer = styled.button `

position: relative;
text-transform: uppercase;
font-size: 1.3rem;
background: var(--lightBlue);
color: var(--mainWhite);
border: 0.2rem solid var(--lightBlue);
padding: 0.5rem;
cursor: pointer;
border-radius: 0.5rem;
margin: 5rem 2rem 2rem 27rem;
transition: all 0.05s ease-in-out;
&:focus {
    outline: none;
}
`;
