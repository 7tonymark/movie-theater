import React from 'react';
import "./ImgComp.css";
import Description from './Description';


 const ImgComp = ({src}) => {

    return (
        <div style={{height: 90 + "%"}} className="main-box">
            <div className="box">
            <h4 style={{color: "white", padding: 0, margin: 0, border: 0}}>Movie title</h4>
            <button onClick={Description}><img id="myDropdown" src={src} alt="slide-images" className="images"></img></button>
            </div>
        </div>
    ) 

}


export default ImgComp;