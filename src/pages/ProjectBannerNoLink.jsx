import React from 'react';
import './Projects.css';

export default function ProjectBannerNoLink({ title, description, imageUrl }) {
    return (
        <div className="project-banner-no-link">
            <img src={imageUrl} alt={title} className="project-banner-image" />
            <div className="project-banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
