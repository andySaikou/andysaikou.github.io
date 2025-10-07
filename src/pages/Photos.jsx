import './Photos.css';

export default function Photos() {
    const photos = [
        [
            { src: "/photos/DSCF0238.webp", caption: "Mariaberget, Stockholm" },
            { src: "/photos/DSCF1030.webp", caption: "Mariaberget, Stockholm" },
        ],
        [
            { src: "/photos/DSCF1170.webp", caption: "Gamla Stan, Stockholm" },
            { src: "/photos/DSCF0687.webp", caption: "Paviljongsplan, Visby" },
        ],
        [
            { src: "/photos/DSCF0643.webp", caption: "Town center, Visby" },
            { src: "/photos/DSCF0644.webp", caption: "Town center, Visby" },
        ],
        [
            { src: "/photos/lunar-eclipse.webp", caption: "Lunar Eclipse, Sept 2025" },
            { src: "/photos/DSCF0109.webp", caption: "Hastings, East Sussex" },
        ],
        [
            { src: "/photos/DSCF0012.webp", caption: "South Haikou, Haihan" },
            { src: "/photos/DSCF0027.webp", caption: "Richmond Park, London" },
            { src: "/photos/DSCF0320.webp", caption: "Saltburn, North Yorkshire" },
        ],
        [
            { src: "/photos/DSCF0126.webp", caption: "Greenwich, London" },
            { src: "/photos/DSCF0040.webp", caption: "Takaya Shrine, Kan-onji" },
        ],
        [
            { src: "/photos/DSCF0068.webp", caption: "Seto Inland Sea, Takamatsu" },
            { src: "/photos/DSCF0294.webp", caption: "Kawaramachi, Kyoto" },
        ],
        [
            { src: "/photos/0017_14A.webp", caption: "Osaka Station, Osaka (film)" },
            { src: "/photos/0036_33A.webp", caption: "Umeda, Osaka (film)" },
            { src: "/photos/DSCF0127.webp", caption: "Saiko-ji Temple, Shodoshima" },
        ],
        [
            { src: "/photos/000055.webp", caption: "鼓楼 Gu Lou, Beijing (film)" },
            { src: "/photos/000045.webp", caption: "后海 Hou Hai, Beijing (film)" },
            { src: "/photos/000048.webp", caption: "后海 Hou Hai, Beijing (film)" },
        ],
        [
            { src: "/photos/DSCF0102.webp", caption: "Soho, London" },
            { src: "/photos/DSCF0254.webp", caption: "South Kensington, London" },
            { src: "/photos/DSCF0538.webp", caption: "London Bridge, London" },
        ],
        [
            { src: "/photos/DSCF0110.webp", caption: "Dover, Kent" },
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