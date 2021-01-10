import {
  Canvas, useUpdate, useFrame,
} from "react-three-fiber";
import { noise } from "../utils/perlin";
  
const Terrain = () => {
  const mesh = useUpdate(({ geometry }) => {
    noise.seed(Math.random());
    const pos = geometry.getAttribute("position");
    const pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] = (noise.simplex2(i / 100, j / 100)
          + noise.simplex2((i + 200) / 50, j / 50) * ex
          + noise.simplex2((i + 400) / 25, j / 25) * (ex ** 2)
          + noise.simplex2((i + 600) / 12.5, j / 12.5) * (ex ** 3)
          + +(noise.simplex2((i + 800) / 6.25, j / 6.25) * (ex ** 4)))
          / 2;
      }
    }

    pos.needsUpdate = true;
  });

  useFrame(() => {
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
      <meshPhongMaterial
        attach="material"
        color="hotpink"
        specular="hotpink"
        shininess={3}
        smoothShading
      />
    </mesh>
  );
};

const Lights = () => (
  <group>
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 500, 50]} />
      <meshBasicMaterial attach="material" color={0xfff1ef} />
    </mesh>
    <ambientLight position={[0, 5, 0]} intensity={0.3} />
    <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />
    <pointLight
      intensity={1}
      position={[-6, 3, -6]}
      color={0xffcc77}
    />
    <pointLight
      intensity={1}
      position={[6, 3, 6]}
      color={0xffcc77}
    />
  </group>
);

export default () => (
  <Canvas
    camera={{
      zoom: 40,
      position: [0, 100, 500]
    }}
  >
    <Lights />
    <Terrain />
  </Canvas>
);
