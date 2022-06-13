var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
);

var renderizacion = new THREE.WebGLRenderer();
renderizacion.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizacion.domElement);

var geometria = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
var cubo = new THREE.Mesh(geometria, material);

escena.add(cubo);

camara.position.z = 5;

var animacion = function (){
    requestAnimationFrame(animacion);

    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;

    renderizacion.render(escena, camara);
}

animacion();
