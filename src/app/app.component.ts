import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iso-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  options = {fullWidth: true,
  indicators: true};

  ngOnInit() {}
}
