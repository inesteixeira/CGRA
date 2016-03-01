/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyFloor(scene) {
	CGFobject.call(this,scene);

	this.floor=new MyUnitCubeQuad(this.scene);
	this.floor.initBuffers();
};

MyFloor.prototype = Object.create(CGFobject.prototype);
MyFloor.prototype.constructor=MyFloor;

MyFloor.prototype.display= function(){
	
	this.scene.pushMatrix();
	this.scene.translate(4, 0, 3);
	this.scene.scale(8,0.1,6);
	this.floor.display();
	this.scene.popMatrix();

	
}
