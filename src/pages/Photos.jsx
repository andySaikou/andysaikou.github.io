import './Photos.css';

export default function Photos() {
    const photos = [
        [
            { src: "/photos/DSCF1170.webp", caption: "Gamla Stan, Stockholm" },
            { src: "/photos/DSCF0687.webp", caption: "Paviljongsplan, Visby" },
        ],
        [
            { src: "/photos/DSCF0012.webp", caption: "South Haikou, Haihan" },
            { src: "/photos/DSCF0027.webp", caption: "Richmond Park, London" },
            { src: "/photos/DSCF0320.webp", caption: "Saltburn, North Yorkshire" },
        ],
        [
            { src: "/photos/DSCF0102.webp", caption: "Soho, London" },
            { src: "/photos/DSCF0254.webp", caption: "South Kensington, London" },
            { src: "/photos/DSCF0538.webp", caption: "London Bridge, London" },
        ],
        [
            { src: "/photos/DSCF0110.webp", caption: "Dover, London" },
            { src: "/photos/DSCF0031.webp", caption: "Tower Pier, London" },
        ],
    ];

    return (
        <div className="photos-page">
            <h1>Photography</h1>
            <div className="photo-rows">
                {photos.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`photo-row photo-row-${row.length}`}
                    >
                        {row.map((photo, index) => (
                            <div className="photo-card" key={index}>
                                <div className="photo-wrapper">
                                    <img src={photo.src} alt={photo.caption} />
                                </div>
                                <p className="photo-caption">{photo.caption}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}