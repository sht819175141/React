import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Learn_1 from './learn-1/App';
import Learn_2 from './learn-2/App';
import Learn_3 from './learn-3/App'
import Learn_4 from './learn-4/App'
import Learn_5 from './learn-5/App'
import Clock from './learn-6/App'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Learn_3 name='3'/>, document.getElementById('root'));
// ReactDOM.render(<Learn_5/>, document.getElementById('root'));
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
