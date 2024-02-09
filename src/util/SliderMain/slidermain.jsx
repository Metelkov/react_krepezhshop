import React from "react";
import classes from "../SliderMain/styles.module.css";
import gayka from "../SliderMain/SliderMainPic/gayka.jpg"
import gvozd from "../SliderMain/SliderMainPic/gvozd.jpg"
import vint from "../SliderMain/SliderMainPic/vint.jpg"



export const SliderMain = () => {


const slider = document.querySelector('.sliderMainWrap');
const sliderImages = document.querySelectorAll('.sliderPic');
const sliderLine = document.querySelector('.sliderLineWrap');

const sliderBtnNext = document.querySelector('.sliderMainForw');
const sliderBtnPrew = document.querySelector('.sliderMainPrew');

let sliderCount = 0;
// let sliderWidth = slider.offsetWidth;

const ref = useRef(null);
let sliderWidth = ref.current.offsetWidth;


sliderBtnNext.addEventListener('click', nextSlider);
sliderBtnPrew.addEventListener('click', prevSlider);


function nextSlider() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollSlider();
}

function prevSlider() {
    sliderCount--;
    if (sliderCount < 0 ) {
        sliderCount = sliderImages.length -1;
    }
    rollSlider();
}

function rollSlider() {
    sliderLine.computedStyleMap.transform = `translateX(${-sliderCount * sliderWidth})`;
}

setInterval(() => {
    nextSlider()
}, 1000)

    return <div className={classes.sliderMainWrap}> {/*slider*/}
        <div className={classes.sliderLineWrap}>     {/*slider___line*/}
            <img className={classes.sliderPic} src={gayka} alt="" />     {/*slider___img*/}
            <img className={classes.sliderPic} src={gvozd} alt="" />
            <img className={classes.sliderPic} src={vint} alt="" />
        </div>

        <button className={classes.sliderMainPrew}> &#10148 </button>
        <button className={classes.sliderMainForw}> +++ </button>
    </div>
}