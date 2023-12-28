//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
	}
	get getWidth(width){
		return this.width;
	}
	get getHeight(height){
		return this.height;
	}
	get getPerimeter(width, height){
		return (this.width)*(this.height);
	}
}

class Square extends Rectangle {
	constructor(width){
		super (width,width);
	}
	getPerimeter(){
		return 4*(this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
