import React from 'react';
import {Article} from './featureStyles'

const Feature = ({ image, title, text }) => {
    return (
        <Article>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </Article>
    );
};

export default Feature;
