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

    insert(index, value){
        if(index < 0 || index > this.length) return undefined; 
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        
        let newNode = new Node(value)
        
        // WE CAN USE "
        // let temp = this.get(index-1)
        // " instead of for loop
        
        let temp = this.head
        for(let i=0; i < index-1; i++){
            
                temp = temp.next
            
        }
        
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++
    }

   remove(index){
        if(index === 0) return this.shift(index);
        if(index === this.length) return this.pop(index);
        if(index < 0 || index > this.length) return false;
        let temp = this.get(index-1);
        temp.next = temp.next.next;
        this.length--
        return this;
    }

    removeWithoutReffFuns(index){
        if(index === 0) return this.shift(index);
        if(index === this.length) return this.pop(index);
        if(index < 0 || index > this.length) return false;
        let temp = this.head;
        for(let i = 0; i < index-1 ; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
        this.length--;
        return this;
    }

    reverse(){
        if(!this.head) return false;
        let currentNode = this.head;
        this.head = this.tell;
        this.tell = currentNode
        let nextNode = currentNode.next;
        let preNode = null;
        for(let i=0; i<this.length;i++){
            currentNode.next = preNode;
            preNode = currentNode;
            currentNode = nextNode;
            nextNode = currentNode.next;
        }

       
        return this;
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

myLinkedList.unshift(1)
myLinkedList.unshift(2)
myLinkedList.unshift(3)
console.log("after shift three values: ",myLinkedList.getList())
myLinkedList.insert(1,7)
console.log("after insert values: ",myLinkedList.getList())
myLinkedList.insert(0,8)
console.log("after insert values at 0 index: ",myLinkedList.getList())
myLinkedList.insert(myLinkedList.length,9)
console.log("after insert values at myLinkedList length index: ",myLinkedList.getList())

console.log('after remove item at index 1: ',myLinkedList.remove(1))