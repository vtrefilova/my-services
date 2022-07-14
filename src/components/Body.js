import React from "react";
import { CardContainer } from "./CardContainer";
import { BodyHeader } from "./BodyHeader";

export const Body = () => {
    return (
        <div className='app-body'>
            <BodyHeader/>
            <CardContainer/>
        </div>
    );
}

