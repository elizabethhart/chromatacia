import React from "react";

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return <>
            <div className="roygbv color-bar"></div>
            <div className="typewriter">
                <h1>Hello</h1>
                <p>I'm Liz, a software engineer</p>
            </div>
        </>
    }
}
