import React from 'react';
import './Projects.css';

export default function ProjectBanner({ title, description, link, imageUrl }) {
    return (
        <a href={link} className="project-banner">
            <img src={imageUrl} alt={title} className="project-banner-image" />
            <div className="project-banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    );
}

