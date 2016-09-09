import React, { Component } from 'react';

class Control extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stop: props.stop
        }
    }
    
    changeStopState() {
        this.props.changeStopStateCallback();
        this.setState({
            stop: this.state.stop == false
        });
    }
    
  render () {
      return <div >
          <button>back</button>
          <button onClick={() => this.changeStopState()}>
              {this.state.stop == false ? 'continue': 'stop'} 
          </button>
          <button>forward</button>
      </div>;
  }
}

export default Control;
