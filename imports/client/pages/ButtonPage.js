import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';
import Icon from '../components/Icon';

import classnames from 'classnames';

const ButtonPage = () =>
  <main>
    <Title className='light'
           title='Buttons'
           subtitle='There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.'/>

        <h2 className="light">Raised</h2>
        <div className='section scrollspy'>
          <Button txt='Button' wavesEffect wavesLigh btn color='red' link=''>
            <Icon icon='cloud' sizeIcon='tiny' color='black' left/>
          </Button>
          <Button txt='Button' wavesEffect icon='cloud' wavesLigh btn color='blue' link=''>
            <Icon icon='android' sizeIcon='tiny' color='white' right/>
          </Button>
          <Button txt='Button' wavesEffect btn wavesLigh color='green' link=''/>
        </div>

        <h2 className="light">Floating</h2>
        <div className='section scrollspy'>
          <Button icon='add' wavesEffect wavesLigh position='right' btnLarge floating='btn-floating' color='red' link=''>
            <Icon icon='android' sizeIcon='tiny' color='white' right/>
          </Button>
        </div>

        <h2 className="light">Fixed Action Button</h2>
        <p className='caption'>If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.</p>
        <div className='section scrollspy'>
            <Button
              wavesEffect
              fixed
              btnLarge
              floating='btn-floating'
              floatingIcon
              color='red'
              wavesLigh
           >
               <Icon icon='view_headline' sizeIcon='tiny' color='white' right/>
           </Button>
          </div>



          <h2 className="light">Horizontal FAB</h2>
          <p className='caption'>Creating a horizontal FAB is easy! Just add the class  <code className='language-markup'>horizontal</code> to the FAB.</p>
          <div className='section scrollspy'>
            <div className='absolute-box'>
              <Button
                wavesEffect
                fixed
                btnLarge
                floating='btn-floating'
                horizontal
                floatingIcon
                clickToggle
                color='red'
                wavesLigh
              >
                <Icon icon='android' sizeIcon='tiny' color='white' right/>
            </Button>
            </div>
          </div>

          <h2 className="light">Click-only FAB</h2>
          <p className='caption'>If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the <code className='language-markup'>click-to-toggle</code> class to the FAB.</p>
          <div className='section scrollspy'>
            <div className='absolute-box'>
              <Button
                wavesEffect
                fixed
                btnLarge
                floating='btn-floating'
                horizontal
                floatingIcon
                clickToggle
                color='red'
                wavesLigh
              >
                <Icon icon='publish' sizeIcon='tiny' color='white' right/>
            </Button>
            </div>
          </div>

          <h2 className="light">Flat</h2>
          <p className='caption'>Flat buttons are used to reduce excessive layering. For example, flat buttons are usually used for actions within a card or modal so there aren't too many overlapping shadows.</p>
          <div className='section scrollspy'>
            <Button txt='Button Flat' wavesTeal btnFlat>
              <Icon icon='publish' sizeIcon='tiny' color='pink' right/>
          </Button>
          </div>

          <h2 className="light">Large</h2>
          <p className='caption'>This button has a larger height for buttons that need more attention.</p>
          <div className='section scrollspy'>
            <div className='section scrollspy'>
              <Button txt='Button' wavesEffect icon='cloud' wavesLigh btnLarge color='green' link=''>
              <Icon icon='info' sizeIcon='tiny' color='white' left/>
              </Button>
              <Button txt='Button' wavesEffect icon='cloud' wavesLigh btnLarge color='blue' link=''>
                <Icon icon='library_books' sizeIcon='tiny' color='white' right/>
              </Button>
              <Button txt='Button' wavesEffect btnLarge wavesLigh color='green' link=''/>
            </div>
          </div>

          <h2 className="light">Disabled</h2>
          <p className='caption'>This style can be applied to all button types</p>
            <div className='section scrollspy'>
              <Button txt='Disable' btnLarge disabled/>
              <Button txt='Disable' btn disabled/>
              <Button txt='Disable' btnFlat disabled/>
              <Button icon='add' btnLarge disabled floating='btn-floating'>
                <Icon icon='speaker_phone' sizeIcon='tiny' color='white' right/>
              </Button>
            </div>


  </main>

export default ButtonPage;
