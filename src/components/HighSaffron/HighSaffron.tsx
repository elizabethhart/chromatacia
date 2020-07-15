import React from "react";
import './HighSaffron.scss';

type HighSaffronProps = { }

const HighSaffron: React.FC<HighSaffronProps> = ({

}: HighSaffronProps) => {
    return (
        <>
            <div className="highsaffron color-bar"></div>
        </>
    );
};

export default HighSaffron;