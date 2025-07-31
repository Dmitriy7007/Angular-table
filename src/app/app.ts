import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { Transaction } from './data/interfaces/transaction.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PhonePipe } from './helpers/pipes/phone.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { generateMockData } from './helpers/utils/generateMockData';
import { PaginationComponent } from './components/pagination/pagination';

@Component({
  selector: 'app-root',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    DatePipe,
    PhonePipe,
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    PaginationComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('Angular-table');

  displayedColumns: string[] = [
    'date',
    'iziId',
    'phone',
    'documentNumber',
    'paymentItem',
    'amount',
    'author',
    'cashbox',
    'balance',
    'dock',
    'comment',
  ];

  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const data = generateMockData();
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addData() {
    const data = this.dataSource.data;
    const randomIndex = Math.floor(Math.random() * data.length);
    this.dataSource.data = [...data, { ...data[randomIndex] }];
  }
}
