import React from 'react';
import ImageComparison from 'image-comparison';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
    return (
        <ImageComparison 
            leftImage={beforeImage} 
            rightImage={afterImage} 
            sliderLineWidth={2} 
            sliderButtonWidth={30} 
            sliderButtonHeight={30} 
            handleSliderDrag={null} 
            handleSliderHover={null} 
            handleSliderClick={null} 
        />
    );
};

export default BeforeAfterSlider;

