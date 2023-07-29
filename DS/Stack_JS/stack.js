function Stack(){
this.stackContent = {};
this.top = 0;
this.push = push;
this.pop = pop;
this.getTop = pop;

}

function push(element){
	this.stackContent[this.top++] = element;
}
function pop(){
	return this.stackContent[--this.top];
}
function getTop(){
	return this.stackContent[this.top-1];
}



//A Very simple stack implentation
 
var listStack = new Stack();

listStack.push("Mango")
listStack.push("orange")
console.log("We have successfully Pushed two item onto the stacl")
console.log(listStack)
console.log(listStack.getTop() +" " +" is the last item we have pushed")
