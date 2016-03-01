/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTable(scene) {
	CGFobject.call(this,scene);

	this.table=new MyUnitCubeQuad(this.scene);
	this.table.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display= function(){
	
	this.scene.pushMatrix();
	this.scene.scale(5,0.3,3);
	this.table.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(2.2, -1.9, 1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.translate(-4.4, 0,0);
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-2.2, -1.9, 1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(2.2, -1.9, -1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-2.2, -1.9, -1.2);
	this.scene.scale(0.3,3.5,0.3);
	this.table.display();
	this.scene.popMatrix();
	
}
