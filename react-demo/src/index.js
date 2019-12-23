import React from 'react';
import {Router, Route} from 'react-router'
import {App} from './react-routing';

import './index.css';
import Learn_1 from './learn-1/App';
import Learn_2 from './learn-2/App';
import Learn_3 from './learn-3/App'
import Learn_4 from './learn-4/App'
import Learn_5 from './learn-5/App'
// import Clock from './learn-6/App'
// import Learn_7 from './learn-7/App'
import Learn_8 from './learn-8/App'
import Learn_9 from './learn-9/App'

import * as serviceWorker from './serviceWorker';

// function App() {
//     return (
//         <div>
//             <Clock/>
//             <Clock/>
//             <Clock/>
//         </div>
//     )
//
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Learn_3 name='3'/>, document.getElementById('root'));
// ReactDOM.render(<Learn_5/>, document.getElementById('root'));


// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={Learn_9}/>
            <Route path="inbox" component={Learn_8}/>
        </Route>
    </Router>
), document.getElementById('root'))

// ReactDOM.render(<Learn_9/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
