import 'rc-checkbox/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';


function onChange(e) {
  console.log('checkbox checked:', (e.target.checked));
}

const CheckboxContainer = React.createClass({

  getInitialState() {
    return {
      disabled: false,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },

  render() {
    const checkStyle = {
    color: this.props.color,
    borderColor: this.props.borderColor
    };
    return (<div style={{ margin: 20 }}>
          <label>
            <Checkbox onChange={onChange}
                      className={this.props.className}
                      defaultChecked
             />
            <span className='checkbox-label'>{this.props.label}</span>
          </label>


      {/* <button onClick={this.toggle}>toggle disabled</button> */}

    </div>);
  },
});

export default CheckboxContainer;
