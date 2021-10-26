let gl;
let program;
let objects=[];
let island;
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


};





function init2() {

	// Specify geometry
	positions2 = [
			 0.0,  0.0, 14.0, 	 // index 0
			 0.75, 0.0, 12.5, 	 // index 1
			 1.25, 0.0, 12.5, 	 // index 2
			 1.0,  0.0, 11.0, 	 // index 3
			 2.0,  0.0, 11.0, 	 // index 4
			 0.75, 0.0,  9.5, 	 // index 5
			 2.25, 0.0,  9.5, 	 // index 6
			 0.0,  0.0,  8.0, 	 // index 7
			 2.0,  0.0,  8.0, 	 // index 8
			-2.25, 0.0,  6.1875, // index 9
			 0.25, 0.0,  6.1875, // index 10
			-3.0,  0.0,  4.0, 	 // index 11
			 0.0,  0.0,  4.0, 	 // index 12
			-2.25, 0.0,  1.8125, // index 13
			 1.25, 0.0,  1.8125, // index 14
			 0.0,  0.0,  0.0, 	 // index 15
			 4.0,  0.0,  0.0, 	 // index 16
			 0.0, -7.0,  0.0, 	 // index 17 -> additional for waterfall
			 4.0, -6.0,  0.0  	 // index 18 -> additional for waterfall
		];

	indices2 = [
			0, 1, 2,
			1, 2, 3,
			2, 3, 4,
			3, 4, 5,
			4, 5, 6,
			5, 6, 7,
			6, 7, 8,
			7, 8, 9,
			8, 9, 10,
			9, 10, 11,
			10, 11, 12,
			11, 12, 13,
			12, 13, 14,
			13, 14, 15,
			14, 15, 16,
			15, 16, 17, // additional for waterfall
			16, 17, 18  // additional for waterfall
		];

	colors2 = [];
	for(var i = 0; i < positions2.length; i += 3) {
		colors2.push(0.2, 0.2, 0.8, 1);
	}

	initBuffers2();
}

function initBuffers2() {

	posVBO2= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,posVBO2);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions2),gl.STATIC_DRAW);

	colorVBO2=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorVBO2);
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(colors2),gl.STATIC_DRAW);

	indexVBO2=gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexVBO2);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices2),gl.STATIC_DRAW);

	
}

function render2() {
	gl.bindBuffer(gl.ARRAY_BUFFER,posVBO2);
	gl.enableVertexAttribArray(posLoc);
	gl.vertexAttribPointer(posLoc,3,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ARRAY_BUFFER,colorVBO2);
	gl.enableVertexAttribArray(colorLoc);
	gl.vertexAttribPointer(colorLoc,4,gl.FLOAT,false,0,0);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexVBO2);
	gl.drawElements(gl.TRIANGLES,indices2.length,gl.UNSIGNED_SHORT,0);



}

main();
