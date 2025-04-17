import React, { useState, useEffect } from 'react';
import styles from './featuresSlider.module.css'

const FeatureSlider = () => {
    const images = [
        'image/sliderFeatures/slider1.jpg',
        'image/sliderFeatures/slider2.png',
        'image/sliderFeatures/slider3.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <img
                className={styles.imageSlider}
                src={images[currentIndex]}
                alt="slider"
            />
        </div>
    );
};
export default FeatureSlider