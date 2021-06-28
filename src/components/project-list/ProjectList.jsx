import React from 'react';
import {Section} from './projectListStyles'
import Project from '../project/Project';
import { data } from './data';

const ProjectList = () => {

    return (
        <Section>
            {data.map((project, index) => {
                const { text, icon, bgS, bgM, bgL, route } = project;
                return (
                    <Project
                        key={index}
                        text={text}
                        icon={icon}
                        bgs={bgS}
                        bgm={bgM}
                        bgl={bgL}
                        route={route}
                    />
                );
            })}
        </Section>
    );
};

export default ProjectList;
