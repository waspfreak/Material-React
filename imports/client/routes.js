import React, { Component } from 'react';
import{ Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';


import MainLayout  from './layouts/MainLayout';
import Home        from './pages/Home';
import App         from './App';
import About       from './pages/About';
import Guideline   from './pages/Guideline';
import ButtonPage  from './pages/ButtonPage';
import CardsPage   from './pages/CardsPage';
import IconsPage   from './pages/IconsPage';
import BadgesPage  from './pages/BadgesPage';
import Collections from './pages/Collections';
import Page from './pages/Page';


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ MainLayout }>
        <IndexRoute component={ Home }/>
        <Route path="/buttons" component={ ButtonPage }/>
        <Route path="/badges" component={ BadgesPage }/>
        <Route path="/cards" component={ CardsPage }/>
        <Route path="/icons" component={ IconsPage }/>
        <Route path="/about" component={ About }/>
        <Route path="/guideline" component={ Guideline }/>
        <Route path="/collections" component={ Collections }/>
        <Route path="/page" component={ Page }/>
      </Route>
    </Router>,
    document.getElementById('render-target')
  );

});
