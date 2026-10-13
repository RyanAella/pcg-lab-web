import { describe, expect, test } from "bun:test";
import { fract, lerp } from "./math";

describe("fract", () => {
    test("returns the fractional part of a positive number", () => {
        expect(fract(3.7)).toBeCloseTo(0.7);          
    });

    test("returns 0 for whole numbers", () => {
        expect(fract(4)).toBe(0);              
    });

    test("handles negative numbers: floor rounds down, not toward zero", () => {
        expect(fract(-1.3)).toBe(0.7);        
    });

    test("result is always in [0, 1)", () => {
        for (const x of [-5.5, -1, 0, 0.25, 2.9, 100.123]) {
            expect(fract(x)).toBeGreaterThanOrEqual(0);   
            expect(fract(x)).toBeLessThan(1);             
        }
    });

    test("Two numbers which are apart by an integer have the same fractional part", () => {
        expect(fract(2.3)).toBe(fract(3.3));
    });
});

describe("lerp", () => {
    test("returns a when t is 0", () => {
        expect(lerp(10, 20, 0)).toBe(10);
    });
    test("returns b when t is 1", () => {
        expect(lerp(10, 20, 1)).toBe(20);
    });
    test("returns the midpoint when t is 0.5", () => {
        expect(lerp(10, 20, 0.5)).toBe(15);
    });
});