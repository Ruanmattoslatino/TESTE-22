// Cena, câmera e renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1,1,1).normalize();
scene.add(light);

// Carregar modelo FBX
const loader = new THREE.FBXLoader();
loader.load('models/meu_modelo.fbx', function(object) {
  scene.add(object);
});

// Posição da câmera
camera.position.z = 5;

// Loop de animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
