let reverseUtf16String = require('./index');

describe('index tests', () => {
    it('should reverse empty string', () => {
        expect(reverseUtf16String('')).toEqual('');
    });

    it('should reverse "a" string', () => {
        expect(reverseUtf16String('a')).toEqual('a');
    });

    it('should reverse "𤭢" string', () => {
        expect(reverseUtf16String('𤭢')).toEqual('𤭢');
    });

    it('should reverse "abc𤭢" string', () => {
        expect(reverseUtf16String('abc𤭢')).toEqual('𤭢cba');
    });

    it('should reverse "𤭢cba" string', () => {
        expect(reverseUtf16String('𤭢cba')).toEqual('abc𤭢');
    });
});