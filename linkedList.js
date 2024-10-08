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

    get(index) {
        if(index < 0 || index > this.length) return undefined;
        let temp = this.head;
        for(let i = 0 ; i < index ; i++){
            temp = temp.next
        }
        return temp;
    }

    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
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

myLinkedList.push(6)
myLinkedList.push(7)
myLinkedList.push(8)
myLinkedList.push(9)
console.log('befor set : ', myLinkedList.getList())
myLinkedList.set(1,12)
console.log('after set: ', myLinkedList.getList())
