class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    printLL() {
        let first = this.head;
        while (first !== null) {
            console.log(first.val);
            first = first.next;
        }
    }
}

let ll = new LinkedList();
ll.printLL();
ll.push(3);
ll.push(4);
ll.push(5);
ll.printLL();