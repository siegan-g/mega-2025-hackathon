import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const SnakeGame = () => {
  const containerRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xb1dba8);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5).normalize();
    scene.add(light);

    const snake = [];
    const snakeSize = 1;
    const gridSize = 12; 
    let hasStarted = false;
    let moveInterval = null;

    function createSnakeSegment(x, y, z) {
      const geometry = new THREE.BoxGeometry(snakeSize, snakeSize, snakeSize);
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const segment = new THREE.Mesh(geometry, material);
      segment.position.set(x, y, z);
      scene.add(segment);
      return segment;
    }

    // Initialize Snake with 3 segments
    function initSnake() {
      snake.length = 0;
      for (let i = 0; i < 3; i++) {
        snake.push(createSnakeSegment(i, 0, 0));
      }
    }

    // Create Food (Apple) - need to change to garbage
    function createFood() {
      const apple = new THREE.Group();

      // Apple Body
      const appleGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const appleMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const appleBody = new THREE.Mesh(appleGeometry, appleMaterial);
      apple.add(appleBody);

      // Apple Stem
      const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16);
      const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.set(0, 0.4, 0);
      apple.add(stem);

      // Apple Leaf
      const leafGeometry = new THREE.PlaneGeometry(0.3, 0.2);
      const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf.position.set(0.15, 0.5, 0);
      leaf.rotation.set(0, 0, Math.PI / 4);
      apple.add(leaf);

      apple.position.set(
        Math.floor(Math.random() * gridSize) - gridSize / 2,
        0,
        Math.floor(Math.random() * gridSize) - gridSize / 2
      );
      scene.add(apple);

      return apple;
    }
    let food = createFood();

    // Grid Helper
    const gridHelper = new THREE.GridHelper(gridSize, gridSize);
    scene.add(gridHelper);

    // Tree
    function createTree() {
      const tree = new THREE.Group();

      // Tree Trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 0.5;
      tree.add(trunk);

      // Tree Foliage
      const foliageGeometry = new THREE.ConeGeometry(0.5, 1, 16);
      const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
      foliage.position.y = 1;
      tree.add(foliage);

      return tree;
    }

    function addTrees() {
      const tree1 = createTree();
      tree1.position.set(-gridSize / 2 - 2, 0, -gridSize / 2 - 2);
      scene.add(tree1);

      const tree2 = createTree();
      tree2.position.set(gridSize / 2 + 2, 0, -gridSize / 2 - 2);
      scene.add(tree2);
    }

    addTrees();

    let direction = new THREE.Vector3(1, 0, 0);
    let moveSpeed = 200;

    document.addEventListener("keydown", (event) => {
      if (!hasStarted) {
        hasStarted = true;
        startGameLoop();
      }

      if (event.key === "ArrowUp" && direction.z !== 1) direction.set(0, 0, -1);
      if (event.key === "ArrowDown" && direction.z !== -1) direction.set(0, 0, 1);
      if (event.key === "ArrowLeft" && direction.x !== 1) direction.set(-1, 0, 0);
      if (event.key === "ArrowRight" && direction.x !== -1) direction.set(1, 0, 0);
    });

    const playAgainButton = document.createElement("button");
    playAgainButton.innerText = "Play Again";
    playAgainButton.style.position = "absolute";
    playAgainButton.style.top = "50px";
    playAgainButton.style.left = "50%";
    playAgainButton.style.transform = "translateX(-50%)";
    playAgainButton.style.padding = "10px 20px";
    playAgainButton.style.fontSize = "16px";
    playAgainButton.style.cursor = "pointer";
    playAgainButton.style.display = "none";
    document.body.appendChild(playAgainButton);

    function startGameLoop() {
      if (moveInterval) clearInterval(moveInterval);
      moveInterval = setInterval(moveSnake, moveSpeed);
    }

    function stopGame() {
      clearInterval(moveInterval);
      playAgainButton.style.display = "block"; 
    }

    function resetGame() {
      snake.forEach(segment => scene.remove(segment));
      snake.length = 0;

      for (let i = 0; i < 3; i++) {
        snake.push(createSnakeSegment(i, 0, 0));
      }

      direction.set(1, 0, 0);
      hasStarted = false;

      scene.remove(food);
      food = createFood();

      playAgainButton.style.display = "none";

      clearInterval(moveInterval);
    }

    function moveSnake() {
      const newHeadPosition = snake[0].position.clone().add(direction);

      if (newHeadPosition.x < -gridSize / 2) newHeadPosition.x = gridSize / 2 - 1;
      if (newHeadPosition.x >= gridSize / 2) newHeadPosition.x = -gridSize / 2;
      if (newHeadPosition.z < -gridSize / 2) newHeadPosition.z = gridSize / 2 - 1;
      if (newHeadPosition.z >= gridSize / 2) newHeadPosition.z = -gridSize / 2;

      for (let i = 0; i < snake.length; i++) {
        if (newHeadPosition.distanceTo(snake[i].position) < 0.1) {
          clearInterval(moveInterval);


          alert("Game Over! The snake crossed its own path.");
          playAgainButton.style.display = "block";
          return;
        }
      }

      const newHead = createSnakeSegment(newHeadPosition.x, newHeadPosition.y, newHeadPosition.z);
      snake.unshift(newHead);

      if (newHead.position.distanceTo(food.position) < 1) {
        scene.remove(food);
        food = createFood();
      } else {
        const tail = snake.pop();
        scene.remove(tail);
      }
    }

    playAgainButton.addEventListener("click", () => {
      resetGame();
    });

    // Animation Loop
    function animate() {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    initSnake();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (playAgainButton) {
        document.body.removeChild(playAgainButton);
      }
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SnakeGame;