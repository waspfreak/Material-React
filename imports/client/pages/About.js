import React, { Component } from 'react';

import Row from '../components/Row';
import Col from '../components/Col';
import Title from '../components/Title';
import Button from '../components/Button';

const About = () =>
  <main>
    <Row>
        <Col s={12} className='grid-example'>
          <Title priority={2} className='light'
            title='About'
            subtitle='Learn about the Material Design and our Project Team'
          />
          <p>Fingerstache seitan typewriter poke, vegan tumblr paleo deep v. Neutra kogi irony, cronut air plant distillery tumeric enamel pin fam af. Iceland vice williamsburg, brooklyn synth banh mi roof party lyft distillery. Readymade meggings tote bag salvia hella scenester. VHS brunch affogato readymade master cleanse hella. Polaroid waistcoat readymade, asymmetrical keytar coloring book copper mug four loko shoreditch glossier. XOXO biodiesel kombucha kogi forage listicle, fingerstache knausgaard 90's beard umami.</p>
          <p>DIY small batch celiac godard whatever. Tacos tofu bitters, banh mi chartreuse kale chips street art messenger bag bushwick. Tousled brunch echo park tumblr. Sartorial pitchfork af farm-to-table listicle, trust fund woke. Bitters heirloom hoodie street art YOLO. Tilde VHS flexitarian +1 meditation poke. Meditation literally raw denim hexagon sriracha cold-pressed.</p>
          <p>Vexillologist pinterest typewriter seitan, stumptown humblebrag everyday carry paleo poke echo park photo booth thundercats quinoa letterpress. Listicle occupy sriracha fanny pack vegan. Aesthetic activated charcoal kogi, fingerstache banjo vape celiac bicycle rights VHS before they sold out sustainable fam four loko asymmetrical. Freegan kinfolk pabst, you probably haven't heard of them seitan quinoa live-edge man bun street art succulents twee pickled woke. Snackwave meggings locavore hella, salvia kogi af lumbersexual jianbing celiac craft beer. Tacos pour-over YOLO knausgaard snackwave before they sold out. Fingerstache kombucha typewriter, literally portland locavore VHS synth narwhal polaroid sriracha.</p>
         <Button txt='Button' color='red'/>
        </Col>
    </Row>
  </main>

export default About;
