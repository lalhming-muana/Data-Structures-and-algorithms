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
        return array;
    }

    // I havent been able to do anything yet. So, this is blank.

    insert(index, value){
        // check the parameters
        if(index >= this.length){
            return this.append(value);
        }

        const newNode ={
            value: value,
            next: null
        };

        // leader is the first node of the linked list to which the new node should be added
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next; // holds the second node of the linked list
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;


    }
    // loop to find the leading node of the linked list.
    traverseToIndex(index){
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !=index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // 

}


const myLinkedlist = new LinkedList(10);
myLinkedlist.append(5)

myLinkedlist.append(16)

myLinkedlist.prepend(1)

// console.log(myLinkedlist);
myLinkedlist.insert(2,99);

myLinkedlist.insert(30,88);
console.log(myLinkedlist.printlist());