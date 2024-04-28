import { enumValues } from "./enumValues";

describe('enumValues', () => {
    enum TestEnum {
        A = 0,
        B,
        C,
    }

    it('returns an array of enum values', () => {
        const result = enumValues(TestEnum);
        expect(result).toEqual([0, 1, 2]);
    });

    it('returns an empty array for an empty enum', () => {
        enum EmptyEnum { }
        const result = enumValues(EmptyEnum);
        expect(result).toEqual([]);
    });
});