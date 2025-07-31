import { Transaction } from '../../data/interfaces/transaction.interface';

export function generateMockData(): Transaction[] {
  const mock: Transaction[] = [];
  for (let i = 0; i < 40; i++) {
    mock.push({
      date: '2024-09-10 18:16',
      iziId: (1388223 + getRandomInt(1000)).toString(),
      phone: '+77777777777',
      documentNumber: (25843594321 + getRandomInt(1000)).toString(),
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

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
