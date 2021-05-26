import React, {Component} from 'react';
import Announcement from "./announcement/announcement";
import Nigation from "./nigation/nigation";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Announcement/>
                <Nigation/>
            </div>
        )
    }
}
