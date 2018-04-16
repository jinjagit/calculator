var evaluate = require('./evaluator')

describe('evaluate', function() {
  it('works with small results', function() {
    expect(evaluate('2')).toEqual('2');
  });
  xit('works with punctuation', function() {
    expect(palindromes('Racecar!')).toEqual(true);
  });
  xit('works with multiple words', function() {
    expect(palindromes('A car, a man, a maraca.')).toEqual(true);
  });
  xit('works with multiple words', function() {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  xit('doesn\'t just always return true', function() {
    expect(palindromes('ZZZZ car, a man, a maraca.')).toEqual(false);
  });

});
