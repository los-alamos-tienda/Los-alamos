import { Component, OnInit } from '@angular/core';
import * as M from '../carusel/materialize/js/materialize.min.js';
@Component({
  selector: 'iso-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  title = 'carousel';
  options = {fullWidth: true,
    indicators: true};
  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.carousel, .slider, .materialboxed');
    //var instan = M.Carousel.init(elems, this.options);
    var instances = M.Slider.init(elems, this.options);
  }

}
