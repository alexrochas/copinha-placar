import React, { Component } from 'react';
import Category from './category';

class Koto extends Component {
    constructor(props) {
        super(props);
        console.log("Starting koto");
    }

    render() {
        var color = this.props.color;
        var divStyle = {
            backgroundColor: color,
            height: "10px",
            borderRadius: "10px",
            border: "1px solid grey"
        };
        return (<div id="koto" className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">Koto {this.props.koto_number}</h2>
                <div style={divStyle}/>
            </div>
            <div className="panel-body">
                <Category key={this.props.category.id} category={this.props.category}/>
            </div>
        </div>)
    }
}

export default Koto;
