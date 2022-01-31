import React from "react";
import styled from 'styled-components';
import {IMAGE_PATH} from "../../constants";
import * as RS from "reactstrap";

export const MovieItem = ({movie, genreList}) => {

    function getGenres(movie) {
        let genres = []
        var i = 0, len = movie.genre_ids.length;
        while (i < len) {
            for (const [key, value] of Object.entries(genreList)) {
                if (value.id === movie.genre_ids[i]) {
                    genres.push(value.name);
                }
            }
            i++
        }
        return genres;
    }

    // Complete the MovieItem component
    return <RS.Container>
      <MovieItemWrapper>
          <RS.Row md={8} lg={8}>
              <LeftCont>
                  <img src={IMAGE_PATH + movie.poster_path} alt={movie.original_title + " title"}/>
              </LeftCont>
              <RightCont>
                  <RS.Col>
                      <RS.Row>
                        <h3>{movie.original_title}</h3>
                      </RS.Row>
                      <RS.Row className="overview-primary">
                          <p>{getGenres(movie).toString()}</p>
                      </RS.Row>
                      <RS.Row>
                          <MovieOverview>{movie.overview}</MovieOverview>
                      </RS.Row>
                      <RS.Row className="overview-primary">
                          <p>{movie.release_date}</p>
                      </RS.Row>
                  </RS.Col>
              </RightCont>
          </RS.Row>
      </MovieItemWrapper>
    </RS.Container>
}

const img = styled.img`
    width: 100px;
    height: auto;
`

const MovieOverview = styled.p`
  font-size: 15px;
`

const MovieItemWrapper = styled.div`
  height: auto;
  min-height: 250px !important;
  width: auto;
  position: relative;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08)
`

const LeftCont = styled.div`
  position: relative;
  float: left;
  display: flex;
`

const RightCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`
