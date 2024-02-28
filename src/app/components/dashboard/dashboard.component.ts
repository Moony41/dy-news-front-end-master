import { BooleanInput } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements AfterViewInit{

  public displayedColumns: any[] = ['select', 'title', 'type', 'author']
  public selection = new SelectionModel<any>(true, []);

  public listNews = new MatTableDataSource<any>([
    { id: 1, title: 'news 21', type: 'politics', author: 'john' },
    { id: 2, title: 'news 1', type: 'food', author: 'alfred' },
    { id: 3, title: 'news 12', type: 'health', author: 'bjorn' },
    { id: 4, title: 'news 51', type: 'race', author: 'jack' },
    { id: 5, title: 'news 51', type: 'race', author: 'jack' },
    { id: 6, title: 'news 51', type: 'race', author: 'jack' },
    { id: 7, title: 'news 51', type: 'race', author: 'jack' },
    { id: 8, title: 'news 51', type: 'race', author: 'jack' },
    { id: 9, title: 'news 51', type: 'race', author: 'jack' },
    { id: 10, title: 'news 51', type: 'race', author: 'jack' },
    { id: 11, title: 'news 51', type: 'race', author: 'jack' },
    { id: 12, title: 'news 51', type: 'race', author: 'jack' },
    { id: 13, title: 'news 1', type: 'food', author: 'anne' }
  ]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.listNews.paginator = this.paginator;
  }

  public toggleAllRows() {

    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.listNews.data);
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.listNews.data.length;
    return numSelected === numRows;
  }

  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    console.log('data selected \n', this.selection.isSelected(row));

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  public rowSelected(row: any):BooleanInput {
    return this.selection.isSelected(row);
  }
}
