"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function createGlassMaterial(color: string, opacity: number) {
  return new THREE.MeshPhysicalMaterial({
    color,
    transparent: true,
    opacity,
    roughness: 0.12,
    metalness: 0.04,
    clearcoat: 1,
    clearcoatRoughness: 0.14,
    reflectivity: 0.85,
    transmission: 0.84,
    thickness: 1.2,
    ior: 1.08,
    emissive: new THREE.Color("#34d399"),
    emissiveIntensity: 0.08,
  });
}

export default function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbOffset = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const orbOffsetInverse = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#f4fbf7", 0.038);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const ambientLight = new THREE.AmbientLight("#f0fdf4", 2.1);
    const directionalLight = new THREE.DirectionalLight("#dcfce7", 1.8);
    directionalLight.position.set(5, 6, 4);
    const pointLightA = new THREE.PointLight("#6ee7b7", 14, 30, 2);
    pointLightA.position.set(-4, 1, 3);
    const pointLightB = new THREE.PointLight("#34d399", 12, 30, 2);
    pointLightB.position.set(4, -2, 1);
    scene.add(ambientLight, directionalLight, pointLightA, pointLightB);

    const sphereGeometry = new THREE.SphereGeometry(1, 48, 48);
    const orbA = new THREE.Mesh(sphereGeometry, createGlassMaterial("#d9fff0", 0.24));
    orbA.position.set(-3.8, 1.9, -1.5);
    orbA.scale.setScalar(0.95);

    const orbB = new THREE.Mesh(sphereGeometry, createGlassMaterial("#c7ffe3", 0.18));
    orbB.position.set(3.2, -0.4, -1.2);
    orbB.scale.setScalar(0.68);

    const cubeA = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      createGlassMaterial("#b8ffe0", 0.18),
    );
    cubeA.position.set(2.6, 1.45, -0.8);
    cubeA.rotation.set(0.4, 0.7, 0.3);
    cubeA.scale.setScalar(0.9);

    const cubeB = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.22, 1),
      createGlassMaterial("#e8fff3", 0.14),
    );
    cubeB.position.set(-1.7, -1.05, -0.2);
    cubeB.rotation.set(0.1, 0.2, 0.6);
    cubeB.scale.set(1.15, 1, 1.15);

    const wireMaterial = new THREE.MeshStandardMaterial({
      color: "#99f6c5",
      transparent: true,
      opacity: 0.16,
      wireframe: true,
      emissive: new THREE.Color("#10b981"),
      emissiveIntensity: 0.25,
    });
    const icosaA = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 0), wireMaterial);
    icosaA.position.set(0.2, 1.3, -2.3);
    const icosaB = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6, 0), wireMaterial.clone());
    icosaB.position.set(1.8, -1.8, -2.6);

    const waveGeometry = new THREE.PlaneGeometry(15, 10, 36, 36);
    const waveMaterial = new THREE.MeshStandardMaterial({
      color: "#34d399",
      transparent: true,
      opacity: 0.085,
      wireframe: true,
      emissive: new THREE.Color("#10b981"),
      emissiveIntensity: 0.22,
    });
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.position.set(0, -2.2, -1.6);
    wave.rotation.x = -Math.PI / 2.85;

    rootGroup.add(orbA, orbB, cubeA, cubeB, icosaA, icosaB, wave);

    const particlesCount = reduceMotion ? 28 : 54;
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let index = 0; index < particlesCount; index += 1) {
      const i = index * 3;
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: "#86efac",
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const pointer = { x: 0, y: 0 };

    const handlePointerMove = (event: MouseEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      const width = clientWidth || window.innerWidth;
      const height = clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      const rotationX = reduceMotion ? 0 : pointer.y * 0.18;
      const rotationY = reduceMotion ? 0 : pointer.x * 0.28;
      rootGroup.rotation.x = THREE.MathUtils.damp(rootGroup.rotation.x, rotationX, 3.2, delta);
      rootGroup.rotation.y = THREE.MathUtils.damp(rootGroup.rotation.y, rotationY, 3.2, delta);

      orbA.rotation.x += delta * 0.12;
      orbA.rotation.y += delta * 0.18;
      orbA.position.y = 1.9 + Math.sin(elapsed) * 0.18;

      orbB.rotation.x += delta * 0.14;
      orbB.rotation.y += delta * 0.22;
      orbB.position.y = -0.4 + Math.sin(elapsed * 1.2) * 0.15;

      cubeA.rotation.x += delta * 0.1;
      cubeA.rotation.y += delta * 0.14;
      cubeA.position.y = 1.45 + Math.sin(elapsed * 0.9) * 0.12;

      cubeB.rotation.x += delta * 0.08;
      cubeB.rotation.y += delta * 0.12;
      cubeB.position.y = -1.05 + Math.cos(elapsed * 0.8) * 0.09;

      icosaA.rotation.z += delta * 0.16;
      icosaA.rotation.y = Math.sin(elapsed * 0.5) * 0.5;
      icosaB.rotation.z -= delta * 0.13;
      icosaB.rotation.x = Math.cos(elapsed * 0.6) * 0.35;

      const wavePositions = waveGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < wavePositions.count; i += 1) {
        const x = wavePositions.getX(i);
        const y = wavePositions.getY(i);
        const z =
          Math.sin(x * 1.1 + elapsed * 0.85) * 0.16 +
          Math.cos(y * 1.35 + elapsed * 0.65) * 0.11;
        wavePositions.setZ(i, z);
      }
      wavePositions.needsUpdate = true;
      waveGeometry.computeVertexNormals();

      particles.rotation.y += reduceMotion ? 0.0003 : 0.0008;
      particles.rotation.x = Math.sin(elapsed * 0.08) * 0.08;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      renderer.dispose();
      waveGeometry.dispose();
      sphereGeometry.dispose();
      cubeA.geometry.dispose();
      cubeB.geometry.dispose();
      icosaA.geometry.dispose();
      icosaB.geometry.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      const disposeMaterial = (material: THREE.Material | THREE.Material[]) => {
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose());
          return;
        }
        material.dispose();
      };

      disposeMaterial(orbA.material);
      disposeMaterial(orbB.material);
      disposeMaterial(cubeA.material);
      disposeMaterial(cubeB.material);
      disposeMaterial(icosaA.material);
      disposeMaterial(icosaB.material);
      disposeMaterial(wave.material);

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: orbOffset }}
        className="absolute -top-24 right-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22),rgba(52,211,153,0.12)_34%,transparent_72%)] blur-3xl"
      />
      <motion.div
        style={{ y: orbOffsetInverse }}
        className="absolute bottom-[-8rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.16),rgba(16,185,129,0.08)_38%,transparent_74%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_32%),radial-gradient(circle_at_80%_14%,rgba(16,185,129,0.14),transparent_26%),linear-gradient(180deg,rgba(240,253,244,0.92),rgba(255,255,255,0.78)_32%,rgba(236,253,245,0.76)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:120px_120px] opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.11]" />

      <div
        ref={containerRef}
        className="absolute inset-0 opacity-[0.82] [mask-image:radial-gradient(circle_at_center,black,transparent_92%)]"
      />

      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.25, 0.4, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[12%] top-[10%] h-64 rounded-full bg-[radial-gradient(circle,rgba(167,243,208,0.28),rgba(16,185,129,0.06)_48%,transparent_72%)] blur-3xl"
      />
    </div>
  );
}
