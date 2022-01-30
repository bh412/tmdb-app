import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import {useDispatch, useSelector} from "react-redux";
import {fetchDiscoveryResults, fetchGenres} from "../../state/actions";

export const Discover = (props) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("Discover Ben");
  const discoverData = useSelector((state) => state?.discoverData);
  const genreData = useSelector((state) => state?.genreData);

  const totalCount = discoverData && Object.keys(discoverData).length;

  // constructor (props) {
  //   super(props);
  //
  //   this.state = {
  //     keyword: '',
  //     year: 0,
  //     results: [],
  //     totalCount: 0,
  //     genreOptions: [],
  //     ratingOptions: [
  //       { id: 7.5, name: 7.5 },
  //       { id: 8, name: 8 },
  //       { id: 8.5, name: 8.5 },
  //       { id: 9, name: 9 },
  //       { id: 9.5, name: 9.5 },
  //       { id: 10, name: 10 }
  //     ],
  //     languageOptions: [
  //       { id: 'GR', name: 'Greek' },
  //       { id: 'EN', name: 'English' },
  //       { id: 'RU', name: 'Russian' },
  //       { id: 'PO', name: 'Polish' }
  //     ]
  //   };
  // }

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    dispatch(fetchDiscoveryResults())
    dispatch(fetchGenres())
  }, [])

  console.log(genreData);
  console.log(discoverData);
  discoverData && console.log(Object.keys(discoverData).length);

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return <DiscoverWrapper>
    <MobilePageTitle>{title}</MobilePageTitle> {/* Discover MobilePageTitle should become visible on small screens & mobile devices*/}
    <MovieFilters>
      <p>right</p>
      {/*<SearchFilters*/}
      {/*    genres={genreOptions}*/}
      {/*    ratings={ratingOptions}*/}
      {/*    languages={languageOptions}*/}
      {/*    searchMovies={(keyword, year) => this.searchMovies(keyword, year)}*/}
      {/*/>*/}
    </MovieFilters>
    <MovieResults>
      <p>left</p>
      { totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
      <MovieList
          movies={results || []}
          genres={genreOptions || []}
      />
    </MovieResults>
  </DiscoverWrapper>
  // render () {
  //   const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;
  //
  //   return (
  //
  //   )
  // }
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`

const TotalCounter = styled.div`
  font-weight: 900;
`

const MovieResults = styled.div`
  display: flex;
  float: left;
`

const MovieFilters = styled.div`
  display: flex;
  float: right;
`

const MobilePageTitle = styled.header`

`
