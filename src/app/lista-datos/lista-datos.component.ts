import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListaDatosDataSource } from './lista-datos-datasource';


@Component({
  selector: 'iso-lista-datos',
  templateUrl: './lista-datos.component.html',
  styleUrls: ['./lista-datos.component.css']
})
export class ListaDatosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListaDatosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'producto', 'genero', 'cantidad'];

  ngAfterViewInit() {
    this.dataSource = new ListaDatosDataSource(this.paginator, this.sort);
  }
}
