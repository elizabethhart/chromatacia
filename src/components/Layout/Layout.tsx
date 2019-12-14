import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Pane } from "evergreen-ui";
import './Layout.scss';

export default class Layout extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render()
    {
        return (
            <>
                <Pane className="layoutPane">
                    <Navbar />
                </Pane>
            </>
        )
    }
}
