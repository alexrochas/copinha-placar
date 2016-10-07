import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
        <table className="table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
          </thead>
          <tbody>
          {this.props.athletes.map(function(athlete) {
            return <tr key={athlete.id}>
              <td>{athlete.name}</td>
              <td>{athlete.classification}</td>
            </tr>
          })}
          </tbody>
        </table>
    );
  }
}

export default Table;