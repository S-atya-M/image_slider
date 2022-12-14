import React,{useState} from 'react';
import { SliderData }  from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
  const [current,SetCurrent] = useState(0)
  const length = slides.length
  const nextSlide = () => {
    SetCurrent(current === length-1?0:current+1)
  };
  //console.log(current);
  const prevSlide = () => {
    SetCurrent(current === 0?length-1:current-1)
  };
  console.log(current)

if(!Array.isArray(slides)||slides.length<=0 )
{
  return null;
}
  return (
    <section className="slider"> 
    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
    <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide,index) => {
        return (
          <div className={index === current ? 'slide active':'slide'} key={index}>
          {index === current && (<img src={slide.image} alt = "travel" className="Image"/>)} 
          </div>
        )  

      })}

    </section>
 );
};

export default ImageSlider;