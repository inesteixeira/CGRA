/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
           -0.5,-0.5,-0.5,
           -0.5,-0.5, 0.5,
           -0.5, 0.5,-0.5,
           -0.5, 0.5, 0.5,
           0.5,-0.5,-0.5,
           0.5,-0.5,0.5,
           0.5,0.5,-0.5,
           0.5,0.5,0.5

			];

	this.indices = [
	

		1,0,4, //baixo
		4,0,1, 
		4,5,1,
		1,5,4,
		1,3,2, //esquerda
		2,3,1,
		1,0,2,
		2,0,1,
		0,4,6, 	//atras
		6,4,0,
		0,2,6,
		6,2,0, 
		5,4,6, //direita
		6,4,5,
		5,7,6,
		6,7,5,
		1,5,7, //frente
		7,5,1,
		1,3,7,
		7,3,1,
		3,2,6, //cima
		6,2,3,
		3,7,6,
		6,7,3
		
        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
