import React from "react";
import axios from 'axios';
import { Bubble } from 'react-chartjs-2';
import { Heading, Pane, Paragraph } from 'evergreen-ui';
import './Home.scss';

require('dotenv').config();

type MyProps = { };
type MyState = {
    image: string,
    description: string,
    title: string
};

export default class Home extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            image: '',
            description: '',
            title: ''
        };
    }

    componentDidMount() {
        // https://api.nasa.gov/index.html#browseAPI
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=` + process.env.REACT_APP_NASA_KEY)
            .then((res: any) => {
                const item = res.data;
                this.setState({
                    image: item.url,
                    description: item.explanation,
                    title: item.title
                });
            })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    render() {
        const data = {
            datasets: [
                {
                    data: [
                        {x: 1, y: 10, r: 1},
                        {x: 2, y: 10, r: 2},
                        {x: 3, y: 10, r: 3},
                        {x: 4, y: 10, r: 4},
                        {x: 5, y: 10, r: 5},
                        {x: 6, y: 10, r: 6},
                        {x: 7, y: 10, r: 7},
                        {x: 8, y: 10, r: 8},
                        {x: 9, y: 10, r: 9},
                        {x: 10, y: 10, r: 10},
                        {x: 11, y: 10, r: 9},
                        {x: 12, y: 10, r: 8},
                        {x: 13, y: 10, r: 7},
                        {x: 14, y: 10, r: 6},
                        {x: 15, y: 10, r: 5},
                        {x: 16, y: 10, r: 4},
                        {x: 17, y: 10, r: 3},
                        {x: 18, y: 10, r: 2},
                        {x: 19, y: 10, r: 1},
                    ],
                    backgroundColor: "red",
                    hoverBackgroundColor: "#ff6384"
                }
            ]
        }
        return <>
            <div className="roygbv color-bar"></div>
            <Pane
                className="image-wrapper"
            >
                <Heading size={500}>{this.state.title}</Heading>
                <img className="picture-of-the-day" src={this.state.image} />
                <Paragraph size={300}>{this.state.description}</Paragraph>
            </Pane>
            {/*<div className="bubble-wrap">*/}
            {/*    <div className="bubble-container">*/}
            {/*        <Bubble*/}
            {/*            data={data}*/}
            {/*            width={100}*/}
            {/*            height={100}*/}
            {/*            options={{*/}
            {/*                responsive: true,*/}
            {/*                maintainAspectRatio: true,*/}
            {/*                scales: {*/}
            {/*                    xAxes: [{*/}
            {/*                        gridLines: {*/}
            {/*                            color: "rgba(0, 0, 0, 0)",*/}
            {/*                            display: false,*/}
            {/*                        },*/}
            {/*                        ticks: {*/}
            {/*                            display: false //this will remove only the label*/}
            {/*                        }*/}
            {/*                    }],*/}
            {/*                    yAxes: [{*/}
            {/*                        gridLines: {*/}
            {/*                            color: "rgba(0, 0, 0, 0)",*/}
            {/*                            display: false,*/}
            {/*                        },*/}
            {/*                        ticks: {*/}
            {/*                            display: false //this will remove only the label*/}
            {/*                        }*/}
            {/*                    }]*/}
            {/*                },*/}
            {/*                legend: {*/}
            {/*                    display: false*/}
            {/*                },*/}
            {/*                tooltips: {*/}
            {/*                    enabled: false*/}
            {/*                }*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    }
}
