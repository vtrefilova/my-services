import React from "react";
import { CardContainer } from "./CardContainer";
import { BodyHeader } from "./BodyHeader";

export const MainPage = () => {
    return (
        <div className='app-body'>
            <BodyHeader/>
            <CardContainer/>
        </div>
    );
}

