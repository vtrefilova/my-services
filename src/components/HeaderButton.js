import React, { useState } from 'react';

export const HeaderButton = ({ key, className, text, handleModal}) => {
    const onButtonClick = () => {
        if (handleModal) {
            handleModal()
        }
    }

    return (
        <button 
            key={key}
            className={className}
            onClick={onButtonClick}>
            {text}
        </button>
    );
}

