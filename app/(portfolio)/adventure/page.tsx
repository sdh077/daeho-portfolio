'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeRoomApp: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Renderer, Camera
    const scene: THREE.Scene = new THREE.Scene();
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
    let mixer: THREE.AnimationMixer
    let playingAction: THREE.AnimationAction | null
    let isRunning = false;
    let isIdle = true;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.set(10, 15, 20);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    camera.lookAt(controls.target);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(10, 20, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // soft white light
    scene.add(ambientLight);

    // Create Room (Floor and Walls)
    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
    backWall.position.set(0, 5, -10);
    scene.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-10, 5, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(10, 5, 0);
    scene.add(rightWall);

    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
    frontWall.rotation.y = Math.PI;
    frontWall.position.set(0, 5, 10);
    scene.add(frontWall);

    // Add Furniture (Box Items)
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff });

    // Bed
    const bed = new THREE.Mesh(new THREE.BoxGeometry(6, 1, 3), boxMaterial);
    bed.position.set(-6, 0.5, -6);
    scene.add(bed);

    // Table
    const table = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 3), boxMaterial);
    table.position.set(0, 0.5, 0);
    scene.add(table);

    // Chair
    const chair = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), boxMaterial);
    chair.position.set(1.5, 0.5, 2);
    scene.add(chair);

    // Cabinet
    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 2), boxMaterial);
    cabinet.position.set(6, 3, -6);
    scene.add(cabinet);

    // Load GLTF Character
    const loader = new GLTFLoader();
    let character: THREE.Group | null = null;
    let gltf: GLTF
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const keys = { w: false, a: false, s: false, d: false };

    loader.load(
      '/gltf/Soldier.glb',
      (g) => {
        gltf = g
        character = g.scene;
        character.scale.set(1.5, 1.5, 1.5); // Scale up the character
        character.position.set(5, 0, 0);
        scene.add(character);
        mixer = new THREE.AnimationMixer(g.scene)
        const idleClip = gltf.animations.find((clip) => clip.name === 'Idle'); // Replace 'Idle' with the correct animation name
        if (idleClip) {
          const idleAction = mixer.clipAction(idleClip);
          idleAction.loop = THREE.LoopRepeat;
          idleAction.play();
          playingAction = idleAction;
        }
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the GLTF model:', error);
      }
    );

    // Keyboard Controls
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key in keys) keys[event.key as keyof typeof keys] = true;
    };

    const keyUpHandler = (event: KeyboardEvent) => {
      if (event.key in keys) keys[event.key as keyof typeof keys] = false;
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    const updateCharacterPosition = (delta: number) => {
      if (!character || !mixer || !gltf.animations.length) return;

      direction.set(0, 0, 0);

      // Determine if the character should run
      const shouldRun = keys.w || keys.s;

      if (shouldRun) {
        if (!isRunning) {
          const runClip = gltf.animations.find((clip) => clip.name === 'Walk');
          if (runClip) {
            const runAction = mixer.clipAction(runClip);
            runAction.loop = THREE.LoopRepeat; // Ensure the animation loops
            if (playingAction && playingAction !== runAction) playingAction.fadeOut(0.5);
            runAction.reset().fadeIn(0.5).play();
            playingAction = runAction;
            isRunning = true;
            isIdle = false;
          }
        }
      } else if (!isIdle) {
        // Switch to Idle animation
        const idleClip = gltf.animations.find((clip) => clip.name === 'Idle'); // Replace 'Idle' with your animation name
        if (idleClip) {
          const idleAction = mixer.clipAction(idleClip);
          idleAction.loop = THREE.LoopRepeat; // Ensure the animation loops
          if (playingAction && playingAction !== idleAction) playingAction.fadeOut(0.5);
          idleAction.reset().fadeIn(0.5).play();
          playingAction = idleAction;
          isRunning = false;
          isIdle = true;
        }
      }

      // Handle character movement
      if (keys.a) {
        character.rotation.y += delta * 2; // Rotate left
      }
      if (keys.d) {
        character.rotation.y -= delta * 2; // Rotate right
      }
      if (keys.w) {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(character.quaternion);
        direction.add(forward);
      }
      if (keys.s) {
        const backward = new THREE.Vector3(0, 0, 1).applyQuaternion(character.quaternion);
        direction.add(backward);
      }

      direction.normalize();
      velocity.addScaledVector(direction, 5 * delta);

      // Predict the next position
      const predictedPosition = character.position.clone().add(velocity.clone().multiplyScalar(delta));

      // Create a bounding box for the predicted position
      const characterBox = new THREE.Box3().setFromObject(character);
      characterBox.translate(predictedPosition.clone().sub(character.position));

      // Check collision with walls and furniture
      const objectsToCheck = [backWall, leftWall, rightWall, frontWall, bed, table, chair, cabinet];
      const isColliding = objectsToCheck.some((obj) => {
        const objectBox = new THREE.Box3().setFromObject(obj);
        return characterBox.intersectsBox(objectBox);
      });

      if (!isColliding) {
        // Update character's position if no collision
        character.position.copy(predictedPosition);
      }

      // Update camera to follow the character
      const cameraOffset = new THREE.Vector3(0, 4, 5).applyQuaternion(character.quaternion);
      camera.position.copy(character.position.clone().add(cameraOffset));
      camera.lookAt(character.position);

      // Dampen velocity for smooth stopping
      velocity.multiplyScalar(0.9);

      // Update mixer for animations
      mixer.update(delta);
    };



    // Resize Handling
    const handleResize = () => {
      const width = mountRef.current?.clientWidth || 0;
      const height = mountRef.current?.clientHeight || 0;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();

      updateCharacterPosition(delta);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }} className='overflow-hidden'>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          zIndex: 1,
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>WASD Controls:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '5px 0 0 0' }}>
          <li><b>W</b>: Move Forward</li>
          <li><b>S</b>: Move Backward</li>
          <li><b>A</b>: Rotate Left</li>
          <li><b>D</b>: Rotate Right</li>
        </ul>
      </div>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ThreeRoomApp;
