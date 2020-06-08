import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
    <>
    <div className="search">
    <input className="search-bar  ml-5 pl-5" type="text" placeholder="Search for Products" aria-label="Search" />
    {/* <SearchIcon /> */}
    </div>

    </>

    );
    }

    export default SearchBar;