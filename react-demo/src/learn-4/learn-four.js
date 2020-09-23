import React from 'react';
import ReactDOM from 'react-dom';

import './learn-four.css';


class learnFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '4'};
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <p>开始学习之路({this.state.name})</p>
                <p>每天学习一点，每天进步一点</p>
            </header>
        </div>;
    }
}

export default learnFour;
