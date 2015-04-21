class KarateChop {
    chop(target: number, array: number[]): number {
        var index = -1;

        for (var i = 0; i < array.length; i++) {
            if (target === array[i]) {
                index = i;
            }
        }

        return index;
    }
}