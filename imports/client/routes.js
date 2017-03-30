import React, { Component } from 'react';
import{
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import { render } from 'react-dom';

import MainLayout from './layouts/MainLayout';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Guideline from './pages/Guideline';
import ButtonPage from './pages/ButtonPage';
import CardsPage from './pages/CardsPage';
import IconsPage from './pages/IconsPage';


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home }/>
        <Route path="/buttons" component={ ButtonPage }/>
        <Route path="/cards" component={ CardsPage }/>
        <Route path="/icons" component={ IconsPage }/>
        <Route path="/about" component={ About }/>
        <Route path="/guideline" component={ Guideline }/>
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
