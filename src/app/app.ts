import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { Transaction } from './data/interfaces/transaction.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  imports: [MatTableModule, MatPaginatorModule],
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

  ngAfterViewInit() {
    this.dataSource.data = this.generateMockData();
    this.dataSource.paginator = this.paginator;
  }

  generateMockData(): Transaction[] {
    const mock: Transaction[] = [];
    for (let i = 0; i < 40; i++) {
      mock.push({
        date: '10/09/24 18:16',
        iziId: 1388223 + i,
        phone: '+7 777 777-77-77',
        documentNumber: (25843594321 + i).toString(),
        paymentItem: 'Пополнение баланса',
        amount: '5.00 ₽',
        author: 'Admin1',
        cashbox: 'Нал.',
        balance: 'Игровой',
        dock: 'Link',
        comment: '--',
      });
    }
    return mock;
  }
}
