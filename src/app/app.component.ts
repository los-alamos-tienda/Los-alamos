import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


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
