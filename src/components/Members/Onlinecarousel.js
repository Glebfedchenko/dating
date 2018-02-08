import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const OnlineCarousel = ({ members }) =>
    <OwlCarousel className="owl-theme"
        loop={true}
        margin={10}
        dots={false}
        items={4}
        mouseDrag={false}
        touchDrag={false}
        autoplay={true}>
        {members}
    </OwlCarousel>

export default OnlineCarousel