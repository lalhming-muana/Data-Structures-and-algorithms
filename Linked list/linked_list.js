console.log("Hello")

// Implementing a linked list in javascript because JS doesnt jave a built-in linked list

// Create a pointer
const obj1 ={a: true}
const obj2 = obj1

console.log(obj1)
console.log(obj2)


// Add a note about JS garbage collection here




// Create the linked list here.
// 10 -> 5 -> 16
class LinkedList  {
    constructor(value){
        this.head = {
        value: value,
        next: null 
    }
    this.tail = this.head;
    this.length =1;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode ={
            value: value,
            next: null
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

}

const myLinkedlist = new LinkedList(10);
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)

console.log(myLinkedlist);



