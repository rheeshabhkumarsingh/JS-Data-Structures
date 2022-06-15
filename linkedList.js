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
        while (first) {
            console.log(first.val);
            first = first.next;
        }
    }

    pop() {
        let first = this.head;
        let previous;
        while (first.next) {
            previous = first;
            first = first.next;
        }
        this.tail = previous;
        this.tail.next = null;
        return first.val;
    }
}

let ll = new LinkedList();
function inserValues() {
    ll.push(3);
    ll.push(4);
    ll.push(5);
}
inserValues();
ll.printLL();
ll.pop()
console.log('------------------');
ll.printLL();