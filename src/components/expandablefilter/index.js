import React, {useState} from "react";
import styled from 'styled-components';

import Checkbox from "../checkbox";
import * as RS from "reactstrap";

// import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const state = {
  keyword: '',
  year: 0,
  results: [],
  totalCount: 0,
  genreOptions: [],
  ratingOptions: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ],
  languageOptions: [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
  ]
};

const Checkboxes = ({type, genres}) => {
  function optionsToRender(type, genres) {
    if (type === "genre") {
      let returnGenres = []
      for (const [key, value] of Object.entries(genres)) {
        returnGenres.push(value.name);
      }
      return returnGenres;
    } else if (type === "rating") {
      let returnRatings = []
      state.ratingOptions.forEach(entry => {
        returnRatings.push(entry.name)
      })
      return returnRatings;
    } else if (type === "language") {
      let returnLanguage = []
      state.languageOptions.forEach(entry => {
        returnLanguage.push(entry.name)
      })
      return returnLanguage;
    }
  }

  return <div>
    {optionsToRender(type, genres).map(option =>
        <RS.Row className="filter-checkbox" key={option}>
          <RS.Label check>
            <RS.Input type="checkbox"  />{' '}
            {option}
          </RS.Label>
        </RS.Row>
    )}
  </div>
}

export const ExpandableFilter = ({type, name, genres}) => {


  const [isBenOpen, setIsBenOpen] = useState(false);
  const toggle = () => setIsBenOpen(!isBenOpen);

  return <div className="mb-5">
    <RS.Row>
      <label>{isBenOpen ? "-" : "+"}</label><RS.Button color="primary" onClick={toggle} className="expanding-filter-button">{"Select " + name}</RS.Button>
    </RS.Row>
    <Collapse isOpen={false}>
      <RS.Card hidden={!isBenOpen}>
        <RS.CardBody>
          <Checkboxes type={type} genres={genres}/>
        </RS.CardBody>
      </RS.Card>
    </Collapse>
  </div>


  // You need to create your own checkbox component with a custom checkmark
}
