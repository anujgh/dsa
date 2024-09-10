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
    
    getList(){
        return this
    }
}



let myLinkedList = new LinkedList(5)
myLinkedList.push(4)
console.log('befor', myLinkedList)
const popedItem = myLinkedList.pop()
console.log(popedItem)
console.log(myLinkedList.getList())
const popedItem2 = myLinkedList.pop()
console.log('popedItem2', popedItem2)
console.log(myLinkedList)
