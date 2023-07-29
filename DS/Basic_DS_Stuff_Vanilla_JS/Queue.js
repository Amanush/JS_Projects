function Queue(){
this.queueContent = [];
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.back = back;
}
function enqueue(element){
	this.queueContent.push(element)
}
function dequeue(){return this.queueContent.shift();}
function front(){return this.queueContent[0];}
function back(){return this.queueContent[this.queueContent.length-1];}


//Queue implementation Demo

var friendList = new Queue();
friendList.enqueue("Rajesh Khanna")
friendList.enqueue("Vinod Mehra")

console.log("so here is the item which is infront of the queue"+friendList.front())
console.log("He has enetered to the last of the list "+friendList.back())
