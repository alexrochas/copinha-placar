import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div id="category" className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.category.name}</h3>
      </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {this.props.category.athletes.map(function(athlete) {
              return <tr key={athlete.id}>
                <td>{athlete.name}</td>
                <td>{athlete.classification}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Category;