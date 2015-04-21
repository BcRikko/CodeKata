/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />

describe('CodeKata02: KarateChop',() => {
    beforeEach(() => {
        this.karate = new KarateChop();
    });

    it('空の配列を渡した場合、-1が返ってくる',() => {
        var result = this.karate.chop(3, []);
        expect(result).toBe(-1);
    });

    it('要素1つで見つからない場合、-1が返ってくる',() => {
        var result = this.karate.chop(3, [1]);
        expect(result).toBe(-1);
    });
});