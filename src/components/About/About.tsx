import React from "react";
import {Avatar, Button, Heading, Icon, Pane, Paragraph, Text, UnorderedList, ListItem} from "evergreen-ui";
import './About.scss';

export default class About extends React.Component {
    render() {
        return <>
            <div className="about color-bar"></div>
            <Pane clearfix>
                <Pane
                    elevation={1}
                    float="left"
                    background="overlay"
                    margin={50}
                    padding={100}
                    height={500}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    borderRadius={10}
                >
                    <Avatar
                        src="https://www.refinery29.com/images/8946936.jpg?format=webp&width=720&height=864&quality=85"
                        name="Elizabeth Hart"
                        size={150}
                    />
                    <div
                        className="info-wrapper"
                    >
                        <Heading size={500} color="lightblue"> Elizabeth Hart</Heading>
                        <Paragraph size={300} color="white">Software Engineer</Paragraph>
                        <Paragraph size={300} color="white">Chicago, IL</Paragraph>
                        <Button
                            is="a"
                            href="mailto:elizabethwhart@example.com"
                            appearance="minimal"
                        >
                            Email &nbsp; <Icon icon="envelope" color="info" />
                        </Button>
                    </div>
                </Pane>
                <Pane
                    elevation={1}
                    float="left"
                    background="overlay"
                    margin={50}
                    padding={10}
                    height={500}
                    width={500}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    borderRadius={10}
                >
                    <Heading
                        color="lightblue"
                    >
                        New Pane
                    </Heading>
                </Pane>
            </Pane>
        </>
    }
}
