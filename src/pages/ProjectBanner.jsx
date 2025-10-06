import React from 'react';

export default function ProjectBanner({ title, description, link, imageUrl }) {
    // The entire banner is now wrapped in an <a> tag to make it a clickable link.
    return (
        <a href={link} className="project-banner">
            {/* The image is on the left side */}
            <img src={imageUrl} alt={title} className="project-banner-image" />

            {/* The text content is on the right side */}
            <div className="project-banner-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </a>
    );
}
