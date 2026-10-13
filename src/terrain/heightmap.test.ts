import { describe, expect, test } from "bun:test";
import { generateHeightmap } from "./heightmap";

describe("generateHeightmap", () => {
    test("returns a Float32Array of length width * height", () => {
        const map = generateHeightmap(3, 5, () => 0);
        expect(map).toBeInstanceOf(Float32Array);
        expect(map).toHaveLength(15);
    });

    test("evaluates sample for every cell with correct coordinates", () => {
        const calls: Array<[number, number]> = [];
        generateHeightmap(2, 3, (x, y) => {
            calls.push([x, y]);
            return 0;
        });
        expect(calls).toEqual([
            [0, 0], [1, 0],
            [0, 1], [1, 1],
            [0, 2], [1, 2],
        ]);
    });

    test("stores each sampled value at index y * width + x", () => {
        const map = generateHeightmap(3, 3, (x, y) => x * 10 + y);
        expect(map[0]).toBe(0);
        expect(map[4]).toBe(11);
        expect(map[8]).toBe(22);
        expect(map[2]).toBe(20);
        expect(map[6]).toBe(2);
    });

    test("handles width or height of zero", () => {
        expect(generateHeightmap(0, 5, () => 1)).toHaveLength(0);
        expect(generateHeightmap(5, 0, () => 1)).toHaveLength(0);
    });
});