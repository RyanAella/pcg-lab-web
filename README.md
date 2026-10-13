# pcg-lab-web

A hands-on learning project: building procedural terrain generators in the browser with TypeScript, React, and Bun.

## About

Procedural content generation (PCG): generating heightmaps/terrain from noise functions, rendered on canvas. Learning project with a deliberate approach: algorithms implemented from scratch (no noise libraries), documented decisions (ADRs), tested code.

## Tech Stack

- Runtime/PackageManager: Bun
- UI: React + TypeScript
- Rendering: Canvas
- Testing: bun test

## Status

🚧 Work in progress — Milestone 1: Value noise + canvas rendering

## Getting Started

git clone https://github.com/RyanAella/pcg-lab-web.git
cd pcg-lab-web
bun install
bun run dev

## Roadmap

- [x] M1: Value noise, greyscale heightmap on canvas
- [ ] M2: Perlin/Simplex, fBm octaves, seed & parameter UI
- [ ] M3: Color ramps, PNG export
- [ ] M4: Hydraulic erosion post-step
- [ ] M5: 3D rendering of the same heightmap (react-three-fiber)
- [ ] M6: Web Workers, performance profiling, deploy

## Motivation / Learning Goals

- Implement noise algorithms from scratch to understand them
- Learn Bun as a runtime and package manager
- Practice TDD-lite with bun test
- Build a portfolio project with proper documentation discipline
