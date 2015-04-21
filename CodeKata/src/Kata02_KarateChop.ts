class KarateChop {
    /**
     * ループ処理での二分探索法
     * @param target 目的の値
     * @param array  検索対象のソート済配列
     * @return 検索結果のインデックス（見つからない場合は-1）
     */
    chopLoop(target: number, array: number[]): number {
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

    /**
     * 再帰処理での二分探索法
     * @param target 目的の値
     * @param array  検索対象のソート済配列
     * @return 検索結果のインデックス（見つからない場合は-1）
     */
    chop(target: number, array: number[]): number {
        return this.recursiveChop(target, 0, array.length - 1, array);
    }

    /**
     * 再帰処理の本体
     * @param target 目的の値
     * @param head 検索始点インデックス
     * @param tail 検索終点インデックス
     * @param array 検索対象のソート済配列
     * @return 検索結果のインデックス（見つからない場合は-1）
     */
    private recursiveChop(target: number, head: number, tail: number, array: number[]): number {
        var center = Math.floor((head + tail) / 2);

        if (head > tail) {
            return -1;
        }

        if (target === array[center]) {
            return center;
        } else if (target < array[center]) {
            return this.recursiveChop(target, head, center - 1, array);
        } else {
            return this.recursiveChop(target, center + 1, tail, array);
        }
    }
}