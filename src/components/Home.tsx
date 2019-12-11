import React from "react";
import { Bubble } from 'react-chartjs-2';
import { Pane } from 'evergreen-ui';

export default class Home extends React.Component {
    render() {
        const data = {
            datasets: [
                {
                    data: [
                        {x: 0, y: 0, r: 0},
                        {x: 10, y: 10, r: 0},
                        {x: 0, y: 10, r: 0},
                        {x: 10, y: 0, r: 0},
                        {x: 5, y: 5, r: 20},
                        {x: 6, y: 6, r: 10},
                        {x: 4, y: 6, r: 20},
                        {x: 6, y: 4, r: 10},
                        {x: 4, y: 4, r: 20},
                        {x: 1, y: 1, r: 10},
                        {x: 1, y: 1, r: 20},
                        {x: 1, y: 2, r: 10},
                        {x: 3, y: 3, r: 10}
                    ],
                    backgroundColor: "red",
                    hoverBackgroundColor: "#ff6384"
                }
            ]
        }
        return <>
            <div className="roygbv"></div>
            <div className="bubble-wrap">
                <div className="bubble-container">
                    <Bubble
                        data={data}
                        width={100}
                        height={100}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                        display: false,
                                    },
                                    ticks: {
                                        display: false //this will remove only the label
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                        display: false,
                                    },
                                    ticks: {
                                        display: false //this will remove only the label
                                    }
                                }]
                            },
                            legend: {
                                display: false
                            },
                            tooltips: {
                                enabled: false
                            }
                        }}
                    />
                </div>
            </div>
        </>
    }
}
