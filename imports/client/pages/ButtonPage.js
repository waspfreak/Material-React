import React, { Component } from 'react';

import Title from '../components/Title';
import Button from '../components/Button';

import classnames from 'classnames';

const ButtonPage = () =>
  <main>
    <Title className='light'
           title='Buttons'
           subtitle='There are 3 main button types described in material design. The raised button is a standard button that signify actions and seek to give depth to a mostly flat page. The floating circular action button is meant for very important functions. Flat buttons are usually used within elements that already have depth like cards or modals.'/>

        <h2 className="light">Raised</h2>
        <div className='section scrollspy'>
          <Button txt='Button' wavesEffect icon='cloud' positionIcon='left' wavesLigh btn color='red' link=''/>
          <Button txt='Button' wavesEffect icon='cloud' positionIcon='right' wavesLigh btn color='blue' link=''/>
          <Button txt='Button' wavesEffect positionIcon='right' btn wavesLigh color='green' link=''/>
        </div>

        <h2 className="light">Floating</h2>
        <div className='section scrollspy'>
          <Button icon='add' wavesEffect wavesLigh position='right' btnLarge floating='btn-floating' color='red' link=''/>
        </div>

        <h2 className="light">Fixed Action Button</h2>
        <p className='caption'>If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.</p>
        <div className='section scrollspy'>
            <Button
              icon='publish'
              wavesEffect
              fixed
              btnLarge
              floating='btn-floating'
              floatingIcon
              color='red'
              wavesLigh
           />
          </div>



          <h2 className="light">Horizontal FAB</h2>
          <p className='caption'>Creating a horizontal FAB is easy! Just add the class  <code className='language-markup'>horizontal</code> to the FAB.</p>
          <div className='section scrollspy'>
            <div className='absolute-box'>
              <Button
                icon='menu'
                wavesEffect
                fixed
                btnLarge
                floating='btn-floating'
                horizontal
                floatingIcon
                clickToggle
                color='red'
                wavesLigh
              />
            </div>
          </div>

          <h2 className="light">Click-only FAB</h2>
          <p className='caption'>If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), just add the <code className='language-markup'>click-to-toggle</code> class to the FAB.</p>
          <div className='section scrollspy'>
            <div className='absolute-box'>
              <Button
                icon='publish'
                wavesEffect
                fixed
                btnLarge
                floating='btn-floating'
                horizontal
                floatingIcon
                clickToggle
                color='red'
                wavesLigh
              />
            </div>
          </div>

          <h2 className="light">Flat</h2>
          <p className='caption'>Flat buttons are used to reduce excessive layering. For example, flat buttons are usually used for actions within a card or modal so there aren't too many overlapping shadows.</p>
          <div className='section scrollspy'>
            <Button txt='Button Flat' positionIcon='left' wavesTeal btnFlat/>
          </div>

          <h2 className="light">Large</h2>
          <p className='caption'>This button has a larger height for buttons that need more attention.</p>
          <div className='section scrollspy'>
            <div className='section scrollspy'>
              <Button txt='Button' wavesEffect icon='cloud' positionIcon='left' wavesLigh btnLarge color='green' link=''/>
              <Button txt='Button' wavesEffect icon='cloud' positionIcon='right' wavesLigh btnLarge color='blue' link=''/>
              <Button txt='Button' wavesEffect btnLarge wavesLigh color='green' link=''/>
            </div>
          </div>

          <h2 className="light">Disabled</h2>
          <p className='caption'>This style can be applied to all button types</p>
            <div className='section scrollspy'>
              <Button txt='Disable' btnLarge disabled/>
              <Button txt='Disable' btn disabled/>
              <Button txt='Disable' btnFlat disabled/>
              <Button icon='add' btnLarge disabled floating='btn-floating'/>
            </div>


  </main>

export default ButtonPage;
