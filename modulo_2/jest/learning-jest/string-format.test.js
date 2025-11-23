const {truncate} = require('./string-format');

test('Truncate a string correctly', () => {
    expect(truncate("I am going home", 6)).toBe('I am g...');
});