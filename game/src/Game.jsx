import { Canvas } from '@react-three/fiber';

function Game() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </Canvas>
    );
}

export default Game;
