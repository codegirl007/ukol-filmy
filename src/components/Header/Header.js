import React from 'react';
import camera from './camera.svg';

export const Header = () => {

    return (
    <h1 style={{textAlign: "center"}}>
      <img className="logo" src={camera} alt="Logo" />
        V našem kině právě uvádíme
    </h1>
    )
}