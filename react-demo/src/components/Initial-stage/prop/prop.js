import React from 'react';
import './prop.css';

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}

class prop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <Welcome name="world"/>
            </header>
        </div>;
    }
}


export default prop;
