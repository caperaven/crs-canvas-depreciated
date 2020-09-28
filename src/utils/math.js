export function lerp(min, max, value) {
    return Math.round((max - min) * value + min);
}