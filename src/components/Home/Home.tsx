import React from "react";
import './Home.scss';

type HomeProps = { }

const Home: React.FC<HomeProps> = ({

}: HomeProps) => {
    return (
        <>
            <div className="roygbv color-bar"></div>
            <div className="typewriter">
                <h1>Hello</h1>
                <p>I'm Liz, a software engineer</p>
            </div>
        </>
    );
};

export default Home;
