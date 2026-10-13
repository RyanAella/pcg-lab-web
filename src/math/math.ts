export function fract(n: number): number {
    return n - Math.floor(n);
}

export function lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
}