import { useEffect, useRef } from "react";
import { generateHeightmap } from "../terrain/heightmap";
import { valueNoise } from "../noise/valueNoise";

/**
 * Renders a heightmap as greyscale pixels on a 2D canvas.
 *
 * The canvas is redrawn whenever width, height, or seed change.
 */
interface TerrainCanvasProps {
    /** Canvas resolution in pixels along the x axis */
    width: number;
    /** Canvas resolution in pixels along the y axis */
    height: number;
    /** Seed for the value noise field */
    seed: number;
}

export function TerrainCanvas({ width, height, seed }: TerrainCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const heightmap = generateHeightmap(width, height, (x, y) =>
            valueNoise(x, y, seed)
        );

        const imageData = ctx.createImageData(width, height);
        for (let i = 0; i < heightmap.length; i++) {
            const v = Math.round(heightmap[i] * 255);
            imageData.data[i * 4 + 0] = v;
            imageData.data[i * 4 + 1] = v;
            imageData.data[i * 4 + 2] = v;
            imageData.data[i * 4 + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }, [width, height, seed]);

    return <canvas ref={canvasRef} style={{ imageRendering: "pixelated" }} />;
}