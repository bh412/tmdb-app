import React, {useEffect, useState} from "react";
import styled from 'styled-components';

import {SearchFilters} from "../../components/searchfilter";
import {MovieList} from "../../components/movielist";
import {useDispatch, useSelector} from "react-redux";
import {fetchDiscoveryResults, fetchGenres} from "../../state/actions";
import * as RS from "reactstrap";

export const Discover = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("Discover");
  const discoverData = useSelector((state) => state?.discoverData);

  const totalCount = discoverData && Object.keys(discoverData).length;

  // Write a function to preload the popular movies when page loads & get the movie genres
  useEffect(() => {
    dispatch(fetchDiscoveryResults())
    dispatch(fetchGenres())
  }, [])

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  // Achieved this by using actions, reducers and the redux store - for expandability in future, see calls in searchfilter for example
  return <RS.Container>
      <DiscoverWrapper>
        <RS.Row>
            <h1><MobilePageTitle>{title}</MobilePageTitle></h1>
        </RS.Row>
        <RS.Row>
          {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
        </RS.Row>
        <RS.Row className="mobile-movie-list">
            <MovieFilters>
                <SearchFilters/>
            </MovieFilters>
            <MovieResults>
              <MovieList/>
            </MovieResults>
        </RS.Row>
      </DiscoverWrapper>
  </RS.Container>
}

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`

const TotalCounter = styled.div`
  font-weight: 900;
  padding-bottom: 20px;
`

const MovieResults = styled.div`
  display: flex;
  position: relative;
  float: left;
  flex: 0 0 70%;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 100% !important;
    width: 100% !important;
  }
`

const MovieFilters = styled.div`
  position: relative;
  display: flex;
  float: right;
  flex: 0 0 30%;
  width: 25%;
  padding: 2.5%;
  @media (max-width: 768px) {
    max-width: 100% !important;
    width: 100% !important;
    }
`

const MobilePageTitle = styled.header`
  @media (min-width: 768px) {
    display: none;
  }
`
