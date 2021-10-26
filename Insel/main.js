let gl;
let program;
let objects=[];

let positions1,
	positions2,
	colors1,
	colors2,
	indices1,
	indices2;
let posVBO1,
	posVBO2,
	colorVBO1,
	colorVBO2,
	indexVBO1,
	indexVBO2;
let posLoc,
	colorLoc;


function main() {

	// Get canvas and setup WebGL context
    const canvas = document.getElementById("gl-canvas");
	gl = canvas.getContext('webgl2');

	// Configure viewport
	gl.viewport(0,0,canvas.width,canvas.height);
	gl.clearColor(1.0,1.0,1.0,1.0);

	gl.enable(gl.DEPTH_TEST);

	// Init shader program via additional function and bind it
	program = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program);

	// Get locations of shader variables
	posLoc = gl.getAttribLocation(program, "vPosition");
	colorLoc = gl.getAttribLocation(program, "vColor");

	// Only clear once
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	let island = new Island();
	island.Render();

	let river = new River();
	river.Render();

	let cube =new Cube();
	cube.Render();


};







main();
