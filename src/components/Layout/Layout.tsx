import React from 'react';
import Navigation from '../Navigation/Navigation';
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
                    <Navigation />
                </Pane>
            </>
        )
    }
}
