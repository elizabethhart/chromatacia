import React from "react";
import { Button, Heading, Pane } from "evergreen-ui";
import ColorWheel from "../ColorWheel/ColorWheel";
import './Navbar.scss';

export default class Navbar extends React.Component {
    render() {
        return <>
            <Pane display="flex" padding={16} borderRadius={3}>
                <Pane flex={1} alignItems="center" display="flex">
                    <ColorWheel />
                    <Heading size={600} color="#425A70">
                        Chromatacia
                    </Heading>
                </Pane>
                <Pane>
                    <Button is="a" href="/" appearance="minimal">Home</Button>
                    <Button is="a" href="/vermillion" appearance="minimal">Vermillion</Button>
                    <Button is="a" href="/highsaffron" appearance="minimal">High Saffron</Button>
                    <Button is="a" href="/emeraldcity" appearance="minimal">Emerald City</Button>
                    <Button is="a" href="/eastcarmine" appearance="minimal">East Carmine</Button>
                    <Button is="a" href="/about" appearance="minimal">About</Button>
                </Pane>
            </Pane>
        </>
    }
}
