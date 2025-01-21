import { Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls,Preload} from "@react-three/drei";
import CanvasLoader from "./Loader";
import * as THREE from "three";
import { useRef } from "react";
import { getFresnelMat } from "../utils/getFresnelMat";


const Earth = () => {

    const [texture, lightMap, clouds] = useLoader(THREE.TextureLoader, [
        '/planets/textures/earthmap4k.jpg',
        '/planets/textures/earthlights4k.jpg',
        '/planets/textures/clouds.jpg'
    ]);
    
    const earthlights = useRef();
    const earth = useRef();
    const cloudrot = useRef();
    const fresnel = useRef();
    const fresnelMat = getFresnelMat();
  
    useFrame(() => {
      if (earthlights.current && earth.current && cloudrot.current && fresnel.current) {
        earth.current.rotation.y += 0.002;
        earthlights.current.rotation.y += 0.002;
        cloudrot.current.rotation.y += 0.003;
        fresnel.current.rotation.y += 0.002;
      }
    });

  return (
    <group>
    <mesh ref={earth} position={[0, 0, 0]} scale={2}>
      <icosahedronGeometry args={[0.8, 16]} />
      <meshStandardMaterial map={texture} flatShading={true} />
    </mesh>
    <mesh ref={earthlights} position={[0, 0, 0]} scale={2}>
      <icosahedronGeometry args={[0.8, 16]} />
      <meshBasicMaterial map={lightMap} transparent opacity={0.6} blending={THREE.AdditiveBlending}/>
    </mesh>
    <mesh ref={cloudrot} position={[0, 0, 0]} scale={2.003}>
      <icosahedronGeometry args={[0.8, 16]} />
      <meshStandardMaterial map={clouds} transparent opacity={0.6} blending={THREE.AdditiveBlending}/>
    </mesh>
    <mesh ref={fresnel} material={fresnelMat} position={[0, 0, 0]} scale={2.004}>
      <icosahedronGeometry args={[0.8, 16]} />
    </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <div className="w-full h-[350px] md:h-[700px] relative">
      <Canvas
        className="cursor-pointer"
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.2}
            enableZoom={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          <Earth/>
          <directionalLight position={[-2, 0.5, 1.5]} intensity={2} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;