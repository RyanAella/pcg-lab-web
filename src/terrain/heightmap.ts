export function generateHeightmap(
    width: number,
    height: number,
    sample: (x: number, y: number) => number
): Float32Array {
    const heightmap = new Float32Array(width * height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            heightmap[y * width + x] = sample(x, y);
        }
    }

    return heightmap;
}