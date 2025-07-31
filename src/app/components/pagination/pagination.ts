import { Component, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class PaginationComponent {
  @Input({ required: true }) paginator!: MatPaginator;

  get pageCount(): number {
    return Math.ceil(this.paginator.length / this.paginator.pageSize);
  }

  getPageRange(): number[] {
    const total = this.pageCount;
    const current = this.paginator.pageIndex;
    const delta = 2;
    const range: number[] = [];

    const start = Math.max(0, current - delta);
    const end = Math.min(total - 1, current + delta);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }

  getMinValue(a: number, b: number): number {
    return Math.min(a, b);
  }

  goToFirstPage() {
    this.paginator.firstPage();
  }

  goToPreviousPage() {
    this.paginator.previousPage();
  }

  goToNextPage() {
    this.paginator.nextPage();
  }

  goToLastPage() {
    this.paginator.pageIndex = this.pageCount - 1;
    this.emitPageEvent();
  }

  goToPage(page: number) {
    this.paginator.pageIndex = page;
    this.emitPageEvent();
  }

  onPageSizeChange() {
    this.paginator.pageIndex = 0;
    this.emitPageEvent();
  }

  private emitPageEvent() {
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length,
    });
  }
}
