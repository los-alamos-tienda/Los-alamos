import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListaDatosItem {
  producto: string;
  id: number;
  cantidad: number;
  genero: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListaDatosItem[] = [
  {id: 1, producto: 'Traje de bano', genero: 'Masculino', cantidad: 34},
  {id: 2, producto: 'Traje de bano', genero: 'Femenino', cantidad: 20},
  {id: 3, producto: 'Gorras speedo', genero: 'Masculino', cantidad: 34},
  {id: 4, producto: 'Gorras speedo', genero: 'Femenino', cantidad: 16},
  {id: 5, producto: 'Lentes speedo', genero: 'No hay', cantidad: 10},
  {id: 6, producto: 'Lentes de aumento', genero: 'No hay', cantidad: 4},
  {id: 7, producto: 'Gorras personalizadas', genero: 'No hay', cantidad: 31},
  {id: 8, producto: 'Mallas fasqui', genero: 'Masculino', cantidad: 21},
  {id: 9, producto: 'Mallas fasqui', genero: 'Femenino', cantidad: 39},
  {id: 10, producto: 'Set completo Hydrogen', genero: 'No hay', cantidad: 37},
];

/**
 * Data source for the ListaDatos view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListaDatosDataSource extends DataSource<ListaDatosItem> {
  data: ListaDatosItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListaDatosItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListaDatosItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListaDatosItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'producto': return compare(a.producto, b.producto, isAsc);
        case 'genero': return compare(a.genero, b.genero, isAsc);
        case 'cantidad': return compare(+a.cantidad, +b.cantidad, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
