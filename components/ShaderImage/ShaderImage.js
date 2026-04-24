import * as THREE from "three";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

const WaveShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 1.0;
      float noiseAmp = 1.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime / 5.0, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  glsl`
    precision lowp float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = -tan(vWave * 0.4) * 2.0;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = ({ onReady }) => {
  const ref = useRef();
  const readyRef = useRef(false);

  const image = useTexture(
    "https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
  );

  useFrame(({ clock }) => {
    if (ref.current) ref.current.uTime = clock.getElapsedTime();
    if (!readyRef.current) {
      readyRef.current = true;
      if (onReady) onReady();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[0.6, 0.8, 16, 16]} />
      <waveShaderMaterial
        side={THREE.DoubleSide}
        uColor={"#D83503"}
        ref={ref}
        uTexture={image}
      />
    </mesh>
  );
};

const Scene = ({ onReady, frameloop }) => {
  return (
    <Canvas
      camera={{ fov: 15, position: [0, 0, 5] }}
      dpr={[1, 1.5]}
      frameloop={frameloop}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: false,
      }}
    >
      <Suspense fallback={null}>
        <Wave onReady={onReady} />
      </Suspense>
      <EffectComposer>
        <Fluid
          fluidColor="#D83503"
          showBackground={true}
          intensity={2}
          force={0.8}
          distortion={0.25}
          curl={10}
        />
      </EffectComposer>
    </Canvas>
  );
};

const ShaderImage = ({ onReady }) => {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute w-screen h-screen flex justify-center items-center"
    >
      <Scene onReady={onReady} frameloop={active ? "always" : "never"} />
    </div>
  );
};

export default ShaderImage;
