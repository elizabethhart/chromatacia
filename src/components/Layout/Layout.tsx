import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Pane } from "evergreen-ui";
import './Layout.scss';

type LayoutProps = { }; 

const Layout: React.FC<LayoutProps> = ({
    
}: LayoutProps) => {
    return (
        <>
            <Pane className="layoutPane">
                <Navigation />
            </Pane>
        </>
    );
};

export default Layout;
