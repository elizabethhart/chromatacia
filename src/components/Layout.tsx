import React from 'react';
import Navbar from './Navbar';
import { Pane } from "evergreen-ui";

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
