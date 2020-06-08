import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';
import SearchBar from './SearchBar'
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-danger navbar-dark px-sm-5">
                <Link to="/" className="icon-Link navbar-brand logo">
                        <GitHubIcon />
                </Link>
                {/* <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            PKART
                        </Link>
                    </li>
                </ul> */}
                
                <ul className="navbar-nav align-items-center ml-10">
                    <li className="nav-item ml-15">
                    <Link to="/" className="nav-link text-white">
                        <h6>MENS</h6>
                    </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-15">
                    <Link to="/" className="nav-link text-white">
                        <h6>WOMENS</h6>
                    </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-15">
                    <Link to="/" className="nav-link text-white">
                        <h6>KIDS</h6>
                    </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-15">
                    <Link to="/" className="nav-link text-white">
                        <h6>HOME & LIVING</h6>
                    </Link>
                    </li>
                </ul>
                
                <SearchBar />
                
                <Link to="/cart" className="ml-auto bag">
                <span className="mr-5">
                <PersonIcon />
                </span>
                <LocalMallIcon />
                </Link>

                
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
}
.logo {
    color: var(--mainWhite);
    margin-bottom: 7px;
    font-size: 15px;
}
`;





