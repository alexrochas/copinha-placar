import React, { Component } from 'react';

class Mozaic extends Component {

    render () {
        var divStyle = {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
        };
        var listStyle = {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            textAlign: 'center'
        };
        var lineStyle = {
            display: 'inline-block',
            width: '50px'
        };
        var linkStyle = function(kotoColor){
            return {
                textDecoration: 'underline',
                textDecorationColor: kotoColor + ' !important',
                color: kotoColor,
                fontWeight: 'bold'
            }
        };

        return (
            <div style={divStyle}>
                <ul className="mozaic" style={listStyle}>
                    {this.props.kotos.map((koto) => {
                        return <li style={lineStyle} key={koto.id}>
                            <a style={linkStyle(koto.color)} onClick={() => this.props.changeKotoCallback(koto.number)}>Koto {koto.number}</a>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Mozaic;
