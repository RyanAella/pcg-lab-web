/**
 * Deterministic pseudo-random value for integer lattice coordinates.
 *
 * The same (x, y, seed) always produces the same value, on every run
 * and every machine. A different seed yields a completely different
 * value field. The result is normalized to the range [0, 1].
 *
 * Note: hash stage only — no interpolation between lattice points yet.
 *
 * @param x    Lattice coordinate along the x axis
 * @param y    Lattice coordinate along the y axis
 * @param seed Seed that selects the noise field
 * @returns A pseudo-random value in [0, 1]
 */
export function valueNoise(
    x: number,
    y: number,
    seed: number
): number {
    let h = x * 374761393 + y * 668265263 + seed * 1274126177;

    h = (h ^ (h >>> 13)) * 1274126177;
    h = h ^ (h >>> 16);

    h = h >>> 0;
    return h / 4294967295;
}