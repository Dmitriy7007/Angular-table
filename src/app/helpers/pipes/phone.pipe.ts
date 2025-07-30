import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    const digits = value.replace(/\D/g, '');

    if (digits.length === 11 && digits.startsWith('7')) {
      return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(
        7,
        9
      )}-${digits.slice(9, 11)}`;
    }

    if (digits.length === 10) {
      return `+7 ${digits.slice(0, 3)} ${digits.slice(3, 6)}-${digits.slice(
        6,
        8
      )}-${digits.slice(8, 10)}`;
    }

    return value;
  }
}
