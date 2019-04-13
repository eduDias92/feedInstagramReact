import React from 'react';
/**
 * Renderiza a imagem
 */
export default props => (
    <div className="boxImage">
        <img src={props.imageSource} className="imgPost"/>
    </div>
);