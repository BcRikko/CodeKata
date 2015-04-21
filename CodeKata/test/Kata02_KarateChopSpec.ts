/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />

describe('CodeKata02: KarateChop',() => {
    beforeEach(() => {
        this.karate = new KarateChop();
    });

    // 空の場合
    it('空の配列を渡した場合、-1が返ってくる',() => {
        var result = this.karate.chop(3, []);
        expect(result).toBe(-1);
    });


    // 要素1つの場合
    it('要素1つで見つからない場合、-1が返ってくる',() => {
        var result = this.karate.chop(3, [1]);
        expect(result).toBe(-1);
    });

    it('要素1つで見つかった場合、0が返ってくる',() => {
        var result = this.karate.chop(1, [1]);
        expect(result).toBe(0);
    });


    // 要素3つの場合
    it('要素3つで、1つ目で見つかった場合、0が返ってくる',() => {
        var result = this.karate.chop(1, [1, 3, 5]);
        expect(result).toBe(0);
    });

    it('要素3つで、2つ目で見つかった場合、1が返ってくる',() => {
        var result = this.karate.chop(3, [1, 3, 5]);
        expect(result).toBe(1);
    });

    it('要素3つで、3つ目で見つかった場合、2が返ってくる',() => {
        var result = this.karate.chop(5, [1, 3, 5]);
        expect(result).toBe(2);
    });

    it('要素3つで、見つからない場合、-1が返ってくる',() => {
        var result = this.karate.chop(2, [1, 3, 5]);
        expect(result).toBe(-1);
    });


    // 要素4つの場合
    it('要素4つで、1つ目で見つかった場合、0が返ってくる',() => {
        var result = this.karate.chop(1, [1, 3, 5, 7]);
        expect(result).toBe(0);
    });

    it('要素4つで、2つ目で見つかった場合、1が返ってくる',() => {
        var result = this.karate.chop(3, [1, 3, 5, 7]);
        expect(result).toBe(1);
    });

    it('要素4つで、3つ目で見つかった場合、2が返ってくる',() => {
        var result = this.karate.chop(5, [1, 3, 5, 7]);
        expect(result).toBe(2);
    });

    it('要素4つで、4つ目で見つかった場合、3が返ってくる',() => {
        var result = this.karate.chop(7, [1, 3, 5, 7]);
        expect(result).toBe(3);
    });

    it('要素4つで、見つからない場合、-1が返ってくる(1)',() => {
        var result = this.karate.chop(0, [1, 3, 5, 7]);
        expect(result).toBe(-1);
    });

    it('要素4つで、見つからない場合、-1が返ってくる(2)',() => {
        var result = this.karate.chop(2, [1, 3, 5, 7]);
        expect(result).toBe(-1);
    });

    it('要素4つで、見つからない場合、-1が返ってくる(3)',() => {
        var result = this.karate.chop(4, [1, 3, 5, 7]);
        expect(result).toBe(-1);
    });

    it('要素4つで、見つからない場合、-1が返ってくる(4)',() => {
        var result = this.karate.chop(6, [1, 3, 5, 7]);
        expect(result).toBe(-1);
    });
});