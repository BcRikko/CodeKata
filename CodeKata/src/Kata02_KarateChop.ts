class KarateChop {
    chop(target: number, array: number[]): number {
        var head = 0;
        var tail = array.length - 1;

        while (head <= tail) {
            var center = Math.floor((head + tail) / 2);

            if (target === array[center]) {
                return center;
            } else if (target < array[center]) {
                tail = center - 1;
            } else {
                head = center + 1;
            }
        }
        return -1;
    }
}