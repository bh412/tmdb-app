import React, {useEffect, useState} from "react";
import styled, { css } from 'styled-components';
import * as RS from "reactstrap";

import * as colors from "../../colors";
import {ExpandableFilter} from "../../components/expandablefilter";
import {SearchBar} from "../searchbar";
import {fetchDiscoveryResults, fetchGenres, fetchSearchResults} from "../../state/actions";
import {useDispatch, useSelector} from "react-redux";

export const SearchFilters = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("");
    const genreData = useSelector((state) => state?.genreData);
    const [genresList, setGenresList] = useState([]);

    useEffect(() => {
        if (query && query.replace(/\s/g, '').length > 0) {
            let queryToSend = "&query=" + query;
            if (year) {
                queryToSend = queryToSend + "&year=" + year.toString();
            }
            dispatch(fetchSearchResults(queryToSend))
        }
    }, [query, year])

    useEffect(() => {
        genreData && setGenresList(Object.values(genreData));
    }, [genreData]);

    return <FiltersWrapper>
        <React.Fragment>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
            <SearchBar id="text-search" name="text" inputType="text" setSearchTerm={setQuery}/>
            <SearchBar id="year-search" name="year" inputType="year" setSearchTerm={setYear}/>
        </SearchFiltersCont>
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
            <ExpandableFilter type="genre" name="genre(s)" genres={genresList}/>
            <ExpandableFilter type="rating" name="min. vote"/>
            <ExpandableFilter type="language" name="language"/>
        </SearchFiltersCont>
        </React.Fragment>
    </FiltersWrapper>
}

const FiltersWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    padding: 5%;
    max-width: 90% !important;
    width: 90% !important;
  }
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  width: 100%;

  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.div`
  font-weight: bold;
`


