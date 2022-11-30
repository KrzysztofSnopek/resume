import { useState } from "react";
import '../Styles/ImageSlides.css'

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
    backgroundColor: 'yellow',
    height: '500px',
    maxWidth: '700px',
    backgroundImage: `url(${Slides[currentIndex]})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    // display: 'flex',
    // justifySelf: 'center'
  }

  return (
    <div className="slider">
      <div className="img-box">
        <div className="left-arrow" onClick={goToPrevious}>
          ❰
        </div>
        <div className="right-arrow" onClick={goToNext}>
          ❱
        </div>
        <div style={slideBackground} className="slide-styles"></div>
      </div>
    </div>  
  );
};

export default ImageSlider;