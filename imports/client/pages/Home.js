import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';

const Home = () =>
  <main>
    <Title priority='2'
           className='light'
           title='Materialize & ReactJs'
           subtitle="A Set of React Components that Implement Google's Material Design"/>
    <Button txt='Button' wavesEffect positionIcon='right' btn wavesLigh color='pink'/>
  </main>

export default Home;
