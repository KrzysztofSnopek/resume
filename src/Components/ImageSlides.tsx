import { useState } from "react";
import {
  slideImage,
  imgContainer,
  arrow,
  slide,
} from "../Styles/StyleImageSlider";

const ImageSlider = ({ Slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideBackground = {
    ...slideImage,
    backgroundImage: `url(${Slides[currentIndex]})`,
  };

  return (
    <div style={imgContainer}>
      <div style={slide} className="slide-styles">
        <div style={arrow} onClick={goToPrevious}>
          ❰
        </div>

        <div style={slideBackground}></div>

        <div style={arrow} onClick={goToNext}>
          ❱
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
