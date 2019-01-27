import playersSort from '../js/app';

test('All different health levels', () => {
  const input = [
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 100 },
    { name: 'лучник', health: 70 },
  ];

  const expected = 'лучник, маг, мечник'; // ожидает
  const received = playersSort(input); // получает
  expect(received).toBe(expected); // сравнивает
});

test('Two same health levels', () => {
  const input = [
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 30 },
  ];

  const expected = 'маг, мечник, лучник'; // ожидает
  const received = playersSort(input); // получает
  expect(received).toBe(expected); // сравнивает
});

test('All same health levels', () => {
  const input = [
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 10 },
  ];

  const expected = 'маг, мечник, лучник'; // ожидает
  const received = playersSort(input); // получает
  expect(received).toBe(expected); // сравнивает
});