import React from "react"
import { useHistory } from 'react-router-dom'
import './Vermillion.scss';

type VermillionProps = { }; 

const Vermillion: React.FC<VermillionProps> = ({
    
}: VermillionProps) => {
    return (
        <>
            <div className="vermillion color-bar"></div>
        </>
    );
};

export default Vermillion;
