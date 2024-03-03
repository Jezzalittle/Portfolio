/* eslint-disable */
import { Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box(props: any) {
	const meshRef = useRef<THREE.Mesh>(null);
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((state, delta) => {
		if (meshRef.current != null) {
			meshRef.current.rotation.x += delta;
		}
	});
	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
		</mesh>
	);
}

function Hero_Section() {
	return (
		<div className="relative h-screen w-screen flex-initial flex-shrink">
			<div className="absolute inset-x-0 top-[10%] z-10 backdrop-blur-sm">
				<h1 className="white text-center text-7xl font-bold text-raisin-black xl:text-8xl 2xl:text-9xl ">
					JEREMY LITTLE
				</h1>
			</div>
			<Canvas>
				<Sky sunPosition={[100, 20, 100]} />
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</div>
	);
}

export default Hero_Section;
