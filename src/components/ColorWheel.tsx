import React from "react";
import './ColorWheel.css';

export default class ColorWheel extends React.Component {
    render() {
        return <>
                <div id="colorWheel">
                    <span className="color01"></span>
                    <span className="color02"></span>
                    <span className="color03"></span>
                    <span className="color04"></span>
                    <span className="color05"></span>
                    <span className="color06"></span>
                    <span className="color07"></span>
                    <span className="color08"></span>
                    <span className="color09"></span>
                    <span className="color10"></span>
                </div>
            </>
    }
}
