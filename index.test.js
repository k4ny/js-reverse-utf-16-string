let reverseUtf16String = require('./index');

describe('index tests', () => {
    it('should reverse empty string', () => {
        expect(reverseUtf16String('')).toEqual('');
    });    
});