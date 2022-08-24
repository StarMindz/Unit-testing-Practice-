const fucntion = require('./reverseString');

test('Check the reverse String of abcdef', () => {
    expect(fucntion('abcdef')).toBe('fedcba');
})

test('Check the reverse String of Hello', () => {
    expect(fucntion('Hello')).toBe('olleH');
})