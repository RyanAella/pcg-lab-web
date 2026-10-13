/**
 * Generates a heightmap by evaluating a sample function for every cell.
 *
 * The result is stored row-major: the value of cell (x, y) is located
 * at index `y * width + x`.
 *
 * @param width  Number of cells along the x axis (>= 0)
 * @param height Number of cells along the y axis (>= 0)
 * @param sample Returns the height value for a given cell coordinate
 * @returns A Float32Array of length `width * height`
 */
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