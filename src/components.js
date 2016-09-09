import React, { Component } from 'react';
import './index.css';
import './scaffolds.css';
import Mozaic from './mozaic';
import Koto from './koto';
import Control from './control';
import $ from "jquery";

var CATEGORY_TIME = 5000;
var KOTO_TIME = 30000;
var RELOAD_TIME = 300000;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kotos: null,
            koto: null,
            category: null
        };
        this.stop = false;
    }

    changeStopStateCallback() {
        this.stop = this.stop === false;
        console.log("Stop state is " + this.stop);
    }

    updateCategory() {
        if (this.stop === false) {
            if (this.state.category == null) {
                this.setState({
                    category: this.state.koto.categories[0]
                });
            }
            else {
                var index = this.state.koto.categories.indexOf(this.state.category);
                if (index + 1 < this.state.koto.categories.length) {
                    console.log(this.state.koto.categories[index + 1]);
                    this.setState({
                        category: this.state.koto.categories[index + 1]
                    });
                }
                else {
                    this.setState({
                        category: this.state.koto.categories[0]
                    });
                }
            }
        }
    }

    updateView() {
        if (this.stop === false) {
            if (this.state.koto.number < this.state.kotos.length) {
                this.setState({
                    koto: this.state.kotos[this.state.koto.number]
                });
            }
            else {
                this.setState({
                    koto: this.state.kotos[0]
                });
            }
        }
    }

    poll() {
        console.log("Fetching data");
        var self = this;
        $.getJSON('http://localhost:3001/kotos', function(data) {
            self.setState({
                kotos: data,
                koto: data[0]
            });
            if(self._timer != null) {
                setInterval(self.updateView.bind(self), KOTO_TIME);
                setInterval(self.updateCategory.bind(self), CATEGORY_TIME);
            } else {
                self.updateView();
                self.updateCategory();
            }
        }.bind(self));
    }

    changeKotoCallback(number) {
        this.setState({
            koto: this.state.kotos[number - 1]
        });
    }

    componentDidMount() {
        console.log("Starting app");
        var self = this;
        setTimeout(function() {
            self.poll();
            self._timer = setInterval(self.poll.bind(self), RELOAD_TIME);
        }, 1000);
    }

    render() {
        if (this.state.koto != null && this.state.kotos != null && this.state.category != null) {
            return (
                <div>
                    <Mozaic kotos={this.state.kotos} changeKotoCallback={this.changeKotoCallback.bind(this)}/>
                    <Koto category={this.state.category} key={this.state.koto.id} koto_number={this.state.koto.number} color={this.state.koto.color}/>
                    <Control changeStopStateCallback={this.changeStopStateCallback.bind(this)}/>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default App;
