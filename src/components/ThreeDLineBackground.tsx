import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDLineBackgroundProps {
  className?: string;
}

export const ThreeDLineBackground: React.FC<ThreeDLineBackgroundProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 16);
    camera.lookAt(0, 0, 0);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Create 3D Dynamic Line Grid Geometry
    const width = 40;
    const height = 24;
    const segmentsX = 40;
    const segmentsY = 24;

    const planeGeo = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
    planeGeo.rotateX(-Math.PI / 2.5); // Tilt to give 3D horizon perspective

    // Wireframe material with Selestia Gold color
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xF9BD2A,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });

    const mesh = new THREE.Mesh(planeGeo, wireframeMat);
    scene.add(mesh);

    // 4. Create 3D Glowing Sine Wave Lines overlaying the plane
    const linesGroup = new THREE.Group();
    const lineCount = 12;
    const lineMaterials: THREE.LineBasicMaterial[] = [];
    const lineGeometries: THREE.BufferGeometry[] = [];

    for (let i = 0; i < lineCount; i++) {
      const points: THREE.Vector3[] = [];
      const length = 50;
      const count = 80;
      const zOffset = (i - lineCount / 2) * 1.5;

      for (let j = 0; j <= count; j++) {
        const x = (j / count - 0.5) * length;
        points.push(new THREE.Vector3(x, 0, zOffset));
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const opacity = 0.15 + (1 - Math.abs(i - lineCount / 2) / (lineCount / 2)) * 0.45;

      const mat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0xF9BD2A : 0xFFF4D2,
        transparent: true,
        opacity: opacity,
        linewidth: 1.5,
      });

      const line = new THREE.Line(geo, mat);
      linesGroup.add(line);
      lineGeometries.push(geo);
      lineMaterials.push(mat);
    }
    scene.add(linesGroup);

    // 5. Mouse Interaction
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

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Camera tilt based on mouse position
      camera.position.x = targetX * 3;
      camera.position.y = 8 + targetY * 1.5;
      camera.lookAt(0, 0, 0);

      // Animate 3D plane vertices (Dynamic 3D Wave elevation)
      const positions = planeGeo.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const u = positions.getX(i);
        const v = positions.getY(i);
        const z = Math.sin(u * 0.35 + time * 1.8) * Math.cos(v * 0.35 + time * 1.4) * 0.85;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;

      // Animate 3D Sine Wave Lines
      lineGeometries.forEach((geo, lineIndex) => {
        const posAttr = geo.attributes.position;
        for (let j = 0; j < posAttr.count; j++) {
          const x = posAttr.getX(j);
          const zOffset = (lineIndex - lineCount / 2) * 1.5;
          const y = Math.sin(x * 0.25 + time * 2.0 + lineIndex * 0.4) * 1.2 + Math.cos(zOffset * 0.4 + time * 1.2) * 0.4;
          posAttr.setY(j, y);
        }
        posAttr.needsUpdate = true;
      });

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
      planeGeo.dispose();
      wireframeMat.dispose();
      lineGeometries.forEach((g) => g.dispose());
      lineMaterials.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full pointer-events-none ${className}`} />;
};
