import React from 'react';

export default function HomeBanner({ link, imageUrl, imageAlt }) {
    return (
        <a href={link} className="home-banner">
            <img src={imageUrl} alt={imageAlt} className="home-banner-image" />
        </a>
    );
}
