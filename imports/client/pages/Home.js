import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';

const Home = () =>
  <main>
    <Title className='light'
           title='Materialize & ReactJs'
           subtitle="A Set of React Components that Implement Google's Material Design"
    />
          <Button txt='Get Started' color='pink'/>
  </main>

export default Home;
