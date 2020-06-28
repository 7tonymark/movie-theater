import React,{useState} from 'react';
import './SliderLatest.scss';
import ImgComp from './ImgComp';
import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import i4 from "./pics/4.jpg";
import i5 from "./pics/5.jpg";
import i6 from "./pics/6.jpg";
import i7 from "./pics/7.jpg";
import i8 from "./pics/8.jpg";
import i9 from "./pics/9.jpg";
import i10 from "./pics/10.jpg";
import i11 from "./pics/11.jpg";
import i12 from "./pics/12.jpg";
import i13 from "./pics/13.jpg";
import i14 from "./pics/14.jpg";
import i15 from "./pics/15.jpg";
import i16 from "./pics/16.jpg";
import i17 from "./pics/17.jpg";
import i18 from "./pics/18.jpg";
import i19 from "./pics/19.jpg";
import i20 from "./pics/20.jpg";




function Slider (){
    let sliderArr = [
    <ImgComp src={i20} />,
    <ImgComp src={i19} />,
    <ImgComp src={i18} />,
    <ImgComp src={i17} />,
    <ImgComp src={i16} />,
    <ImgComp src={i15} />,
    <ImgComp src={i14} />,
    <ImgComp src={i13} />,
    <ImgComp src={i12} />,
    <ImgComp src={i11} />,
    <ImgComp src={i10} />,
    <ImgComp src={i9} />,
    <ImgComp src={i8} />,
    <ImgComp src={i7} />,
    <ImgComp src={i6} />,
    <ImgComp src={i5} />,
    <ImgComp src={i4} />,
    <ImgComp src={i3} />,
    <ImgComp src={i2} />,
    <ImgComp src={i1} />
];
    const [x, setX] = useState(0);
    const goLeftLatest = () => {
        console.log(x)
        x=== 0 ? setX(-100 * (sliderArr.length - 10)) : setX(x + 100);
    };
    const goRightLatest = () => {
        console.log(x);
        (x=== -100*(sliderArr.length - 10))? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider"> {
            sliderArr.map((item, index) => {
                return (
                    <div key={index}className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeftLatest"  onClick={goLeftLatest}><i id="left-button"  class="fas fa-chevron-left"></i></button>
            <button id="goRightLatest" onClick={goRightLatest}><i id="left-button"  class="fas fa-chevron-right"></i></button>
        </div>
    )
};

export default Slider;