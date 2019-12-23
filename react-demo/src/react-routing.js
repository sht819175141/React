import React from 'react';
import {Link} from 'react-router'
// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
export const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                {/* 把 <a> 变成 <Link> */}
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>

                {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
                {this.props.children}
            </div>
        )
    }
})


