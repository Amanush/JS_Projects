function Node(data){
this.data = data;
this.next = null;
}
function LinkedList(){
this.head = new Node("head");
this.find = find;
this.insert = insert;
}
function find(element){
var temp = this.head;
while(temp.data != element){
	temp = temp.next;
}
return temp;
}
function insert(element,newElement){
var newnode = new Node(newElement);
var prevnode = this.find(element);
newnode.next = prevnode.next;
prevnode.next = newnode;
}


// Basic Implementation of LinkedList

var newlist = new LinkedList();

console.log(newlist.insert(24,35))
