/*

Three.js 는 웹 브라우저에서 애니메이션 3차원 컴퓨터 그래픽스를 만들고 표시하기 위해 사용되는 
크로스 브라우저 자바스크립트 라이브러리이자 API이다.
깃허브의 한 저장소에서 호스팅된다. 

Three.js 는 사유 브라우저 플러그인에 의존하지 않고 자바스크립트 언어를 사용하여 웹사이트의 한 부분으로서 
그래픽 처리 장치(GPU) 가속 3차원 애니메이션을 만들 수 있도록 한다. 
이는 WebGL의 출현으로 가능하게 되었다. 

Three.js, GLGE, SceneJS, PhiloGL, 그리고 수많은 기타 라이브러리 등 고급 라이브러리들은 
전통적인 독립형 애플리케이션이나 플러그인에 필요했던 노력을 들이지 않고 
개발자가 브라우저에 복잡한 3D 컴퓨터 애니메이션을 표시할 수 있게 되었다. 

Three.js 는 2010년 4월 Ricardo Cabello가 깃허브에 처음 출시하였다. 
이 라이브러리의 기원은 개발자 자신이 2000년대 초 데모씬에 참여한 시기로 거슬러 올라간다. 
이 코드는 액션스크립트로 처음 개발되었다가 2009년 자바스크립트로 이식되었다. 

Three.js 라이브러리는 하나의 자바스크립트 파일이다. 
로컬이나 원격 사본에 연결함으로써 웹 페이지 안에 포함시킬 수 있다. 

------------------------------------------------
<script src="js/three.min.js"></script>
------------------------------------------------

다음의 코드는 씬을 하나 만들고 카메라 하나와 큐브 하나를 해당 씬에 추가하고 WebGL 렌더러를 만들고 
document.body 요소에 뷰포트를 추가한다. 
로드되면 큐브는 X축과 Y축 주변을 회전한다. 

------------------------------------------------
<script>

    var camera, scene, renderer,
    geometry, material, mesh;

    init();
    animate();

    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        geometry = new THREE.BoxGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );
    }

    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );
    }

</script>
------------------------------------------------

*/
