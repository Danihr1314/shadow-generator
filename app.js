// range
const xOffset = document.querySelector('.hoffset-value');
const rangeXOffset = document.getElementById('h-offset');

const yOffset = document.querySelector('.voffset-value');
const rangeYOffset = document.getElementById('v-offset');

const blur = document.querySelector('.blradius-value');
const rangeBlur = document.getElementById('blur-rad');

const spread = document.querySelector('.spradius-value');
const rangeSpread = document.getElementById('spread-rad');

const element = document.querySelector('.square');

const width = document.querySelector('.width-value');
const rangeWidth = document.getElementById('sqr-width');

const height = document.querySelector('.heigth-value');
const rangeHeight = document.getElementById('sqr-heigth');

const radius = document.querySelector('.radius-value');
const rangeRadius = document.getElementById('border-rad');

const backgroundColor = document.getElementById('bck-color');
const shadowColor = document.getElementById('shadow-color');

const data = undefined;

rangeWidth.addEventListener('input', (e)=>{
  width.innerHTML = e.target.value;
  element.style.width = `${e.target.value}rem`
})

rangeHeight.addEventListener('input', (e)=>{
  height.innerHTML = e.target.value;
  element.style.height = `${e.target.value}rem`
})

rangeRadius.addEventListener('input', (e)=>{
  radius.innerHTML = e.target.value;
  element.style.borderRadius = `${e.target.value}rem`
})

backgroundColor.addEventListener('input', (e)=>{
  element.style.backgroundColor = e.target.value;
})

