import React from 'react';
import {Article} from './projectStyles'

const Project = ({ text, icon, bgs, bgm, bgl, route }) => {
    return (
        <Article to={route} bgs={bgs} bgm={bgm} bgl={bgl}>
            <div>
                <h2>{text} design</h2>
                <p>
                    view projects <img src={icon} alt='arrow' />
                </p>
            </div>
        </Article>
    );
};

export default Project;
