import React from 'react';
import './router-prop.css';

class routerProp extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <p>{this.props.location.state.name}</p>
            </header>
        </div>;
    }
}

export default routerProp;
