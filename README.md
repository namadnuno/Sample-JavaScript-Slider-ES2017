# Sample JavaScript ES2017 Slider

## Introduction

In one of my projects i needed a costum slider, and i always wanted to build my own slider for learning propouses. So i present to you my solution, that solve my problems and suit my needs.

## Installation

In order to install this package you have to follow this steps: 
1. Download the package with NPM: 
```
npm i sample-javascript-slider-es2017
```
2. Import the slider in your js code, like:
```
import Slider from 'sample-javascript-slider-es2017';
```
3. Inicialize the slider
```
let slider = new Slider({
    nextButton: 'recent--right',
    previousButton: 'recent--left',
    eachItemClass: 'slider--item',
    sliderID: 'recent--work',
    dotClass: 'recent--work--dot--',
    addClassOnCurrent: 'active animated fadeInLeft',
    addClassOnPrevious: 'previous animated fadeIn',
    duration: 5000
});

```

# Enjoy



