import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

class Test extends React.Component {
    constructor(props) {
        super(props);
        // this.clickTest = this.clickTest.bind(this);
        this.state = {date: new Date()};
    }

    clickTest(event, val) {
        alert(val)
    }

    render() {
        return (
            <ul>
                {numbers.map((post) =>
                    // <li onClick={this.clickTest(post)} key={post}>
                    //     {post}
                    // </li>
                    // <li onClick={(e) => { this.clickTest(e, post) }} key={post}>
                    //     {post}
                    // </li>
                    <li onClick={this.clickTest.bind(this, post)} key={post}>
                        {post}
                    </li>
                )}
            </ul>
        );
    }
}

export default Test;
