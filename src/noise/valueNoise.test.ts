import { describe, expect, test } from "bun:test";
import { valueNoise } from "./valueNoise";

describe("valueNoise (hash stage)", () => {
    test("returns the same value for the same input", () => {
        expect(valueNoise(3, 7, 42)).toBe(valueNoise(3, 7, 42));
    });

    test("returns values in [0, 1]", () => {
        for (let i = 0; i < 100; i++) {
            const v = valueNoise(i, i * 3, 123);
            expect(v).toBeGreaterThanOrEqual(0);
            expect(v).toBeLessThanOrEqual(1);
        }
    });

    test("different seed produces different values", () => {
        const a = valueNoise(5, 5, 1);
        const b = valueNoise(5, 5, 2);
        expect(a).not.toBe(b);
    });

    test("different coordinates produce different values (most of the time)", () => {
        const values = new Set<number>();
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                values.add(valueNoise(x, y, 7));
            }
        }
        expect(values.size).toBeGreaterThan(50);
    });
});