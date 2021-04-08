import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.scss'],
})
export class SliderComponent implements OnInit {

   slideOpts = {
    initialSlide: 2,
    slidesPerView: 2,
    speed: 700,
    autoHeight:true,
    disableOnInteraction: true,
    waitForTransition: true,
    centeredSlides: true,
    autoplay: { delay: 5000 },
    spaceBetween:0
  };

  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 700,
    disableOnInteraction: true,
    waitForTransition: true,
    centeredSlides: true,
    autoplay: { delay: 5000 },
    spaceBetween: 5
  };

  constructor() { }

  ngOnInit() { 

    console.log("Slider Loaded..")
  }



}
