import React from "react";
import styled from 'styled-components';
import * as RS from "reactstrap";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export const SearchBar = ({inputType, setSearchTerm}) => {
    function setSearch(e) {
        setSearchTerm(e.target.value);
    }

    return <RS.Card>
        {inputType === "year" ?
            <RS.Container className="search-component"><img src={CalendarIcon}/><RS.Input id="date-search" type="number" min="1900" max="2099" step="1" placeholder="Year of release" onChange={setSearch} className="search-term"/></RS.Container> :
            <RS.Container className="search-component"><img src={SearchIcon}/><RS.Input id="text-search" type="text" placeholder="Search by title" onChange={setSearch} className="search-term"/></RS.Container>
        }
    </RS.Card>
}

const Input = styled.input`
    width: 100%
`


