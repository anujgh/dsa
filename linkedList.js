//----------------------------------
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let pre = this.head;
        let temp = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }


    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }
    
    getList(){
        return this
    }
}

// --------------------
// Testing.............
// --------------------

let myLinkedList = new LinkedList(5)
myLinkedList.push(4)
console.log('befor', myLinkedList)
const popedItem = myLinkedList.pop()
console.log(popedItem)
console.log(myLinkedList.getList())
const popedItem2 = myLinkedList.pop()
console.log('popedItem2', popedItem2)
console.log(myLinkedList)

myLinkedList.unshift(3);
myLinkedList.unshift(2);
myLinkedList.unshift(1);
console.log(myLinkedList.getList())

console.log("shifted node: ",myLinkedList.shift())
console.log("after shift the linked lis is: ",myLinkedList.getList())

console.log("shifted node: ",myLinkedList.shift())
console.log("after shift the linked lis is: ", myLinkedList.getList())

console.log("shifted node: ",myLinkedList.shift())
console.log("after shift the linked lis is: ", myLinkedList.getList())
