import React from 'react';
import './state.css';


class state extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {name: '开始学习React'};
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <p>{this.state.name}</p>
            </header>
        </div>;
    }
}

export default state;
