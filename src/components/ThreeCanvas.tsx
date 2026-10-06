import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeHeroBackground: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Central Metallic Gold Torus Knot / Luxury Symbol
    const geometry = new THREE.TorusKnotGeometry(3.5, 1.0, 120, 24);
    
    // Metallic Gold Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xF9BD2A,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });

    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Wireframe overlay for futuristic tech detail
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFF4D2,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireframeMesh.scale.set(1.02, 1.02, 1.02);
    knot.add(wireframeMesh);

    // 2. 3D Floating Gold Particles
    const particlesCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 45;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xF9BD2A,
      size: 0.18,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3. Lights Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldPointLight1 = new THREE.PointLight(0xF9BD2A, 4, 60);
    goldPointLight1.position.set(12, 12, 12);
    scene.add(goldPointLight1);

    const goldPointLight2 = new THREE.PointLight(0xD49E1B, 3, 60);
    goldPointLight2.position.set(-12, -12, -12);
    scene.add(goldPointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for mouse rotation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D Torus Knot
      knot.rotation.x = elapsedTime * 0.25 + targetY * 0.9;
      knot.rotation.y = elapsedTime * 0.35 + targetX * 0.9;

      // Floating wave animation
      knot.position.y = Math.sin(elapsedTime * 1.5) * 0.35;

      // Rotate Particle System
      particles.rotation.y = elapsedTime * 0.06;
      particles.rotation.x = elapsedTime * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};

// 3D Geometric Floating Gold Icosahedron for Section Accents
export const ThreeGoldShape: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Metallic Icosahedron / Gold Crystal
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xF9BD2A,
      metalness: 0.95,
      roughness: 0.1,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe Outer Shell
    const wireGeo = new THREE.IcosahedronGeometry(2.1, 0);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xFFF4D2, wireframe: true, transparent: true, opacity: 0.3 });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Lights
    const amb = new THREE.AmbientLight(0xffffff, 1);
    scene.add(amb);
    const pt = new THREE.PointLight(0xF9BD2A, 4, 30);
    pt.position.set(5, 5, 5);
    scene.add(pt);

    let frameId: number;
    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.015;
      wireMesh.rotation.x -= 0.005;
      wireMesh.rotation.y -= 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};
