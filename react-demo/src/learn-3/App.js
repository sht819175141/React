import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';


class Learn extends React.Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <p>开始学习之路({this.props.name})</p>
                <p>每天学习一点，每天进步一点</p>
            </header>
        </div>;
    }
}

export default Learn
