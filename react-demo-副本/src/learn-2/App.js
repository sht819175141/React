import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>开始学习之路(2)</p>
                <p>每天学习一点，每天进步一点</p>
            </header>
        </div>
    );
}

const div = document.createElement('div');
ReactDom.render(< App/>, div);
ReactDom.unmountComponentAtNode(div);

export default App;
