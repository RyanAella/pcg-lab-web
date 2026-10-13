export function valueNoise(
    x: number,
    y: number,
    seed: number
): number {
    let h = x * 374761393 + y * 668265263 + seed * 1274126177;
    
    h = (h ^ (h >>> 13)) * 1274126177; // ^ = XOR, >>> = unsigned right shift
    h = h ^ (h >>> 16);

    h = h >>> 0; // Convert to unsigned 32-bit integer
    return h / 4294967295; // Normalize to [0, 1]
}