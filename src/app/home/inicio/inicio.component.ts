import { Component, OnInit } from '@angular/core';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'iso-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  title = 'paginaprincipal';
  options = {fullWidth: true,
  indicators: true};
  ngOnInit() {
    var elems = document.querySelectorAll('.carousel, .slider, .materialboxed');
    //var instan = M.Carousel.init(elems, this.options);
    var instances = M.Slider.init(elems, this.options);
  }

}
