import React, { Component } from 'react';

import Title from '../components/Title';
import Card from '../components/Card';
import Icon from '../components/Icon';




const CardsPage = () =>

  <main>
    <Title className='light' title='Cards'
          subtitle='Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.'/>

    <div className='section'>
      <h2 className='light'>Basic Card</h2>
      <Card BgColor='blue-grey'
            ExtraBg='darken-1'
            Title='Card Title'
            Content='I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            urlLink='/about'
            textLink='This is a link'
            urlLink2='/buttons'
            textLink2='This is a link'
            numCol='6'
            colorText='cyan'
      />
    </div>

    <div className='section'>
      <h2 className='light'>Image Card</h2>
      <p className='caption'>Here is the standard card with an image thumbnail.</p>
      <Card BgColor='white'
            imgTitle='Image Title'
            srcImg= './images/sample-1.jpg'
            Content='I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            urlLink2='/buttons'
            textLink2='This is a link'
            numCol='6'
            colorText='black'
      />
    </div>

    <div className='section'>
      <h2 className='light'>FABs in Cards</h2>
      <p className='caption'>Here is an image card with a Floating Action Button.</p>
      <Card BgColor='white'
            imgTitle='Image Title'
            srcImg= './images/sample-1.jpg'
            Content='I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            urlLink2='/buttons'
            textLink2='This is a link'
            numCol='6'
            colorText='black'
            icon='add'
            btnSize='btn-large'
            btnColor='red'
            btnPosition='right'
      >
        <Icon icon='android' sizeIcon='tiny' color='white' right/>
      </Card>
    </div>

    <div className='section'>
      <h2 className='light'>Horizontal Card</h2>
      <p className='caption'>Here is the standard card with a horizontal image.</p>
      <Card BgColor='white'
            srcImg= 'http://lorempixel.com/100/190/nature/6'
            Content='I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            urlLink2='/buttons'
            textLink2='This is a link'
            numCol='7'
            colorText='black'
            horizontal
      />
    </div>

    <div className='section'>
      <h2 className='light'>Card Reveal</h2>
      <p className='caption'>Here you can add a card that reveals more information once clicked. Just add the <code className=' language-markup'>card-reveal</code> div with a <code className=' language-markup'>span.card-title</code> inside to make this work. Add the class <code className=' language-markup'>activator</code> to an element inside the card to allow it to open the card reveal.</p>
      <Card BgColor='white'
            srcImg= 'http://materializecss.com/images/office.jpg'
            Title='Card Title'
            urlLink2='/buttons'
            textLink2='This is a link'
            numCol='6'
            colorText='black'
      />
    </div>

  </main>


export default CardsPage;
