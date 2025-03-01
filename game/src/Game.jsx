import { Canvas } from "@react-three/fiber";

function Game() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
        </Canvas>
    );
}

export default Game;
