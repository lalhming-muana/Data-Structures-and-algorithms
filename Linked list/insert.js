// Creating a new NODE class

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


// Re-create everything using the class Node and combine it with the old linked list

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
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printlist(){
        const array =[]
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

    }

    insert(index, value){

    }

}


const myLinkedlist = new LinkedList(10);
myLinkedlist.append(5)
myLinkedlist.append(16)
myLinkedlist.prepend(1)
console.log(myLinkedlist);