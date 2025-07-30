import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { Transaction } from './data/interfaces/transaction.interface';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PhonePipe } from './helpers/pipes/phone.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';

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

  dataSource = new MatTableDataSource<Transaction>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Transaction>;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.data = this.generateMockData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  generateMockData(): Transaction[] {
    const mock: Transaction[] = [];
    for (let i = 0; i < 40; i++) {
      mock.push({
        date: '2024-09-10 18:16',
        iziId: 1388223 + i,
        phone: '+77777777777',
        documentNumber: (25843594321 + i).toString(),
        paymentItem: 'Пополнение баланса',
        amount: '5.00',
        author: 'Admin1',
        cashbox: 'Нал.',
        balance: 'Игровой',
        dock: 'Link',
        comment: '--',
      });
    }
    return mock;
  }

  addData() {
    const data = this.dataSource.data;
    const randomIndex = Math.floor(Math.random() * data.length);
    this.dataSource.data = [...data, { ...data[randomIndex] }];
  }
}
