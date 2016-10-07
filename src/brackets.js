import React, { Component } from 'react';
import Bracket from 'react-bracket';
import './react-bracket.css'

class Brackets extends Component {

  layout =
      [
        [
          1,
          2,
        ],
        [
          3
        ],
        [
          4
        ],
      ];


  data = {
    1: {
      top: 0,
      bottom: 1
    },
    2: {
      top: 2,
      bottom: 3
    },
    3: {
      top: 1,
      bottom: 2
    },
    4: {
      winner: 1
    }
  };


  participants = function(){
    var participants = [];
    var i;
    for(i = 0; i<4; i++){
      participants.push('Participant '+i);
    }
    return participants;
  }();

  getParticipant(options){
    var index = options.data[options.info][options.placement];
    var participant = this.participants[index];
    return participant?<span>{participant}</span>:<span>&nbsp;</span>;
  }

  render() {
    return (
        <div className="bracket_div">
          <Bracket layout={this.layout} data={this.data} participants={this.participants} getParticipant={this.getParticipant} />
        </div>
    );
  }
}

export default Brackets;