import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import {SearchFilters} from "../../components/searchfilter";
import {MovieList} from "../../components/movielist";
import {useDispatch, useSelector} from "react-redux";
import {fetchDiscoveryResults, fetchGenres} from "../../state/actions";
import * as RS from "reactstrap";

export const Discover = (props) => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("Discover");
  const discoverData = useSelector((state) => state?.discoverData);
  const genreData = useSelector((state) => state?.genreData);

  const totalCount = discoverData && Object.keys(discoverData).length;

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    dispatch(fetchDiscoveryResults())
    dispatch(fetchGenres())
  }, [])

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return <RS.Container>
      <DiscoverWrapper>
        <RS.Row>
          <MobilePageTitle>{title}</MobilePageTitle> {/* Discover MobilePageTitle should become visible on small screens & mobile devices*/}
        </RS.Row>
        <RS.Row>
          {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
        </RS.Row>
        <RS.Row>
            <MovieResults>
              <MovieList/>
            </MovieResults>
            <MovieFilters>
            <SearchFilters/>
            </MovieFilters>
        </RS.Row>
      </DiscoverWrapper>
  </RS.Container>
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`

const TotalCounter = styled.div`
  font-weight: 900;
`

const MovieResults = styled.div`
  display: flex;
  position: relative;
  float: left;
  //width: 70%;
  flex: 0 0 70%;
  max-width: 70%;
`

const MovieFilters = styled.div`
  position: relative;
  display: flex;
  float: right;
  flex: 0 0 30%;
  width: 25%;
  padding: 2.5%;
`

const MobilePageTitle = styled.header`

`
