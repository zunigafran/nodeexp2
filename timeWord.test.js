const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('#timeWord', () => {
  test('00:00 should return midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('00:12 should return twelve twelve am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });

  test('01:00 should return one o’clock am', () => {
    expect(timeWord('01:00')).toBe('one o’clock am');
  });

  test('23:23 should return eleven twenty three pm', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });
});