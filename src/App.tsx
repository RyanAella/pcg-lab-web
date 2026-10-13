import { TerrainCanvas } from "./components/TerrainCanvas";

export default function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
      <h1>pcg-lab-web</h1>
      <TerrainCanvas width={256} height={256} seed={42} />
    </main>
  );
}