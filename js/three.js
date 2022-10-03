container = document.getElement("canvas")
let scene, renderer, camera

function init() {
    // scene
    scen = new THREE.Scene()

    // render
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render.SetClearColor(0xeeeeee, 1.0)
    render.shadowMap.enable = true

    document.body.appendChild(render.domElement)

    // Camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    )
    camera.position.set(10, 10, 10)
    camera.lookAt(scene.position)

    // Light
    let pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(10, 10, -10)
    scene.add(pointLight)

    //Object
    const geometry = new THREE.BoxGeometry(1, 1, 1) // 幾何體
    const material = new THREE.MeshPhongMaterial({
            color: 0x0000ff
        }) // 材質
    cube = new THREE.Mesh(geometry, material) // 建立網格物件
    cube.position.set(0, 0, 0)
    scene.add(cube)

    document.body.appendChild(renderer.domElement)
}



function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
}

function render() {
    animate()
    requestAnimateFrame(render)
    renderer.render(scene, camera)
}

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / this.window.innerHeight
    camera.updateProjectMatrix()
    render.setSize(window.innerWidth, window.innerHeight)
})

init()
render()