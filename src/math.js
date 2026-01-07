export function sum(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("sum(a, b): a와 b는 finite number여야 합니다.");
    }
    return a + b;
}

export function clamp(value, min, max) {
    if (![value, min, max].every(Number.isFinite)) {
        throw new TypeError("clamp(value, min, max): 모두 finite number여야 합니다.");
    }
    if (min > max) {
        throw new RangeError("clamp: min은 max보다 클 수 없습니다.");
    }
    return Math.min(Math.max(value, min), max);
}