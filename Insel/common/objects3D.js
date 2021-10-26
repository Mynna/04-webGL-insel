
class Object3D{

    constructor(){
        this.posVBO= gl.createBuffer();
        this.colorVBO= gl.createBuffer();
        this.indexVBO=gl.createBuffer();

    }

    InitBuffers(){
        gl.bindBuffer(gl.ARRAY_BUFFER,this.posVBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions),gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER,this.colorVBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors),gl.STATIC_DRAW);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexVBO);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices),gl.STATIC_DRAW);


    }

    Render(){
        gl.bindBuffer(gl.ARRAY_BUFFER, this.posVBO);
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc,3,gl.FLOAT,false,0,0);

        gl.bindBuffer(gl.ARRAY_BUFFER,this.colorVBO);
        gl.enableVertexAttribArray(colorLoc);
        gl.vertexAttribPointer(colorLoc,4,gl.FLOAT,false,0,0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexVBO);
        gl.drawElements(gl.TRIANGLES,this.indices.length,gl.UNSIGNED_SHORT,0);

    }
}

class Cube extends Object3D{
    constructor(){
        super();

        this.positions=[
            -1, -1, -1,//index 0
            -1, -1, 1,//index 1
            -1, 1, -1,//index 2
            -1, 1 ,1,//index 3
            1, -1, -1,//index 4
            1, -1, 1, //index 5
            1, 1, -1,//index 6
            1, 1, 1 //index 7
        ];

        this.indices=[
            1, 7, 3,  1, 5, 7,//Front
            5, 6, 7,  5, 4, 6,//Right
            4, 2, 0,  4, 6, 2,//Back
            0, 3, 2,  0, 1, 3,//Left
            0, 5, 1,  0, 4, 5,//Bottom
            3, 6, 2,  3, 7, 6//Top

        ];

        this.colors=[
            0, 0, 0, 1,
            1, 0, 0, 1,
            0, 1, 0, 1,
            0, 0, 1, 1,
            1, 1, 0, 1,
            1, 0, 1, 1,
            0, 1, 1, 1,
            1, 1, 1, 1
                
        ];

        this.InitBuffers();



    }
}


