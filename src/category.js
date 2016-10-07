import React, { Component } from 'react';
import Table from './table.js';
import Brackets from './brackets';

// for table <Table athletes={this.props.category.athletes}/>
class Category extends Component {
    render() {
        return (
            <div id="category" className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.category.name}</h3>
                </div>
                    <Brackets/>
            </div>
        );
    }
}

export default Category;